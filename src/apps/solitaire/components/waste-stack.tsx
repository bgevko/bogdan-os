/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useCallback, useEffect } from 'react';

import Card from '@/solitaire/components/card';
import useSolitaireStore from '@/solitaire/store';
import { assertDefined } from '@/utils';

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
  const isHard = useSolitaireStore((state) => state.getDifficulty()) === 'hard';

  const setDragCards = useSolitaireStore((state) => state.setDragCards);
  const isEmpty = cards.length === 0;
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [cardOffset, setCardOffset] = useState({ x: 0, y: 0 });
  const [isOverTopCard, setIsOverTopCard] = useState(false);

  const handleDragStart = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      if (isEmpty || !isOverTopCard) return;
      setDragStartPos({ x: event.clientX, y: event.clientY });
      setIsDragging(true);
      setDragCards([assertDefined(cards.at(-1))]);
    },
    [cards, setDragCards, isEmpty, isOverTopCard],
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

    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    if (moveWasteToFirstAvailableFoundation()) {
      // Loop with a delay as long as either waste or any tableau pile has a valid move to foundation
      while (
        moveWasteToFirstAvailableFoundation() ||
        [0, 1, 2, 3, 4, 5, 6].some((index) => moveTableauToFirstAvailableFoundation(index))
      ) {
        // Add a delay between each loop iteration to create the cascading effect

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
                if (!isHard) {
                  offsetY = -2;
                }
              } else if (
                stackPeakCount >= 2 &&
                cardPositionFromTop === 2 && // Third card from top
                !isHard
              ) {
                offsetY = -4;
              }

              // Apply drag offset to the top card
              if (index === topCardIndex) {
                offsetX = cardOffset.x;
                offsetY += cardOffset.y;
              }

              // In hard mode, player draws 3 cards at a time. We want to offset X to the right so that they can see the
              // two cards below the top card
              if (isHard) {
                // One card, no offset

                // Two cards, top card is offset to the right
                if (cards.length === 2 && index === topCardIndex) {
                  offsetX += 20;
                }

                // Three or more cards, top and second card are offset to the right
                if (cards.length >= 3) {
                  if (index === topCardIndex) {
                    offsetX += 40;
                  }
                  if (index === topCardIndex - 1) {
                    offsetX += 20;
                  }
                }
              }

              return (
                <Card
                  onMouseEnter={() => {
                    setIsOverTopCard(index === topCardIndex);
                  }}
                  onMouseLeave={() => {
                    setIsOverTopCard(false);
                  }}
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
