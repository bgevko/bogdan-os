import React from 'react';

import FileExplorerIcon from '@/system/file-system/components/icon';
import SelectRect from '@/system/file-system/components/select-rect';
import UseDragSelect from '@/system/file-system/hooks/use-drag-select';
import UseKeyPresses from '@/system/file-system/hooks/use-key-presses';
import useFileSystemStore from '@/system/file-system/store';
import { getEventTargetDataId } from '@/system/file-system/utils';

const Desktop = (): React.ReactElement => {
  const desktop = useFileSystemStore((state) => state.getDirectory('desktop'));
  const clearIconSelection = useFileSystemStore((state) => state.clearIconSelection);
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
        data-id="desktop"
        onContextMenu={(event) => {
          event.preventDefault();
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
          if (getEventTargetDataId(event) === 'desktop') {
            handleMouseDown(event);
            if (!isShiftPressed) {
              clearIconSelection('desktop');
            }
          }
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="relative flex size-full overflow-hidden p-4"
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
