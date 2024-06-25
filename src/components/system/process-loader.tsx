import { Suspense } from 'react';

import Window from '@/components/system/window';
import useProcessesStore from '@/stores/use-processes-store';

const ProcessLoader = (): React.ReactElement => {
  const processes = useProcessesStore((state) => state.openedProcesses);

  const loading = <div>Loading...</div>;
  const components = [...processes].map(([key, { Component, hasWindow, path }]) => {
    if (hasWindow) {
      return (
        <Window key={key} path={path}>
          <Suspense fallback={loading}>
            <Component rootPath={path} />
          </Suspense>
        </Window>
      );
    }
    return (
      <Suspense fallback={loading} key={key}>
        <Component rootPath={path} />
      </Suspense>
    );
  });

  return <>{components}</>;
};
export default ProcessLoader;
