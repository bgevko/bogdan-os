import { type ReactElement, useCallback } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { ICON_SIZE, TASKBAR_HEIGHT, WINDOW_HEADER_HEIGHT } from '@/themes';
import { indexToPosition } from '@/utils/grid';

interface DropGuideProps {
  path: string;
  context: string;
  isVisible: boolean;
  mouseIndex: number;
  itemsPerLine: number;
  offsets: number[];
  padding: number;
}

const DropGuide = ({
  path,
  context,
  isVisible,
  padding,
  mouseIndex,
  offsets,
  itemsPerLine,
}: DropGuideProps): ReactElement => {
  const getWindowPos = useProcessesStore((state) => state.getWindowPosition);
  const dropContext = useSelectStore((state) => state.dropContext);

  const calcPos = useCallback(
    (offsetIndex: number) => {
      let myOffset = { x: 0, y: 0 };
      if (context === 'folder' && dropContext === 'desktop') {
        const windowPos = getWindowPos(path);
        myOffset = {
          x: windowPos.x,
          y: windowPos.y + TASKBAR_HEIGHT - WINDOW_HEADER_HEIGHT,
        };
      }
      const guidePos = indexToPosition(mouseIndex, itemsPerLine, {
        multiplier: 100,
        offsetX: padding - myOffset.x,
        offsetY: padding - myOffset.y,
        offsetIndex,
      });
      return guidePos;
    },
    [dropContext, getWindowPos, itemsPerLine, mouseIndex, padding, path, context],
  );
  return (
    <>
      {isVisible &&
        offsets.map((offset) => (
          <span
            key={offset}
            className="pointer-events-none absolute border-2 border-dashed border-accent-400 transition-all"
            style={{
              width: `${ICON_SIZE.toString()}px`,
              height: `${ICON_SIZE.toString()}px`,
              transform: `translate( ${calcPos(offset).x.toString()}px, ${calcPos(offset).y.toString()}px)`,
            }}
          />
        ))}
    </>
  );
};

export default DropGuide;
