/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import useFileSystemStore from '@/system/file-system/store';
import Clock from '@/system/taskbar/components/clock';
import TaskbarEntry from '@/system/taskbar/components/taskbar-entry';
import { TASKBAR_HEIGHT } from '@/themes';
import { getEventTargetDataId } from '@/utils';

const Taskbar = (): JSX.Element => {
  const entries = useFileSystemStore((state) => state.getOpenedEntries());
  const getEntry = useFileSystemStore((state) => state.getEntry);
  const blurWindowFocus = useFileSystemStore((state) => state.blurWindowFocus);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const taskbarColor = '#FFAFAF';
  return (
    <footer
      data-id="taskbar"
      className="absolute inset-x-0 bottom-0 z-50 w-dvw"
      style={{ top: `calc(100% - ${TASKBAR_HEIGHT.toString()}px)` }}
      onMouseLeave={(event: React.MouseEvent) => {
        event.stopPropagation();
      }}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        if (getEventTargetDataId(event) === 'taskbar') {
          clearContextState();
        }
      }}
      onClick={() => {
        blurWindowFocus(true);
        clearContextState();
      }}
    >
      <nav
        style={{ backgroundColor: taskbarColor }}
        className=" absolute bottom-0 flex h-10 w-full gap-1 px-4 py-1"
      >
        <ul className="flex size-full items-center justify-start gap-1">
          {entries.map((entryId) => {
            const entry = getEntry({ id: entryId })!;
            return <TaskbarEntry key={entry.id} entry={entry} />;
          })}
        </ul>
        <Clock />
      </nav>
    </footer>
  );
};

export default Taskbar;
