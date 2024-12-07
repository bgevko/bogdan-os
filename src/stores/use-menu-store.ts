import { create } from 'zustand';

import { MenuContext, Position } from '@/types';

interface ContextState {
  isVisible: boolean;
  menuContext: MenuContext;
  targetPath: string;
  menuPos: { x: number; y: number };
}

interface ContextActions {
  setMenuContext: (context: MenuContext) => void;
  setIsVisible: (isVisible: boolean) => void;
  setTargetPath: (path: string) => void;
  setMenuPos: (pos: Position) => void;
  reset: () => void;
}

const useMenuStore = create<ContextState & ContextActions>((set) => ({
  isVisible: false,
  menuContext: 'desktop',
  targetPath: '/Desktop',
  menuPos: { x: -500, y: 0 },
  setMenuContext: (context) => {
    set({ menuContext: context });
  },
  setIsVisible: (isVisible) => {
    set({ isVisible });
  },

  setTargetPath: (path) => {
    set({ targetPath: path });
  },
  setMenuPos: (pos) => {
    set({ menuPos: pos });
  },
  reset: () => {
    set({
      isVisible: false,
      menuContext: 'desktop',
      targetPath: '/Desktop',
      menuPos: { x: -500, y: 0 },
    });
  },
}));

export default useMenuStore;
