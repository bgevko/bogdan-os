import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import DropGuide from '@/components/system/fs/drop-guide';
import { iconDirectory } from '@/globals/process-directory';
import useEvent from '@/hooks/use-events';
import useSelect from '@/hooks/use-fs/use-select';
import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import { type TransferData } from '@/types/file-system';
import cn, { parseFileInfo } from '@/utils/format';
import { indexToPosition, positionToIndex } from '@/utils/grid';

export const ICON_SIZE = 70;

const FileSystemIconComponent = ({ path }: { path: string }): ReactElement => {
  const parentPath = path.split('/').slice(0, -1).join('/');
  const processDirectory = useProcessesStore((state) => state.processDirectory);
  const gridIndex = useFsStore((state) => state.getGridIndex(path));
  const getGridIndex = useFsStore((state) => state.getGridIndex);
  const gridState = useFsStore((state) => state.getGridStack(parentPath));
  const { registerEvents } = useEvent();

  const {
    handleFocusSelect,
    handleMouseDownSelect,
    handleMouseUpSelect,
    handleToggleSelect,
    isSelected,
    isUsingSelectRect,
    allSelected,
  } = useSelect(path);

  const { fileName, fileExt } = parseFileInfo(path);
  const iconSrc = `${iconDirectory}${processDirectory[fileExt].icon}.png`;

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

  const handleDrag = useCallback(
    (event: React.DragEvent) => {
      const mouseGridIndex = positionToIndex(event.clientX, event.clientY, gridState.itemsPerLine, {
        multiplier: 100,
      });
      setGuideIndex(mouseGridIndex);
    },
    [gridState.itemsPerLine],
  );

  const handleDragEnd = useCallback(() => {
    if (dropGuideVisible) setDropGuideVisible(false);
  }, [dropGuideVisible]);

  useEffect(() => {
    registerEvents('mouseup', [handleDragEnd]);
  }, [registerEvents, handleDragEnd]);

  return (
    <>
      <li
        className="flex items-center justify-center"
        style={{
          gridColumnStart: (indexToPosition(gridIndex, gridState.itemsPerLine).x + 1).toString(),
          gridRowStart: (indexToPosition(gridIndex, gridState.itemsPerLine).y + 1).toString(),
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
        >
          <img draggable="false" src={iconSrc} alt={fileName} width="48px" height="48px" />
          <span className="text-sm">{fileName}</span>
          {/* <span className={cn('text-sm', selected ? 'bg-surface text-onSurface' : '')}>{fileName}</span> */}
        </button>
      </li>
      <DropGuide
        isVisible={dropGuideVisible}
        index={guideIndex}
        offsets={indexOffsets}
        itemsPerLine={gridState.itemsPerLine}
      />
    </>
  );
};

const FileSystemIcon = React.memo(FileSystemIconComponent);
export default FileSystemIcon;
