import React, { useCallback, useEffect, useState } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';

const SelectRect = ({ rootPath }: { rootPath: string }): React.ReactElement => {
  const selecting = useSelectStore((state) => state.isUsingSelectRect);
  const setIsUsingSelectRect = useSelectStore((state) => state.setIsUsingSelectRect);
  const selectRect = useSelectStore((state) => state.selectRect);
  const setSelectRect = useSelectStore((state) => state.setSelectRect);
  const selectContext = useSelectStore((state) => state.selectRectContext);

  const getWindow = useProcessesStore((state) => state.getWindow);
  const isSelectionDisabled = useProcessesStore((state) => state.isSelectionDisabled);

  const [isVisible, setIsVisible] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const localContext = rootPath === '/Desktop' ? 'desktop' : 'folder';

  const getFolderPosition = useCallback(() => {
    if (selectContext === 'desktop') {
      return {
        folderX: 0,
        folderY: 0,
      };
    }
    const folder = getWindow(rootPath);
    return {
      folderX: folder.position.x,
      folderY: folder.position.y,
    };
  }, [selectContext, rootPath, getWindow]);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      // Button should be left click
      if (event.button !== 0) return;

      // Renders only when context matches. Destkop / desktop, or folder / folder
      if (localContext !== selectContext) return;

      // Determine offset if selecting in folder
      const { folderX, folderY } = getFolderPosition();
      const x = event.clientX - folderX;
      const y = event.clientY - folderY;

      // Set the select rect start position
      setStart({ x, y });
      setSelectRect({ size: { width: 0, height: 0 }, position: { x: 0, y: 0 } });
      setIsUsingSelectRect(true);
    },
    [setIsUsingSelectRect, setSelectRect, getFolderPosition, localContext, selectContext, setStart],
  );

  const drawSelectRect = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      if (!selecting || isSelectionDisabled(rootPath)) return;
      setIsVisible(true);
      const { folderX, folderY } = getFolderPosition();
      const adjustedX = event.clientX - folderX;
      const adjustedY = event.clientY - folderY;
      const x = Math.min(start.x, adjustedX);
      const y = Math.min(start.y, adjustedY);

      const width = Math.abs(start.x - adjustedX);
      const height = Math.abs(start.y - adjustedY);

      const rectSize = { width, height };
      const rectPos = {
        x: selectContext === 'folder' ? x - 16 : x,
        y: selectContext === 'folder' ? y - 48 : y,
      };

      setSelectRect({ size: rectSize, position: rectPos });
    },
    [
      selecting,
      start,
      setSelectRect,
      getFolderPosition,
      selectContext,
      isSelectionDisabled,
      rootPath,
    ],
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
      {localContext === selectContext && (
        <span
          className="fixed z-50 border border-dashed border-accent bg-accent/10"
          style={{
            display: selecting && isVisible ? 'block' : 'none',
            width: selectRect.size.width,
            height: selectRect.size.height,
            transform: `translate(${selectRect.position.x.toString()}px, ${selectRect.position.y.toString()}px)`,
          }}
        />
      )}
    </>
  );
};

export default SelectRect;
