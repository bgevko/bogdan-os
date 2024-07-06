import React, { useCallback, useEffect, useState } from 'react';

import useEvents from '@/hooks/use-events';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';

const SelectRectComponent = ({ rootPath }: { rootPath: string }): React.ReactElement => {
  const selecting = useSelectStore((state) => state.isSelecting);
  const setSelecting = useSelectStore((state) => state.setSelecting);
  const selectRect = useSelectStore((state) => state.selectingRect);
  const setSelectRect = useSelectStore((state) => state.setSelectingRect);
  const start = useSelectStore((state) => state.clickStart);
  const setStart = useSelectStore((state) => state.setClickStart);
  const selectContext = useSelectStore((state) => state.selectRectContext);

  const getWindow = useProcessesStore((state) => state.getWindow);

  const { registerEvents } = useEvents();

  const [isVisible, setIsVisible] = useState(false);

  const localContext = rootPath === '/Desktop' ? 'desktop' : 'folder';
  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return;
      setSelecting(true);
      setSelectRect({ size: { width: 0, height: 0 }, position: { x: 0, y: 0 } });
    },
    [setSelecting, setSelectRect],
  );

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

  const getMouseClickStart = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      if (localContext !== selectContext) return;
      const { folderX, folderY } = getFolderPosition();
      const x = event.clientX - folderX;
      const y = event.clientY - folderY;
      setStart({ x, y });
    },
    [setStart, getFolderPosition, localContext, selectContext],
  );

  const drawSelectRect = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      if (!selecting) return;
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
    [selecting, start, setSelectRect, getFolderPosition, selectContext],
  );

  const handleMouseUp = useCallback(() => {
    setSelecting(false);
    setIsVisible(false);
  }, [setSelecting]);

  useEffect(() => {
    registerEvents('mousedown', [handleMouseDown, getMouseClickStart]);
    registerEvents('mousemove', [drawSelectRect]);
    registerEvents('mouseup', [handleMouseUp]);
  }, [registerEvents, handleMouseDown, getMouseClickStart, drawSelectRect, handleMouseUp]);

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

const SelectRect = React.memo(SelectRectComponent);
export default SelectRect;
