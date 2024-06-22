import { create } from 'zustand';

import { type Window, Position } from '@/types/units';

interface SelectState {
  clickStart: Position;
  selecting: boolean;
  selectingRect: Window;
  setClickStart: (clickStart: Position) => void;
  setSelecting: (selecting: boolean) => void;
  setSelectingRect: (selectingRect: Window) => void;
}

const useSelectStore = create<SelectState>((set) => ({
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
}));

export default useSelectStore;
