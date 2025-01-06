import { WINDOW_HEADER_HEIGHT, TASKBAR_HEIGHT } from '@/themes';

/*
 ********************************
 *            Helpers           *
 ********************************
 */
interface Position {
  x: number;
  y: number;
}
interface Size {
  width: number;
  height: number;
}
interface Res {
  isOutOfBounds: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
}
function isOutOfBounds(pos: Position, size: Size): Res {
  // I'm generally allowing people to move the window outside of the viewport,
  // within reason.

  // If the window header moves above the top of the viewport, or beyond the
  // taskbar, then it's out of bounds. The rest of the window ca be outside
  // of these areas
  const top = pos.y;
  const bottom = pos.y + WINDOW_HEADER_HEIGHT;
  if (top < 0) {
    return { isOutOfBounds: true, side: 'top' };
  }
  if (bottom > window.innerHeight - TASKBAR_HEIGHT) {
    return { isOutOfBounds: true, side: 'bottom' };
  }

  // For left and right, it's okay for the window header to move partially outside
  // the viewport, but a portion of it should still be visible
  const threshold = 300;
  const left = pos.x;
  const right = pos.x + size.width;
  // if (left < -threshold || right > window.innerWidth + threshold) {
  //   return true;
  // }
  if (left < -threshold) {
    return { isOutOfBounds: true, side: 'left' };
  }
  if (right > window.innerWidth + threshold) {
    return { isOutOfBounds: true, side: 'right' };
  }

  return { isOutOfBounds: false };
}

export function clampToBounds(pos: Position, size: Size): Position {
  const res = isOutOfBounds(pos, size);
  if (!res.isOutOfBounds) return pos;
  const { side } = res;
  if (side === 'top') {
    return { x: pos.x, y: 0 };
  }
  if (side === 'bottom') {
    return { x: pos.x, y: window.innerHeight - 70 - TASKBAR_HEIGHT };
  }
  if (side === 'left') {
    return { x: -300, y: pos.y };
  }
  if (side === 'right') {
    return { x: window.innerWidth - size.width + 300, y: pos.y };
  }
  return pos;
}
