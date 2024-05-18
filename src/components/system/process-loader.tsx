import { Suspense } from 'react';

import Window from '@/components/system/window';
import { startupProcesses } from '@/globals/process-directory';
import { useProcessStore, useSelectProcesses } from '@/stores/use-processes';

const ProcessLoader = (): React.ReactElement => {
  const { processes } = useProcessStore();
  const { select } = useSelectProcesses(startupProcesses);
  select();

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
