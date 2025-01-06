import { useCallback, useState, useEffect } from 'react';

import useFileSystemStore, { type FileSystemEntry, Position } from '@/system/file-system/store';
import { WINDOW_HEADER_HEIGHT } from '@/themes';

interface Returns {
  selectRectPosition: { x: number; y: number };
  selectRectSize: { width: number; height: number };
  handleMouseDown: (event: React.MouseEvent, offsetPosition?: Position) => void;
  isSelecting: boolean;
}

const UseDragSelect = (entry?: FileSystemEntry): Returns => {
  const getEntryWindowPosition = useFileSystemStore((state) => state.getWindowPosition);
  const setIsUsingSelectRect = useFileSystemStore((state) => state.setIsUsingSelectRect);
  const windowState = useFileSystemStore((state) => state.getWindowState(entry?.id ?? ''));
  const [selectRectPosition, setSelectRectPosition] = useState({ x: -1, y: -1 });
  const [selectRectSize, setSelectRectSize] = useState({ width: -1, height: -1 });
  const [mouseDownStart, setMouseDownStart] = useState({ x: 0, y: 0 });
  const [isSelecting, setIsSelecting] = useState(false);

  // NOTE: offsets like the taskbar height, window header height, etc. should be passed
  // to the offsetPosition parameter

  // NOTE: Drag select is used on both the desktop and in directories. isSelecting helps
  // render the local instance, while isUsingSelectRect is a shared global flag, used
  // for other logic. It's an important distinction because trying to render the select
  // rectangle using the global flag will cause the rectangle to render in all instances,
  // not where it's used.
  /*
   ***********************************
   *         Selection Start         *
   ***********************************
   */
  const handleMouseDown = useCallback(
    (event: React.MouseEvent, offsetPosition?: Position) => {
      event.stopPropagation();
      if (event.button !== 0) return;
      const offsetX = offsetPosition?.x ?? 0;
      const offsetY = offsetPosition?.y ?? 0;
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;
      setMouseDownStart({ x, y });
      setSelectRectSize({ width: 0, height: 0 });
      setIsSelecting(true);
      setIsUsingSelectRect(true);
    },
    [setIsUsingSelectRect],
  );

  /*
   ***********************************
   *          Selection Move         *
   ***********************************
   */
  const handleMouseMove = useCallback(
    (event: MouseEvent, offsetPosition?: Position) => {
      if (!isSelecting) return;
      const offsetX = offsetPosition?.x ?? 0;
      const offsetY = offsetPosition?.y ?? 0;
      let x = event.clientX - offsetX;
      let y = event.clientY - offsetY;
      const width = Math.abs(mouseDownStart.x - x);
      const height = Math.abs(mouseDownStart.y - y);
      x = Math.min(mouseDownStart.x, x);
      y = Math.min(mouseDownStart.y, y);
      setSelectRectSize({ width, height });
      setSelectRectPosition({ x, y });
    },
    [mouseDownStart, isSelecting],
  );

  /*
   ***********************************
   *          Selection Stop         *
   ***********************************
   */
  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return;
      setIsSelecting(false);
      setIsUsingSelectRect(false);
      setSelectRectSize({ width: -1, height: -1 });
      setSelectRectPosition({ x: -1, y: -1 });
    },
    [setIsUsingSelectRect],
  );

  useEffect(() => {
    /*
     ***********************************
     *        Desktop Selection        *
     *********************************** */
    const handleDesktopSelection = (event: MouseEvent) => {
      handleMouseMove(event, { x: 0, y: 0 });
    };
    /*
     ***********************************
     *    Full Screen Mode Selection   *
     *********************************** */
    const handleMaximizedDirectorySelection = (event: MouseEvent) => {
      handleMouseMove(event, { x: 0, y: 0 });
    };
    /*
     ***********************************
     *       Directory Selection       *
     *********************************** */
    const handleDirectorySelection = (event: MouseEvent) => {
      const windowPosition = getEntryWindowPosition(entry?.id ?? '');
      handleMouseMove(event, { x: windowPosition.x, y: windowPosition.y + WINDOW_HEADER_HEIGHT });
    };

    if (entry?.id === 'desktop') {
      document.addEventListener('mousemove', handleDesktopSelection);
    } else if (windowState === 'maximized') {
      document.addEventListener('mousemove', handleMaximizedDirectorySelection);
    } else {
      document.addEventListener('mousemove', handleDirectorySelection);
    }
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      if (entry?.id === 'desktop') {
        document.removeEventListener('mousemove', handleDesktopSelection);
      } else if (windowState === 'maximized') {
        document.removeEventListener('mousemove', handleMaximizedDirectorySelection);
      } else {
        document.removeEventListener('mousemove', handleDirectorySelection);
      }
    };
  }, [entry, windowState, handleMouseMove, handleMouseUp, getEntryWindowPosition]);

  return {
    selectRectPosition,
    selectRectSize,
    handleMouseDown,
    isSelecting,
  };
};

export default UseDragSelect;
