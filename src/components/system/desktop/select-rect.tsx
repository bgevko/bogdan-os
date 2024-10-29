import React, { useCallback, useEffect, useState } from 'react';

import useSelectStore from '@/stores/use-select-store';

const SelectRect = (): React.ReactElement => {
  const selecting = useSelectStore((state) => state.isUsingSelectRect);
  const setIsUsingSelectRect = useSelectStore((state) => state.setIsUsingSelectRect);
  const selectRect = useSelectStore((state) => state.selectRect);
  const setSelectRect = useSelectStore((state) => state.setSelectRect);

  const [isVisible, setIsVisible] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return; // Not left click

      // Get the position reference of the current window
      const x = event.clientX;
      const y = event.clientY;

      // Set the select rect start position
      setStart({ x, y });
      setSelectRect({ size: { width: 0, height: 0 }, position: { x: 0, y: 0 } });
      setIsUsingSelectRect(true);
    },
    [setIsUsingSelectRect, setSelectRect, setStart],
  );

  const drawSelectRect = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      if (!selecting) return;

      setIsVisible(true);
      const adjustedX = event.clientX;
      const adjustedY = event.clientY;
      const x = Math.min(start.x, adjustedX);
      const y = Math.min(start.y, adjustedY);

      const width = Math.abs(start.x - adjustedX);
      const height = Math.abs(start.y - adjustedY);

      const rectSize = { width, height };
      const rectPos = {
        x,
        y,
      };

      setSelectRect({ size: rectSize, position: rectPos });
    },
    [selecting, start, setSelectRect],
  );

  const handleMouseUp = useCallback(() => {
    setIsUsingSelectRect(false);
    setIsVisible(false);
  }, [setIsUsingSelectRect]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', drawSelectRect);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', drawSelectRect);
    };
  }, [handleMouseDown, drawSelectRect, handleMouseUp]);

  return (
    <>
      <span
        className="fixed z-50 border border-dashed border-accent bg-accent/10"
        style={{
          display: selecting && isVisible ? 'block' : 'none',
          width: selectRect.size.width,
          height: selectRect.size.height,
          transform: `translate(${selectRect.position.x.toString()}px, ${selectRect.position.y.toString()}px)`,
        }}
      />
    </>
  );
};

export default SelectRect;
