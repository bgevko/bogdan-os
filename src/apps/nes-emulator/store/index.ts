import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface State {
  isOpen: boolean;
}

interface Actions {
  getIsOpen: () => boolean;
}

interface HeaderState extends State, Actions {}

const initialState: State = {
  isOpen: false,
};

const useNesStore = create<HeaderState>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      // getters
      getIsOpen: () => get().isOpen,
      reset: () => {
        set((state) => {
          state.isOpen = initialState.isOpen;
        });
      },
    })),
    {
      name: 'nes-store',
    },
  ),
);
export default useNesStore;
