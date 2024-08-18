import React, { ReactElement, useMemo } from 'react';

import useDrag from '@/hooks/system/use-fs/use-drag';
import useSelect from '@/hooks/system/use-fs/use-select';
import useGridStore from '@/stores/use-grid-store';
import useMenuStore from '@/stores/use-menu-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import { ICON_SIZE } from '@/themes';
import cn from '@/utils/format';
import { parseFileName, parseParentPath } from '@/utils/fs';
import { indexToPosition } from '@/utils/grid';

const FileSystemIcon = ({ path, icon }: { path: string; icon: string }): ReactElement => {
  const parentPath = parseParentPath(path);
  const open = useProcessesStore((state) => state.open);
  const gridIndex = useGridStore((state) => state.getIndex(path));
  const lineSize = useGridStore((state) => state.getGrid(parentPath).lineSize);
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const setMenuContext = useMenuStore((state) => state.setMenuContext);
  const setMenuTargetPath = useMenuStore((state) => state.setTargetPath);

  const myContext = parentPath === '/Desktop' ? 'desktop' : 'folder';

  const fileName = parseFileName(path);

  const {
    handleFocusSelect,
    handleMouseDownSelect,
    handleMouseUpSelect,
    handleToggleSelect,
    isSelected,
    isUsingSelectRect,
  } = useSelect(path);

  const { handleDragStart, handleDrag, handleDrop, handleDragEnd } = useDrag(path);

  const gridPos = useMemo(() => {
    const { x, y } = indexToPosition(gridIndex, lineSize);
    return { x: x + 1, y: y + 1 };
  }, [gridIndex, lineSize]);

  return (
    <>
      <li
        data-id="file-icon"
        className="flex items-center justify-center"
        style={{
          gridColumnStart: gridPos.x.toString(),
          gridRowStart: gridPos.y.toString(),
        }}
      >
        <button
          type="button"
          data-testid={parseFileName(path)}
          data-id="file-icon"
          draggable
          className={cn(
            'background-transparent cursor-default flex flex-col items-center focus:outline-none',
            isSelected && (myContext === 'desktop' ? 'bg-accent-50/20' : 'bg-primary-300/80'),
            !isSelected &&
              !isUsingSelectRect &&
              (myContext === 'desktop' ? 'hover:bg-accent-50/10' : 'hover:bg-primary-300/40'),
          )}
          style={{
            width: `${ICON_SIZE.toString()}px`,
            height: `${ICON_SIZE.toString()}px`,
          }}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
          onMouseDown={(event: React.MouseEvent) => {
            event.stopPropagation();
            handleToggleSelect();
            handleMouseDownSelect(event);
          }}
          onFocus={() => {
            handleFocusSelect();
          }}
          onMouseUp={() => {
            handleMouseUpSelect();
          }}
          onMouseLeave={(event: React.MouseEvent) => {
            event.stopPropagation();
            popMouseContext();
          }}
          onMouseEnter={(event: React.MouseEvent) => {
            event.stopPropagation();
            appendMouseContext('file-icon');
          }}
          onDoubleClickCapture={() => {
            open(path);
          }}
          onContextMenu={(event: React.MouseEvent) => {
            event.preventDefault();
            setMenuContext('file-icon');
            setMenuTargetPath(path);
          }}
        >
          <img
            draggable="false"
            src={icon}
            alt={fileName}
            width="48px"
            height="48px"
            data-id="file-icon"
          />
          <span className="text-sm">{fileName}</span>
        </button>
      </li>
    </>
  );
};

export default FileSystemIcon;
