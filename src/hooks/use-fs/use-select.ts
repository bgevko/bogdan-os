import { useEffect, useState, useCallback } from 'react';

import useEvents from '@/hooks/use-events';
import useFsStore from '@/stores/use-fs-store';
import useSelectStore from '@/stores/use-select-store';
import { selectionIntersectsElement, getParentPath } from '@/utils/fs';
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
  const itemsPerLine = useFsStore((state) => state.getGridItemsPerLine(getParentPath(path)));

  const allSelected = useSelectStore((state) => state.getSelected());
  const addSelected = useSelectStore((state) => state.addSelected);
  const removeSelected = useSelectStore((state) => state.removeSelected);
  const setSelected = useSelectStore((state) => state.setSelected);

  const isUsingSelectRect = useSelectStore((state) => state.selecting);
  const selectingRect = useSelectStore((state) => state.selectingRect);

  const isSelected = allSelected.includes(path);
  const isMultipleSelected = allSelected.length > 1;

  const selectContext = useSelectStore((state) => state.context);
  const parentPath = getParentPath(path);
  const localContext = parentPath === '/Desktop' ? 'desktop' : 'folder';

  const { registerEvents } = useEvents();

  const [shiftIsPressed, setShiftIsPressed] = useState(false);

  const isCorrectContext = selectContext === localContext;

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
    if (!isUsingSelectRect || !isCorrectContext) return;
    const iconPosition = indexToPosition(gridIndex, itemsPerLine, { multiplier: 100 });
    if (selectionIntersectsElement(selectingRect, iconPosition)) {
      addSelected(path);
    } else if (!shiftIsPressed) {
      removeSelected(path);
    }
  }, [
    isCorrectContext,
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
