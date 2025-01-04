import { Suspense } from 'react';

import { getComponent } from '@/defaults';
import useFileSystemStore from '@/system/file-system/store';
import Window from '@/system/window-system/components/window';

const WindowSystem = (): React.ReactElement => {
  const entries = useFileSystemStore((state) => state.getOpenedEntries());
  const getEntry = useFileSystemStore((state) => state.getEntry);
  const loading = <div className="flex size-full items-center justify-center">Loading...</div>;

  const components = entries.map((entryId) => {
    const entry = getEntry({ id: entryId });
    const Component = getComponent(entry?.id ?? '', entry?.type ?? '');
    if (!Component || !entry) {
      return null;
    }
    return (
      <Window key={entry.id} entry={entry}>
        <Suspense fallback={loading} key={entry.id}>
          <Component entry={entry} />
        </Suspense>
      </Window>
    );
  });
  return <>{components}</>;
};

export default WindowSystem;
