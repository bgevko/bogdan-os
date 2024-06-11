import { create } from 'zustand';

import { getProcessDirectory } from '@/globals/process-directory';
import { type Processes, Process } from '@/types/processes';
import { Position, Size, Window } from '@/types/units';

const processDirectory = getProcessDirectory();
interface ProcessStore {
  processDirectory: Processes;
  setProcessDirectory: (newProcesses: Processes) => void;
  setProperty: <K extends keyof Process>(processId: string, property: K, value: Process[K]) => void;
  getProperty: <K extends keyof Process>(processId: string, property: K) => Process[K];
  openedProcesses: Processes;
  open: (processId: string | string[]) => void;
  close: (processId: string | string[]) => void;
  setWindow: (processId: string, dimensions: Window) => void;
  getWindow: (processId: string) => Window;
  setWindowPosition: (processId: string, position: Position) => void;
  getWindowPosition: (processId: string) => Position;
  setWindowSize: (processId: string, size: Size) => void;
  getWindowSize: (processId: string) => Size;
  getWindowMinSize: (processId: string) => Size;
  setDefaultWindow: (processId: string, dimensions: Window) => void;
  getDefaultWindow: (processId: string) => Window;
  setIsMaximized: (processId: string, maximized: boolean) => void;
  getIsMaximized: (processId: string) => boolean;
  setIsMinimized: (processId: string, isMinimized: boolean) => void;
  getIsMinimized: (processId: string) => boolean;
  setIsAnimating: (processId: string, isAnimating: boolean) => void;
  getIsAnimating: (processId: string) => boolean;
  getTitle: (processId: string) => string;
  setMinimizedWindow: (processId: string, dimensions: Window) => void;
  getMinimizedWindow: (processId: string) => Window;
  setUnminimizedWindow: (processId: string, dimensions: Window) => void;
  getUnminimizedWindow: (processId: string) => Window;
  setOpacity: (processId: string, opacity: number) => void;
  getOpacity: (processId: string) => number;
  setMaximizedWindow: (processId: string, dimensions: Window) => void;
  getMaximizedWindow: (processId: string) => Window;
  setUnmaximizedWindow: (processId: string, dimensions: Window) => void;
  getUnmaximizedWindow: (processId: string) => Window;
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
      process.position = process.unMinimizedWindow.position;
      process.size = process.unMinimizedWindow.size;
    }

    if (process.isAnimating) {
      process.isAnimating = false;
    }

    // Other cleanup tasks
    process.opacity = 1;
  }
};

const initiateProcesses = (processes: Processes) => {
  for (const key of Object.keys(processes)) {
    const process = processes[key];
    // make sure defaultWindow.size >= minSize
    if (process.defaultWindow.size.width < process.minSize.width) {
      throw new Error(
        `The default width of ${process.title} is less than the minimum width of ${process.minSize.width.toString()}. Either increase the default width or decrease the minimum width.`,
      );
    } else if (process.defaultWindow.size.height < process.minSize.height) {
      throw new Error(
        `The default height of ${process.title} is less than the minimum height of ${process.minSize.height.toString()}. Either increase the default height or decrease the minimum height.`,
      );
    }

    // Make sure size and position are set to default size and position
    process.size = process.defaultWindow.size;
    process.position = process.defaultWindow.position;
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
      initiateProcesses(toOpen);
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

  setWindow: (processId, dimensions) => {
    const { size, position } = dimensions;
    set((state) => setPropertyHelper(state, processId, 'size', size));
    set((state) => setPropertyHelper(state, processId, 'position', position));
  },
  getWindow: (processId) => {
    const size = getPropertyHelper(get(), processId, 'size');
    const position = getPropertyHelper(get(), processId, 'position');
    const dimensions = { size, position };
    return dimensions;
  },

  setDefaultWindow: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'defaultWindow', dimensions));
  },
  getDefaultWindow: (processId) => getPropertyHelper(get(), processId, 'defaultWindow'),

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

  setMinimizedWindow: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'minimizedWindow', dimensions));
  },
  getMinimizedWindow: (processId) => getPropertyHelper(get(), processId, 'minimizedWindow'),

  setOpacity: (processId, opacity) => {
    set((state) => setPropertyHelper(state, processId, 'opacity', opacity));
  },
  getOpacity: (processId) => getPropertyHelper(get(), processId, 'opacity'),

  setMaximizedWindow: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'maximizedWindow', dimensions));
  },
  getMaximizedWindow: (processId) => getPropertyHelper(get(), processId, 'maximizedWindow'),

  setUnmaximizedWindow: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'unMaximizedWindow', dimensions));
  },
  getUnmaximizedWindow: (processId) => getPropertyHelper(get(), processId, 'unMaximizedWindow'),

  setUnminimizedWindow: (processId, dimensions) => {
    set((state) => setPropertyHelper(state, processId, 'unMinimizedWindow', dimensions));
  },
  getUnminimizedWindow: (processId) => getPropertyHelper(get(), processId, 'unMinimizedWindow'),

  getTitle: (processId) => getPropertyHelper(get(), processId, 'title'),

  reset: (directory) => {
    set({
      processDirectory: directory ?? processDirectory,
      openedProcesses: {},
    });
  },
}));

export default useProcessesStore;
