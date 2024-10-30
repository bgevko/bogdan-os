import { useCallback, useState, useEffect } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import { Position, ResizeDirection } from '@/types';

interface usewindowReturnTypes {
  handleWindowResize: (event: MouseEvent) => void;
  setResizeDirection: (direction: ResizeDirection) => void;
  handleSetResizeDirection: (direction: ResizeDirection) => void;
  resizeWindow: (event: MouseEvent, start: Position) => void;
}

const UseWindowResize = (path: string): usewindowReturnTypes => {
  const position = useProcessesStore((state) => state.getWindowPosition(path));
  const setPosition = useProcessesStore((state) => state.setWindowPosition);

  const size = useProcessesStore((state) => state.getWindowSize(path));
  const setSize = useProcessesStore((state) => state.setWindowSize);
  const minSize = useProcessesStore((state) => state.getWindowMinSize(path));

  const setIsMaximized = useProcessesStore((state) => state.setIsMaximized);

  const setIsUpdatingSize = useProcessesStore((state) => state.setIsUpdatingSize);

  const [resizeDirection, setResizeDirection] = useState<ResizeDirection>('NONE');

  const resizeWindow = useCallback(
    (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { x: posX, y: posY } = position;
      const { width: currentWidth, height: currentHeight } = size;

      let newWidth = currentWidth;
      let newHeight = currentHeight;
      let newX = posX;
      let newY = posY;

      switch (resizeDirection) {
        case 'RIGHT': {
          newWidth = Math.max(clientX - posX, minSize.width);
          break;
        }

        case 'BOTTOM': {
          newHeight = Math.max(clientY - posY, minSize.height);
          break;
        }

        case 'LEFT': {
          newX = Math.min(clientX, posX + currentWidth - minSize.width);
          newX = Math.max(0, newX);
          newWidth = currentWidth + posX - newX;
          break;
        }

        case 'TOP': {
          newY = Math.min(clientY, posY + currentHeight - minSize.height);
          newY = Math.max(0, newY);
          newHeight = currentHeight + posY - newY;
          break;
        }

        case 'TOP_LEFT': {
          // Handle TOP
          newY = Math.min(clientY, posY + currentHeight - minSize.height);
          newY = Math.max(0, newY);
          newHeight = currentHeight + posY - newY;
          // Handle LEFT
          newX = Math.min(clientX, posX + currentWidth - minSize.width);
          newX = Math.max(0, newX);
          newWidth = currentWidth + posX - newX;
          break;
        }

        case 'TOP_RIGHT': {
          // Handle TOP
          newY = Math.min(clientY, posY + currentHeight - minSize.height);
          newY = Math.max(0, newY);
          newHeight = currentHeight + posY - newY;
          // Handle RIGHT
          newWidth = Math.max(clientX - posX, minSize.width);
          break;
        }

        case 'BOTTOM_LEFT': {
          // Handle BOTTOM
          newHeight = Math.max(clientY - posY, minSize.height);
          // Handle LEFT
          newX = Math.min(clientX, posX + currentWidth - minSize.width);
          newX = Math.max(0, newX);
          newWidth = currentWidth + posX - newX;
          break;
        }

        case 'BOTTOM_RIGHT': {
          // Handle BOTTOM
          newHeight = Math.max(clientY - posY, minSize.height);
          // Handle RIGHT
          newWidth = Math.max(clientX - posX, minSize.width);
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

      setSize(path, { width: newWidth, height: newHeight });
      setPosition(path, { x: newX, y: newY });
      setIsMaximized(path, false);
    },
    [path, minSize, position, size, resizeDirection, setIsMaximized, setPosition, setSize],
  );
  const handleSetResizeDirection = (direction: ResizeDirection) => {
    setResizeDirection(direction);
  };

  const handleStopResize = useCallback(() => {
    setResizeDirection('NONE');

    // This is used to update the grid size after the resize stops
    setIsUpdatingSize(path, true);
    setTimeout(() => {
      setIsUpdatingSize(path, false);
    }, 1);
  }, [setResizeDirection, setIsUpdatingSize, path]);

  const handleWindowResize = useCallback(
    (event: MouseEvent) => {
      resizeWindow(event);
    },
    [resizeWindow],
  );

  useEffect(() => {
    document.addEventListener('mouseup', handleStopResize);
    document.addEventListener('mousemove', handleWindowResize);
    return () => {
      document.removeEventListener('mouseup', handleStopResize);
      document.removeEventListener('mousemove', handleWindowResize);
    };
  }, [handleStopResize, handleWindowResize]);

  return {
    handleWindowResize,
    handleSetResizeDirection,
    setResizeDirection,
    resizeWindow,
  };
};

export default UseWindowResize;
