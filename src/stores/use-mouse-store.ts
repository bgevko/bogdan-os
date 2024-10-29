/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { create } from 'zustand';

import { MouseContext } from '@/types';

export interface MouseState {
  pauseTracking: boolean;
  mouseoverContext: MouseContext[];
  dragContext: MouseContext;
}

interface MouseActions {
  appendMouseoverContext: (context: MouseContext) => void;
  popMouseoverContext: () => void;
  getMouseoverContext: () => MouseContext;
  setPauseTracking: (pause: boolean) => void;

  setDragContext: (context: MouseContext) => void;
  reset: () => void;
}

const useMouseStore = create<MouseState & MouseActions>((set, get) => ({
  pauseTracking: false,
  mouseoverContext: ['none'],
  dragContext: 'none',
  appendMouseoverContext: (context) => {
    if (get().pauseTracking) return;
    const { mouseoverContext: contextStack } = get();
    if (contextStack.includes(context)) return;
    const newContextStack = [...contextStack, context];
    set({ mouseoverContext: newContextStack });
  },
  popMouseoverContext: () => {
    if (get().pauseTracking) return;
    const { mouseoverContext: contextStack } = get();
    if (contextStack.length === 1) return;
    const newContextStack = contextStack.slice(0, -1);
    set({ mouseoverContext: newContextStack });
  },
  getMouseoverContext: () => {
    const { mouseoverContext: contextStack } = get();
    return contextStack.at(-1)!;
  },
  setPauseTracking: (pause) => {
    set({ pauseTracking: pause });
  },
  setDragContext: (context) => {
    set({ dragContext: context });
  },
  reset: () => {
    const { mouseoverContext: contextStack } = get();
    if (contextStack.length === 1) return;
    set({
      mouseoverContext: ['desktop'],
      pauseTracking: false,
    });
  },
}));

export default useMouseStore;
