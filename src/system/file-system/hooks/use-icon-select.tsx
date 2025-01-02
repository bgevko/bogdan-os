import { useCallback } from 'react';

import UseKeyPresses from '@/hooks/use-key-presses';
import useFileSystemStore, { FileSystemEntry } from '@/system/file-system/store';

interface ReturnTypes {
  handleMouseDownSelect: (event: React.MouseEvent) => void;
  handleMouseUpSelect: () => void;
  handleToggleSelect: () => void;
  handleFocusSelect: () => void;
}

const UseIconSelect = (entry: FileSystemEntry, isUsingSelectRect: boolean): ReturnTypes => {
  const getAllSelectedIds = useFileSystemStore((state) => state.getAllSelectedIds);
  const setIsIconSelected = useFileSystemStore((state) => state.setIsIconSelected);
  const getIsIconSelected = useFileSystemStore((state) => state.getIsIconSelected);
  const clearIconSelection = useFileSystemStore((state) => state.clearIconSelection);
  const isSelectDisabled = useFileSystemStore((state) => state.getDisableSelect);
  const { isShiftPressed } = UseKeyPresses();

  const handleMouseDownSelect = useCallback(
    (event: React.MouseEvent) => {
      if (event.button !== 0 || isShiftPressed || getAllSelectedIds(entry.parentId!).length <= 1) {
        return;
      }
      setIsIconSelected(entry.id, true);
    },
    [entry, isShiftPressed, getAllSelectedIds, setIsIconSelected],
  );

  const handleMouseUpSelect = useCallback(() => {
    if (
      isShiftPressed ||
      getAllSelectedIds(entry.parentId!).length <= 1 ||
      isUsingSelectRect ||
      isSelectDisabled()
    ) {
      return;
    }
    clearIconSelection();
    setIsIconSelected(entry.id, true);
  }, [
    entry.parentId,
    entry.id,
    isShiftPressed,
    getAllSelectedIds,
    clearIconSelection,
    setIsIconSelected,
    isUsingSelectRect,
    isSelectDisabled,
  ]);

  const handleFocusSelect = useCallback(() => {
    if (isShiftPressed || getAllSelectedIds(entry.parentId!).length > 1) {
      return;
    }
    clearIconSelection();
    setIsIconSelected(entry.id, true);
  }, [
    isShiftPressed,
    getAllSelectedIds,
    clearIconSelection,
    setIsIconSelected,
    entry.id,
    entry.parentId,
  ]);

  const handleToggleSelect = useCallback(() => {
    if (!isShiftPressed) {
      return;
    }
    setIsIconSelected(entry.id, !getIsIconSelected(entry.id));
  }, [isShiftPressed, setIsIconSelected, entry.id, getIsIconSelected]);

  return {
    handleMouseDownSelect,
    handleMouseUpSelect,
    handleToggleSelect,
    handleFocusSelect,
  };
};

export default UseIconSelect;
