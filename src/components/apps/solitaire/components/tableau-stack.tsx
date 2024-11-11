/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback, useEffect } from 'react';

import Card from '@/solitaire/components/card';
import useSolitaireStore from '@/solitaire/store';

interface TableauStackProps {
  cards: number[];
  tableauIdx: number;
}

const TableauStack = ({ cards, tableauIdx }: TableauStackProps): React.ReactElement => {
  const moveTableauToFirstAvailableFoundation = useSolitaireStore(
    (state) => state.moveTableauToFirstAvailableFoundation,
  );
  const moveWasteToFirstAvailableFoundation = useSolitaireStore(
    (state) => state.moveWasteToFirstAvailableFoundation,
  );
  const flipTableauCard = useSolitaireStore((state) => state.flipTableauCard);
  const setDragCards = useSolitaireStore((state) => state.setDragCards);
  const setFromTableauIdx = useSolitaireStore((state) => state.setFromTableauIdx);
  const moveWasteToTableau = useSolitaireStore((state) => state.moveWasteToTableau);
  const moveFoundationToTableau = useSolitaireStore((state) => state.moveFoundationToTableau);
  const moveTableauToTableau = useSolitaireStore((state) => state.moveTableauToTableau);
  const setWinningConditionIfWon = useSolitaireStore((state) => state.setWinningConditionIfWon);
  const fromFoundationIdx = useSolitaireStore((state) => state.getFromFoundationIdx());
  const fromTableauIdx = useSolitaireStore((state) => state.getFromTableauIdx());
  const dragCards = useSolitaireStore((state) => state.getDragCards());

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [posIdx, setPosIdx] = useState(0);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const isEmpty = cards.length === 0;

  const handleDragStart = useCallback(
    (event: React.MouseEvent, positionIdx: number) => {
      event.preventDefault();
      if (isEmpty || cards[positionIdx] < 0) return;
      setDragStartPos({ x: event.clientX, y: event.clientY });
      setFromTableauIdx(tableauIdx);
      setIsDragging(true);
      setDragCards(cards.slice(positionIdx, cards.length));
      setPosIdx(positionIdx);
    },
    [cards, setDragCards, isEmpty, setFromTableauIdx, tableauIdx],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
    setDragCards([]);
    setPosIdx(0);
    setFromTableauIdx(null);
  }, [setDragCards, setFromTableauIdx]);

  const handleDrop = useCallback(() => {
    if (dragCards.length === 0) return;
    if (fromFoundationIdx === null && fromTableauIdx === null) {
      moveWasteToTableau(tableauIdx);
    } else if (fromFoundationIdx !== null) {
      moveFoundationToTableau(fromFoundationIdx, tableauIdx);
    } else if (fromTableauIdx !== null) {
      const count = dragCards.length;
      moveTableauToTableau(fromTableauIdx, tableauIdx, count);
    }

    // Check if the game is won
  }, [
    fromFoundationIdx,
    fromTableauIdx,
    moveFoundationToTableau,
    moveTableauToTableau,
    moveWasteToTableau,
    tableauIdx,
    dragCards.length,
  ]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDragging) {
        setDragOffset({
          x: event.clientX - dragStartPos.x,
          y: event.clientY - dragStartPos.y,
        });
      }
    },
    [isDragging, dragStartPos],
  );

  const handleAutoMoveToFoundation = useCallback(
    async (tabIdx: number) => {
      /*
       * In classic solitaire, double-clicking or right-clicking a card in the waste stack would send it to the foundation when possible
       * After the move, top cards from the waste and all tableau piles would also be checked for valid moves. This loop would continue until no more moves are possible
       * This greatly improves the flow of the game, especially toward the end where the user needs to drag a bunch of cards to the foundation
       * */

      // Helper function to create a delay
      // eslint-disable-next-line no-promise-executor-return
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

      if (moveTableauToFirstAvailableFoundation(tabIdx)) {
        // Loop with a delay as long as either waste or any tableau pile has a valid move to foundation
        while (
          moveWasteToFirstAvailableFoundation() ||
          [0, 1, 2, 3, 4, 5, 6].some((index) => moveTableauToFirstAvailableFoundation(index))
        ) {
          // Add a delay between each loop iteration to create the cascading effect
          // eslint-disable-next-line no-await-in-loop
          await delay(10);
        }
      }
      // Set the winning condition if the game is won
      setWinningConditionIfWon();
    },
    [
      moveWasteToFirstAvailableFoundation,
      moveTableauToFirstAvailableFoundation,
      setWinningConditionIfWon,
    ],
  );

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

  // Find the index of the first face-up card (positive number)
  let firstFaceUpIndex = cards.findIndex((card) => card >= 0);
  if (firstFaceUpIndex === -1) {
    firstFaceUpIndex = cards.length;
  }
  const unflippedOffset = 10;
  const flippedOffset = 20;

  return (
    <div
      onMouseUp={handleDrop}
      className="relative w-[100px]"
      style={{
        zIndex: isDragging ? 100 : 0,
        pointerEvents: isDragging ? 'none' : 'auto',
      }}
    >
      {cards.map((card, index) => {
        // Determine the offsetY based on whether the card is before or after the first face-up card
        let offsetX = 0;
        let offsetY =
          index <= firstFaceUpIndex
            ? index * unflippedOffset
            : firstFaceUpIndex * unflippedOffset + (index - firstFaceUpIndex) * flippedOffset;

        // for all indices after posIdx, add the dragOffset
        if (isDragging && index >= posIdx) {
          offsetY += dragOffset.y;
          offsetX += dragOffset.x;
        }

        return (
          <Card
            key={card}
            value={card}
            className="absolute"
            offsetX={offsetX}
            offsetY={offsetY}
            handleFlip={() => {
              flipTableauCard(tableauIdx);
            }}
            onDoubleClick={() => {
              // moveTableauToFirstAvailableFoundation(tableauIdx);
              handleAutoMoveToFoundation(tableauIdx);
            }}
            onContextMenu={() => {
              handleAutoMoveToFoundation(tableauIdx);
            }}
            onDragTableauStart={(event: React.DragEvent) => {
              handleDragStart(event, index);
            }}
          />
        );
      })}
    </div>
  );
};

export default TableauStack;
