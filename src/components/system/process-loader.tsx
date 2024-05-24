import { Suspense } from 'react';

import Window from '@/components/system/window';
import useProcessesStore from '@/stores/use-processes-store';

const ProcessLoader = (): React.ReactElement => {
  const processes = useProcessesStore((state) => state.openedProcesses);

  const loading = <div>Loading...</div>;
  const components = Object.entries(processes).map(
    ([key, { title, minSize, Component, hasWindow }]) =>
      hasWindow ? (
        <Window key={key} title={title} minSize={minSize}>
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
