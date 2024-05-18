import { Suspense, lazy } from 'react';

import Window from '@/components/system/window';
import { useProcessStore, useSelectProcesses } from '@/stores/use-processes';
import { type Processes } from '@/types/processes';

// Set all processes that can be loaded here
const allDefinedProcesses: Processes = {
  HelloWorld: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
  },
};

// Startup processes
const startupProcesses: string[] = ['HelloWorld'];

const ProcessLoader = (): React.ReactElement => {
  const { setProcesses } = useProcessStore((state) => state);
  const processes = useSelectProcesses(startupProcesses);

  // Load all processes into global state
  setProcesses(allDefinedProcesses);

  const loading = <div>Loading...</div>;
  const components = Object.entries(processes).map(([key, { Component, hasWindow }]) =>
    hasWindow ? (
      <Window key={key}>
        <Suspense fallback={loading}>
          <Component />
        </Suspense>
      </Window>
    ) : (
      <Suspense fallback={loading} key={key}>
        <Component />
      </Suspense>
    ),
  );

  return <>{components}</>;
};
export default ProcessLoader;
