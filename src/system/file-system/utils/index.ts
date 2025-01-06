import { Position, Size } from '@/system/file-system/store';
import { GRID_CELL_SIZE, WINDOW_HEADER_HEIGHT } from '@/themes';

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TransformProps {
  position: Position;
  sourceOrigin: Position;
  targetOrigin: Position;
}

export function transformPosition(transformProps: TransformProps): Position {
  const { position, sourceOrigin, targetOrigin } = transformProps;
  const x = position.x + (sourceOrigin.x - targetOrigin.x);
  const y = position.y + (sourceOrigin.y - targetOrigin.y);
  return {
    x,
    y,
  };
}

interface SnapProps extends TransformProps {
  sourceId: string;
  targetId: string;
  targetSize: Size;
  finalPositionRelativeTo?: 'source' | 'target';
}
export function snapToTargetGrid({
  position,
  sourceOrigin,
  targetOrigin,
  sourceId,
  targetId,
  targetSize,
  finalPositionRelativeTo = 'source',
}: SnapProps): Position {
  // Apply offsets for taskbar, header, etc.
  const targetOffset = getOffsetsForContext(sourceId, targetId);

  // Convert coordinate system to target grid origin
  const transformedPosition = transformPosition({
    position,
    sourceOrigin,
    targetOrigin: {
      x: targetOrigin.x + targetOffset.x,
      y: targetOrigin.y + targetOffset.y,
    },
  });

  // Snap to target grid
  const snappedPosition = {
    x: roundPosition(transformedPosition.x),
    y: roundPosition(transformedPosition.y),
  };

  // Clamp to target bounds
  const snappedTargetPosition = clampToGridBoundary(snappedPosition, {
    width: targetSize.width,
    height: targetId === 'desktop' ? targetSize.height : targetSize.height - WINDOW_HEADER_HEIGHT,
  });

  // Convert coordinate system back to source grid
  const snappedSourcePosition = transformPosition({
    position: snappedTargetPosition,
    sourceOrigin: {
      x: targetOrigin.x + targetOffset.x,
      y: targetOrigin.y + targetOffset.y,
    },
    targetOrigin: {
      x: sourceOrigin.x,
      y: sourceOrigin.y,
    },
  });
  return finalPositionRelativeTo === 'target' ? snappedTargetPosition : snappedSourcePosition;
}

export function getOffsetsForContext(sourceId: string, targetId: string): Position {
  const sourceIsDesktop = sourceId === 'desktop';
  const targetIsDesktop = targetId === 'desktop';

  // No offset when source is the same
  if (sourceId === targetId) {
    return { x: 0, y: 0 };
  }
  // Desktop -> Directory,
  if (sourceIsDesktop && !targetIsDesktop) {
    return { x: 0, y: WINDOW_HEADER_HEIGHT };
  }

  // Directory -> Desktop,
  if (!sourceIsDesktop && targetIsDesktop) {
    return { x: 0, y: -WINDOW_HEADER_HEIGHT };
  }

  return { x: 0, y: 0 };
}

/**
 * Clamps a snapped grid position to the target grid boundary.
 * @param position - Snapped position
 * @param bounds - Target grid bounds
 * @returns Clamped position, aligned with the grid
 */
function clampToGridBoundary(position: Position, bounds: Size): Position {
  // Get bounds width and height as multiples of grid cell size
  // We subtract one grid cell to account for the icon size
  const boundsWidth = floorPosition(bounds.width) - GRID_CELL_SIZE;
  const boundsHeight = floorPosition(bounds.height) - GRID_CELL_SIZE;
  const [minX, minY] = [0, 0];
  const [maxX, maxY] = [boundsWidth, boundsHeight];
  return {
    x: Math.max(minX, Math.min(maxX, position.x)),
    y: Math.max(minY, Math.min(maxY, position.y)),
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

function floorPosition(n: number): number {
  return Math.floor(n / GRID_CELL_SIZE) * GRID_CELL_SIZE;
}
function roundPosition(n: number): number {
  return Math.round(n / GRID_CELL_SIZE) * GRID_CELL_SIZE;
}
