import React, { useCallback, useEffect, useState } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';

const SelectRect = ({ rootPath }: { rootPath: string }): React.ReactElement => {
  const selecting = useSelectStore((state) => state.isUsingSelectRect);
  const setIsUsingSelectRect = useSelectStore((state) => state.setIsUsingSelectRect);
  const selectRect = useSelectStore((state) => state.selectRect);
  const setSelectRect = useSelectStore((state) => state.setSelectRect);
  const mouseDownContext = useSelectStore((state) => state.mouseDownContext);

  const getWindow = useProcessesStore((state) => state.getWindow);

  const [isVisible, setIsVisible] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const localContext = rootPath === '/Desktop' ? 'desktop' : 'folder';

  const getMousePos = useCallback(
    (event: MouseEvent): { x: number; y: number } => {
      // Get desktop position
      if (localContext === 'desktop') {
        return { x: event.clientX, y: event.clientY };
      }

      // Get folder position
      const folder = getWindow(rootPath);
      return {
        x: event.clientX - folder.position.x,
        y: event.clientY - folder.position.y,
      };
    },
    [localContext, getWindow, rootPath],
  );

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return; // Not left click
      if (localContext !== mouseDownContext) return; // Clashing context

      // Get the position reference of the current window
      const { x, y } = getMousePos(event);

      // Set the select rect start position
      setStart({ x, y });
      setSelectRect({ size: { width: 0, height: 0 }, position: { x: 0, y: 0 } });
      setIsUsingSelectRect(true);
    },
    [setIsUsingSelectRect, setSelectRect, getMousePos, setStart, localContext, mouseDownContext],
  );

  const drawSelectRect = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      if (!selecting) return;

      setIsVisible(true);
      const { x: adjustedX, y: adjustedY } = getMousePos(event);
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
    [selecting, start, setSelectRect, getMousePos],
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

  if (mouseDownContext !== localContext) return <></>;

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
