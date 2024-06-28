import { Suspense } from 'react';

import Window from '@/components/system/window';
import { FileExplorer } from '@/constants';
import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import { parseFileComponent } from '@/utils/fs';

const ProcessLoader = (): React.ReactElement => {
  const processes = useProcessesStore((state) => state.openedProcesses);
  const isDir = useFsStore((state) => state.isDir);

  const loading = <div>Loading...</div>;
  const components = [...processes].map(([key, { hasWindow, path }]) => {
    const Component = isDir(path) ? FileExplorer : parseFileComponent(path);

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
