class AudioProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    const { audioSAB, ctrlSAB, bufferSize } = options.processorOptions;
    this.audioBuf = new Float32Array(audioSAB);
    this.ctrl = new Int32Array(ctrlSAB);
    this.bufferSize = bufferSize;
  }

  process(inputs, outputs) {
    const out = outputs[0][0]; // mono: one channel
    const frames = out.length; // always 128
    const readIdx = Atomics.load(this.ctrl, 0);
    const writeIdx = Atomics.load(this.ctrl, 1);
    const available = (writeIdx - readIdx + this.bufferSize) % this.bufferSize;

    // how many samples we can actually copy
    const toCopy = Math.min(available, frames);

    // 1) copy what we have
    for (let i = 0; i < toCopy; i++) {
      out[i] = this.audioBuf[(readIdx + i) % this.bufferSize];
    }

    // 2) fill the rest with silence
    if (toCopy < frames) {
      out.fill(0, toCopy);
    }

    // 3) advance read pointer by the number we actually consumed
    Atomics.store(this.ctrl, 0, (readIdx + toCopy) % this.bufferSize);

    return true;
  }
}

registerProcessor('audio-processor', AudioProcessor);
