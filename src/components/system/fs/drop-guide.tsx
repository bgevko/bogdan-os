import { type ReactElement } from 'react';

import { ICON_SIZE } from '@/themes';
import { indexToPosition } from '@/utils/grid';

interface DropGuideProps {
  isVisible: boolean;
  index: number;
  itemsPerLine: number;
  offsets: number[];
  padding: number;
}

const GuideSquare = ({ x, y }: { x: number; y: number }): ReactElement => {
  return (
    <span
      className="pointer-events-none absolute border-2 border-dashed border-accent-400 transition-all"
      style={{
        width: `${ICON_SIZE.toString()}px`,
        height: `${ICON_SIZE.toString()}px`,
        transform: `translate(${x.toString()}px, ${y.toString()}px)`,
      }}
    />
  );
};

const DropGuide = ({
  padding,
  isVisible,
  index,
  offsets,
  itemsPerLine,
}: DropGuideProps): ReactElement => {
  return (
    <>
      {isVisible &&
        offsets.map((offset) => (
          <GuideSquare
            key={offset}
            x={
              indexToPosition(index, itemsPerLine, {
                multiplier: 100,
                offsetX: padding,
                offsetY: padding,
                offsetIndex: offset,
              }).x
            }
            y={
              indexToPosition(index, itemsPerLine, {
                multiplier: 100,
                offsetX: padding,
                offsetY: padding,
                offsetIndex: offset,
              }).y
            }
          />
        ))}
    </>
  );
};

export default DropGuide;
