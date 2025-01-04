import { useCallback, useState } from 'react';

import useFileSystemStore, { FileSystemEntry } from '@/system/file-system/store';
import { CLOSE_ANIMATION_DURATION } from '@/themes';

type Direction =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | null;
interface ReturnTypes {
  handleResizeStart: (event: React.MouseEvent, direction: Direction) => void;
  handleMouseMove: (event: MouseEvent) => void;
  handleMouseUp: () => void;
  handleToggleMaximize: () => void;
  handleClose: () => void;
}

const UseWindowResize = (entry: FileSystemEntry): ReturnTypes => {
  const position = useFileSystemStore((state) => state.getWindowPosition(entry.id));
  const size = useFileSystemStore((state) => state.getWindowSize(entry.id));
  const defaultSize = useFileSystemStore((state) => state.getDefaultWindowSize(entry.id));
  const setPosition = useFileSystemStore((state) => state.setWindowPosition);
  const setSize = useFileSystemStore((state) => state.setWindowSize);
  const setIsWindowResizing = useFileSystemStore((state) => state.setIsWindowResizing);
  const toggleMaximize = useFileSystemStore((state) => state.toggleMaximize);
  const executeWindowCallback = useFileSystemStore((state) => state.executeWindowCallback);
  const closeEntry = useFileSystemStore((state) => state.closeEntry);
  const setTransformScale = useFileSystemStore((state) => state.setTransformScale);

  const [resizeDirection, setResizeDirection] = useState<Direction>(null);

  /*
   ***********************************
   *          Resizing Start         *
   ***********************************
   */
  const handleResizeStart = useCallback(
    (event: React.MouseEvent, direction: Direction) => {
      event.preventDefault();
      setResizeDirection(direction);
      setIsWindowResizing(entry.id, true);
    },
    [entry.id, setIsWindowResizing],
  );

  /*
   ***********************************
   *          Resizing Stop          *
   ***********************************
   */
  const handleMouseUp = useCallback(() => {
    setResizeDirection(null);
    setIsWindowResizing(entry.id, false);
    executeWindowCallback(entry.id);
  }, [entry.id, setIsWindowResizing, executeWindowCallback]);

  /*
   ***********************************
   *          While Resizing         *
   ***********************************
   */
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { x: posX, y: posY } = position;
      const { width: currentWidth, height: currentHeight } = size;

      let newWidth = currentWidth;
      let newHeight = currentHeight;
      let newX = posX;
      let newY = posY;

      switch (resizeDirection) {
        case 'right': {
          newWidth = Math.max(clientX - posX, defaultSize.width);
          break;
        }

        case 'bottom': {
          newHeight = Math.max(clientY - posY, defaultSize.height);
          break;
        }

        case 'left': {
          newX = Math.min(clientX, posX + currentWidth - defaultSize.width);
          newX = Math.max(0, newX);
          newWidth = currentWidth + posX - newX;
          break;
        }

        case 'top': {
          newY = Math.min(clientY, posY + currentHeight - defaultSize.height);
          newY = Math.max(0, newY);
          newHeight = currentHeight + posY - newY;
          break;
        }

        case 'top-left': {
          // Handle TOP
          newY = Math.min(clientY, posY + currentHeight - defaultSize.height);
          newY = Math.max(0, newY);
          newHeight = currentHeight + posY - newY;
          // Handle LEFT
          newX = Math.min(clientX, posX + currentWidth - defaultSize.width);
          newX = Math.max(0, newX);
          newWidth = currentWidth + posX - newX;
          break;
        }

        case 'top-right': {
          // Handle TOP
          newY = Math.min(clientY, posY + currentHeight - defaultSize.height);
          newY = Math.max(0, newY);
          newHeight = currentHeight + posY - newY;
          // Handle RIGHT
          newWidth = Math.max(clientX - posX, defaultSize.width);
          break;
        }

        case 'bottom-left': {
          // Handle BOTTOM
          newHeight = Math.max(clientY - posY, defaultSize.height);
          // Handle LEFT
          newX = Math.min(clientX, posX + currentWidth - defaultSize.width);
          newX = Math.max(0, newX);
          newWidth = currentWidth + posX - newX;
          break;
        }

        case 'bottom-right': {
          // Handle BOTTOM
          newHeight = Math.max(clientY - posY, defaultSize.height);
          // Handle RIGHT
          newWidth = Math.max(clientX - posX, defaultSize.width);
          break;
        }

        default: {
          // 'NONE' or any other unhandled case
          return;
        }
      }

      // Ensure the window does not exceed the viewport boundaries
      newWidth = Math.min(newWidth, window.innerWidth - newX);
      newHeight = Math.min(newHeight, window.innerHeight - newY);
      setSize(entry.id, { width: newWidth, height: newHeight });
      setPosition(entry.id, { x: newX, y: newY });
    },
    [entry.id, position, size, defaultSize, resizeDirection, setPosition, setSize],
  );

  /*
   ***********************************
   *         Maximize Window         *
   ***********************************
   */
  const handleToggleMaximize = useCallback(() => {
    toggleMaximize(entry.id);

    // Slight wait before calling the update callback
    // this lets transformations finish before updating
    setTimeout(() => {
      executeWindowCallback(entry.id);
    }, CLOSE_ANIMATION_DURATION);
  }, [entry.id, toggleMaximize, executeWindowCallback]);

  /*
   ***********************************
   *           Close Window          *
   ***********************************
   */
  // Gotta give it enough time to animate out
  const handleClose = useCallback(() => {
    setTransformScale(entry.id, 0);
    setTimeout(() => {
      closeEntry(entry.id);
    }, CLOSE_ANIMATION_DURATION);
  }, [closeEntry, entry.id, setTransformScale]);

  return {
    handleResizeStart,
    handleMouseMove,
    handleMouseUp,
    handleToggleMaximize,
    handleClose,
  };
};

export default UseWindowResize;
