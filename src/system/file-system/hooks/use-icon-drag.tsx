import { useCallback, useState } from 'react';

import useFileSystemStore, { FileSystemEntry, Position } from '@/system/file-system/store';
import { snapToTargetGrid } from '@/system/file-system/utils';

interface ReturnTypes {
  handleDragStart: (event: React.MouseEvent) => void;
  handleMouseMove: (event: MouseEvent) => void;
  handleMouseUp: (event: MouseEvent) => void;
}

const UseIconDrag = (entry: FileSystemEntry, dropTargetId: string): ReturnTypes => {
  const setIconPosition = useFileSystemStore((state) => state.setIconPosition);
  const getIconPosition = useFileSystemStore((state) => state.getIconPosition);
  const getAllSelectedIds = useFileSystemStore((state) => state.getAllSelectedIds);
  const setDisableSelect = useFileSystemStore((state) => state.setDisableSelect);
  const isIconDragging = useFileSystemStore((state) => state.getIsIconDragging);
  const setIsIconDragging = useFileSystemStore((state) => state.setIsIconDragging);
  const getWindowPosition = useFileSystemStore((state) => state.getWindowPosition);
  const getWindowSize = useFileSystemStore((state) => state.getWindowSize);
  const setDropTargetId = useFileSystemStore((state) => state.setDropTargetId);

  // Drag initiates on a single icon, however, we need to move all selected
  // icons. We'll do this by storing the starting position of each selected
  // icon in id: position key-value pairs.
  const [startingPositions, setStartingPositions] = useState<Record<string, Position>>({});

  /*
   ********************************
   *          Drag Start          *
   ********************************
   */
  const handleDragStart = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      const selected = getAllSelectedIds();
      const positions: Record<string, Position> = {};
      for (const id of selected) {
        const pos = getIconPosition(id)!;
        const startPos = {
          x: event.clientX - pos.x,
          y: event.clientY - pos.y,
        };
        positions[id] = startPos;
        setIsIconDragging(id, true);
      }
      setDisableSelect(true);
      setStartingPositions(positions);
      setDropTargetId(entry.parentId ?? 'desktop');
    },
    [
      getIconPosition,
      getAllSelectedIds,
      setDisableSelect,
      setIsIconDragging,
      entry.parentId,
      setDropTargetId,
    ],
  );

  /*
   ********************************
   *           Drag End           *
   ********************************
   */
  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return;
      setIsIconDragging(entry.id, false);
      for (const id of Object.keys(startingPositions)) {
        setIsIconDragging(id, false);
        const pos = getIconPosition(id)!;
        const parentPosition = getWindowPosition(entry.parentId!);
        const parentSize = getWindowSize(entry.parentId!);
        let targetPosition = parentPosition;
        let targetSize = parentSize;
        if (dropTargetId !== entry.parentId) {
          targetPosition = getWindowPosition(dropTargetId);
          targetSize = getWindowSize(dropTargetId);
        }
        const newPosition = snapToTargetGrid({
          sourceId: entry.parentId!,
          targetId: dropTargetId,
          position: pos,
          sourceOrigin: parentPosition,
          targetOrigin: targetPosition,
          targetSize,
        });
        setIconPosition(id, newPosition);
      }
      setStartingPositions({});
      setDisableSelect(false);
    },
    [
      entry.id,
      entry.parentId,
      getWindowSize,
      getWindowPosition,
      setIsIconDragging,
      setDisableSelect,
      getIconPosition,
      setIconPosition,
      startingPositions,
      dropTargetId,
    ],
  );

  /*
   ********************************
   *        While Dragging        *
   ********************************
   */
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isIconDragging(entry.id)) {
        for (const [id, startPos] of Object.entries(startingPositions)) {
          const deltaX = event.clientX - startPos.x;
          const deltaY = event.clientY - startPos.y;
          const newPosition = {
            x: deltaX,
            y: deltaY,
          };
          setIconPosition(id, newPosition);
        }
      }
    },
    [entry.id, isIconDragging, startingPositions, setIconPosition],
  );

  return { handleDragStart, handleMouseMove, handleMouseUp };
};

export default UseIconDrag;
