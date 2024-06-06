import { create } from 'zustand';

import { processDirectory } from '@/globals/process-directory';
import { type Processes } from '@/types/processes';
import { Position, Size } from '@/types/units';

interface ProcessStore {
  processDirectory: Processes;
  setProcessDirectory: (newProcesses: Processes) => void;
  openedProcesses: Processes;
  open: (processId: string | string[]) => void;
  close: (processId: string | string[]) => void;
  setWindowPosition: (processId: string, pos: Position) => void;
  getWindowPosition: (processId: string) => Position;
  setWindowSize: (processId: string, size: Size) => void;
  getWindowSize: (processId: string) => Size;
  getWindowMinSize: (processId: string) => Size;
  setWindowMaximized: (processId: string, maximized: boolean) => void;
  getWindowMaximized: (processId: string) => boolean;
  setIsAnimating: (processId: string, isAnimating: boolean) => void;
  getIsAnimating: (processId: string) => boolean;
  setIsMinimized: (processId: string, isMinimized: boolean) => void;
  getIsMinimized: (processId: string) => boolean;
  getTitle: (processId: string) => string;
  reset: () => void;
}

const useProcessesStore = create<ProcessStore>((set, get) => ({
  processDirectory,
  openedProcesses: {},
  setProcessDirectory: (newDirectory: Processes) => {
    set({ processDirectory: newDirectory });
  },
  open: (processId) => {
    const requested = Array.isArray(processId) ? processId : [processId];
    set((state) => {
      const toOpen: Processes = {};
      for (const id of requested) {
        if (!Object.prototype.hasOwnProperty.call(state.processDirectory, id)) {
          throw new Error(`Attempted to open process with an unknown id: ${id}.`);
        }
        if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, id)) {
          toOpen[id] = state.processDirectory[id];
        }
      }
      return { openedProcesses: { ...state.openedProcesses, ...toOpen } };
    });
  },
  close: (processId) => {
    const requested = Array.isArray(processId) ? processId : [processId];
    set((state) => {
      const toClose: Processes = {};
      for (const id of requested) {
        if (!Object.prototype.hasOwnProperty.call(state.processDirectory, id)) {
          throw new Error(`Attempted to close process with an unknown id: ${id}.`);
        }
        if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, id)) {
          throw new Error(`Attempted to close process that is not open: ${id}.`);
        }
        toClose[id] = state.openedProcesses[id];
      }

      // Update the main directory to reflect any changes to the closed processes
      const oldDirectory = { ...state.processDirectory };
      const newDirectory: Processes = {};
      for (const key of Object.keys(oldDirectory)) {
        newDirectory[key] = requested.includes(key) ? toClose[key] : oldDirectory[key];
      }

      const newOpened: Processes = {};
      for (const key of Object.keys(state.openedProcesses)) {
        if (!Object.prototype.hasOwnProperty.call(toClose, key)) {
          newOpened[key] = state.openedProcesses[key];
        }
      }

      return {
        openedProcesses: newOpened,
        processDirectory: newDirectory,
      };
    });
  },

  setWindowPosition: (processId, pos) => {
    set((state) => {
      if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, processId)) {
        throw new Error(`Attempted to set position of a process that is not open: ${processId}.`);
      }
      const newProcesses = { ...state.openedProcesses };
      newProcesses[processId] = { ...newProcesses[processId], position: pos };
      return { openedProcesses: newProcesses };
    });
  },

  getWindowPosition: (processId) => {
    const pos = get().openedProcesses[processId].position;
    const { openedProcesses } = get();

    if (!Object.prototype.hasOwnProperty.call(openedProcesses, processId)) {
      throw new Error(`Attempted to get position of a process that is not open: ${processId}.`);
    }
    return pos;
  },

  setWindowSize: (processId, size) => {
    set((state) => {
      if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, processId)) {
        throw new Error(`Attempted to set size of a process that is not open: ${processId}.`);
      }
      const newProcesses = { ...state.openedProcesses };
      newProcesses[processId] = { ...newProcesses[processId], size };
      return { openedProcesses: newProcesses };
    });
  },

  getWindowSize: (processId) => {
    const { size } = get().openedProcesses[processId];
    const { openedProcesses } = get();
    if (!Object.prototype.hasOwnProperty.call(openedProcesses, processId)) {
      throw new Error(`Attempted to get size of a process that is not open: ${processId}.`);
    }
    return size;
  },

  getWindowMinSize: (processId) => {
    const { minSize } = get().openedProcesses[processId];
    const { openedProcesses } = get();
    if (!Object.prototype.hasOwnProperty.call(openedProcesses, processId)) {
      throw new Error(`Attempted to get minSize of a process that is not open: ${processId}.`);
    }
    return minSize;
  },

  reset: () => {
    set({
      processDirectory,
      openedProcesses: {},
    });
  },

  setWindowMaximized: (processId, maximized) => {
    set((state) => {
      if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, processId)) {
        throw new Error(`Attempted to set maximized of a process that is not open: ${processId}.`);
      }
      const newProcesses = { ...state.openedProcesses };
      newProcesses[processId] = { ...newProcesses[processId], maximized };
      return { openedProcesses: newProcesses };
    });
  },

  getWindowMaximized: (processId) => {
    const { maximized } = get().openedProcesses[processId];
    const { openedProcesses } = get();
    if (!Object.prototype.hasOwnProperty.call(openedProcesses, processId)) {
      throw new Error(`Attempted to get maximized of a process that is not open: ${processId}.`);
    }
    return maximized;
  },

  getTitle: (processId) => {
    const { title } = get().openedProcesses[processId];
    const { openedProcesses } = get();
    if (!Object.prototype.hasOwnProperty.call(openedProcesses, processId)) {
      throw new Error(`Attempted to get title of a process that is not open: ${processId}.`);
    }
    return title;
  },

  setIsAnimating: (processId, isAnimating) => {
    set((state) => {
      if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, processId)) {
        throw new Error(
          `Attempted to set isAnimating of a process that is not open: ${processId}.`,
        );
      }
      const newProcesses = { ...state.openedProcesses };
      newProcesses[processId] = { ...newProcesses[processId], isAnimating };
      return { openedProcesses: newProcesses };
    });
  },

  getIsAnimating: (processId) => {
    const { isAnimating } = get().openedProcesses[processId];
    const { openedProcesses } = get();
    if (!Object.prototype.hasOwnProperty.call(openedProcesses, processId)) {
      throw new Error(`Attempted to get isAnimating of a process that is not open: ${processId}.`);
    }
    return isAnimating;
  },

  setIsMinimized: (processId, isMinimized) => {
    set((state) => {
      if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, processId)) {
        throw new Error(
          `Attempted to set isMinimized of a process that is not open: ${processId}.`,
        );
      }
      const newProcesses = { ...state.openedProcesses };
      newProcesses[processId] = { ...newProcesses[processId], isMinimized };
      return { openedProcesses: newProcesses };
    });
  },

  getIsMinimized: (processId) => {
    const { isMinimized } = get().openedProcesses[processId];
    const { openedProcesses } = get();
    if (!Object.prototype.hasOwnProperty.call(openedProcesses, processId)) {
      throw new Error(`Attempted to get isMinimized of a process that is not open: ${processId}.`);
    }
    return isMinimized;
  },
}));

export default useProcessesStore;
