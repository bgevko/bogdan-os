import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import localforage from 'localforage';

export interface State {
  slot1Save: Uint8ClampedArray;
}

interface Actions {
  saveState: (slot: number, bytes: Uint8ClampedArray) => void;
  getState: (slot: number) => Uint8ClampedArray;
}

type HeaderState = State & Actions;

const useNesStore = create<HeaderState>()(
  persist(
    immer((set, get) => ({
      slot1Save: new Uint8ClampedArray(0),
      saveState: (slot, bytes) => {
        if (slot === 1) {
          set((state) => {
            state.slot1Save = bytes;
          });
        }
      },
      getState: (slot) => {
        if (slot === 1) {
          return get().slot1Save;
        }
        return new Uint8ClampedArray(0);
      },
    })),
    {
      name: 'nes-store',
      getStorage: () => localforage,
      partialize: (state) => ({
        slot1Save: Array.from(state.slot1Save),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.slot1Save = new Uint8ClampedArray(state.slot1Save);
        }
      },
    },
  ),
);

export default useNesStore;
