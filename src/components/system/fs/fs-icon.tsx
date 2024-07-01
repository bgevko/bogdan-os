import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import DropGuide from '@/components/system/fs/drop-guide';
import UseEvents from '@/hooks/use-events';
import useSelect from '@/hooks/use-fs/use-select';
import useGridStore from '@/stores/use-grid-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { ICON_SIZE } from '@/themes';
import { type TransferData } from '@/types';
import cn from '@/utils/format';
import { parseFileName } from '@/utils/fs';
import { indexToPosition, positionToIndex } from '@/utils/grid';

const FileSystemIconComponent = ({ path, icon }: { path: string; icon: string }): ReactElement => {
  const open = useProcessesStore((state) => state.open);
  const parentPath = path.split('/').slice(0, -1).join('/');
  const gridIndex = useGridStore((state) => state.getIndex(path));
  const getGridIndex = useGridStore((state) => state.getIndex);
  const gridItemsPerLine = useGridStore((state) => state.getGrid(parentPath).lineSize);
  const getWindow = useProcessesStore((state) => state.getWindow);
  const selectContext = useSelectStore((state) => state.selectContext);

  const context = parentPath === '/Desktop' ? 'desktop' : 'folder';
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
  const [gridPosition, setGridPosition] = useState({ x: 0, y: 0 });

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
    if (context === 'desktop') {
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
  }, [context, parentPath, getWindow]);

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

  const handleDragEnd = useCallback(() => {
    if (dropGuideVisible) setDropGuideVisible(false);
  }, [dropGuideVisible]);

  useEffect(() => {
    registerEvents('mouseup', [handleDragEnd]);
  }, [registerEvents, handleDragEnd]);

  useEffect(() => {
    const { x, y } = indexToPosition(gridIndex, gridItemsPerLine);
    setGridPosition({ x: x + 1, y: y + 1 });
  }, [gridIndex, gridItemsPerLine]);

  return (
    <>
      <li
        className="flex items-center justify-center"
        style={{
          gridColumnStart: gridPosition.x.toString(),
          gridRowStart: gridPosition.y.toString(),
        }}
      >
        <button
          type="button"
          draggable
          className={cn(
            'background-transparent cursor-default flex flex-col items-center focus:outline-none',
            isSelected && 'bg-accent-50/20',
            !isSelected && !isUsingSelectRect && 'hover:bg-accent-50/10',
          )}
          style={{
            width: `${ICON_SIZE.toString()}px`,
            height: `${ICON_SIZE.toString()}px`,
          }}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseDown={(e) => {
            e.stopPropagation();
            handleToggleSelect();
            handleMouseDownSelect();
          }}
          onFocus={() => {
            handleFocusSelect();
          }}
          onMouseUp={() => {
            handleMouseUpSelect();
          }}
          onMouseLeave={() => {
            setDropGuideVisible(false);
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
        isVisible={dropGuideVisible}
        index={guideIndex}
        offsets={indexOffsets}
        itemsPerLine={gridItemsPerLine}
        padding={selectContext === 'desktop' ? 16 : 16}
      />
    </>
  );
};

const FileSystemIcon = React.memo(FileSystemIconComponent);
export default FileSystemIcon;
