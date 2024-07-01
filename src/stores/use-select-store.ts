import { create } from 'zustand';

import { type SizePos, Position } from '@/types';

type Context = 'desktop' | 'folder';

interface SelectState {
  selected: Set<string>;
  clickStart: Position;
  selecting: boolean;
  selectingRect: SizePos;
  selectContext: Context;
  dropContext: Context;
}

interface SelectActions {
  getSelected: () => string[];
  setSelected: (selected: string[]) => void;
  addSelected: (path: string) => void;
  removeSelected: (path: string) => void;
  setClickStart: (clickStart: Position) => void;
  setSelecting: (selecting: boolean) => void;
  setSelectingRect: (selectingRect: SizePos) => void;
  setSelectContext: (selectContext: 'desktop' | 'folder') => void;
  setDropContext: (dropContext: 'desktop' | 'folder') => void;
}

const useSelectStore = create<SelectState & SelectActions>((set, get) => ({
  selected: new Set(),
  selectContext: 'desktop',
  dropContext: 'desktop',
  clickStart: {
    x: 0,
    y: 0,
  },
  selecting: false,
  selectingRect: {
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
    return [...get().selected];
  },
  setSelected: (selected) => {
    set({ selected: new Set(selected) });
  },
  addSelected: (path) => {
    set((state) => {
      const newSelected = new Set(state.selected);
      newSelected.add(path);
      return {
        selected: newSelected,
      };
    });
  },
  removeSelected: (path) => {
    set((state) => {
      const newSelected = new Set(state.selected);
      newSelected.delete(path);
      return {
        selected: newSelected,
      };
    });
  },
  setClickStart: (clickStart: Position) => {
    set({ clickStart });
  },
  setSelecting: (selecting: boolean) => {
    set({ selecting });
  },
  setSelectingRect: (selectingRect: SizePos) => {
    set({ selectingRect });
  },
  setSelectContext: (selectContext: 'desktop' | 'folder') => {
    set({ selectContext });
  },
  setDropContext: (dropContext: 'desktop' | 'folder') => {
    set({ dropContext });
  },
}));

export default useSelectStore;
