import { useState, useEffect, useCallback } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';

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
  handleMouseDownResize: (direction: ResizeDirection) => void;
  handleMouseDownMove: () => void;
  handleWindowFullSize: () => void;
  handleWindowMinimizeToggle: () => void;
}

export const useWindowState = (id: string): WindowState => {
  const position = useProcessesStore((state) => state.getWindowPosition(id));
  const size = useProcessesStore((state) => state.getWindowSize(id));
  const maximized = useProcessesStore((state) => state.getWindowMaximized(id));
  const minSize = useProcessesStore((state) => state.getWindowMinSize(id));
  const setIsAnimating = useProcessesStore((state) => state.setIsAnimating);
  const setPosition = useProcessesStore((state) => state.setWindowPosition);
  const setSize = useProcessesStore((state) => state.setWindowSize);
  const setMaximized = useProcessesStore((state) => state.setWindowMaximized);
  const tabDimensions = useProcessesStore((state) => state.getTabDimensions(id));
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(id));
  const setIsMinimized = useProcessesStore((state) => state.setIsMinimized);
  const setOpacity = useProcessesStore((state) => state.setOpacity);

  const [start, setStart] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<ResizeDirection>(ResizeDirection.NONE);
  const [lastPosBeforeMaxed, setLastPosBeforeMaxed] = useState({ x: 0, y: 0 });
  const [lastSizeBeforeMaxed, setLastSizeBeforeMaxed] = useState({ width: 0, height: 0 });
  const [lastPosBeforeUnmaxed, setLastPosBeforeMin] = useState({ x: 0, y: 0 });
  const [lastSizeBeforeUnmaxed, setLastSizeBeforeMin] = useState({
    width: window.innerWidth,
    height: window.innerHeight - TASKBAR_HEIGHT,
  });
  const [lastPos, setLastPos] = useState(position);
  const [lastSize, setLastSize] = useState(size);

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
      const clampedX = Math.max(0, Math.min(newX, window.innerWidth - size.width));
      const clampedY = Math.max(0, Math.min(newY, window.innerHeight - size.height));
      setPosition(id, { x: clampedX, y: clampedY });
    },
    [dragging, start, size, id, setPosition],
  );

  const handleWindowResizeRight = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.RIGHT) return;
      const newWidth = Math.max(event.clientX - position.x, minSize.width);
      const clampedWidth = Math.max(300, Math.min(newWidth, window.innerWidth - position.x));
      setSize(id, { width: clampedWidth, height: size.height });
    },
    [resizeDirection, position, size, id, setSize, minSize],
  );

  const handleWindowResizeBottom = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM) return;
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setSize(id, { width: size.width, height: clampedHeight });
    },
    [id, resizeDirection, position, size, setSize],
  );

  const handleWindowResizeLeft = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.LEFT) return;
      const newX = event.clientX - start.x;
      const maxClampledX = size.width + position.x - minSize.width;
      const clampedX = Math.max(0, Math.min(newX, maxClampledX));
      const newWidth = size.width + position.x - clampedX;
      setSize(id, { width: newWidth, height: size.height });
      setPosition(id, { x: clampedX, y: position.y });
    },
    [resizeDirection, setPosition, setSize, id, start, position, size, minSize.width],
  );

  const handleWindowResizeTop = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.TOP) return;
      const newY = event.clientY - start.y;
      const maxClampledY = size.height + position.y - minSize.height;
      const clampedY = Math.max(0, Math.min(newY, maxClampledY));
      const newHeight = size.height + position.y - clampedY;
      setSize(id, { width: size.width, height: newHeight });
      setPosition(id, { x: position.x, y: clampedY });
    },
    [id, setSize, setPosition, resizeDirection, start, position, size, minSize.height],
  );

  const handleWindowResizeTopLeft = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.TOP_LEFT) return;
      const newX = event.clientX - start.x;
      const newY = event.clientY - start.y;
      const maxClampledX = size.width + position.x - minSize.width;
      const maxClampledY = size.height + position.y - minSize.height;
      const clampedX = Math.max(0, Math.min(newX, maxClampledX));
      const clampedY = Math.max(0, Math.min(newY, maxClampledY));
      const newWidth = size.width + position.x - clampedX;
      const newHeight = size.height + position.y - clampedY;
      setSize(id, { width: newWidth, height: newHeight });
      setPosition(id, { x: clampedX, y: clampedY });
    },
    [resizeDirection, id, start, position, setPosition, setSize, size, minSize],
  );

  const handleWindowResizeTopRight = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.TOP_RIGHT) return;
      const newY = event.clientY - start.y;
      const maxClampledY = size.height + position.y - minSize.height;
      const clampedY = Math.max(0, Math.min(newY, maxClampledY));
      const newHeight = size.height + position.y - clampedY;
      const newWidth = event.clientX - position.x;
      const clampedWidth = Math.max(300, Math.min(newWidth, window.innerWidth - position.x));
      setSize(id, { width: clampedWidth, height: newHeight });
      setPosition(id, { x: position.x, y: clampedY });
    },
    [resizeDirection, setSize, setPosition, id, start, position, size, minSize.height],
  );

  const handleWindowResizeBottomLeft = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM_LEFT) return;
      const newX = event.clientX - start.x;
      const maxClampledX = size.width + position.x - minSize.width;
      const clampedX = Math.max(0, Math.min(newX, maxClampledX));
      const newWidth = size.width + position.x - clampedX;
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setSize(id, { width: newWidth, height: clampedHeight });
      setPosition(id, { x: clampedX, y: position.y });
    },
    [resizeDirection, id, setSize, setPosition, start, position, size, minSize.width],
  );

  const handleWindowResizeBottomRight = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM_RIGHT) return;
      const newWidth = event.clientX - position.x;
      const clampedWidth = Math.max(300, Math.min(newWidth, window.innerWidth - position.x));
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setSize(id, { width: clampedWidth, height: clampedHeight });
    },
    [resizeDirection, id, setSize, position],
  );

  const handleWindowFullSize = useCallback(() => {
    setIsAnimating(id, true);
    if (maximized) {
      setLastPosBeforeMin({ x: position.x, y: position.y });
      setLastSizeBeforeMin({ width: size.width, height: size.height });
      setSize(id, { width: lastSizeBeforeMaxed.width, height: lastSizeBeforeMaxed.height });
      setPosition(id, { x: lastPosBeforeMaxed.x, y: lastPosBeforeMaxed.y });
      setMaximized(id, false);
    } else {
      if (!(size.width === window.innerWidth && size.height === window.innerHeight)) {
        setLastPosBeforeMaxed({ x: position.x, y: position.y });
        setLastSizeBeforeMaxed({ width: size.width, height: size.height });
      }

      setSize(id, { width: lastSizeBeforeUnmaxed.width, height: lastSizeBeforeUnmaxed.height });
      setPosition(id, { x: lastPosBeforeUnmaxed.x, y: lastPosBeforeUnmaxed.y });
      setMaximized(id, true);
    }
    setTimeout(() => {
      setIsAnimating(id, false);
    }, 200);
  }, [
    id,
    maximized,
    position,
    size,
    setSize,
    setPosition,
    setMaximized,
    setIsAnimating,
    lastSizeBeforeMaxed,
    lastPosBeforeMaxed,
    lastSizeBeforeUnmaxed,
    lastPosBeforeUnmaxed,
  ]);

  const handleWindowMinimizeToggle = useCallback(() => {
    const { x, y, width, height } = tabDimensions;
    setIsAnimating(id, true);

    if (isMinimized) {
      setIsMinimized(id, false);
      setPosition(id, lastPos);
      setSize(id, lastSize);
      setOpacity(id, 1);
      setTimeout(() => {
        setIsAnimating(id, false);
      }, 200);
    } else {
      setLastPos(position);
      setLastSize(size);
      setPosition(id, { x, y });
      setSize(id, { width, height });
      setOpacity(id, 0);
      setTimeout(() => {
        setIsAnimating(id, false);
        setIsMinimized(id, true);
      }, 200);
    }
  }, [
    id,
    isMinimized,
    lastPos,
    lastSize,
    position,
    size,
    setIsAnimating,
    setPosition,
    setSize,
    setLastPos,
    setLastSize,
    setIsMinimized,
    tabDimensions,
    setOpacity,
  ]);

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
    handleMouseDownResize,
    handleMouseDownMove,
    handleWindowFullSize,
    handleWindowMinimizeToggle,
  };
};
