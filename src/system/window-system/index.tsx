import useFileSystemStore from '@/system/file-system/store';
import Window from '@/system/window-system/components/window';

const WindowSystem = (): React.ReactElement => {
  const entries = useFileSystemStore((state) => state.getOpenedEntries());
  const getEntry = useFileSystemStore((state) => state.getEntry);

  return (
    <>
      {entries.map((entryId) => {
        const entry = getEntry(entryId);
        if (!entry) {
          return null;
        }
        return <Window key={entry.id} entry={entry} />;
      })}
    </>
  );
};

export default WindowSystem;
