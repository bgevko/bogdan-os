// nes.worker.js
import init, { WasmControlDeck } from '@/nes/wasm/tetanes_core.js';
import testRomUrl from '@/nes/roms/mario.nes?url';
import { getControllerMapping, getKeyboardMapping } from './controller_mappings';
import useNesStore from '@/nes/store/';

let nes: WasmControlDeck;
let framesRun = 0;

// Exact NES timing
const NES_HZ = (1789772.5 * 3) / (341 * 262 - 0.5);
const FRAME_INTERVAL = 1000 / NES_HZ; // ms per NES frame

// Graphics
let canvas: OffscreenCanvas | null = null;
let ctx: OffscreenCanvasRenderingContext2D | null = null;

// Audio
let audioBufferSize: number;
let audioBuf: Float32Array;
let ctrl: Int32Array;

function pushAudio(samples: Float32Array) {
  const writeIdx = Atomics.load(ctrl, 1);
  for (let i = 0; i < samples.length; i++) {
    const bufIdx = (writeIdx + i) % audioBufferSize;
    audioBuf[bufIdx] = samples[i];
  }
  Atomics.store(ctrl, 1, (writeIdx + samples.length) % audioBufferSize);
}

export interface InitMessage {
  type: 'init';
}

export interface InitAudio {
  type: 'init-audio';
  audioSAB: SharedArrayBuffer;
  ctrlSAB: SharedArrayBuffer;
  bufferSize: number;
}

export interface TransferCanvasMessage {
  type: 'transfer-canvas';
  canvas: OffscreenCanvas;
}

export interface InputButtonMessage {
  type: 'input-btn';
  pressed: boolean;
  gp: number;
  btn: number;
  controllerId: string;
}

export interface InputKeyMessage {
  type: 'input-key';
  key: string;
  pressed: boolean;
}

export interface FrameMessage {
  type: 'frame';
  elapsed: number;
}

export interface SaveState {
  type: 'save-state';
  slot: number;
}

export interface LoadState {
  type: 'load-state';
  slot: number;
}

export type WorkerMessage =
  | InputButtonMessage
  | InputKeyMessage
  | FrameMessage
  | InitMessage
  | TransferCanvasMessage
  | InitAudio
  | SaveState
  | LoadState;

self.onmessage = async (e: MessageEvent) => {
  const { type } = e.data as WorkerMessage;

  switch (type) {
    /** The handshake */
    case 'init': {
      await init();
      nes = new WasmControlDeck();

      // TODO: Handle cartridge loading
      const res = await fetch(testRomUrl);
      const buffer = await res.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      nes.loadRomBytes('custom', bytes);
      console.info('ROM loaded');

      // Respond to the main thready that we are ready
      self.postMessage({ type: 'init' });
      break;
    }

    case 'init-audio': {
      const data = e.data as InitAudio;
      audioBufferSize = data.bufferSize;
      audioBuf = new Float32Array(data.audioSAB);
      ctrl = new Int32Array(data.ctrlSAB);
      break;
    }

    case 'transfer-canvas': {
      try {
        const msg = e.data as TransferCanvasMessage;
        canvas = msg.canvas;
        ctx = canvas.getContext('2d');
      } catch (error) {
        console.error('Error getting canvas context:', error);
      }

      if (!canvas || !ctx) {
        console.error('Canvas or context is null. Aborting');
        return;
      }

      console.info('Canvas transferred to worker');
      console.info('Canvas size:', canvas.width, canvas.height);

      break;
    }

    case 'frame': {
      if (!ctx) return;

      // How many frames should have run by now
      const { elapsed } = e.data as FrameMessage;
      const target = Math.floor(elapsed / FRAME_INTERVAL);
      const audioSamples = nes.audioSampes();
      pushAudio(audioSamples);
      nes.clearAudioSamples();
      while (framesRun < target) {
        nes.clockFrame();
        framesRun++;

        const buffer: Uint8ClampedArray = nes.frameBuffer();

        // paint it to OffscreenCanvas
        const imageData = new ImageData(buffer, 256, 240);
        ctx.putImageData(imageData, 0, 0);
      }

      break;
    }

    case 'input-btn': {
      const data = e.data as InputButtonMessage;
      const { gp, btn, pressed, controllerId } = data;
      const mapping = getControllerMapping(controllerId);

      switch (mapping[btn]) {
        case 'a':
          nes.processInput(gp, 0, pressed);
          break;
        case 'b':
          nes.processInput(gp, 1, pressed);
          break;
        case 'select':
          nes.processInput(gp, 2, pressed);
          break;
        case 'start':
          nes.processInput(gp, 3, pressed);
          break;
        case 'up':
          nes.processInput(gp, 4, pressed);
          break;
        case 'down':
          nes.processInput(gp, 5, pressed);
          break;
        case 'left':
          nes.processInput(gp, 6, pressed);
          break;
        case 'right':
          nes.processInput(gp, 7, pressed);
          break;
        default:
      }
      break;
    }

    case 'input-key': {
      const { key, pressed } = e.data as InputKeyMessage;
      const mapping = getKeyboardMapping('user');
      switch (mapping[key]) {
        case 'a':
          nes.processInput(0, 0, pressed);
          break;
        case 'b':
          nes.processInput(0, 1, pressed);
          break;
        case 'select':
          nes.processInput(0, 2, pressed);
          break;
        case 'start':
          nes.processInput(0, 3, pressed);
          break;
        case 'up':
          nes.processInput(0, 4, pressed);
          break;
        case 'down':
          nes.processInput(0, 5, pressed);
          break;
        case 'left':
          nes.processInput(0, 6, pressed);
          break;
        case 'right':
          nes.processInput(0, 7, pressed);
          break;
        default:
      }
      break;
    }

    case 'save-state': {
      const { slot } = e.data as SaveState;
      const bytes: Uint8ClampedArray = nes.saveStateOut();
      useNesStore.getState().saveState(slot, bytes);
      console.info('State saved to slot', slot);
      break;
    }

    case 'load-state': {
      const { slot } = e.data as LoadState;
      const bytes = useNesStore.getState().getState(slot);
      if (bytes) {
        nes.loadStateIn(bytes);
        console.info('State loaded from slot', slot);
      }

      break;
    }

    default:
  }
};
