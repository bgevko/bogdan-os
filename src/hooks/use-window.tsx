import { useState, useEffect, useCallback } from 'react';

import { TASKBAR_HEIGHT } from '@/themes';
import { Size } from '@/types/units';

// eslint-disable-next-line no-shadow
export enum ResizeDirection {
  NONE = 'NONE',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  TOP = 'TOP',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
}

// window state hook return types
interface WindowState {
  isAnimatingResize: boolean;
  maxed: boolean;
  position: { x: number; y: number };
  dimensions: { width: number; height: number };
  handleMouseDownResize: (direction: ResizeDirection) => void;
  handleMouseDownMove: () => void;
  handleWindowFullSize: () => void;
}

export const useWindowState = (minSize: Size): WindowState => {
  const [position, setPosition] = useState({ x: 300, y: 300 });
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  const [dragging, setDragging] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<ResizeDirection>(ResizeDirection.NONE);
  const [lastPosBeforeMaxed, setLastPosBeforeMaxed] = useState({ x: 0, y: 0 });
  const [lastSizeBeforeMaxed, setLastSizeBeforeMaxed] = useState({ width: 0, height: 0 });
  const [lastPosBeforeMin, setLastPosBeforeMin] = useState({ x: 0, y: 0 });
  const [lastSizeBeforeMin, setLastSizeBeforeMin] = useState({
    width: window.innerWidth,
    height: window.innerHeight - TASKBAR_HEIGHT,
  });
  const [maxed, setMaxed] = useState(false);
  const [isAnimatingResize, setIsAnimatingResize] = useState(false);

  const handleMouseDownResize = (direction: ResizeDirection) => {
    setResizeDirection(direction);
  };

  const handleMouseDownMove = () => {
    setDragging(true);
  };

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      setStart({ x: event.clientX - position.x, y: event.clientY - position.y });
    },
    [position],
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
    setResizeDirection(ResizeDirection.NONE);
  }, []);

  const handleWindowMove = useCallback(
    (event: MouseEvent) => {
      if (!dragging) return;
      const newX = event.clientX - start.x;
      const newY = event.clientY - start.y;
      const clampedX = Math.max(0, Math.min(newX, window.innerWidth - dimensions.width));
      const clampedY = Math.max(0, Math.min(newY, window.innerHeight - dimensions.height));
      setPosition({ x: clampedX, y: clampedY });
    },
    [dragging, start, dimensions],
  );

  const handleWindowResizeRight = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.RIGHT) return;
      const newWidth = event.clientX - position.x;
      const clampedWidth = Math.max(300, Math.min(newWidth, window.innerWidth - position.x));
      setDimensions({ width: clampedWidth, height: dimensions.height });
    },
    [resizeDirection, position, dimensions],
  );

  const handleWindowResizeBottom = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM) return;
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setDimensions({ width: dimensions.width, height: clampedHeight });
    },
    [resizeDirection, position, dimensions],
  );

  const handleWindowResizeLeft = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.LEFT) return;
      const newX = event.clientX - start.x;
      const maxClampledX = dimensions.width + position.x - minSize.width;
      const clampedX = Math.max(0, Math.min(newX, maxClampledX));
      const newWidth = dimensions.width + position.x - clampedX;
      setDimensions({ width: newWidth, height: dimensions.height });
      setPosition({ x: clampedX, y: position.y });
    },
    [resizeDirection, start, position, dimensions, minSize.width],
  );

  const handleWindowResizeTop = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.TOP) return;
      const newY = event.clientY - start.y;
      const maxClampledY = dimensions.height + position.y - minSize.height;
      const clampedY = Math.max(0, Math.min(newY, maxClampledY));
      const newHeight = dimensions.height + position.y - clampedY;
      setDimensions({ width: dimensions.width, height: newHeight });
      setPosition({ x: position.x, y: clampedY });
    },
    [resizeDirection, start, position, dimensions, minSize.height],
  );

  const handleWindowResizeTopLeft = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.TOP_LEFT) return;
      const newX = event.clientX - start.x;
      const newY = event.clientY - start.y;
      const maxClampledX = dimensions.width + position.x - minSize.width;
      const maxClampledY = dimensions.height + position.y - minSize.height;
      const clampedX = Math.max(0, Math.min(newX, maxClampledX));
      const clampedY = Math.max(0, Math.min(newY, maxClampledY));
      const newWidth = dimensions.width + position.x - clampedX;
      const newHeight = dimensions.height + position.y - clampedY;
      setDimensions({ width: newWidth, height: newHeight });
      setPosition({ x: clampedX, y: clampedY });
    },
    [resizeDirection, start, position, dimensions, minSize],
  );

  const handleWindowResizeTopRight = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.TOP_RIGHT) return;
      const newY = event.clientY - start.y;
      const maxClampledY = dimensions.height + position.y - minSize.height;
      const clampedY = Math.max(0, Math.min(newY, maxClampledY));
      const newHeight = dimensions.height + position.y - clampedY;
      const newWidth = event.clientX - position.x;
      const clampedWidth = Math.max(300, Math.min(newWidth, window.innerWidth - position.x));
      setDimensions({ width: clampedWidth, height: newHeight });
      setPosition({ x: position.x, y: clampedY });
    },
    [resizeDirection, start, position, dimensions, minSize.height],
  );

  const handleWindowResizeBottomLeft = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM_LEFT) return;
      const newX = event.clientX - start.x;
      const maxClampledX = dimensions.width + position.x - minSize.width;
      const clampedX = Math.max(0, Math.min(newX, maxClampledX));
      const newWidth = dimensions.width + position.x - clampedX;
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setDimensions({ width: newWidth, height: clampedHeight });
      setPosition({ x: clampedX, y: position.y });
    },
    [resizeDirection, start, position, dimensions, minSize.width],
  );

  const handleWindowResizeBottomRight = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM_RIGHT) return;
      const newWidth = event.clientX - position.x;
      const clampedWidth = Math.max(300, Math.min(newWidth, window.innerWidth - position.x));
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setDimensions({ width: clampedWidth, height: clampedHeight });
    },
    [resizeDirection, position],
  );

  const handleWindowFullSize = () => {
    setIsAnimatingResize(true);
    if (maxed) {
      setLastPosBeforeMin({ x: position.x, y: position.y });
      setLastSizeBeforeMin({ width: dimensions.width, height: dimensions.height });
      setDimensions({ width: lastSizeBeforeMaxed.width, height: lastSizeBeforeMaxed.height });
      setPosition({ x: lastPosBeforeMaxed.x, y: lastPosBeforeMaxed.y });
      setMaxed(false);
    } else {
      if (!(dimensions.width === window.innerWidth && dimensions.height === window.innerHeight)) {
        setLastPosBeforeMaxed({ x: position.x, y: position.y });
        setLastSizeBeforeMaxed({ width: dimensions.width, height: dimensions.height });
      }

      setDimensions({ width: lastSizeBeforeMin.width, height: lastSizeBeforeMin.height });
      setPosition({ x: lastPosBeforeMin.x, y: lastPosBeforeMin.y });
      setMaxed(true);
    }
    setTimeout(() => {
      setIsAnimatingResize(false);
    }, 200);
  };

  const handleSelectStart = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('contextmenu', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('contextmenu', handleMouseUp);
    };
  }, [handleMouseUp]);

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown]);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleWindowMove);
      document.addEventListener('selectstart', handleSelectStart);
    }
    return () => {
      window.removeEventListener('mousemove', handleWindowMove);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, [dragging, handleMouseUp, handleWindowMove, handleSelectStart]);

  useEffect(() => {
    if (resizeDirection !== ResizeDirection.NONE) {
      document.addEventListener('selectstart', handleSelectStart);
    }
    switch (resizeDirection) {
      case ResizeDirection.NONE: {
        return () => {
          document.removeEventListener('selectstart', handleSelectStart);
        };
      }
      case ResizeDirection.RIGHT: {
        window.addEventListener('mousemove', handleWindowResizeRight);

        return () => {
          window.removeEventListener('mousemove', handleWindowResizeRight);
        };
      }
      case ResizeDirection.BOTTOM: {
        window.addEventListener('mousemove', handleWindowResizeBottom);
        return () => {
          window.removeEventListener('mousemove', handleWindowResizeBottom);
        };
      }
      case ResizeDirection.LEFT: {
        window.addEventListener('mousemove', handleWindowResizeLeft);
        return () => {
          window.removeEventListener('mousemove', handleWindowResizeLeft);
        };
      }
      case ResizeDirection.TOP: {
        window.addEventListener('mousemove', handleWindowResizeTop);
        return () => {
          window.removeEventListener('mousemove', handleWindowResizeTop);
        };
      }
      case ResizeDirection.TOP_LEFT: {
        window.addEventListener('mousemove', handleWindowResizeTopLeft);
        return () => {
          window.removeEventListener('mousemove', handleWindowResizeTopLeft);
        };
      }
      case ResizeDirection.TOP_RIGHT: {
        window.addEventListener('mousemove', handleWindowResizeTopRight);
        return () => {
          window.removeEventListener('mousemove', handleWindowResizeTopRight);
        };
      }
      case ResizeDirection.BOTTOM_LEFT: {
        window.addEventListener('mousemove', handleWindowResizeBottomLeft);
        return () => {
          window.removeEventListener('mousemove', handleWindowResizeBottomLeft);
        };
      }
      case ResizeDirection.BOTTOM_RIGHT: {
        window.addEventListener('mousemove', handleWindowResizeBottomRight);
        return () => {
          window.removeEventListener('mousemove', handleWindowResizeBottomRight);
        };
      }
      default: {
        return () => {
          document.removeEventListener('selectstart', handleSelectStart);
        };
      }
    }
  }, [
    resizeDirection,
    handleSelectStart,
    handleMouseUp,
    handleWindowResizeRight,
    handleWindowResizeBottom,
    handleWindowResizeLeft,
    handleWindowResizeTop,
    handleWindowResizeTopLeft,
    handleWindowResizeTopRight,
    handleWindowResizeBottomLeft,
    handleWindowResizeBottomRight,
  ]);

  return {
    maxed,
    isAnimatingResize,
    position,
    dimensions,
    handleMouseDownResize,
    handleMouseDownMove,
    handleWindowFullSize,
  };
};
