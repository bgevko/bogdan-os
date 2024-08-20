/* eslint-disable no-continue */
import React, { useCallback, useEffect } from 'react';

import useDragStore from '@/stores/use-drag-store';
import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import { FileSystemContext, type TransferData } from '@/types';
import { parseParentPath, parseFullFileName } from '@/utils/fs';
import { positionToIndex } from '@/utils/grid';

interface ReturnTypes {
  handleDragStart: (event: React.DragEvent) => void;
  handleDrag: (event: React.DragEvent) => void;
  handleDrop: (event: React.DragEvent) => void;
  handleDragEnd: (event: React.DragEvent) => void;
}

const UseDrag = (path: string): ReturnTypes => {
  const parentPath = parseParentPath(path);
  const allSelected = useSelectStore((state) => state.allSelected);
  const getGridIndex = useGridStore((state) => state.getIndex);
  const gridIndex = useGridStore((state) => state.getIndex(path));
  const setGroupSpacingOffsets = useDragStore((state) => state.setGroupSpacingOffsets);
  const dragContext = useMouseStore((state) => state.dragContext);
  const setDragStartContext = useDragStore((state) => state.setDragStartContext);
  const getWindow = useProcessesStore((state) => state.getWindow);
  const setGuideIndex = useDragStore((state) => state.setGuideIndex);
  const setDragging = useDragStore((state) => state.setDragging);
  const setIsDragging = useDragStore((state) => state.setIsDragging);
  const isDir = useFsStore((state) => state.isDir);
  const mv = useFsStore((state) => state.mv);
  const lineSize = useGridStore((state) => state.getGrid(parentPath).lineSize);
  const dragoverPath = useDragStore((state) => state.dragoverPath);

  const componentContext: FileSystemContext = parentPath === '/Desktop' ? 'desktop' : 'folder';

  const handleDragStart = useCallback(
    (event: React.DragEvent) => {
      const transferData: TransferData[] = [];
      const offsets = [];
      const dragGroup = [];
      for (const selectedPath of allSelected) {
        const pathGridIndex = getGridIndex(selectedPath);

        // Set the dragging items
        if (selectedPath !== path) dragGroup.push(selectedPath);

        // Create transfer object
        const transferObj: Partial<TransferData> = {};
        transferObj.path = selectedPath;
        transferObj.isHead = selectedPath === path;
        transferObj.startingGridIndex = pathGridIndex;
        transferData.push(transferObj as TransferData);

        // Calculate spacing offsets
        const indexOffset = pathGridIndex - gridIndex;
        offsets.push(indexOffset);
      }

      // Last drag item is the current path
      dragGroup.push(path);
      setDragging(dragGroup);
      setDragStartContext(componentContext);

      // Slight timeout before setting is dragging to prevent minor render bugs
      setTimeout(() => {
        setIsDragging(true);
      }, 100);

      // Set the group spacing offsets
      setGroupSpacingOffsets(offsets);
      event.dataTransfer.setData('text/plain', JSON.stringify(transferData));
    },
    [
      setIsDragging,
      componentContext,
      gridIndex,
      allSelected,
      getGridIndex,
      path,
      setGroupSpacingOffsets,
      setDragging,
      setDragStartContext,
    ],
  );

  const getFolderPosition = useCallback(() => {
    // Desktop to folder case
    if (componentContext === 'desktop' && dragContext === 'window') {
      const dragoverFolder = getWindow(dragoverPath);
      return {
        folderX: dragoverFolder.position.x,
        folderY: dragoverFolder.position.y + WINDOW_HEADER_HEIGHT + 8,
      };
    }

    // Folder to folder case
    if (componentContext === 'folder' && dragContext === 'window') {
      const folder = getWindow(dragoverPath);
      return {
        folderX: folder.position.x,
        folderY: folder.position.y + WINDOW_HEADER_HEIGHT + 8,
      };
    }

    // Folder to desktop, or desktop to desktop case
    return {
      folderX: 0,
      folderY: 0,
    };
  }, [componentContext, dragoverPath, dragContext, getWindow]);

  const handleDrag = useCallback(
    (event: React.DragEvent) => {
      const { folderX, folderY } = getFolderPosition();
      const mouseGridIndex = positionToIndex(
        event.clientX - folderX,
        event.clientY - folderY,
        lineSize,
        {
          multiplier: 100,
        },
      );
      setGuideIndex(mouseGridIndex);
    },
    [lineSize, getFolderPosition, setGuideIndex],
  );

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      setIsDragging(false);
      event.preventDefault();
      const transferData: TransferData[] = JSON.parse(
        event.dataTransfer.getData('text/plain'),
      ) as TransferData[];
      const headElement = transferData.find((element) => element.isHead) ?? transferData[0];
      if (headElement.path === path) return;
      event.stopPropagation();
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
    [mv, path, isDir, setIsDragging],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);

  useEffect(() => {
    document.addEventListener('mouseup', handleDragEnd);
    return () => {
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [handleDragEnd]);

  return {
    handleDragStart,
    handleDrag,
    handleDrop,
    handleDragEnd,
  };
};

export default UseDrag;
