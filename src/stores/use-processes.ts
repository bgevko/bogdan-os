import { create } from 'zustand';

import { processDirectory } from '@/globals/process-directory';
import { type Processes } from '@/types/processes';

interface ProcessStore {
  processes: Processes;
  setProcesses: (newProcesses: Processes) => void;
}

const useProcessStore = create<ProcessStore>((set) => ({
  processes: processDirectory,
  setProcesses: (newProcesses: Processes) => {
    set({ processes: newProcesses });
  },
}));

const selectProcesses = (state: ProcessStore, requestedProcesses: string[]): Processes => {
  const availableProcesses = state.processes;

  const selectedProcesses: Processes = {};
  for (const id of requestedProcesses) {
    if (!Object.keys(availableProcesses).includes(id)) {
      throw new Error(`Process with id ${id} not found`);
    }
    selectedProcesses[id] = availableProcesses[id];
  }
  return selectedProcesses;
};

const useSelectProcesses = (requestedProcesses: string[]): { select: () => Processes } => {
  const store = useProcessStore();
  return {
    select: () => selectProcesses(store, requestedProcesses),
  };
};
export { useProcessStore, useSelectProcesses };

// Reference example, for later
// export const useProcessStore = create<Processes>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));
