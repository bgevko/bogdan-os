import React from 'react';

import UseKeyPresses from '@/hooks/use-key-presses';
import FileExplorerIcon from '@/system/file-system/components/icon';
import SelectRect from '@/system/file-system/components/select-rect';
import UseDragSelect from '@/system/file-system/hooks/use-drag-select';
import useFileSystemStore, { AppComponent } from '@/system/file-system/store';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import { getEventTargetDataId } from '@/utils';

const Directory = ({ entry }: AppComponent): React.ReactElement => {
  const directory = useFileSystemStore((state) => state.getDirectory(entry?.id ?? ''));
  const clearIconSelection = useFileSystemStore((state) => state.clearIconSelection);
  const pushFocus = useFileSystemStore((state) => state.pushFocus);
  const setContextState = useFileSystemStore((state) => state.setContextState);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const getWindowState = useFileSystemStore((state) => state.getWindowState);
  const clearRenaming = useFileSystemStore((state) => state.clearRenaming);
  const dropTargetId = useFileSystemStore((state) => state.getDropTargetId());
  const isAnyIconDragging = useFileSystemStore((state) => state.getIsAnyIconDragging());
  const windowPosition = useFileSystemStore((state) => state.getWindowPosition(entry?.id ?? ''));
  const windowSize = useFileSystemStore((state) => state.getWindowSize(entry?.id ?? ''));

  // TODO: Hover focus

  const {
    selectRectPosition,
    selectRectSize,
    handleMouseDown,
    isSelecting: isSelectingInDirectory,
  } = UseDragSelect(entry);

  const { isShiftPressed } = UseKeyPresses();

  if (!directory || !entry) {
    return <></>;
  }
  return (
    <>
      <SelectRect
        isVisible={isSelectingInDirectory}
        position={selectRectPosition}
        size={selectRectSize}
      />
      <div
        className="relative flex size-full p-4"
        style={{
          transformStyle: 'preserve-3d',
        }}
        data-id="directory"
        onContextMenu={(event) => {
          event.preventDefault();
          if (getEventTargetDataId(event) === 'directory') {
            const clickPosition = { x: event.clientX, y: event.clientY };
            setContextState({
              id: entry.id,
              category: 'directory',
              clickPosition,
            });
          }
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
          if (getEventTargetDataId(event) === 'directory') {
            if (getWindowState(entry.id) === 'maximized') {
              handleMouseDown(event);
            } else {
              handleMouseDown(event, {
                x: windowPosition.x,
                y: windowPosition.y + WINDOW_HEADER_HEIGHT,
              });
            }
            if (!isShiftPressed && event.button === 0) {
              clearIconSelection();
            }
            pushFocus(entry.id);
            clearContextState();
            clearRenaming();
          }
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {directory.map((item) => {
          return (
            <FileExplorerIcon
              key={item.id}
              entry={item}
              selectRectVisible={isSelectingInDirectory}
              selectRect={{ position: selectRectPosition, size: selectRectSize }}
              dropTargetId={dropTargetId}
              isAnyIconDragging={isAnyIconDragging}
              parentPosition={windowPosition}
              parentSize={windowSize}
            />
          );
        })}
      </div>
    </>
  );
};

export default Directory;
