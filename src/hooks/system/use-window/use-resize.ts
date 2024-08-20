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

  const [start, setStart] = useState<Position>({ x: 0, y: 0 });

  const getMouseClickStart = useCallback(
    (event: MouseEvent) => {
      setStart({ x: event.clientX - position.x, y: event.clientY - position.y });
    },
    [position],
  );

  const [resizeDirection, setResizeDirection] = useState<ResizeDirection>('NONE');

  const resizeWindow = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection === 'NONE') return;
      let newWidth = size.width;
      let newHeight = size.height;
      let newX = position.x;
      let newY = position.y;

      if (resizeDirection.includes('RIGHT')) {
        newWidth = Math.max(event.clientX - position.x, minSize.width);
        newWidth = Math.min(newWidth, window.innerWidth - position.x);
      }
      if (resizeDirection.includes('BOTTOM')) {
        newHeight = Math.max(event.clientY - position.y, minSize.height);
        newHeight = Math.min(newHeight, window.innerHeight - position.y);
      }
      if (resizeDirection.includes('LEFT')) {
        newX = Math.max(
          0,
          Math.min(event.clientX - start.x, position.x + size.width - minSize.width),
        );
        newWidth = size.width + position.x - newX;
      }
      if (resizeDirection.includes('TOP')) {
        newY = Math.max(
          0,
          Math.min(event.clientY - start.y, position.y + size.height - minSize.height),
        );
        newHeight = size.height + position.y - newY;
      }

      setSize(path, { width: newWidth, height: newHeight });
      setPosition(path, { x: newX, y: newY });
      setIsMaximized(path, false);
    },
    [path, start, minSize, position, size, resizeDirection, setIsMaximized, setPosition, setSize],
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
    document.addEventListener('mousedown', getMouseClickStart);
    document.addEventListener('mouseup', handleStopResize);
    document.addEventListener('mousemove', handleWindowResize);
    return () => {
      document.removeEventListener('mousedown', getMouseClickStart);
      document.removeEventListener('mouseup', handleStopResize);
      document.removeEventListener('mousemove', handleWindowResize);
    };
  }, [getMouseClickStart, handleStopResize, handleWindowResize]);

  return {
    handleWindowResize,
    handleSetResizeDirection,
    setResizeDirection,
    resizeWindow,
  };
};

export default UseWindowResize;
