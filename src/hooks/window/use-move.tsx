import { useCallback, useState, useEffect } from 'react';

import useEvents from '@/hooks/use-events';
import useProcessesStore from '@/stores/use-processes-store';
import { Position } from '@/types/units';

interface ReturnTypes {
  handleMouseDownMove: () => void;
}

const useWindowMove = (id: string): ReturnTypes => {
  const position = useProcessesStore((state) => state.getWindowPosition(id));
  const setPosition = useProcessesStore((state) => state.setWindowPosition);

  const size = useProcessesStore((state) => state.getWindowSize(id));

  const { registerEvents } = useEvents();
  const [start, setStart] = useState<Position>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDownMove = () => {
    setDragging(true);
  };

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
      setPosition(id, { x: clampedX, y: clampedY });
    },
    [dragging, start, size, id, setPosition],
  );

  const handlePreventSelect = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  const getMouseClickStart = useCallback(
    (event: MouseEvent) => {
      setStart({ x: event.clientX - position.x, y: event.clientY - position.y });
    },
    [position],
  );

  useEffect(() => {
    registerEvents('mousedown', [getMouseClickStart]);
    registerEvents('mousemove', [handleWindowMove]);
    registerEvents('mouseup', [handleStopMove]);
    registerEvents('contextmenu', [handleStopMove]);
    registerEvents('selectstart', [handlePreventSelect]);
  }, [getMouseClickStart, registerEvents, handleWindowMove, handleStopMove, handlePreventSelect]);

  return {
    handleMouseDownMove,
  };
};

export default useWindowMove;
