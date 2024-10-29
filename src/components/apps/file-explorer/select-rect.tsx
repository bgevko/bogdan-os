import React, { useCallback, useEffect, useState } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { WINDOW_HEADER_HEIGHT } from '@/themes';

const SelectRect = ({ path }: { path: string }): React.ReactElement => {
  const selecting = useSelectStore((state) => state.isUsingSelectRect);
  const setIsUsingSelectRect = useSelectStore((state) => state.setIsUsingSelectRect);
  const selectRect = useSelectStore((state) => state.selectRect);
  const setSelectRect = useSelectStore((state) => state.setSelectRect);
  const getWindow = useProcessesStore((state) => state.getWindow);

  const [isVisible, setIsVisible] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return; // Not left click

      const folder = getWindow(path);
      const x = event.clientX - folder.position.x;
      const y = event.clientY - folder.position.y - WINDOW_HEADER_HEIGHT;

      // Set the select rect start position
      setStart({ x, y });
      setSelectRect({ size: { width: 0, height: 0 }, position: { x: 0, y: 0 } });
      setIsUsingSelectRect(true);
    },
    [setIsUsingSelectRect, setSelectRect, setStart, getWindow, path],
  );

  const drawSelectRect = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      if (!selecting) return;

      // Folder position
      const folder = getWindow(path);
      const folderX = folder.position.x;
      const folderY = folder.position.y + WINDOW_HEADER_HEIGHT;

      // Mouse position, relative to the folder
      const mouseX = event.clientX - folderX;
      const mouseY = event.clientY - folderY;

      // Rectangle Position and size
      const x = Math.min(mouseX, start.x);
      const y = Math.min(mouseY, start.y);
      const width = Math.abs(start.x - mouseX);
      const height = Math.abs(start.y - mouseY);

      // Update state
      setSelectRect({ size: { width, height }, position: { x, y } });
      setIsVisible(true);
    },
    [selecting, start, setSelectRect, getWindow, path],
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
