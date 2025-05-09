// nes.worker.js
import init, { WasmControlDeck } from '@/wasm/nes/tetanes_core.js';

let deckPromise: Promise<WasmControlDeck> | null = null;
type WorkerMessage = { type: 'init' } | { type: 'frame' };

self.onmessage = async (e: MessageEvent) => {
  const { type } = e.data as WorkerMessage;

  if (type === 'init') {
    deckPromise = init().then(() => new WasmControlDeck());
    await deckPromise;
    self.postMessage({ type: 'init' });
  }

  if (type === 'frame' && deckPromise) {
    self.postMessage({ type: 'frame' });
  }
};
