/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback, useEffect } from 'react';

import Card from '@/solitaire/components/card';
import useSolitaireStore from '@/solitaire/store';

interface WasteStackProps {
  cards: number[];
  onClick?: () => void;
}

const WasteStackBase = ({ cards, onClick }: WasteStackProps): React.ReactElement => {
  const moveWasteToFirstAvailableFoundation = useSolitaireStore(
    (state) => state.moveWasteToFirstAvailableFoundation,
  );
  const moveTableauToFirstAvailableFoundation = useSolitaireStore(
    (state) => state.moveTableauToFirstAvailableFoundation,
  );
  const setWinningConditionIfWon = useSolitaireStore((state) => state.setWinningConditionIfWon);

  const setDragCards = useSolitaireStore((state) => state.setDragCards);
  const isEmpty = cards.length === 0;
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [cardOffset, setCardOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      if (isEmpty) return;
      setDragStartPos({ x: event.clientX, y: event.clientY });
      setIsDragging(true);
      setDragCards([cards.at(-1)!]);
    },
    [cards, setDragCards, isEmpty],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setCardOffset({ x: 0, y: 0 });
    setDragCards([]);
  }, [setDragCards]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDragging) {
        setCardOffset({
          x: event.clientX - dragStartPos.x,
          y: event.clientY - dragStartPos.y,
        });
      }
    },
    [isDragging, dragStartPos],
  );

  const handleAutoMoveToFoundation = useCallback(async () => {
    /*
     * In classic solitaire, double-clicking or right-clicking a card in the waste stack would send it to the foundation when possible
     * After the move, top cards from the waste and all tableau piles would also be checked for valid moves. This loop would continue until no more moves are possible
     * This greatly improves the flow of the game, especially toward the end where the user needs to drag a bunch of cards to the foundation
     * */

    // Helper function to create a delay
    // eslint-disable-next-line no-promise-executor-return
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    if (moveWasteToFirstAvailableFoundation()) {
      // Loop with a delay as long as either waste or any tableau pile has a valid move to foundation
      while (
        moveWasteToFirstAvailableFoundation() ||
        [0, 1, 2, 3, 4, 5, 6].some((index) => moveTableauToFirstAvailableFoundation(index))
      ) {
        // Add a delay between each loop iteration to create the cascading effect
        // eslint-disable-next-line no-await-in-loop
        await delay(50);
      }
    }
    // Set winning condition if won
    setWinningConditionIfWon();
  }, [
    moveWasteToFirstAvailableFoundation,
    moveTableauToFirstAvailableFoundation,
    setWinningConditionIfWon,
  ]);
  // Listen for mousemove and mouseup events
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleDragEnd);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging, handleMouseMove, handleDragEnd]);

  // Stack effect
  const stackPeakCount = cards.length >= 21 ? 2 : cards.length >= 11 ? 1 : 0;
  const topCardIndex = cards.length - 1;
  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        className="relative rounded-lg"
        style={{
          zIndex: isDragging ? 100 : 0,
          pointerEvents: isDragging ? 'none' : 'auto',
        }}
        onClick={() => onClick?.()}
      >
        {isEmpty ? (
          <div className="h-[145px] w-[100px]" />
        ) : (
          <div className="relative w-[100px]">
            {cards.map((cardValue, index) => {
              const cardPositionFromTop = cards.length - 1 - index; // 0 for top card
              let offsetX = 0;
              let offsetY = 0;

              // Apply stack effect offsets based on card's position
              if (stackPeakCount >= 1 && cardPositionFromTop === 1) {
                // Second card from top
                offsetY = -2;
              } else if (stackPeakCount >= 2 && cardPositionFromTop === 2) {
                // Third card from top
                offsetY = -4;
              }

              // Apply drag offset to the top card
              if (index === topCardIndex) {
                offsetX = cardOffset.x;
                offsetY += cardOffset.y;
              }

              return (
                <Card
                  key={index}
                  value={cardValue}
                  className="absolute"
                  offsetX={offsetX}
                  offsetY={offsetY}
                  onDoubleClick={() => {
                    handleAutoMoveToFoundation();
                  }}
                  onContextMenu={(event: React.MouseEvent) => {
                    event.preventDefault();
                    handleAutoMoveToFoundation();
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

const WasteStack = React.memo(WasteStackBase);
export default WasteStack;
