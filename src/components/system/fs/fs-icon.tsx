/* eslint-disable no-continue */
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

import DropGuide from '@/components/system/fs/drop-guide';
import UseEvents from '@/hooks/use-events';
import useSelect from '@/hooks/use-fs/use-select';
import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { ICON_SIZE } from '@/themes';
import { type TransferData } from '@/types';
import cn from '@/utils/format';
import { parseFileName, parseFullFileName, parseParentPath } from '@/utils/fs';
import { indexToPosition, positionToIndex } from '@/utils/grid';

const FileSystemIconComponent = ({ path, icon }: { path: string; icon: string }): ReactElement => {
  const parentPath = parseParentPath(path);
  const open = useProcessesStore((state) => state.open);
  const gridIndex = useGridStore((state) => state.getIndex(path));
  const getGridIndex = useGridStore((state) => state.getIndex);
  const gridItemsPerLine = useGridStore((state) => state.getGrid(parentPath).lineSize);
  const getWindow = useProcessesStore((state) => state.getWindow);
  const selectRectContext = useSelectStore((state) => state.selectRectContext);
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const setDragContext = useMouseStore((state) => state.setDragContext);
  const isDir = useFsStore((state) => state.isDir);
  const mv = useFsStore((state) => state.mv);

  const myContext = parentPath === '/Desktop' ? 'desktop' : 'folder';
  const dropContext = useSelectStore((state) => state.dropContext);
  const { registerEvents } = UseEvents();
  const {
    handleFocusSelect,
    handleMouseDownSelect,
    handleMouseUpSelect,
    handleToggleSelect,
    isSelected,
    isUsingSelectRect,
    allSelected,
  } = useSelect(path);

  const fileName = parseFileName(path);

  const [dropGuideVisible, setDropGuideVisible] = useState(false);
  const [guideIndex, setGuideIndex] = useState(0);
  const [indexOffsets, setIndexOffsets] = useState<number[]>([]);

  const handleDragStart = useCallback(
    (event: React.DragEvent) => {
      const transferData: TransferData[] = [];
      const offsets = [];
      for (const selectedPath of allSelected) {
        const pathGridIndex = getGridIndex(selectedPath);

        // Create transfer object
        const transferObj: Partial<TransferData> = {};
        transferObj.path = selectedPath;
        transferObj.startingGridIndex = pathGridIndex;
        transferObj.isHead = selectedPath === path;
        transferData.push(transferObj as TransferData);

        // Calculate index offsets
        const indexOffset = pathGridIndex - gridIndex;
        offsets.push(indexOffset);
      }
      setIndexOffsets(offsets);
      event.dataTransfer.setData('text/plain', JSON.stringify(transferData));

      // set visible after a short delay
      setTimeout(() => {
        setDropGuideVisible(true);
      }, 100);
    },
    [gridIndex, allSelected, getGridIndex, path],
  );

  const getFolderPosition = useCallback(() => {
    if (myContext === 'desktop' || dropContext === 'desktop') {
      return {
        folderX: 0,
        folderY: 0,
      };
    }
    const folder = getWindow(parentPath);
    return {
      folderX: folder.position.x,
      folderY: folder.position.y,
    };
  }, [myContext, dropContext, parentPath, getWindow]);

  const handleDrag = useCallback(
    (event: React.DragEvent) => {
      const { folderX, folderY } = getFolderPosition();
      const mouseGridIndex = positionToIndex(
        event.clientX - folderX,
        event.clientY - folderY,
        gridItemsPerLine,
        {
          multiplier: 100,
        },
      );
      setGuideIndex(mouseGridIndex);
    },
    [gridItemsPerLine, getFolderPosition],
  );

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const transferData: TransferData[] = JSON.parse(
        event.dataTransfer.getData('text/plain'),
      ) as TransferData[];
      for (const element of transferData) {
        const draggedPath = element.path;
        if (draggedPath === path || !isDir(path)) continue;
        try {
          mv(draggedPath, `${path}/${parseFullFileName(draggedPath)}`);
        } catch {
          // Pass
        }
      }
    },
    [mv, path, isDir],
  );

  const handleDragEnd = useCallback(() => {
    if (dropGuideVisible) setDropGuideVisible(false);
  }, [dropGuideVisible]);

  useEffect(() => {
    registerEvents('mouseup', [handleDragEnd]);
  }, [registerEvents, handleDragEnd]);

  const gridPos = useMemo(() => {
    const { x, y } = indexToPosition(gridIndex, gridItemsPerLine);
    return { x: x + 1, y: y + 1 };
  }, [gridIndex, gridItemsPerLine]);

  return (
    <>
      <li
        className="flex items-center justify-center"
        style={{
          gridColumnStart: gridPos.x.toString(),
          gridRowStart: gridPos.y.toString(),
        }}
      >
        <button
          type="button"
          draggable
          className={cn(
            'background-transparent cursor-default flex flex-col items-center focus:outline-none',
            isSelected && (myContext === 'desktop' ? 'bg-accent-50/20' : 'bg-primary-300/80'),
            // !isSelected && !isUsingSelectRect && 'hover:bg-accent-50/10',
            !isSelected &&
              !isUsingSelectRect &&
              (myContext === 'desktop' ? 'hover:bg-accent-50/10' : 'hover:bg-primary-300/40'),
          )}
          style={{
            width: `${ICON_SIZE.toString()}px`,
            height: `${ICON_SIZE.toString()}px`,
          }}
          onDragStart={handleDragStart}
          onDragEnter={(event: React.DragEvent) => {
            event.stopPropagation();
            setDragContext('file-icon');
          }}
          onDrag={handleDrag}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
          onMouseDown={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleToggleSelect();
            handleMouseDownSelect(e);
          }}
          onFocus={() => {
            handleFocusSelect();
          }}
          onMouseUp={() => {
            handleMouseUpSelect();
          }}
          onMouseLeave={(event: React.MouseEvent) => {
            event.stopPropagation();
            setDropGuideVisible(false);
            popMouseContext();
          }}
          onMouseEnter={(event: React.MouseEvent) => {
            event.stopPropagation();
            appendMouseContext('file-icon');
          }}
          onDoubleClickCapture={() => {
            open(path);
          }}
        >
          <img draggable="false" src={icon} alt={fileName} width="48px" height="48px" />
          <span className="text-sm">{fileName}</span>
          {/* <span className={cn('text-sm', selected ? 'bg-surface text-onSurface' : '')}>{fileName}</span> */}
        </button>
      </li>
      <DropGuide
        path={parentPath}
        context={myContext}
        isVisible={dropGuideVisible}
        mouseIndex={guideIndex}
        offsets={indexOffsets}
        itemsPerLine={gridItemsPerLine}
        padding={selectRectContext === 'desktop' ? 16 : 16}
      />
    </>
  );
};

const FileSystemIcon = React.memo(FileSystemIconComponent);
export default FileSystemIcon;
