/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { create } from 'zustand';

import { MouseContext } from '@/types';

export interface MouseState {
  mouseoverContext: MouseContext[];
  dragContext: MouseContext;
}

interface MouseActions {
  appendMouseoverContext: (context: MouseContext) => void;
  popMouseoverContext: () => void;
  getMouseoverContext: () => MouseContext;

  setDragContext: (context: MouseContext) => void;
  reset: () => void;
}

const useMouseStore = create<MouseState & MouseActions>((set, get) => ({
  mouseoverContext: ['desktop'],
  dragContext: 'desktop',
  appendMouseoverContext: (context) => {
    const { mouseoverContext: contextStack } = get();
    if (contextStack.includes(context)) return;
    const newContextStack = [...contextStack, context];
    set({ mouseoverContext: newContextStack });
  },
  popMouseoverContext: () => {
    const { mouseoverContext: contextStack } = get();
    if (contextStack.length === 1) return;
    const newContextStack = contextStack.slice(0, -1);
    set({ mouseoverContext: newContextStack });
  },
  getMouseoverContext: () => {
    const { mouseoverContext: contextStack } = get();
    return contextStack.at(-1)!;
  },
  setDragContext: (context) => {
    set({ dragContext: context });
  },
  reset: () => {
    const { mouseoverContext: contextStack } = get();
    if (contextStack.length === 1) return;
    set({
      mouseoverContext: ['desktop'],
    });
  },
}));

export default useMouseStore;
