import { type ReactElement } from 'react';

import { ICON_SIZE } from '@/components/system/fs/fs-icon';
import { indexToPosition } from '@/utils/grid';

interface DropGuideProps {
  isVisible: boolean;
  index: number;
  itemsPerLine: number;
  offsets: number[];
}

const GuideSquare = ({ x, y }: { x: number; y: number }): ReactElement => (
  <span
    className="pointer-events-none absolute border-2 border-dashed border-accent-400 transition-all"
    style={{
      width: `${ICON_SIZE.toString()}px`,
      height: `${ICON_SIZE.toString()}px`,
      transform: `translate(${x.toString()}px, ${y.toString()}px)`,
    }}
  />
);

const DropGuide = ({ isVisible, index, offsets, itemsPerLine }: DropGuideProps): ReactElement => {
  return (
    <>
      {isVisible &&
        offsets.map((offset) => (
          <GuideSquare
            key={offset}
            x={
              indexToPosition(index, itemsPerLine, {
                multiplier: 100,
                offsetX: 16,
                offsetY: 16,
                offsetIndex: offset,
              }).x
            }
            y={
              indexToPosition(index, itemsPerLine, {
                multiplier: 100,
                offsetX: 16,
                offsetY: 16,
                offsetIndex: offset,
              }).y
            }
          />
        ))}
    </>
  );
};

export default DropGuide;
