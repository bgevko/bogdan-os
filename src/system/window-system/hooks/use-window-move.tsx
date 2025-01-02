import { useCallback, useState } from 'react';

import { type FileSystemEntry } from '@/system/file-system/store';
import useFileSystemStore from '@/system/file-system/store';
import { clampToBounds } from '@/system/window-system/utils';

interface ReturnTypes {
  handleMoveStart: (event: React.MouseEvent) => void;
  handleMouseMove: (event: MouseEvent) => void;
  handleMouseUp: () => void;
  handleMinimize: () => void;
  handleToggleMinimize: () => void;
}

const UseWindowMove = (entry: FileSystemEntry): ReturnTypes => {
  const getWindowPosition = useFileSystemStore((state) => state.getWindowPosition);
  const setWindowPosition = useFileSystemStore((state) => state.setWindowPosition);
  const getWindowSize = useFileSystemStore((state) => state.getWindowSize);
  const isMoving = useFileSystemStore((state) => state.getIsWindowMoving(entry.id));
  const setIsMoving = useFileSystemStore((state) => state.setIsWindowMoving);
  const setWillTransform = useFileSystemStore((state) => state.setWillTransform);
  const minimizeEntry = useFileSystemStore((state) => state.minimizeEntry);
  const toggleMinimize = useFileSystemStore((state) => state.toggleMinimize);
  const setContentOpacity = useFileSystemStore((state) => state.setContentOpacity);
  const executeWindowCallback = useFileSystemStore((state) => state.executeWindowCallback);
  const windowState = useFileSystemStore((state) => state.getWindowState(entry.id));

  const [startingPosition, setStartingPosition] = useState({ x: 0, y: 0 });

  /*
   ********************************
   *          Move Start          *
   ********************************
   */
  const handleMoveStart = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      setIsMoving(entry.id, true);
      const pos = getWindowPosition(entry.id);
      setStartingPosition({
        x: event.clientX - pos.x,
        y: event.clientY - pos.y,
      });
    },
    [entry.id, getWindowPosition, setIsMoving],
  );

  /*
   ********************************
   *           Move Stop          *
   ********************************
   */
  const handleMouseUp = useCallback(() => {
    setIsMoving(entry.id, false);

    // Adjust the window position to make sure it's not out of bounds
    const pos = getWindowPosition(entry.id);
    const adjustedPos = clampToBounds(pos, getWindowSize(entry.id));
    if (adjustedPos.x !== pos.x || adjustedPos.y !== pos.y) {
      setWindowPosition(entry.id, adjustedPos);
    }
    executeWindowCallback(entry.id);
  }, [
    entry.id,
    setIsMoving,
    setWindowPosition,
    getWindowPosition,
    getWindowSize,
    executeWindowCallback,
  ]);

  /*
   ********************************
   *        While Dragging        *
   ********************************
   */
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isMoving) return;
      const x = event.clientX - startingPosition.x;
      const y = event.clientY - startingPosition.y;
      setWindowPosition(entry.id, { x, y });
    },
    [entry.id, isMoving, setWindowPosition, startingPosition],
  );

  /*
   ***********************************
   *         Handle Minimize         *
   ***********************************
   */
  // Sets a flag to let the window know to hide content
  // while minimizing / restoring. In the window component,
  // this is used to stop rendering window content before
  // CSS transitions begin. It helps with performance.
  const handleMinimize = useCallback(() => {
    setWillTransform(entry.id, true);
    setContentOpacity(entry.id, 0);
    setTimeout(() => {
      minimizeEntry(entry.id);
      setWillTransform(entry.id, false);
    }, 1);
  }, [entry.id, minimizeEntry, setWillTransform, setContentOpacity]);

  const handleToggleMinimize = useCallback(() => {
    setWillTransform(entry.id, true);
    // When restoring the window, first toggle the transformation
    // Then render the window content
    if (windowState === 'minimized') {
      toggleMinimize(entry.id);
      setTimeout(() => {
        setWillTransform(entry.id, false);
      }, 200);
      setTimeout(() => {
        setContentOpacity(entry.id, 1);
      }, 201);
    }
    // When minimizing the window, first hide the content
    // Then toggle the transformation. The timeout is much smaller
    // because we don't really need to see the content disappear.
    else if (windowState === 'normal') {
      setContentOpacity(entry.id, 0);
      setTimeout(() => {
        toggleMinimize(entry.id);
        setWillTransform(entry.id, false);
      }, 1);
    }
  }, [entry.id, windowState, toggleMinimize, setWillTransform, setContentOpacity]);

  return { handleMoveStart, handleMouseMove, handleMouseUp, handleMinimize, handleToggleMinimize };
};

export default UseWindowMove;
