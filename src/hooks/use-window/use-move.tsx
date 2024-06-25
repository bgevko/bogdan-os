import { useCallback, useState, useEffect } from 'react';

import useEvents from '@/hooks/use-events';
import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { Position } from '@/types/units';

interface ReturnTypes {
  handleMouseDownMove: (event: React.MouseEvent) => void;
}

const useWindowMove = (path: string): ReturnTypes => {
  const position = useProcessesStore((state) => state.getWindowPosition(path));
  const setPosition = useProcessesStore((state) => state.setWindowPosition);
  const defaultWindow = useProcessesStore((state) => state.getDefaultWindow(path));
  const setDefaultWindow = useProcessesStore((state) => state.setDefaultWindow);

  const size = useProcessesStore((state) => state.getWindowSize(path));

  const { registerEvents } = useEvents();
  const [start, setStart] = useState<Position>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDownMove = useCallback(
    (event: React.MouseEvent) => {
      setDragging(true);
      setStart({ x: event.clientX - position.x, y: event.clientY - position.y });
    },
    [position],
  );

  const handleStopMove = useCallback(() => {
    setDragging(false);
  }, []);

  const handleWindowMove = useCallback(
    (event: MouseEvent) => {
      if (!dragging) return;
      const newX = event.clientX - start.x;
      const newY = event.clientY - start.y;
      const clampedX = Math.max(0, Math.min(newX, window.innerWidth - size.width));
      const clampedY = Math.max(0, Math.min(newY, window.innerHeight - size.height));
      setPosition(path, { x: clampedX, y: clampedY });
    },
    [dragging, start, size, path, setPosition],
  );

  const handlePreventSelect = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    registerEvents('mousemove', [handleWindowMove]);
    registerEvents('mouseup', [handleStopMove]);
    registerEvents('contextmenu', [handleStopMove]);
    registerEvents('selectstart', [handlePreventSelect]);
  }, [registerEvents, handleWindowMove, handleStopMove, handlePreventSelect]);

  useEffect(() => {
    // Make sure window is within the viewport when first opened
    const clampedX = Math.max(0, Math.min(position.x, window.innerWidth - size.width));
    const clampedY = Math.max(
      0,
      Math.min(position.y, window.innerHeight - size.height - TASKBAR_HEIGHT),
    );
    setPosition(path, { x: clampedX, y: clampedY });
    setDefaultWindow(path, { ...defaultWindow, position: { x: clampedX, y: clampedY } });
    // NOTE: We don't need to run this effect on every render
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleMouseDownMove,
  };
};

export default useWindowMove;
