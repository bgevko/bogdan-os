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
  setWindowSize: (processId: string, size: Size) => void;
  setWindowMaximized: (processId: string, maximized: boolean) => void;
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
}));

export default useProcessesStore;
