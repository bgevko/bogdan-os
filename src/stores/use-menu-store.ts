import { create } from 'zustand';

import { MenuContext } from '@/types';

interface ContextState {
  contextMenuVisible: boolean;
  isMouseOver: boolean;
  menuContext: MenuContext;
  targetPath: string;
}

interface ContextActions {
  setMenuContext: (context: MenuContext) => void;
  setContextMenuVisible: (contextMenuVisible: boolean) => void;
  setIsMouseOver: (isMouseOver: boolean) => void;
  setTargetPath: (path: string) => void;
  reset: () => void;
}

const useMenuStore = create<ContextState & ContextActions>((set) => ({
  contextMenuVisible: false,
  isMouseOver: false,
  menuContext: 'desktop',
  targetPath: '/Desktop',
  setMenuContext: (context) => {
    set({ menuContext: context });
  },
  setContextMenuVisible: (isVisible) => {
    set({ contextMenuVisible: isVisible });
  },
  setIsMouseOver: (isMouseOver) => {
    set({ isMouseOver });
  },

  setTargetPath: (path) => {
    set({ targetPath: path });
  },
  reset: () => {
    set({
      contextMenuVisible: false,
      isMouseOver: false,
      menuContext: 'desktop',
      targetPath: '/Desktop',
    });
  },
}));

export default useMenuStore;
