import { create } from 'zustand';

import { type SizePos, Position } from '@/types';

interface SelectState {
  selected: Set<string>;
  clickStart: Position;
  selecting: boolean;
  selectingRect: SizePos;
  context: 'desktop' | 'folder';
}

interface SelectActions {
  getSelected: () => string[];
  setSelected: (selected: string[]) => void;
  addSelected: (path: string) => void;
  removeSelected: (path: string) => void;
  setClickStart: (clickStart: Position) => void;
  setSelecting: (selecting: boolean) => void;
  setSelectingRect: (selectingRect: SizePos) => void;
  setContext: (context: 'desktop' | 'folder') => void;
}

const useSelectStore = create<SelectState & SelectActions>((set, get) => ({
  selected: new Set(),
  context: 'desktop',
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
  setContext: (context: 'desktop' | 'folder') => {
    set({ context });
  },
}));

export default useSelectStore;
