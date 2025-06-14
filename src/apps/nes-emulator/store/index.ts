import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface State {
  slot1Save: Uint8ClampedArray | null;
}

interface Actions {
  saveState(slot: number, bytes: Uint8ClampedArray): void;
  getState(slot: number): Uint8ClampedArray | null;
}

interface HeaderState extends State, Actions {}

const initialState: State = {
  slot1Save: new Uint8ClampedArray(0),
};

const useNesStore = create<HeaderState>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      saveState: (slot, bytes) => {
        set((state) => {
          switch (slot) {
            case 1:
              state.slot1Save = bytes;
              break;
            default:
              return;
          }
        });
      },
      getState: (slot) => {
        const state = get();
        switch (slot) {
          case 1:
            return state.slot1Save;
          default:
            return new Uint8ClampedArray(0);
        }
      },
    })),
    {
      name: 'nes-store',
    },
  ),
);
export default useNesStore;
