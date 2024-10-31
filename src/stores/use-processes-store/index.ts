/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { getProcessOptions } from '@/static';
import useFsStore from '@/stores/use-fs-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { type Position, Size, SizePos, ProcessState, WindowState } from '@/types';

enableMapSet();

interface ProcessesActions {
  // Open/closeProcess operations
  openProcess: (filePaths: string | string[]) => void;
  closeProcess: (filePaths: string | string[]) => void;
  closeAll: () => void;
  isOpen: (path: string) => boolean;
  validatedOpen: (path: string) => void;
  getOpened: () => Map<string, ProcessState>;
  getProcess(path: string): ProcessState;
  getOpenedPaths: () => string[];
  mvProcessPath: (oldPath: string, newPath: string) => void;

  // focus context
  getFocused: () => string[];
  appendFocused: (path: string) => void;
  replaceFocused: (oldPath: string, newPath: string) => void;
  popFocused: () => void;
  setFocused: (path: string) => void;
  getIsFocused: (path: string) => boolean;
  getIsBlurred: () => boolean;
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
  getIsDisabledResize: (path: string) => boolean;
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
  setIsUpdatingPosition: (path: string, isMoving: boolean) => void;
  getIsUpdatingPosition: (path: string) => boolean;
  reset: () => void;
}

interface ProcessesState {
  openedProcesses: Map<string, ProcessState>;
  focused: string[];
  blurred: boolean;
}

function getArgsAsArray(args: string | string[]): string[] {
  return Array.isArray(args) ? args : [args];
}

const useProcessesStore = create<ProcessesState & ProcessesActions>()(
  immer((set, get) => ({
    openedProcesses: new Map<string, ProcessState>(),
    focused: [],
    blurred: false,

    openProcess: (filePaths) => {
      const paths = getArgsAsArray(filePaths);
      if (get().openedProcesses.has(paths[0])) return;

      set((state) => {
        for (const path of paths) {
          const options = getProcessOptions(path, useFsStore.getState().isDir(path));
          const zeroSizePos = { size: { width: 0, height: 0 }, position: { x: 0, y: 0 } };
          const { hasWindow } = options;
          let { size } = options;

          // Non-mobile mode (screen width > 400px)
          let position: Position;
          let disableResize = false;
          const isMobile = window.innerWidth <= 400 || window.innerHeight <= 400;

          if (isMobile) {
            position = { x: 0, y: 0 };
            size = { width: window.innerWidth, height: window.innerHeight - TASKBAR_HEIGHT };
            disableResize = true;
          } else {
            // center the position based on viewport size and window size
            // with slight random (50-100 px) offset to make opening multiple windows a little bit more natural
            const offset = Math.floor(Math.random() * 50);
            const addOrSubtract = Math.random() < 0.5 ? -1 : 1;
            position = {
              x: window.innerWidth / 2 - size.width / 2 + offset * addOrSubtract,
              y: window.innerHeight / 2 - size.height / 2 + offset * addOrSubtract,
            };
            disableResize = false;
          }
          // default sizepos is the same thing as initial size and position
          const defaultSizePos = { size, position };
          // Assume minSize is the same as size
          const minSize = size;

          const node: ProcessState = {
            path,
            hasWindow,
            window: {
              minSize,
              size,
              position,
              defaultSizePos,
              isMaximized: false,
              isMinimized: false,
              disableResize,
              maximizedSizePos: { ...zeroSizePos },
              unMaximizedSizePos: { ...zeroSizePos },
              minimizedSizePos: { ...zeroSizePos },
              unMinimizedSizePos: { ...zeroSizePos },
              isAnimating: false,
              isUpdatingSize: false,
              isUpdatingPosition: false,
              opacity: 1,
            },
          };
          state.openedProcesses.set(path, node);
          state.focused.push(path);
          state.blurred = false;
        }
      });
    },
    closeProcess: (filePaths) => {
      const paths = getArgsAsArray(filePaths);

      set((state) => {
        for (const path of paths) {
          state.openedProcesses.delete(path);
          state.focused.pop();
        }
      });
    },

    closeAll: () => {
      for (const path of get().getOpenedPaths()) {
        get().closeProcess(path);
      }
    },

    isOpen: (path) => get().openedProcesses.has(path),
    mvProcessPath: (oldPath, newPath) => {
      // Set opened process to new path
      set((state) => {
        const process = state.openedProcesses.get(oldPath);
        if (!process) return;
        process.path = newPath;
        state.openedProcesses.set(newPath, process);
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
    replaceFocused: (oldPath, newPath) => {
      set((state) => {
        const index = state.focused.indexOf(oldPath);
        if (index !== -1) {
          state.focused[index] = newPath;
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
    getIsBlurred: () => get().blurred,

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
        // console.error(error);
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
    getIsDisabledResize: (path) => {
      return getWindowPropHelper('disableResize', path);
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
    setIsUpdatingPosition: (path, isMoving) => {
      setWindowPropHelper('isUpdatingPosition', path, isMoving);
    },
    getIsUpdatingPosition: (path) => {
      try {
        return getWindowPropHelper('isUpdatingPosition', path);
      } catch {
        return false;
      }
    },
    // validator helpers
    validatedOpen: (path) => {
      if (!get().openedProcesses.has(path)) {
        throw new Error(`Process at path ${path} is not openProcess`);
      }
    },
    getProcess: (path) => {
      get().validatedOpen(path);
      return get().openedProcesses.get(path)!;
    },
    getOpened: () => get().openedProcesses,
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
