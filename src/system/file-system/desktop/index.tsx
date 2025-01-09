import React from 'react';

import UseKeyPresses from '@/hooks/use-key-presses';
import FileExplorerIcon from '@/system/file-system/components/icon';
import SelectRect from '@/system/file-system/components/select-rect';
import UseDragSelect from '@/system/file-system/hooks/use-drag-select';
import useFileSystemStore from '@/system/file-system/store';
import { getEventTargetDataId } from '@/utils';

const Desktop = (): React.ReactElement => {
  const clearIconSelection = useFileSystemStore((state) => state.clearIconSelection);
  const blurWindowFocus = useFileSystemStore((state) => state.blurWindowFocus);
  const setContextState = useFileSystemStore((state) => state.setContextState);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const setDropTargetId = useFileSystemStore((state) => state.setDropTargetId);
  const clearRenaming = useFileSystemStore((state) => state.clearRenaming);
  const desktopChildren = useFileSystemStore((state) => state.getDirectory('desktop'));
  const desktopEntry = useFileSystemStore((state) => state.getEntry({ id: 'desktop' }));
  const dropTargetId = useFileSystemStore((state) => state.getDropTargetId());
  const isAnyIconDragging = useFileSystemStore((state) => state.getIsAnyIconDragging());
  const windowPosition = useFileSystemStore((state) => state.getWindowPosition('desktop'));
  const windowSize = useFileSystemStore((state) => state.getWindowSize('desktop'));

  const {
    selectRectPosition,
    selectRectSize,
    handleMouseDown,
    isSelecting: isSelectingOnDesktop,
  } = UseDragSelect(desktopEntry!);

  const { isShiftPressed } = UseKeyPresses();

  if (!desktopChildren) {
    return <></>;
  }

  return (
    <>
      <SelectRect
        isVisible={isSelectingOnDesktop}
        position={selectRectPosition}
        size={selectRectSize}
      />
      <div
        className="relative flex size-full overflow-hidden p-4"
        data-id="desktop"
        onContextMenu={(event) => {
          event.preventDefault();
          if (getEventTargetDataId(event) === 'desktop') {
            const clickPosition = { x: event.clientX, y: event.clientY };
            setContextState({
              id: 'desktop',
              category: 'directory',
              clickPosition,
            });
          }
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
          if (getEventTargetDataId(event) === 'desktop') {
            handleMouseDown(event);
            if (!isShiftPressed && event.button === 0) {
              clearIconSelection();
            }
            blurWindowFocus(true);
            clearContextState();
            clearRenaming();
          }
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
        onMouseEnter={() => {
          if (isAnyIconDragging) {
            setDropTargetId('desktop');
            blurWindowFocus(true);
          }
        }}
      >
        {desktopChildren.map((item) => {
          return (
            <FileExplorerIcon
              key={item.id}
              entry={item}
              selectRectVisible={isSelectingOnDesktop}
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

export default Desktop;
