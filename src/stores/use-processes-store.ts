import { create } from 'zustand';

import { processDirectory } from '@/globals/process-directory';
import { type Processes } from '@/types/processes';

interface ProcessStore {
  processDirectory: Processes;
  setProcessDirectory: (newProcesses: Processes) => void;
  openedProcesses: Processes;
  open: (processId: string | string[]) => void;
  close: (processId: string | string[]) => void;
  reset: () => void;
}

const useProcessesStore = create<ProcessStore>((set) => ({
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
        toClose[id] = state.processDirectory[id];
      }
      const newOpened: Processes = {};
      for (const key of Object.keys(state.openedProcesses)) {
        if (!Object.prototype.hasOwnProperty.call(toClose, key)) {
          newOpened[key] = state.openedProcesses[key];
        }
      }
      return { openedProcesses: newOpened };
    });
  },

  reset: () => {
    set({
      processDirectory,
      openedProcesses: {},
    });
  },
}));

export default useProcessesStore;
