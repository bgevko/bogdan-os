/**
 * @description Unit tests for position transform utility function
 * It's used in icon snapping logic
 */
import { it, expect, describe } from 'vitest';

import { type Position } from '@/system/file-system/store';
import { transformPosition } from '@/system/file-system/utils';

describe('Position transformation tests', () => {
  it('transforms desktop to desktop coordinates', () => {
    const desktopOrigin: Position = { x: 0, y: 0 };
    const iconPosition: Position = { x: 150, y: 200 };
    const newPos = transformPosition({
      position: iconPosition,
      sourceOrigin: desktopOrigin,
      targetOrigin: desktopOrigin,
    });
    expect(newPos).toEqual(iconPosition);
  });
  it('transforms desktop to window coordinates', () => {
    const desktopOrigin: Position = { x: 0, y: 0 };
    let windowOrigin: Position = { x: 200, y: 200 };
    let iconPosition: Position = { x: 0, y: 0 };
    let iconPositionForWindow = transformPosition({
      position: iconPosition,
      sourceOrigin: desktopOrigin,
      targetOrigin: windowOrigin,
    });
    expect(iconPositionForWindow).toEqual({ x: -200, y: -200 });

    windowOrigin = { x: 300, y: 400 };
    iconPosition = { x: 150, y: 200 };
    iconPositionForWindow = transformPosition({
      position: iconPosition,
      sourceOrigin: desktopOrigin,
      targetOrigin: windowOrigin,
    });
    expect(iconPositionForWindow).toEqual({ x: -150, y: -200 });
  });
  it('transforms window to same window coordinates', () => {
    const windowOrigin: Position = { x: 200, y: 200 };
    const iconPosition: Position = { x: 0, y: 0 };
    const newPos = transformPosition({
      position: iconPosition,
      sourceOrigin: windowOrigin,
      targetOrigin: windowOrigin,
    });
    expect(newPos).toEqual(iconPosition);
  });
  it('transforms window to another window coordinates', () => {
    const window1Origin: Position = { x: 200, y: 200 };
    const window2Origin: Position = { x: 400, y: 300 };

    const iconPosition1: Position = { x: 0, y: 0 };
    const newPos1 = transformPosition({
      position: iconPosition1,
      sourceOrigin: window1Origin,
      targetOrigin: window2Origin,
    });
    expect(newPos1).toEqual({ x: -200, y: -100 });

    const iconPosition2: Position = { x: 100, y: 100 };
    const newPos2 = transformPosition({
      position: iconPosition2,
      sourceOrigin: window1Origin,
      targetOrigin: window2Origin,
    });
    expect(newPos2).toEqual({ x: -100, y: 0 });
  });
});
