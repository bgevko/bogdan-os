import { create } from 'zustand';

import { processDirectory } from '@/globals/process-directory';
import createSelectors from '@/stores/create-selectors';
import { type Processes } from '@/types/processes';

interface ProcessStore {
  processDirectory: Processes;
  setProcessDirectory: (newProcesses: Processes) => void;
  getProcesses: (requested: string[]) => Processes;
  openedProcesses: string[];
  openProcess: (processId: string) => void;
  closeProcess: (processId: string) => void;
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
  openProcess: (processId: string) => {
    set((state) => {
      if (!state.openedProcesses.includes(processId)) {
        if (!Object.keys(state.processDirectory).includes(processId)) {
          throw new Error(`Attempted to open process with an unknown id: ${processId}.`);
        }
        return { openedProcesses: [...state.openedProcesses, processId] };
      }
      return state;
    });
  },
  closeProcess: (processId: string) => {
    set((state) => {
      if (state.openedProcesses.includes(processId)) {
        return { openedProcesses: state.openedProcesses.filter((id) => id !== processId) };
      }
      return state;
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
