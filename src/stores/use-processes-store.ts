import { create } from 'zustand';

import { getProcessDirectory } from '@/globals/process-directory';
import { type Processes, Process } from '@/types/processes';
import { Position, Size, Dimensions } from '@/types/units';

const processDirectory = getProcessDirectory();
interface ProcessStore {
  processDirectory: Processes;
  setProcessDirectory: (newProcesses: Processes) => void;
  setProperty: <K extends keyof Process>(processId: string, property: K, value: Process[K]) => void;
  getProperty: <K extends keyof Process>(processId: string, property: K) => Process[K];
  openedProcesses: Processes;
  open: (processId: string | string[]) => void;
  close: (processId: string | string[]) => void;
  setWindowDimensions: (processId: string, dimensions: Dimensions) => void;
  getWindowDimensions: (processId: string) => Dimensions;
  setWindowPosition: (processId: string, position: Position) => void;
  getWindowPosition: (processId: string) => Position;
  setWindowSize: (processId: string, size: Size) => void;
  getWindowSize: (processId: string) => Size;
  getWindowMinSize: (processId: string) => Size;
  setDefaultDimensions: (processId: string, dimensions: Dimensions) => void;
  getDefaultDimensions: (processId: string) => Dimensions;
  setIsMaximized: (processId: string, maximized: boolean) => void;
  getIsMaximized: (processId: string) => boolean;
  setIsMinimized: (processId: string, isMinimized: boolean) => void;
  getIsMinimized: (processId: string) => boolean;
  setIsAnimating: (processId: string, isAnimating: boolean) => void;
  getIsAnimating: (processId: string) => boolean;
  getTitle: (processId: string) => string;
  setMinimizedDimensions: (processId: string, dimensions: Dimensions) => void;
  getMinimizedDimensions: (processId: string) => Dimensions;
  setUnminimizedDimensions: (processId: string, dimensions: Dimensions) => void;
  getUnminimizedDimensions: (processId: string) => Dimensions;
  setOpacity: (processId: string, opacity: number) => void;
  getOpacity: (processId: string) => number;
  setMaximizedDimensions: (processId: string, dimensions: Dimensions) => void;
  getMaximizedDimensions: (processId: string) => Dimensions;
  setUnmaximizedDimensions: (processId: string, dimensions: Dimensions) => void;
  getUnmaximizedDimensions: (processId: string) => Dimensions;
  reset: (directory?: Processes) => void;
}

const setPropertyHelper = <K extends keyof Process>(
  state: ProcessStore,
  processId: string,
  property: K,
  value: Process[K],
): { openedProcesses: Processes } => {
  if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, processId)) {
    throw new Error(`Attempted to set ${property} of a process that is not open: ${processId}.`);
  }

  const newProcesses = {
    ...state.openedProcesses,
    [processId]: {
      ...state.openedProcesses[processId],
      [property]: value,
    },
  };

  return { openedProcesses: newProcesses };
};
const getPropertyHelper = <K extends keyof Process>(
  state: ProcessStore,
  processId: string,
  property: K,
): Process[K] => {
  if (!Object.prototype.hasOwnProperty.call(state.openedProcesses, processId)) {
    throw new Error(`Attempted to get ${property} of a process that is not open: ${processId}.`);
  }
  const process = state.openedProcesses[processId];
  return process[property];
};

const cleanupProcesses = (closedProcesses: Processes) => {
  for (const key of Object.keys(closedProcesses)) {
    const process = closedProcesses[key];
    // Unminimize the process and restore it to its unminimized dimensions
    if (process.minimized) {
      process.minimized = false;
      process.position = process.unminimizedDimensions.position;
      process.size = process.unminimizedDimensions.size;
    }

    if (process.isAnimating) {
      process.isAnimating = false;
    }

    // Other cleanup tasks
    process.opacity = 1;
  }
};

const useProcessesStore = create<ProcessStore>((set, get) => ({
  processDirectory,
  openedProcesses: {},
  setProcessDirectory: (newDirectory: Processes) => {
    set({ processDirectory: newDirectory });
  },
  setProperty: (processId, property, value) => {
    set((state) => setPropertyHelper(state, processId, property, value));
  },
  getProperty: (processId, property) => getPropertyHelper(get(), processId, property),
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

      // Clean up the state of all closed processes
      cleanupProcesses(toClose);

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

  setWindowDimensions: (processId, dimensions) => {
    const { size, position } = dimensions;
    set((state) => setPropertyHelper(state, processId, 'size', size));
    set((state) => setPropertyHelper(state, processId, 'position', position));
  },
  getWindowDimensions: (processId) => {
    const size = getPropertyHelper(get(), processId, 'size');
    const position = getPropertyHelper(get(), processId, 'position');
    const dimensions = { size, position };
    return dimensions;
  },

  setDefaultDimensions: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'defaultDimensions', dimensions));
  },
  getDefaultDimensions: (processId) => getPropertyHelper(get(), processId, 'defaultDimensions'),

  setWindowPosition: (processId, position) => {
    set((state) => setPropertyHelper(state, processId, 'position', position));
  },
  getWindowPosition: (processId) => getPropertyHelper(get(), processId, 'position'),

  setWindowSize: (processId, size) => {
    set((state) => setPropertyHelper(state, processId, 'size', size));
  },
  getWindowSize: (processId) => getPropertyHelper(get(), processId, 'size'),
  getWindowMinSize: (processId) => getPropertyHelper(get(), processId, 'minSize'),

  setIsMaximized: (processId, maximized) => {
    set((state) => setPropertyHelper(state, processId, 'maximized', maximized));
  },
  getIsMaximized: (processId) => getPropertyHelper(get(), processId, 'maximized'),

  setIsAnimating: (processId, isAnimating) => {
    set((state) => setPropertyHelper(state, processId, 'isAnimating', isAnimating));
  },
  getIsAnimating: (processId) => getPropertyHelper(get(), processId, 'isAnimating'),

  setIsMinimized: (processId, isMinimized) => {
    set((state) => setPropertyHelper(state, processId, 'minimized', isMinimized));
  },
  getIsMinimized: (processId) => getPropertyHelper(get(), processId, 'minimized'),

  setMinimizedDimensions: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'minimizedDimensions', dimensions));
  },
  getMinimizedDimensions: (processId) => getPropertyHelper(get(), processId, 'minimizedDimensions'),

  setOpacity: (processId, opacity) => {
    set((state) => setPropertyHelper(state, processId, 'opacity', opacity));
  },
  getOpacity: (processId) => getPropertyHelper(get(), processId, 'opacity'),

  setMaximizedDimensions: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'maximizedDimensions', dimensions));
  },
  getMaximizedDimensions: (processId) => getPropertyHelper(get(), processId, 'maximizedDimensions'),

  setUnmaximizedDimensions: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'unmaximizedDimensions', dimensions));
  },
  getUnmaximizedDimensions: (processId) =>
    getPropertyHelper(get(), processId, 'unmaximizedDimensions'),

  setUnminimizedDimensions: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'unminimizedDimensions', dimensions));
  },
  getUnminimizedDimensions: (processId) =>
    getPropertyHelper(get(), processId, 'unminimizedDimensions'),

  getTitle: (processId) => getPropertyHelper(get(), processId, 'title'),

  reset: (directory) => {
    set({
      processDirectory: directory ?? processDirectory,
      openedProcesses: {},
    });
  },
}));

export default useProcessesStore;
