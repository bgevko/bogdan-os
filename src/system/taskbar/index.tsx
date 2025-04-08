/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import useFileSystemStore from '@/system/file-system/store';
import Clock from '@/system/taskbar/components/clock';
import TaskbarEntry from '@/system/taskbar/components/taskbar-entry';
import { TASKBAR_HEIGHT } from '@/themes';
import { getEventTargetDataId } from '@/utils';

const Taskbar = (): React.JSX.Element => {
  const entries = useFileSystemStore((state) => state.getOpenedEntries());
  const getEntry = useFileSystemStore((state) => state.getEntry);
  const blurWindowFocus = useFileSystemStore((state) => state.blurWindowFocus);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const clearRenaming = useFileSystemStore((state) => state.clearRenaming);
  const clearKeyCommand = useFileSystemStore((state) => state.clearKeyCommand);
  const taskbarColor = '#FFAFAF';
  return (
    <footer
      data-id="taskbar"
      className="w-dvw bg-red-500"
      style={{ height: TASKBAR_HEIGHT }}
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
          clearRenaming();
          clearKeyCommand();
        }
      }}
      onClick={() => {
        blurWindowFocus(true);
        clearContextState();
        clearRenaming();
        clearKeyCommand();
      }}
    >
      <nav style={{ backgroundColor: taskbarColor }} className="flex size-full gap-1 p-1 pl-8 pr-4">
        <ul className="flex size-full items-center justify-start gap-1">
          {entries.map((entryId) => {
            const entry = getEntry(entryId);
            if (entry) {
              return <TaskbarEntry key={entry.id} entry={entry} />;
            }
            return null;
          })}
        </ul>
        <Clock />
      </nav>
    </footer>
  );
};

export default Taskbar;
