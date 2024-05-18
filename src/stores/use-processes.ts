import { create } from 'zustand';

import { type Processes } from '@/types/processes';

interface ProcessStore {
  processes: Processes;
  setProcesses: (newProcesses: Processes) => void;
}

const useProcessStore = create<ProcessStore>((set) => ({
  processes: {},
  setProcesses: (newProcesses: Processes) => {
    set({ processes: newProcesses });
  },
}));

const selectProcesses = (state: ProcessStore, requestedProcesses: string[]): Processes => {
  const availableProcesses = state.processes;

  const selectedProcesses: Processes = {};
  for (const id of requestedProcesses) {
    selectedProcesses[id] = availableProcesses[id];
  }
  return selectedProcesses;
};

const useSelectProcesses = (requestedProcesses: string[]): Processes =>
  useProcessStore((state) => selectProcesses(state, requestedProcesses));

export { useProcessStore, useSelectProcesses };

// Reference example, for later
// export const useProcessStore = create<Processes>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));
