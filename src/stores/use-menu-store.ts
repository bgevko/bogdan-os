import { create } from 'zustand';

import { MenuContext } from '@/types';

interface ContextState {
  isVisible: boolean;
  isMouseOver: boolean;
  menuContext: MenuContext;
  targetPath: string;
}

interface ContextActions {
  setMenuContext: (context: MenuContext) => void;
  setIsVisible: (isVisible: boolean) => void;
  setIsMouseOver: (isMouseOver: boolean) => void;
  setTargetPath: (path: string) => void;
  reset: () => void;
}

const useMenuStore = create<ContextState & ContextActions>((set) => ({
  isVisible: false,
  isMouseOver: false,
  menuContext: 'desktop',
  targetPath: '/Desktop',
  setMenuContext: (context) => {
    set({ menuContext: context });
  },
  setIsVisible: (isVisible) => {
    set({ isVisible });
  },
  setIsMouseOver: (isMouseOver) => {
    set({ isMouseOver });
  },

  setTargetPath: (path) => {
    set({ targetPath: path });
  },
  reset: () => {
    set({ isVisible: false, isMouseOver: false, menuContext: 'desktop', targetPath: '/Desktop' });
  },
}));

export default useMenuStore;
