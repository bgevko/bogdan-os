/* tslint:disable */
/* eslint-disable */
export function __wasm_start(): void;
export class WasmControlDeck {
  free(): void;
  constructor();
  /**
   * Loads a ROM cartridge into memory from raw bytes.
   *
   * # Errors
   *
   * If there is any issue loading the ROM, then an error is returned.
   */
  loadRomBytes(name: string, bytes: Uint8Array): void;
  /**
   * Steps the emulation an entire frame
   *
   * # Errors
   *
   * If CPU encounters an invalid opcode, then an error is returned.
   */
  clockFrame(): void;
  /**
   * Get audio samples
   */
  audioSampes(): Float32Array;
  /**
   * Clear audio samples.
   */
  clearAudioSamples(): void;
  /**
   * Grab a frame worth of pixels
   */
  frameBuffer(): Uint8ClampedArray;
  /**
   * Save gamestate out as a byte array.
   */
  saveStateOut(): Uint8ClampedArray;
  /**
   * Load gamestate from a byte array.
   */
  loadStateIn(data: Uint8ClampedArray): void;
  /**
   * Process input
   */
  processInput(player: number, button: number, pressed: boolean): void;
  /**
   * Expose zapper input
   */
  aim_zapper(x: number, y: number): void;
  trigger_zapper(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_wasmcontroldeck_free: (a: number, b: number) => void;
  readonly wasmcontroldeck_new: () => number;
  readonly wasmcontroldeck_loadRomBytes: (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
  ) => [number, number];
  readonly wasmcontroldeck_clockFrame: (a: number) => [number, number];
  readonly wasmcontroldeck_audioSampes: (a: number) => any;
  readonly wasmcontroldeck_clearAudioSamples: (a: number) => void;
  readonly wasmcontroldeck_frameBuffer: (a: number) => any;
  readonly wasmcontroldeck_saveStateOut: (a: number) => [number, number, number];
  readonly wasmcontroldeck_loadStateIn: (a: number, b: any) => [number, number];
  readonly wasmcontroldeck_processInput: (
    a: number,
    b: number,
    c: number,
    d: number,
  ) => [number, number];
  readonly wasmcontroldeck_aim_zapper: (a: number, b: number, c: number) => void;
  readonly wasmcontroldeck_trigger_zapper: (a: number) => void;
  readonly __wasm_start: () => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init(
  module_or_path?:
    | { module_or_path: InitInput | Promise<InitInput> }
    | InitInput
    | Promise<InitInput>,
): Promise<InitOutput>;
