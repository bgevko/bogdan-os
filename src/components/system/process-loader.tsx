import { Suspense, useEffect, useState } from 'react';

import Window from '@/components/system/window';
import { desktopProcesses } from '@/globals/process-directory';
import useProcessesStore from '@/stores/use-processes-store';
import { Processes } from '@/types/processes';

const ProcessLoader = (): React.ReactElement => {
  const [processes, setProcesses] = useState<Processes>({});
  const store = useProcessesStore();

  useEffect(() => {
    const fetchedProcesses = store.getProcesses(desktopProcesses);
    setProcesses(fetchedProcesses);
  }, [store]);

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
