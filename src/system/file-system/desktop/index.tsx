import React from 'react';

import UseKeyPresses from '@/hooks/use-key-presses';
import FileExplorerIcon from '@/system/file-system/components/icon';
import SelectRect from '@/system/file-system/components/select-rect';
import UseDragSelect from '@/system/file-system/hooks/use-drag-select';
import useFileSystemStore from '@/system/file-system/store';
import { getEventTargetDataId } from '@/utils';

const Desktop = (): React.ReactElement => {
  const desktop = useFileSystemStore((state) => state.getDirectory('desktop'));
  const clearIconSelection = useFileSystemStore((state) => state.clearIconSelection);
  const blurWindowFocus = useFileSystemStore((state) => state.blurWindowFocus);
  const setContextState = useFileSystemStore((state) => state.setContextState);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const { selectRectVisible, selectRectPosition, selectRectSize, handleMouseDown } =
    UseDragSelect();

  const { isShiftPressed } = UseKeyPresses();

  if (!desktop) {
    return <></>;
  }

  return (
    <>
      <SelectRect
        isVisible={selectRectVisible}
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
            if (!isShiftPressed) {
              clearIconSelection('desktop');
            }
            blurWindowFocus(true);
            clearContextState();
          }
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {desktop.map((item) => {
          return (
            <FileExplorerIcon
              key={item.id}
              entry={item}
              selectRectVisible={selectRectVisible}
              selectRect={{ position: selectRectPosition, size: selectRectSize }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Desktop;
