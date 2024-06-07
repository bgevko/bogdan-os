import { create } from 'zustand';

import { processDirectory } from '@/globals/process-directory';
import { type Processes, Process } from '@/types/processes';

interface ProcessStore {
  processDirectory: Processes;
  setProcessDirectory: (newProcesses: Processes) => void;
  openedProcesses: Processes;
  open: (processId: string | string[]) => void;
  close: (processId: string | string[]) => void;
  setProperty: <K extends keyof Process>(processId: string, property: K, value: Process[K]) => void;
  getProperty: <K extends keyof Process>(processId: string, property: K) => Process[K];
  reset: () => void;
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

      const newOpened: Processes = {};
      for (const key of Object.keys(state.openedProcesses)) {
        if (!Object.prototype.hasOwnProperty.call(toClose, key)) {
          newOpened[key] = state.openedProcesses[key];
        }
      }

      return {
        openedProcesses: newOpened,
      };
    });
  },
  setProperty: (processId, property, value) => {
    set((state) => setPropertyHelper(state, processId, property, value));
  },
  getProperty: (processId, property) => getPropertyHelper(get(), processId, property),
  reset: () => {
    set({
      processDirectory,
      openedProcesses: {},
    });
  },
}));

export default useProcessesStore;
