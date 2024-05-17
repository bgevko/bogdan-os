import { Suspense } from 'react';

import Window from '@/components/system/window';
import useProcessStore from '@/stores/use-processes-store';

const ProcessLoader = (): React.ReactElement => {
  const { processes } = useProcessStore((state) => state);
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
