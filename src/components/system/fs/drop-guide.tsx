import { ReactElement, useMemo } from 'react';

import useDragStore from '@/stores/use-drag-store';
import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMouseStore from '@/stores/use-mouse-store';
import { ICON_SIZE } from '@/themes';
import { indexToPosition } from '@/utils/grid';

const DropGuide = ({ path = '/Desktop' }: { path?: string }): ReactElement | null => {
  const guideIndex = useDragStore((state) => state.guideIndex);
  const isDragging = useDragStore((state) => state.isDragging);
  const dragContext = useMouseStore((state) => state.dragContext);
  const dragoverPath = useDragStore((state) => state.dragoverPath);
  const isDir = useFsStore((state) => state.isDir);
  const getLineSize = useGridStore((state) => state.getLineSize);
  const getGridIndex = useGridStore((state) => state.getIndex);
  const offsets = useDragStore((state) => state.groupSpacingOffsets);

  const positions = useMemo(() => {
    // Use only single guide when dragging over a directory
    if (
      dragContext === 'file-icon' &&
      isDir(dragoverPath) &&
      guideIndex === getGridIndex(dragoverPath)
    ) {
      const { x, y } = indexToPosition(guideIndex, getLineSize(path));
      return [{ x: x * 100 + 24, y: y * 100 + 24 }];
    }

    // Normal case, dragging one or multiple files
    const newPositions = offsets.map((offset) => {
      const { x, y } = indexToPosition(guideIndex + offset, getLineSize(path));
      return { x: x * 100 + 24, y: y * 100 + 24 };
    });
    return newPositions;
  }, [dragContext, dragoverPath, getLineSize, guideIndex, isDir, offsets, path, getGridIndex]);

  if (!isDragging) return null;

  return (
    <>
      {positions.map((position, index) => (
        <span
          key={index}
          className="pointer-events-none absolute border-2 border-dashed border-accent-400 transition-all"
          style={{
            width: `${ICON_SIZE.width.toString()}px`,
            height: `${ICON_SIZE.height.toString()}px`,
            transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
            zIndex: -1,
          }}
        />
      ))}
    </>
  );
};

export default DropGuide;
