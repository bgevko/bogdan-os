import { create } from 'zustand';

import { type Window, Position } from '@/types/units';

interface SelectState {
  clickStart: Position;
  selecting: boolean;
  selectingRect: Window;
  context: 'desktop' | 'folder';
  setClickStart: (clickStart: Position) => void;
  setSelecting: (selecting: boolean) => void;
  setSelectingRect: (selectingRect: Window) => void;
  setContext: (context: 'desktop' | 'folder') => void;
}

const useSelectStore = create<SelectState>((set) => ({
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
  setClickStart: (clickStart: Position) => {
    set({ clickStart });
  },
  setSelecting: (selecting: boolean) => {
    set({ selecting });
  },
  setSelectingRect: (selectingRect: Window) => {
    set({ selectingRect });
  },
  setContext: (context: 'desktop' | 'folder') => {
    set({ context });
  },
}));

export default useSelectStore;
