import { useEffect, useState, useCallback } from 'react';

import useEvents from '@/hooks/use-events';
import useFsStore from '@/stores/use-fs-store';
import useSelectStore from '@/stores/use-select-store';
import selectionIntersectsElement from '@/utils/fs';
import { indexToPosition } from '@/utils/grid';

interface UseSelectReturn {
  handleFocusSelect: () => void;
  handleMouseDownSelect: () => void;
  handleMouseUpSelect: () => void;
  handleToggleSelect: () => void;
  isSelected: boolean;
  isUsingSelectRect: boolean;
  allSelected: string[];
}

const UseSelect = (path: string): UseSelectReturn => {
  const gridIndex = useFsStore((state) => state.getGridIndex(path));
  const itemsPerLine = useFsStore((state) => state.getParentGridItemsPerLine(path));

  const allSelected = useFsStore((state) => state.getSelected());
  const addSelected = useFsStore((state) => state.addSelected);
  const removeSelected = useFsStore((state) => state.removeSelected);
  const setSelected = useFsStore((state) => state.setSelected);

  const isUsingSelectRect = useSelectStore((state) => state.selecting);
  const selectingRect = useSelectStore((state) => state.selectingRect);

  const isSelected = allSelected.includes(path);
  const isMultipleSelected = allSelected.length > 1;

  const { registerEvents } = useEvents();

  const [shiftIsPressed, setShiftIsPressed] = useState(false);

  const handleShiftPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Shift') {
      setShiftIsPressed(true);
    }
  }, []);

  const handleShiftRelease = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Shift') {
      setShiftIsPressed(false);
    }
  }, []);

  const handleFocusSelect = useCallback(() => {
    if (shiftIsPressed || isMultipleSelected) return;
    setSelected([path]);
  }, [setSelected, shiftIsPressed, isMultipleSelected, path]);

  const handleMouseDownSelect = useCallback(() => {
    if (shiftIsPressed || !isMultipleSelected) return;
    addSelected(path);
  }, [addSelected, shiftIsPressed, path, isMultipleSelected]);

  const handleMouseUpSelect = useCallback(() => {
    if (shiftIsPressed || !isMultipleSelected || isUsingSelectRect) return;
    setSelected([path]);
  }, [shiftIsPressed, setSelected, path, isMultipleSelected, isUsingSelectRect]);

  const handleToggleSelect = useCallback(() => {
    if (!shiftIsPressed) return;
    if (isSelected) {
      removeSelected(path);
    } else {
      addSelected(path);
    }
  }, [shiftIsPressed, isSelected, addSelected, removeSelected, path]);

  const handleDragSelect = useCallback(() => {
    if (!isUsingSelectRect) return;
    const iconPosition = indexToPosition(gridIndex, itemsPerLine, { multiplier: 100 });
    if (selectionIntersectsElement(selectingRect, iconPosition)) {
      addSelected(path);
    } else if (!shiftIsPressed) {
      removeSelected(path);
    }
  }, [
    isUsingSelectRect,
    selectingRect,
    addSelected,
    removeSelected,
    shiftIsPressed,
    path,
    itemsPerLine,
    gridIndex,
  ]);

  useEffect(() => {
    registerEvents('keydown', [handleShiftPress]);
    registerEvents('keyup', [handleShiftRelease]);
    registerEvents('mousemove', [handleDragSelect]);
  }, [handleShiftPress, handleShiftRelease, registerEvents, handleDragSelect]);

  return {
    handleFocusSelect,
    handleMouseDownSelect,
    handleMouseUpSelect,
    handleToggleSelect,
    isSelected,
    isUsingSelectRect,
    allSelected,
  };
};

export default UseSelect;
