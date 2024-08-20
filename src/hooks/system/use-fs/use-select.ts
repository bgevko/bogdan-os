import { useEffect, useState, useCallback } from 'react';

import useGridStore from '@/stores/use-grid-store';
import useSelectStore from '@/stores/use-select-store';
import { selectionIntersectsElement, parseParentPath } from '@/utils/fs';
import { indexToPosition } from '@/utils/grid';

interface UseSelectReturn {
  handleFocusSelect: () => void;
  handleMouseDownSelect: (event: React.MouseEvent) => void;
  handleMouseUpSelect: () => void;
  handleToggleSelect: () => void;
  isSelected: boolean;
  isUsingSelectRect: boolean;
}

const UseSelect = (path: string): UseSelectReturn => {
  const gridIndex = useGridStore((state) => state.getIndex(path));
  const parentPath = parseParentPath(path);
  const lineSize = useGridStore((state) => state.getLineSize(parentPath));

  const allSelected = useSelectStore((state) => state.getSelected());
  const addSelected = useSelectStore((state) => state.addSelected);
  const removeSelected = useSelectStore((state) => state.removeSelected);
  const setSelected = useSelectStore((state) => state.setSelected);

  const isUsingSelectRect = useSelectStore((state) => state.isUsingSelectRect);
  const selectingRect = useSelectStore((state) => state.selectRect);

  const isSelected = allSelected.includes(path);
  const isMultipleSelected = allSelected.length > 1;

  const selectContext = useSelectStore((state) => state.selectRectContext);
  const localContext = parentPath === '/Desktop' ? 'desktop' : 'folder';

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

  const handleMouseDownSelect = useCallback(
    (event: React.MouseEvent) => {
      if (event.button !== 0) return;
      if (shiftIsPressed || !isMultipleSelected) return;
      addSelected(path);
    },
    [addSelected, shiftIsPressed, path, isMultipleSelected],
  );

  const handleMouseUpSelect = useCallback(() => {
    if (shiftIsPressed || !isMultipleSelected || isUsingSelectRect) return;
    setSelected([path]);
  }, [shiftIsPressed, setSelected, path, isMultipleSelected, isUsingSelectRect]);

  const isSameParent = useCallback(
    (target: string) => {
      const parent = parseParentPath(target);
      return allSelected.every((selectedPath) => parseParentPath(selectedPath) === parent);
    },
    [allSelected],
  );

  const handleToggleSelect = useCallback(() => {
    if (!shiftIsPressed) return;
    if (!isSameParent(path)) {
      setSelected([path]);
      return;
    }
    if (isSelected) {
      removeSelected(path);
    } else {
      addSelected(path);
    }
  }, [shiftIsPressed, isSelected, setSelected, addSelected, removeSelected, path, isSameParent]);

  // Select rect listener
  useEffect(() => {
    if (!isUsingSelectRect || !isCorrectContext) return;
    const iconPosition = indexToPosition(gridIndex, lineSize, { multiplier: 100 });
    if (selectionIntersectsElement(selectingRect, iconPosition)) {
      addSelected(path);
    } else if (!shiftIsPressed) {
      removeSelected(path);
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectingRect.size]);

  useEffect(() => {
    window.addEventListener('keydown', handleShiftPress);
    window.addEventListener('keyup', handleShiftRelease);
    return () => {
      window.removeEventListener('keydown', handleShiftPress);
      window.removeEventListener('keyup', handleShiftRelease);
    };
  }, [handleShiftPress, handleShiftRelease]);

  return {
    handleFocusSelect,
    handleMouseDownSelect,
    handleMouseUpSelect,
    handleToggleSelect,
    isSelected,
    isUsingSelectRect,
  };
};

export default UseSelect;
