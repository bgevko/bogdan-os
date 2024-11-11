/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Card from '@/solitaire/components/card';
import useSolitaireStore from '@/solitaire/store';

interface StockStackProps {
  cards: number[];
  onClick?: () => void;
}

const StockStackBase = ({ cards, onClick }: StockStackProps): React.ReactElement => {
  const moveWasteToFirstAvailableFoundation = useSolitaireStore(
    (state) => state.moveWasteToFirstAvailableFoundation,
  );

  const isEmpty = cards.length === 0;

  // Stack effect
  const stackPeakCount = cards.length >= 21 ? 2 : cards.length >= 11 ? 1 : 0;

  return (
    <>
      <div
        draggable
        onDragStart={(event: React.DragEvent) => {
          event.preventDefault();
        }}
        className="relative rounded-lg"
        onClick={() => onClick?.()}
      >
        {isEmpty ? (
          <div className="h-[145px] w-[100px]" />
        ) : (
          <div className="relative w-[100px]">
            {cards.map((cardValue, index) => {
              const cardPositionFromTop = cards.length - 1 - index; // 0 for top card
              let offsetY = 0;

              // Apply stack effect offsets based on card's position
              if (stackPeakCount >= 1 && cardPositionFromTop === 1) {
                // Second card from top
                offsetY = -2;
              } else if (stackPeakCount >= 2 && cardPositionFromTop === 2) {
                // Third card from top
                offsetY = -4;
              }

              return (
                <Card
                  key={index}
                  value={cardValue}
                  className="absolute"
                  offsetX={0}
                  offsetY={offsetY}
                  onDoubleClick={() => {
                    moveWasteToFirstAvailableFoundation();
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

const StockStack = React.memo(StockStackBase);
export default StockStack;
