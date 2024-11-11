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
  const moveTablueaToFirstValidFoundation = useSolitaireStore(
    (state) => state.moveTableauToFirstAvailableFoundation,
  );
  const flipTableauCard = useSolitaireStore((state) => state.flipTableauCard);
  const setDragCards = useSolitaireStore((state) => state.setDragCards);
  const setFromTableauIdx = useSolitaireStore((state) => state.setFromTableauIdx);
  const moveWasteToTableau = useSolitaireStore((state) => state.moveWasteToTableau);
  const moveFoundationToTableau = useSolitaireStore((state) => state.moveFoundationToTableau);
  const moveTableauToTableau = useSolitaireStore((state) => state.moveTableauToTableau);
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
      return;
    }

    if (fromFoundationIdx !== null) {
      moveFoundationToTableau(fromFoundationIdx, tableauIdx);
      return;
    }

    if (fromTableauIdx !== null) {
      const count = dragCards.length;
      moveTableauToTableau(fromTableauIdx, tableauIdx, count);
    }
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
              moveTablueaToFirstValidFoundation(tableauIdx);
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
