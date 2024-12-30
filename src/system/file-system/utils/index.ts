export const getEventTargetDataId = (event: React.MouseEvent): string => {
  let target = event.target as HTMLElement;
  let dataId;
  while (!dataId) {
    dataId = target.dataset.id;
    target = target.parentElement!;
  }
  return dataId;
};

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}
export const roundPosition = (pos: Position, parentWindowSize?: Size): Position => {
  const newPos = {
    x: Math.max(Math.round(pos.x / 100) * 100, 0),
    y: Math.max(Math.round(pos.y / 100) * 100, 0),
  };

  // Nudge back 100 if position is bigger than parent window size
  if (parentWindowSize) {
    while (newPos.x + 100 > parentWindowSize.width) {
      newPos.x = Math.max(newPos.x - 100, 0);
    }
    while (newPos.y + 100 > parentWindowSize.height) {
      newPos.y = Math.max(newPos.y - 100, 0);
    }
  }

  return newPos;
};
