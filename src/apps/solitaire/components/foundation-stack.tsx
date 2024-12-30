import React, { useCallback, useState, useEffect } from 'react';

import Card from '@/solitaire/components/card';
import useSolitaireStore from '@/solitaire/store';
import cn from '@/utils/format';

interface FoundationStackProps {
  cards: number[];
  foundationIdx: number;
  onClick?: () => void;
}

const FoundationStackBase = ({
  cards,
  foundationIdx,
  onClick,
}: FoundationStackProps): React.ReactElement => {
  const moveWasteToFirstAvailableFoundation = useSolitaireStore(
    (state) => state.moveWasteToFirstAvailableFoundation,
  );
  const setDragCards = useSolitaireStore((state) => state.setDragCards);
  const moveWasteToFoundation = useSolitaireStore((state) => state.moveWasteToFoundation);
  const moveTableauToFoundation = useSolitaireStore((state) => state.moveTableauToFoundation);
  const setFromFoundationIdx = useSolitaireStore((state) => state.setFromFoundationIdx);
  const setWinningConditionIfWon = useSolitaireStore((state) => state.setWinningConditionIfWon);
  const dragCards = useSolitaireStore((state) => state.getDragCards());
  const tableauIdx = useSolitaireStore((state) => state.getFromTableauIdx());
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
      setFromFoundationIdx(foundationIdx);
    },
    [cards, setDragCards, isEmpty, foundationIdx, setFromFoundationIdx],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setCardOffset({ x: 0, y: 0 });
    setDragCards([]);
    setFromFoundationIdx(null);
  }, [setDragCards, setFromFoundationIdx]);

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

  // Stack effect
  const stackPeakCount = cards.length >= 21 ? 2 : cards.length >= 11 ? 1 : 0;
  const emptyStyle = isEmpty ? 'border border-dashed bg-white/10 rounded-[6px] w-[100px]' : '';

  // Handle drop
  const handleDrop = useCallback(() => {
    if (dragCards.length !== 1) return;
    if (tableauIdx === null) {
      moveWasteToFoundation(foundationIdx);
    } else {
      moveTableauToFoundation(tableauIdx, foundationIdx);
    }

    // Check if the game is won
    setWinningConditionIfWon();
  }, [
    dragCards,
    moveWasteToFoundation,
    moveTableauToFoundation,
    foundationIdx,
    tableauIdx,
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
  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onMouseUp={handleDrop}
        style={{
          zIndex: isDragging ? 100 : 0,
          pointerEvents: isDragging ? 'none' : 'auto',
        }}
        className={cn('rounded-lg relative', emptyStyle)}
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

              if (index === cards.length - 1) {
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

const FoundationStack = React.memo(FoundationStackBase);
export default FoundationStack;
