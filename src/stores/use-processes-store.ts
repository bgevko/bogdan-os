import { create } from 'zustand';

import { processDirectory } from '@/globals/process-directory';
import createSelectors from '@/stores/create-selectors';
import { type Processes } from '@/types/processes';

interface ProcessStore {
  processDirectory: Processes;
  setProcessDirectory: (newProcesses: Processes) => void;
  getProcesses: (requested: string[]) => Processes;
  openedProcesses: string[];
  open: (processId: string | string[]) => void;
  close: (processId: string | string[]) => void;
  reset: () => void;
}

const processesStore = create<ProcessStore>((set, get) => ({
  processDirectory,
  setProcessDirectory: (newDirectory: Processes) => {
    set({ processDirectory: newDirectory });
  },
  getProcesses: (requested: string[]): Processes => {
    const available = get().processDirectory;
    const selected: Processes = {};
    for (const id of requested) {
      if (!Object.keys(available).includes(id)) {
        throw new Error(`Attempted to select process with an unknown id: ${id}.`);
      }
      selected[id] = available[id];
    }
    return selected;
  },
  openedProcesses: [],
  open: (processId) => {
    const requested = Array.isArray(processId) ? processId : [processId];
    set((state) => {
      const available = Object.keys(state.processDirectory);
      const toOpen: string[] = [];
      for (const id of requested) {
        if (!available.includes(id)) {
          throw new Error(`Attempted to open process with an unknown id: ${id}.`);
        }
        if (!state.openedProcesses.includes(id)) {
          toOpen.push(id);
        }
      }
      return { openedProcesses: [...state.openedProcesses, ...toOpen] };
    });
  },
  close: (processId) => {
    const requested = Array.isArray(processId) ? processId : [processId];
    set((state) => {
      const available = Object.keys(state.processDirectory);
      const toClose: string[] = [];
      for (const id of requested) {
        if (!available.includes(id)) {
          throw new Error(`Attempted to close process with an unknown id: ${id}.`);
        }
        if (!state.openedProcesses.includes(id)) {
          throw new Error(`Attempted to close process that is not open: ${id}.`);
        }
        toClose.push(id);
      }
      return { openedProcesses: state.openedProcesses.filter((id) => !toClose.includes(id)) };
    });
  },

  reset: () => {
    set({
      processDirectory,
      openedProcesses: [],
    });
  },
}));

const useProcessesStore = createSelectors(processesStore);
export default useProcessesStore;

// Reference example, for later
// export const useProcessStore = create<Processes>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));
