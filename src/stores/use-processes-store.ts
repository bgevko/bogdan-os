import { lazy } from 'react';
import { create } from 'zustand';

import { type Processes } from '@/types/processes';

const processes: Processes = {
  HelloWorld: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
  },
};

interface ProcessStore {
  processes: Processes;
}

const useProcessStore = create<ProcessStore>(() => ({
  processes,
}));

export default useProcessStore;

// Reference example, for later
// export const useProcessStore = create<Processes>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));
