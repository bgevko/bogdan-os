/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
import { create } from 'zustand';

import useFsStore from '@/stores/use-fs-store';
import { type Window, Size, Position } from '@/types';
import { ProcessNode, ProcessOptions } from '@/utils/processes';

function validatePath(path: string) {
  const fsStore = useFsStore.getState();
  fsStore.validatePath(path);
}

function validateOpen(path: string) {
  const opened = useProcessesStore.getState().openedProcesses;
  if (!opened.has(path)) {
    throw new Error(`Process at path ${path} is not open`);
  }
}

const setPropertyHelper = <K extends keyof ProcessNode>(
  filePath: string,
  property: K,
  value: ProcessNode[K],
): { openedProcesses: Map<string, ProcessNode> } => {
  const state = useProcessesStore.getState();
  try {
    validatePath(filePath);
  } catch {
    throw new Error(`Attempted to set ${property} of a process that does not exist: ${filePath}.`);
  }

  try {
    validateOpen(filePath);
  } catch {
    throw new Error(`Attempted to set ${property} of a process that is not open: ${filePath}.`);
  }

  const process = state.openedProcesses.get(filePath)!;
  process[property] = value;

  return {
    openedProcesses: new Map(state.openedProcesses),
  };
};

const getPropertyHelper = <K extends keyof ProcessNode>(
  filePath: string,
  property: K,
): ProcessNode[K] => {
  const state = useProcessesStore.getState();

  try {
    validatePath(filePath);
  } catch {
    throw new Error(`Attempted to get ${property} of a process that does not exist: ${filePath}.`);
  }

  try {
    validateOpen(filePath);
  } catch {
    throw new Error(`Attempted to get ${property} of a process that is not open: ${filePath}.`);
  }

  const process = state.openedProcesses.get(filePath)!;
  return process[property];
};

interface ProcessStore {
  openedProcesses: Map<string, ProcessNode>;
  cachedProcesses: Map<string, ProcessOptions>;
  open: (path: string | string[], options?: ProcessOptions) => void;
  close: (path: string | string[]) => void;
  setWindow: (path: string, dimensions: Window) => void;
  getWindow: (path: string) => Window;
  setWindowPosition: (path: string, position: Position) => void;
  getWindowPosition: (path: string) => Position;
  setWindowSize: (path: string, size: Size) => void;
  getWindowSize: (path: string) => Size;
  getWindowMinSize: (path: string) => Size;
  setDefaultWindow: (path: string, dimensions: Window) => void;
  getDefaultWindow: (path: string) => Window;
  setIsMaximized: (path: string, maximized: boolean) => void;
  getIsMaximized: (path: string) => boolean;
  setIsMinimized: (path: string, isMinimized: boolean) => void;
  getIsMinimized: (path: string) => boolean;
  setIsAnimating: (path: string, isAnimating: boolean) => void;
  getIsAnimating: (path: string) => boolean;
  setMinimizedWindow: (path: string, dimensions: Window) => void;
  getMinimizedWindow: (path: string) => Window;
  setUnminimizedWindow: (path: string, dimensions: Window) => void;
  getUnminimizedWindow: (path: string) => Window;
  setOpacity: (path: string, opacity: number) => void;
  getOpacity: (path: string) => number;
  setMaximizedWindow: (path: string, dimensions: Window) => void;
  getMaximizedWindow: (path: string) => Window;
  setUnmaximizedWindow: (path: string, dimensions: Window) => void;
  getUnmaximizedWindow: (path: string) => Window;
  setIsUpdatingSize: (path: string, isResizing: boolean) => void;
  getIsUpdatingSize: (path: string) => boolean;
}

const useProcessesStore = create<ProcessStore>((set, get) => ({
  openedProcesses: new Map(),
  cachedProcesses: new Map(),
  open: (filePath, options = {}) => {
    const paths = Array.isArray(filePath) ? filePath : [filePath];
    const toOpen = new Map<string, ProcessNode>();
    for (const path of paths) {
      validatePath(path);
      const cachedOptions = get().cachedProcesses.get(path);
      const defaultOptions = {
        ...cachedOptions,
        ...options,
      };
      const process = new ProcessNode(path, defaultOptions);
      toOpen.set(path, process);
    }
    set((state) => {
      const oldOpened = state.openedProcesses;
      const newOpened = new Map([...oldOpened, ...toOpen]);
      return {
        openedProcesses: newOpened,
      };
    });
  },

  close: (filePath) => {
    const paths = Array.isArray(filePath) ? filePath : [filePath];
    const opened = new Map(get().openedProcesses);
    const cached = new Map(get().cachedProcesses);
    for (const path of paths) {
      validatePath(path);
      validateOpen(path);
      cached.set(path, opened.get(path)!.dumpOptions());
      opened.delete(path);
    }
    set({
      openedProcesses: opened,
      cachedProcesses: cached,
    });
  },
  setWindow: (path, dimensions) => {
    set(() => setPropertyHelper(path, 'position', dimensions.position));
    set(() => setPropertyHelper(path, 'size', dimensions.size));
  },

  getWindow: (path) => {
    try {
      const position = getPropertyHelper(path, 'position');
      const size = getPropertyHelper(path, 'size');
      return { position, size };
    } catch {
      return { position: { x: 0, y: 0 }, size: { width: 0, height: 0 } };
    }
  },

  getWindowPosition: (path) => {
    return getPropertyHelper(path, 'position');
  },

  setWindowPosition: (path, position) => {
    set(() => setPropertyHelper(path, 'position', position));
  },

  getWindowSize: (path) => {
    return getPropertyHelper(path, 'size');
  },

  setWindowSize: (path, size) => {
    set(() => setPropertyHelper(path, 'size', size));
  },

  getWindowMinSize: (path) => {
    return getPropertyHelper(path, 'minSize');
  },

  setDefaultWindow: (path, dimensions) => {
    set(() => setPropertyHelper(path, 'defaultWindow', dimensions));
  },

  getDefaultWindow: (path) => {
    return getPropertyHelper(path, 'defaultWindow');
  },

  setIsMaximized: (path, maximized) => {
    set(() => setPropertyHelper(path, 'isMaximized', maximized));
  },

  getIsMaximized: (path) => {
    return getPropertyHelper(path, 'isMaximized');
  },

  setIsMinimized: (path, isMinimized) => {
    set(() => setPropertyHelper(path, 'isMinimized', isMinimized));
  },

  getIsMinimized: (path) => {
    return getPropertyHelper(path, 'isMinimized');
  },

  setIsAnimating: (path, isAnimating) => {
    set(() => setPropertyHelper(path, 'isAnimating', isAnimating));
  },

  getIsAnimating: (path) => {
    return getPropertyHelper(path, 'isAnimating');
  },

  setMinimizedWindow: (path, dimensions) => {
    set(() => setPropertyHelper(path, 'minimizedWindow', dimensions));
  },

  getMinimizedWindow: (path) => {
    return getPropertyHelper(path, 'minimizedWindow');
  },

  setUnminimizedWindow: (path, dimensions) => {
    set(() => setPropertyHelper(path, 'unMinimizedWindow', dimensions));
  },

  getUnminimizedWindow: (path) => {
    return getPropertyHelper(path, 'unMinimizedWindow');
  },

  setOpacity: (path, opacity) => {
    set(() => setPropertyHelper(path, 'opacity', opacity));
  },

  getOpacity: (path) => {
    return getPropertyHelper(path, 'opacity');
  },

  setMaximizedWindow: (path, dimensions) => {
    set(() => setPropertyHelper(path, 'maximizedWindow', dimensions));
  },

  getMaximizedWindow: (path) => {
    return getPropertyHelper(path, 'maximizedWindow');
  },

  setUnmaximizedWindow: (path, dimensions) => {
    set(() => setPropertyHelper(path, 'unMaximizedWindow', dimensions));
  },

  getUnmaximizedWindow: (path) => {
    return getPropertyHelper(path, 'unMaximizedWindow');
  },
  setIsUpdatingSize: (path, isResizing) => {
    set(() => setPropertyHelper(path, 'isUpdatingSize', isResizing));
  },
  getIsUpdatingSize: (path) => {
    try {
      return getPropertyHelper(path, 'isUpdatingSize');
    } catch {
      return false;
    }
  },
}));

export default useProcessesStore;
