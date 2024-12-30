import { useCallback, useState } from 'react';

import { type FileSystemEntry } from '@/system/file-system/store';
import useFileSystemStore from '@/system/file-system/store';
import { roundPosition } from '@/system/file-system/utils';

interface ReturnTypes {
  handleDragStart: (event: React.MouseEvent) => void;
  handleMouseMove: (event: MouseEvent) => void;
  handleMouseUp: () => void;
}

const UseIconDrag = (entry: FileSystemEntry): ReturnTypes => {
  const setIconPosition = useFileSystemStore((state) => state.setIconPosition);
  const getIconPosition = useFileSystemStore((state) => state.getIconPosition);
  const getAllSelectedIds = useFileSystemStore((state) => state.getAllSelectedIds);
  const setDisableSelect = useFileSystemStore((state) => state.setDisableSelect);
  const isIconDragging = useFileSystemStore((state) => state.getIsIconDragging);
  const setIsIconDragging = useFileSystemStore((state) => state.setIsIconDragging);
  const getWindowSize = useFileSystemStore((state) => state.getWindowSize);

  interface Position {
    x: number;
    y: number;
  }
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
      const selected = getAllSelectedIds(entry.parentId!);
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
    },
    [entry.parentId, getIconPosition, getAllSelectedIds, setDisableSelect, setIsIconDragging],
  );

  /*
   ********************************
   *           Drag End           *
   ********************************
   */
  const handleMouseUp = useCallback(() => {
    setIsIconDragging(entry.id, false);
    for (const id of Object.keys(startingPositions)) {
      setIsIconDragging(id, false);
      const pos = getIconPosition(id)!;
      const newPosition = roundPosition(pos, getWindowSize(entry.parentId!));
      setIconPosition(id, newPosition);
    }
    setStartingPositions({});
    setDisableSelect(false);
  }, [
    entry.id,
    entry.parentId,
    getWindowSize,
    setIsIconDragging,
    setDisableSelect,
    startingPositions,
    getIconPosition,
    setIconPosition,
  ]);

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
