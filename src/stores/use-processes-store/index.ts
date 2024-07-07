/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import useFsStore from '@/stores/use-fs-store';
import { MIN_WINDOW_SIZE, DEFAULT_WINDOW_SIZE, DEFAULT_WINDOW_POSITION } from '@/themes';
import { type Position, Size, SizePos, ProcessNode, WindowState } from '@/types';

enableMapSet();

interface ProcessOptions {
  fileName?: string;
  fileExt?: string;
  hasWindow?: boolean;
  position?: Position;
  minSize?: Size;
  size?: Size;
  defaultSizePos?: SizePos;
}

const validatePath = (path: string): void => {
  const state = useFsStore.getState();
  state.validatePath(path);
};

function offsetWindowPos(position: Position, size: Size): Position {
  const offset = 30;

  const { width, height } = size;
  const { x, y } = position;
  const newX = x + offset;
  const newY = y + offset;
  const adjustedX = newX + width > window.innerWidth ? window.innerWidth - width : newX;
  const adjustedY = newY + height > window.innerHeight ? window.innerHeight - height : newY;

  return { x: adjustedX, y: adjustedY };
}

function newProcessNode(path: string, options: ProcessOptions = {}): ProcessNode {
  const zeroSizePos = { size: { width: 0, height: 0 }, position: { x: 0, y: 0 } };
  // We're going to try and get the window in the center of the screen when first opened
  let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  pos = options.position ?? {
    x: window.innerWidth / 2 - DEFAULT_WINDOW_SIZE.width / 2,
    y: window.innerHeight / 2 - DEFAULT_WINDOW_SIZE.height / 2,
  };

  return {
    path,
    hasWindow: options.hasWindow ?? true,
    window: {
      minSize: options.minSize ?? MIN_WINDOW_SIZE,
      size: options.size ?? DEFAULT_WINDOW_SIZE,
      position: pos,
      defaultSizePos: { size: DEFAULT_WINDOW_SIZE, position: DEFAULT_WINDOW_POSITION },
      isMaximized: false,
      isMinimized: false,
      maximizedSizePos: { ...zeroSizePos },
      unMaximizedSizePos: { ...zeroSizePos },
      minimizedSizePos: { ...zeroSizePos },
      unMinimizedSizePos: { ...zeroSizePos },
      isAnimating: false,
      isUpdatingSize: false,
      opacity: 1,
    },
  };
}

function dumpOptions(node: ProcessNode): ProcessOptions {
  return {
    hasWindow: node.hasWindow,
    position: node.window.position,
    minSize: node.window.minSize,
    size: node.window.size,
    defaultSizePos: node.window.defaultSizePos,
  };
}

interface ProcessesActions {
  // Open/close operations
  open: (filePaths: string | string[], options?: ProcessOptions) => void;
  close: (filePaths: string | string[]) => void;
  closeAll: () => void;
  isOpen: (path: string) => boolean;
  validatedOpen: (path: string) => void;
  getOpened: () => Map<string, ProcessNode>;
  getProcess(path: string): ProcessNode;
  getOpenedPaths: () => string[];
  getCached(): Map<string, ProcessOptions>;
  getCachedProcess(path: string): ProcessOptions;
  getCachedPaths: () => string[];
  isCached(path: string): boolean;
  mvProcessPath: (oldPath: string, newPath: string) => void;

  // focus context
  getFocused: () => string[];
  appendFocused: (path: string) => void;
  popFocused: () => void;
  setFocused: (path: string) => void;
  getIsFocused: (path: string) => boolean;
  setBlurFocus: (blurred: boolean) => void;

  // window stuff
  setWindow: (path: string, sizePos: SizePos) => void;
  getWindow: (path: string) => SizePos;
  setWindowPosition: (path: string, position: Position) => void;
  getWindowPosition: (path: string) => Position;
  setWindowSize: (path: string, size: Size) => void;
  getWindowSize: (path: string) => Size;
  getWindowMinSize: (path: string) => Size;
  setDefaultWindow: (path: string, sizePos: SizePos) => void;
  getDefaultWindow: (path: string) => SizePos;
  setIsMaximized: (path: string, maximized: boolean) => void;
  getIsMaximized: (path: string) => boolean;
  setIsMinimized: (path: string, isMinimized: boolean) => void;
  getIsMinimized: (path: string) => boolean;
  setIsAnimating: (path: string, isAnimating: boolean) => void;
  getIsAnimating: (path: string) => boolean;
  setMinimizedWindow: (path: string, sizePos: SizePos) => void;
  getMinimizedWindow: (path: string) => SizePos;
  setUnminimizedWindow: (path: string, sizePos: SizePos) => void;
  getUnminimizedWindow: (path: string) => SizePos;
  setOpacity: (path: string, opacity: number) => void;
  getOpacity: (path: string) => number;
  setMaximizedWindow: (path: string, sizePos: SizePos) => void;
  getMaximizedWindow: (path: string) => SizePos;
  setUnmaximizedWindow: (path: string, sizePos: SizePos) => void;
  getUnmaximizedWindow: (path: string) => SizePos;
  setIsUpdatingSize: (path: string, isResizing: boolean) => void;
  getIsUpdatingSize: (path: string) => boolean;
  reset: () => void;
}

interface ProcessesState {
  openedProcesses: Map<string, ProcessNode>;
  cachedOptions: Map<string, ProcessOptions>;
  focused: string[];
  blurred: boolean;
}

function normalizeArgs(args: string | string[]): string[] {
  return Array.isArray(args) ? args : [args];
}

const useProcessesStore = create<ProcessesState & ProcessesActions>()(
  immer((set, get) => ({
    openedProcesses: new Map<string, ProcessNode>(),
    cachedOptions: new Map<string, ProcessOptions>(),
    focused: [],
    blurred: false,
    open: (filePaths, options = {}) => {
      const paths = normalizeArgs(filePaths);
      if (get().openedProcesses.has(paths[0])) return;

      set((state) => {
        for (const path of paths) {
          const cachedOptions = get().getCachedProcess(path);
          const defaultOptions = { ...cachedOptions, ...options };
          const node = newProcessNode(path, defaultOptions);

          if (!state.isCached(path) && state.openedProcesses.size > 0) {
            const lastOpened = [...state.openedProcesses.values()].pop()!;
            const offsetPosition = offsetWindowPos(
              lastOpened.window.position,
              lastOpened.window.size,
            );
            node.window.position = offsetPosition;
          }
          state.openedProcesses.set(path, node);
          state.focused.push(path);
          state.blurred = false;
        }
      });
    },
    close: (filePaths) => {
      const paths = normalizeArgs(filePaths);

      set((state) => {
        for (const path of paths) {
          const toClose = get().getProcess(path);
          state.cachedOptions.set(path, dumpOptions(toClose));
          state.openedProcesses.delete(path);
          state.focused.pop();
        }
      });
    },

    closeAll: () => {
      for (const path of get().getOpenedPaths()) {
        get().close(path);
      }
    },

    isOpen: (path) => get().openedProcesses.has(path),
    mvProcessPath: (oldPath, newPath) => {
      if (!get().openedProcesses.has(oldPath)) {
        if (!get().cachedOptions.has(oldPath)) {
          return;
        }
        // Set cached options to new path
        set((state) => {
          state.cachedOptions.set(newPath, state.cachedOptions.get(oldPath)!);
          state.cachedOptions.delete(oldPath);
        });
        return;
      }

      // Set opened process to new path
      set((state) => {
        state.openedProcesses.set(newPath, state.openedProcesses.get(oldPath)!);
        state.openedProcesses.delete(oldPath);
      });
    },

    // focus context
    getFocused: () => get().focused,
    appendFocused: (path) => {
      set((state) => {
        if (!state.focused.includes(path)) {
          state.focused.push(path);
        }
      });
    },
    popFocused: () => {
      set((state) => {
        state.focused.pop();
      });
    },
    setFocused: (path) => {
      set((state) => {
        const index: number = state.focused.indexOf(path);
        if (index !== -1) {
          state.focused.splice(index, 1);
        }
        state.focused.push(path);
        if (state.blurred) state.blurred = false;
      });
    },
    getIsFocused: (path) => {
      const focused = get().getFocused().at(-1);
      return focused === path && !get().blurred;
    },
    setBlurFocus: (blurred) => {
      set((state) => {
        state.blurred = blurred;
      });
    },

    // window helpers
    setWindow: (path, sizePos) => {
      setWindowPropHelper('size', path, sizePos.size);
      setWindowPropHelper('position', path, sizePos.position);
    },
    getWindow: (path) => {
      try {
        return {
          size: getWindowPropHelper('size', path),
          position: getWindowPropHelper('position', path),
        };
      } catch {
        return { size: { width: 0, height: 0 }, position: { x: 0, y: 0 } };
      }
    },
    setWindowPosition: (path, position) => {
      setWindowPropHelper('position', path, position);
    },
    getWindowPosition: (path) => {
      return getWindowPropHelper('position', path);
    },
    setWindowSize: (path, size) => {
      setWindowPropHelper('size', path, size);
    },
    getWindowSize: (path) => {
      return getWindowPropHelper('size', path);
    },
    getWindowMinSize: (path) => {
      return getWindowPropHelper('minSize', path);
    },
    setDefaultWindow: (path, sizePos) => {
      setWindowPropHelper('defaultSizePos', path, sizePos);
    },
    getDefaultWindow: (path) => {
      return getWindowPropHelper('defaultSizePos', path);
    },
    setIsMaximized: (path, maximized) => {
      setWindowPropHelper('isMaximized', path, maximized);
    },
    getIsMaximized: (path) => {
      try {
        return getWindowPropHelper('isMaximized', path);
      } catch {
        return false;
      }
    },
    setIsMinimized: (path, isMinimized) => {
      setWindowPropHelper('isMinimized', path, isMinimized);

      // Side effect: append and pop focused stack
      if (isMinimized) {
        get().popFocused();
      } else {
        get().appendFocused(path);
      }
    },
    getIsMinimized: (path) => {
      try {
        return getWindowPropHelper('isMinimized', path);
      } catch {
        return false;
      }
    },
    setIsAnimating: (path, isAnimating) => {
      setWindowPropHelper('isAnimating', path, isAnimating);
    },
    getIsAnimating: (path) => {
      return getWindowPropHelper('isAnimating', path);
    },
    setMinimizedWindow: (path, sizePos) => {
      setWindowPropHelper('minimizedSizePos', path, sizePos);
    },
    getMinimizedWindow: (path) => {
      return getWindowPropHelper('minimizedSizePos', path);
    },
    setUnminimizedWindow: (path, sizePos) => {
      setWindowPropHelper('unMinimizedSizePos', path, sizePos);
    },
    getUnminimizedWindow: (path) => {
      return getWindowPropHelper('unMinimizedSizePos', path);
    },
    setOpacity: (path, opacity) => {
      setWindowPropHelper('opacity', path, opacity);
    },
    getOpacity: (path) => {
      return getWindowPropHelper('opacity', path);
    },
    setMaximizedWindow: (path, sizePos) => {
      setWindowPropHelper('maximizedSizePos', path, sizePos);
    },
    getMaximizedWindow: (path) => {
      return getWindowPropHelper('maximizedSizePos', path);
    },
    setUnmaximizedWindow: (path, sizePos) => {
      setWindowPropHelper('unMaximizedSizePos', path, sizePos);
    },
    getUnmaximizedWindow: (path) => {
      return getWindowPropHelper('unMaximizedSizePos', path);
    },
    setIsUpdatingSize: (path, isResizing) => {
      setWindowPropHelper('isUpdatingSize', path, isResizing);
    },
    getIsUpdatingSize: (path) => {
      try {
        return getWindowPropHelper('isUpdatingSize', path);
      } catch {
        return false;
      }
    },
    // validator helpers
    validatedOpen: (path) => {
      if (!get().openedProcesses.has(path)) {
        throw new Error(`Process at path ${path} is not open`);
      }
    },
    getProcess: (path) => {
      get().validatedOpen(path);
      return get().openedProcesses.get(path)!;
    },
    getOpened: () => get().openedProcesses,
    getCachedProcess: (path) => {
      validatePath(path);
      return get().cachedOptions.get(path) ?? newProcessNode(path);
    },
    getCached: () => get().cachedOptions,
    getCachedPaths: () => [...get().cachedOptions.keys()],
    isCached: (path) => get().cachedOptions.has(path),
    reset: () => {
      set(() => ({
        openedProcesses: new Map(),
        cachedOptions: new Map(),
        focused: [],
      }));
    },
    getOpenedPaths: () => [...get().openedProcesses.keys()],
  })),
);

function setWindowPropHelper<K extends keyof WindowState>(
  prop: K,
  path: string,
  value: WindowState[K],
): void {
  useProcessesStore.setState((state) => {
    const node = state.openedProcesses.get(path);
    if (node) {
      node.window[prop] = value;
    }
  });
}

function getWindowPropHelper<K extends keyof WindowState>(prop: K, path: string): WindowState[K] {
  const node = useProcessesStore.getState().getProcess(path);
  return node.window[prop];
}
export default useProcessesStore;
