// nes.worker.js
import init, { WasmControlDeck } from '@/wasm/nes/tetanes_core.js';

let nes: Promise<WasmControlDeck> | null = null;
let framesRun = 0;

// Exact NES timing
const NES_HZ = (1789772.5 * 3) / (341 * 262 - 0.5);
const FRAME_INTERVAL = 1000 / NES_HZ; // ms per NES frame

let canvas: OffscreenCanvas | null = null;
let ctx: OffscreenCanvasRenderingContext2D | null = null;

export interface InitMessage {
  type: 'init';
}

export interface TransferCanvasMessage {
  type: 'transfer-canvas';
  canvas: OffscreenCanvas;
}

export interface InputButtonMessage {
  type: 'input-btn';
  gp: number;
  btn: number;
}

export interface InputKeyMessage {
  type: 'input-key';
  key: string;
}

export interface FrameMessage {
  type: 'frame';
  elapsed: number;
}

export type WorkerMessage =
  | InputButtonMessage
  | InputKeyMessage
  | FrameMessage
  | InitMessage
  | TransferCanvasMessage;

self.onmessage = async (e: MessageEvent) => {
  const { type } = e.data as WorkerMessage;

  switch (type) {
    /** The handshake */
    case 'init': {
      nes = init().then(() => new WasmControlDeck());
      await nes;
      // TODO: Handle cartridge loading

      // Respond to the main thready that we are ready
      self.postMessage({ type: 'init' });
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
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      break;
    }

    case 'frame': {
      if (!nes || !ctx) return;

      // How many frames should have run by now
      const { elapsed } = e.data as FrameMessage;
      const target = Math.floor(elapsed / FRAME_INTERVAL);
      while (framesRun < target) {
        // TODO: Clock emulator one frame

        framesRun++;
      }

      // TODO: Grab frame buffer

      // paint it to OffscreenCanvas
      // const imageData = new ImageData(/*buffer*/ 256, 240);
      // ctx.putImageData(imageData, 0, 0);

      break;
    }

    case 'input-btn': {
      const { gp, btn } = e.data as InputButtonMessage;
      console.log('input-btn:', gp, btn);
      break;
    }

    case 'input-key': {
      const { key } = e.data as InputKeyMessage;
      console.log('input-key:', key);
      break;
    }

    default:
  }
};
