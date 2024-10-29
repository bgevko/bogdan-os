import { type ReactElement, useCallback, useMemo } from 'react';

import useDragStore from '@/stores/use-drag-store';
import useGridStore from '@/stores/use-grid-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import { ICON_SIZE, TASKBAR_HEIGHT, WINDOW_HEADER_HEIGHT } from '@/themes';
import { indexToPosition } from '@/utils/grid';

interface DropGuideProps {
  path: string;
}

const DropGuide = ({ path }: DropGuideProps): ReactElement => {
  const getWindowPos = useProcessesStore((state) => state.getWindow);
  const dragContext = useMouseStore((state) => state.dragContext);
  const guideIndex = useDragStore((state) => state.guideIndex);
  const isDragging = useDragStore((state) => state.isDragging);
  const dragStartContext = useDragStore((state) => state.dragStartContext);
  const dragoverPath = useDragStore((state) => state.dragoverPath);
  const offsets = useDragStore((state) => state.groupSpacingOffsets);
  const getLineSize = useGridStore((state) => state.getLineSize);
  const componentContext = path === '/Desktop' ? 'desktop' : 'folder';
  const isFocused = useProcessesStore((state) => state.getIsFocused(path));

  const calcPos = useCallback(
    (offsetIndex: number) => {
      let myOffset = { x: 0, y: 0 };

      // Desktop to folder case
      if (componentContext === 'desktop' && dragContext === 'folder') {
        const dragoverWindowPos = getWindowPos(dragoverPath);
        myOffset = {
          x: dragoverWindowPos.position.x,
          y: dragoverWindowPos.position.y + TASKBAR_HEIGHT - WINDOW_HEADER_HEIGHT,
        };
      }

      // Folder to desktop case
      else if (componentContext === 'folder' && dragContext === 'desktop') {
        const windowPos = getWindowPos(path);
        myOffset = {
          x: -windowPos.position.x,
          y: -(windowPos.position.y + TASKBAR_HEIGHT - WINDOW_HEADER_HEIGHT),
        };
      }

      const guidePos = indexToPosition(
        guideIndex,
        getLineSize(path),
        myOffset.x,
        myOffset.y,
        offsetIndex,
      );

      return guidePos;
    },
    [componentContext, dragContext, dragoverPath, getLineSize, getWindowPos, guideIndex, path],
  );

  const calculatedZ = useMemo(() => {
    if (!isDragging) return -1;

    // Desktop to desktop
    if (componentContext === 'desktop' && dragContext === 'desktop') {
      return -1;
    }
    // Folder to desktop
    if (componentContext === 'folder' && dragContext === 'desktop') {
      return -1;
    }
    return 100;
  }, [isDragging, componentContext, dragContext]);

  const shouldRender = useMemo(() => {
    if (!isDragging) return false;
    if (dragStartContext !== componentContext) return false;
    if (!isFocused && componentContext === 'folder' && dragContext === 'folder') return false;
    return true;
  }, [isDragging, dragStartContext, componentContext, isFocused, dragContext]);

  if (!shouldRender) return <></>;

  return (
    <>
      {offsets.map((offset) => (
        <span
          key={offset}
          className="pointer-events-none absolute border-2 border-dashed border-accent-400 transition-all"
          style={{
            width: `${ICON_SIZE.width.toString()}px`,
            height: `${ICON_SIZE.height.toString()}px`,
            transform: `translate( ${calcPos(offset).x.toString()}px, ${calcPos(offset).y.toString()}px)`,
            zIndex: calculatedZ,
          }}
        />
      ))}
    </>
  );
};

export default DropGuide;
