import { Position, Size } from '@/system/file-system/store';
import { TASKBAR_HEIGHT, GRID_CELL_SIZE } from '@/themes';

interface SnapPositionProps {
  parentId: string;
  targetId: string;
  iconPosition: Position;
  parentPosition: Position;
}
export const snapPosition = (snapPositionProps: SnapPositionProps): Position => {
  const { parentId, targetId, iconPosition } = snapPositionProps;
  const snappedPosition = snapPositionWithOffset(iconPosition, { x: 0, y: 0 });
  return clampPositionToBounds(snappedPosition, { width: 0, height: TASKBAR_HEIGHT });
  if (parentId === targetId) {
    return snapPositionWithOffset(iconPosition, { x: 0, y: 0 });
  }

  // const gridCellSize = GRID_CELL_SIZE;
  //
  // // Convert to local coordinates (relative to parentPosition)
  // const localX = iconPosition.x - parentPosition.x;
  // let localY = iconPosition.y - parentPosition.y;
  //
  // if (targetId !== 'desktop') {
  //   localY += WINDOW_HEADER_HEIGHT + WINDOW_PADDING;
  // }
  //
  // // Snap to the nearest grid cell in the local coordinates
  // const snappedLocalX = Math.round(localX / gridCellSize) * gridCellSize;
  // const snappedLocalY = Math.round(localY / gridCellSize) * gridCellSize;
  //
  // // Convert back to global coordinates
  // const yPadding = WINDOW_PADDING;
  // const snappedGlobalX = snappedLocalX + parentPosition.x;
  // const snappedGlobalY =
  //   parentId === 'desktop' && targetId === 'desktop'
  //     ? snappedLocalY + parentPosition.y
  //     : snappedLocalY + parentPosition.y - (WINDOW_HEADER_HEIGHT + yPadding);
  //
  // // Clamp to viewport bounds
  // const winWidth = window.innerWidth;
  // let winHeight = window.innerHeight - TASKBAR_HEIGHT;
  // if (targetId !== 'desktop') {
  //   winHeight -= WINDOW_HEADER_HEIGHT;
  // }
  // const finalX = Math.min(Math.max(snappedGlobalX, 0), winWidth - gridCellSize);
  // const finalY = Math.min(Math.max(snappedGlobalY, 0), winHeight - gridCellSize);
  //
  // return { x: finalX, y: finalY };
};
export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

function snapPositionWithOffset(mousePos: Position, offsetPos?: Position): Position {
  const gridCellSize = GRID_CELL_SIZE;
  const offsetPosX = offsetPos?.x ?? 0;
  const offsetPosY = offsetPos?.y ?? 0;
  const localX = mousePos.x - offsetPosX;
  const localY = mousePos.y - offsetPosY;
  const snappedX = Math.round(localX / gridCellSize) * gridCellSize;
  const snappedY = Math.round(localY / gridCellSize) * gridCellSize;

  return {
    x: snappedX + offsetPosX,
    y: snappedY + offsetPosY,
  };
}

function clampPositionToBounds(snappedPosition: Position, offsetSize?: Size): Position {
  const gridCellSize = GRID_CELL_SIZE;
  const offsetWidth = offsetSize?.width ?? 0;
  const offsetHeight = offsetSize?.height ?? 0;
  const viewportWidth = window.innerWidth - offsetWidth;
  const viewportHeight = window.innerHeight - offsetHeight;
  const maxViewportWidth = Math.floor(viewportWidth / gridCellSize) * gridCellSize - gridCellSize;
  const maxViewportHeight = Math.floor(viewportHeight / gridCellSize) * gridCellSize - gridCellSize;
  const clampedX = Math.min(Math.max(snappedPosition.x, 0), maxViewportWidth);
  const clampedY = Math.min(Math.max(snappedPosition.y, 0), maxViewportHeight);
  return {
    x: clampedX,
    y: clampedY,
  };
}

export const areBoundingBoxesIntersecting = (box1: BoundingBox, box2: BoundingBox): boolean => {
  return (
    box1.x < box2.x + box2.width &&
    box1.x + box1.width > box2.x &&
    box1.y < box2.y + box2.height &&
    box1.y + box1.height > box2.y
  );
};

/**
 * Checks if the overlap area between two bounding boxes exceeds a given threshold.
 * @param box1 - First bounding box
 * @param box2 - Second bounding box
 * @param threshold - Percentage of overlap (0 to 1) required for a valid collision
 * @returns True if the overlap is above the threshold, false otherwise
 */
export const areBoundingBoxesIntersectingAboveThreshold = (
  box1: BoundingBox,
  box2: BoundingBox,
  threshold = 0.5,
): boolean => {
  const overlapX = Math.max(
    0,
    Math.min(box1.x + box1.width, box2.x + box2.width) - Math.max(box1.x, box2.x),
  );
  const overlapY = Math.max(
    0,
    Math.min(box1.y + box1.height, box2.y + box2.height) - Math.max(box1.y, box2.y),
  );
  const overlapArea = overlapX * overlapY;

  const box1Area = box1.width * box1.height;
  const box2Area = box2.width * box2.height;

  const smallerBoxArea = Math.min(box1Area, box2Area);
  const overlapPercentage = overlapArea / smallerBoxArea;

  return overlapPercentage > threshold;
};
