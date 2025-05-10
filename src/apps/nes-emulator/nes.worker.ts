// nes.worker.js
import init, { WasmControlDeck } from '@/wasm/nes/tetanes_core.js';

let nes: Promise<WasmControlDeck> | null = null;

export interface InputButtonMessage {
  type: 'input-btn';
  gp: number;
  btn: number;
}

export interface InputKeyMessage {
  type: 'input-key';
  key: string;
}

export type WorkerMessage =
  | { type: 'init' }
  | { type: 'frame' }
  | InputButtonMessage
  | InputKeyMessage;

self.onmessage = async (e: MessageEvent) => {
  const { type } = e.data as WorkerMessage;

  switch (type) {
    case 'init': {
      nes = init().then(() => new WasmControlDeck());
      await nes;
      self.postMessage({ type: 'init' });
      break;
    }

    case 'frame': {
      // self.postMessage({ type: 'frame' });
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
