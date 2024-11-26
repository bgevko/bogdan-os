/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Card, { CardIcon } from '@/solitaire/components/card';

interface StockStackProps {
  cards: number[];
  onClick?: () => void;
}

const StockStackBase = ({ cards, onClick }: StockStackProps): React.ReactElement => {
  const isEmpty = cards.length === 0;

  // Stack effect
  const emptyStyle = isEmpty ? 'border border-dashed bg-white/10 rounded-[6px] w-[100px]' : '';
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
          <div className={`flex h-[145px] w-[100px] items-center justify-center ${emptyStyle}`}>
            <CardIcon
              iconName="flip"
              isFlipped={false}
              width={50}
              color="white"
              style={{
                transform: 'scaleX(-1)',
                opacity: 0.5,
              }}
            />
          </div>
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
