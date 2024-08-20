import { create } from 'zustand';

import { type SizePos } from '@/types';

type Context = 'desktop' | 'folder';

interface SelectState {
  allSelected: Set<string>;
  isUsingSelectRect: boolean;
  selectRect: SizePos;
  selectRectContext: Context;
}

interface SelectActions {
  getSelected: () => string[];
  setSelected: (selected: string[]) => void;
  addSelected: (path: string) => void;
  removeSelected: (path: string) => void;
  setIsUsingSelectRect: (isUsingSelectRect: boolean) => void;
  setSelectRect: (selectRect: SizePos) => void;
  setSelectContext: (selectContext: 'desktop' | 'folder') => void;
}

const useSelectStore = create<SelectState & SelectActions>((set, get) => ({
  allSelected: new Set(),
  selectRectContext: 'desktop',
  clickStart: {
    x: 0,
    y: 0,
  },
  isUsingSelectRect: false,
  selectRect: {
    size: {
      width: 0,
      height: 0,
    },
    position: {
      x: 0,
      y: 0,
    },
  },
  getSelected: () => {
    return [...get().allSelected];
  },
  setSelected: (selected) => {
    set({ allSelected: new Set(selected) });
  },
  addSelected: (path) => {
    set((state) => {
      const newSelected = new Set(state.allSelected);
      newSelected.add(path);
      return {
        allSelected: newSelected,
      };
    });
  },
  removeSelected: (path) => {
    set((state) => {
      const newSelected = new Set(state.allSelected);
      newSelected.delete(path);
      return {
        allSelected: newSelected,
      };
    });
  },
  setIsUsingSelectRect: (isUsingSelectRect: boolean) => {
    set({ isUsingSelectRect });
  },
  setSelectRect: (selectRect: SizePos) => {
    set({ selectRect });
  },
  setSelectContext: (selectContext: 'desktop' | 'folder') => {
    set({ selectRectContext: selectContext });
  },
}));

export default useSelectStore;
