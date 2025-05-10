import { useEffect, useRef, useCallback } from 'react';
import { InputButtonMessage, InputKeyMessage, WorkerMessage } from './nes.worker';

const NES = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const keysPressedRef = useRef<Set<string>>(new Set());

  const onGamepadConnect = useCallback((e: GamepadEvent) => {
    console.log(
      'Gamepad connected at index %d: %s. %d buttons, %d axes.',
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons.length,
      e.gamepad.axes.length,
    );
  }, []);

  const onGamepadDisconnect = useCallback((e: GamepadEvent) => {
    console.log('Gamepad disconnected from index %d: %s', e.gamepad.index, e.gamepad.id);
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
        if (gp.buttons[btnIdx].pressed) {
          const msg: InputButtonMessage = {
            type: 'input-btn',
            gp: gpIdx,
            btn: btnIdx,
          };
          workerRef.current.postMessage(msg);
        }
      }
    }
  }, []);

  //** Sends pressed keys to the nes worker*/
  const pollKeyboard = useCallback(() => {
    if (!workerRef.current || keysPressedRef.current.size === 0) return;

    for (const key of keysPressedRef.current) {
      const msg: InputKeyMessage = {
        type: 'input-key',
        key: key,
      };
      workerRef.current.postMessage(msg);
    }
  }, []);

  //** Any key down key triggers this */
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.repeat) return;
    if (!keysPressedRef.current.has(e.code)) {
      keysPressedRef.current.add(e.code);
    }
  }, []);

  //** Clears key down state */
  const onKeyUp = useCallback((e: KeyboardEvent) => {
    if (keysPressedRef.current.has(e.code)) {
      keysPressedRef.current.delete(e.code);
    }
  }, []);

  /*
################################
||            Init            ||
################################
*/
  useEffect(() => {
    const worker = new Worker(new URL('./nes.worker.js', import.meta.url), { type: 'module' });
    workerRef.current = worker;

    worker.postMessage({ type: 'init' });
    worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
      if (e.data.type === 'init') {
        console.log('NES worker ready');
        animationIdRef.current = requestAnimationFrame(frame);
      }
    };

    //** Emulation frame*/
    const frame = () => {
      pollGamepads();
      pollKeyboard();
      animationIdRef.current = requestAnimationFrame(frame);
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
    <div className="flex items-center justify-center">
      <canvas ref={canvasRef} width={256} height={240} />
    </div>
  );
};

export default NES;
