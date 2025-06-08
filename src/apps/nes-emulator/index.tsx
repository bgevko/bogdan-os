import { useEffect, useRef, useCallback } from 'react';
import { InputButtonMessage, FrameMessage, WorkerMessage, InputKeyMessage } from '@/nes/nes.worker';
import NESWorker from '@/nes/nes.worker.ts?worker';
import audioProcessorUrl from '@/nes/audio-processor.js?url';

const NES = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const didTransferCanvas = useRef(false);
  const audioNodeRef = useRef<AudioWorkletNode>(null);

  const onGamepadConnect = useCallback((e: GamepadEvent) => {
    console.info(
      'Gamepad connected at index %d: %s. %d buttons, %d axes.',
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons.length,
      e.gamepad.axes.length,
    );
  }, []);

  const onGamepadDisconnect = useCallback((e: GamepadEvent) => {
    console.info('Gamepad disconnected from index %d: %s', e.gamepad.index, e.gamepad.id);
  }, []);

  //** Listens for gamepad input */
  const pollGamepads = useCallback(() => {
    const gamepads = navigator.getGamepads();
    if (gamepads.length === 0 || !workerRef.current) {
      return;
    }

    for (let gpIdx = 0; gpIdx < gamepads.length; gpIdx++) {
      const gp = gamepads[gpIdx];
      if (!gp) continue;

      // Poll which buttons are pressed
      for (let btnIdx = 0; btnIdx < gp.buttons.length; btnIdx++) {
        const msg: InputButtonMessage = {
          type: 'input-btn',
          pressed: gp.buttons[btnIdx].pressed,
          gp: gpIdx,
          btn: btnIdx,
          controllerId: gp.id,
        };
        workerRef.current.postMessage(msg);
      }
    }
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.repeat || !workerRef.current) return;
    const msg: InputKeyMessage = {
      type: 'input-key',
      key: e.key,
      pressed: true,
    };
    workerRef.current.postMessage(msg);
  }, []);

  const onKeyUp = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!workerRef.current) return;
    const msg: InputKeyMessage = {
      type: 'input-key',
      key: e.key,
      pressed: false,
    };
    workerRef.current.postMessage(msg);
  }, []);

  /*
################################
||            Init            ||
################################
*/
  useEffect(() => {
    const worker = new NESWorker();
    workerRef.current = worker;

    worker.postMessage({ type: 'init' });
    worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
      if (e.data.type === 'init') {
        console.info('NES worker ready');

        const canvas = canvasRef.current;
        if (!canvas) {
          console.error('Canvas null. Aborting');
          return;
        }

        // transfer the canvas to the worker. The transfer ref guards it against React's double render in strict mode
        const offscreen = canvas.transferControlToOffscreen();
        worker.postMessage(
          {
            type: 'transfer-canvas',
            canvas: offscreen,
          },
          [offscreen],
        );
        didTransferCanvas.current = true;

        // Initialize audio
        const initAudio = async () => {
          const audioCtx = new AudioContext({ latencyHint: 'playback', sampleRate: 44100 });
          const sampleRate = audioCtx.sampleRate;
          console.log('AudioContext sampleRate:', audioCtx.sampleRate);
          const channelCount = 1;
          const durationSec = 1;
          const bufferSize = sampleRate * channelCount * durationSec;

          // Allocate a SharedArrayBuffers
          //    - ctrlSAB holds two Int32 slots: [ readIndex, writeIndex ]
          const ctrlSAB = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);
          const ctrl = new Int32Array(ctrlSAB);
          Atomics.store(ctrl, 0, 0);
          Atomics.store(ctrl, 1, 0);

          //    - audioSAB holds your Float32 samples interleaved [L,R,L,R…]
          const audioSAB = new SharedArrayBuffer(Float32Array.BYTES_PER_ELEMENT * bufferSize);

          // Spin up the AudioWorkletNode, passing SABs in processorOptions
          await audioCtx.audioWorklet.addModule(audioProcessorUrl);
          const audioNode = new AudioWorkletNode(audioCtx, 'audio-processor', {
            numberOfOutputs: 1,
            outputChannelCount: [channelCount],
            processorOptions: { audioSAB, ctrlSAB, bufferSize, channelCount },
          });

          audioNode.connect(audioCtx.destination);
          audioNodeRef.current = audioNode;

          worker.postMessage({
            type: 'init-audio',
            audioSAB,
            ctrlSAB,
            bufferSize,
          });
        };

        initAudio().catch((err: unknown) => {
          console.error('Error initializing audio:', err);
        });

        // Intitialize the main loop
        let startTime = 0;
        const step = (timestamp: DOMHighResTimeStamp) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;

          // Notify worker how much time has passed
          const msg: FrameMessage = {
            type: 'frame',
            elapsed,
          };
          worker.postMessage(msg);

          // Poll controller input
          pollGamepads();

          // Queue next frame
          animationIdRef.current = requestAnimationFrame(step);
        };
        animationIdRef.current = requestAnimationFrame(step);
      }
    };

    window.addEventListener('gamepadconnected', onGamepadConnect);
    window.addEventListener('gamepaddisconnected', onGamepadDisconnect);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('gamepadconnected', onGamepadConnect);
      window.removeEventListener('gamepaddisconnected', onGamepadDisconnect);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      if (animationIdRef.current != null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      worker.terminate();
    };
  }, []);

  return (
    <div className="size-full flex items-center justify-center">
      <canvas ref={canvasRef} className="size-full rounded-b-lg" width={256} height={240} />
    </div>
  );
};

export default NES;
