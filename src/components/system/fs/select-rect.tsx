import React, { useCallback, useEffect } from 'react';

import useEvents from '@/hooks/use-events';
import useSelectStore from '@/stores/use-select-store';

const SelectRect = (): React.ReactElement => {
  const selecting = useSelectStore((state) => state.selecting);
  const setSelecting = useSelectStore((state) => state.setSelecting);
  const selectRect = useSelectStore((state) => state.selectingRect);
  const setSelectRect = useSelectStore((state) => state.setSelectingRect);
  const start = useSelectStore((state) => state.clickStart);
  const setStart = useSelectStore((state) => state.setClickStart);
  const { registerEvents } = useEvents();

  const handleMouseDown = useCallback(() => {
    setSelecting(true);
    setSelectRect({ size: { width: 0, height: 0 }, position: { x: 0, y: 0 } });
  }, [setSelecting, setSelectRect]);

  const getMouseClickStart = useCallback(
    (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setStart({ x, y });
    },
    [setStart],
  );

  const drawSelectRect = useCallback(
    (event: MouseEvent) => {
      if (!selecting) return;
      const x = Math.min(start.x, event.clientX);
      const y = Math.min(start.y, event.clientY);

      const width = Math.abs(start.x - event.clientX);
      const height = Math.abs(start.y - event.clientY);

      const rectSize = { width, height };
      const rectPos = { x, y };

      setSelectRect({ size: rectSize, position: rectPos });
    },
    [selecting, start, setSelectRect],
  );

  const handleMouseUp = useCallback(() => {
    setSelecting(false);
  }, [setSelecting]);

  useEffect(() => {
    registerEvents('mousedown', [handleMouseDown, getMouseClickStart]);
    registerEvents('mousemove', [drawSelectRect]);
    registerEvents('mouseup', [handleMouseUp]);
  }, [registerEvents, handleMouseDown, getMouseClickStart, drawSelectRect, handleMouseUp]);

  return (
    <span
      className="absolute border border-dashed border-accent bg-accent/10"
      style={{
        display: selecting ? 'block' : 'none',
        width: selectRect.size.width,
        height: selectRect.size.height,
        transform: `translate(${selectRect.position.x.toString()}px, ${selectRect.position.y.toString()}px)`,
      }}
    />
  );
};

export default SelectRect;
