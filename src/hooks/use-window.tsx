import { useState, useMemo, useEffect, useCallback } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { Dimensions } from '@/types/units';
import { aNarrowerOrShorterThanB, aWiderOrTallerThanB } from '@/utils/compare';

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
  const setPosition = useProcessesStore((state) => state.setWindowPosition);

  const size = useProcessesStore((state) => state.getWindowSize(id));
  const setSize = useProcessesStore((state) => state.setWindowSize);

  const isMaximized = useProcessesStore((state) => state.getIsMaximized(id));
  const setIsMaximized = useProcessesStore((state) => state.setIsMaximized);

  const isMinimized = useProcessesStore((state) => state.getIsMinimized(id));
  const setIsMinimized = useProcessesStore((state) => state.setIsMinimized);

  const maximizedDimensions = useProcessesStore((state) => state.getMaximizedDimensions(id));
  const setMaximizedDimensions = useProcessesStore((state) => state.setMaximizedDimensions);

  const unmaximizedDimensions = useProcessesStore((state) => state.getUnmaximizedDimensions(id));
  const setUnmaximizedDimensions = useProcessesStore((state) => state.setUnmaximizedDimensions);

  const unminimizedDimensions = useProcessesStore((state) => state.getUnminimizedDimensions(id));
  const setUnminimizedDimensions = useProcessesStore((state) => state.setUnminimizedDimensions);

  const setWindowDimensions = useProcessesStore((state) => state.setWindowDimensions);
  const defaultDimensions = useProcessesStore((state) => state.getDefaultDimensions(id));

  const minimizedDimensions = useProcessesStore((state) => state.getMinimizedDimensions(id));

  const minSize = useProcessesStore((state) => state.getWindowMinSize(id));
  const setIsAnimating = useProcessesStore((state) => state.setIsAnimating);
  const setOpacity = useProcessesStore((state) => state.setOpacity);

  const [start, setStart] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<ResizeDirection>(ResizeDirection.NONE);

  const viewportDimensions: Dimensions = useMemo(() => {
    return {
      size: {
        width: window.innerWidth,
        height: window.innerHeight - TASKBAR_HEIGHT,
      },
      position: {
        x: 0,
        y: 0,
      },
    };
  }, []);

  const windowDimensions = useMemo(() => {
    return {
      position,
      size,
    };
  }, [position, size]);

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
      setIsMaximized(id, false);
    },
    [resizeDirection, position, size, id, setSize, minSize, setIsMaximized],
  );

  const handleWindowResizeBottom = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM) return;
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setSize(id, { width: size.width, height: clampedHeight });
      setIsMaximized(id, false);
    },
    [id, resizeDirection, position, size, setSize, setIsMaximized],
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
      setIsMaximized(id, false);
    },
    [
      resizeDirection,
      setPosition,
      setSize,
      id,
      start,
      position,
      size,
      minSize.width,
      setIsMaximized,
    ],
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
      setIsMaximized(id, false);
    },
    [
      id,
      setSize,
      setPosition,
      resizeDirection,
      start,
      position,
      size,
      minSize.height,
      setIsMaximized,
    ],
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
      setIsMaximized(id, false);
    },
    [resizeDirection, id, start, position, setPosition, setSize, size, minSize, setIsMaximized],
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
      setIsMaximized(id, false);
    },
    [
      resizeDirection,
      setSize,
      setPosition,
      id,
      start,
      position,
      size,
      minSize.height,
      setIsMaximized,
    ],
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
      setIsMaximized(id, false);
    },
    [
      resizeDirection,
      id,
      setSize,
      setPosition,
      start,
      position,
      size,
      minSize.width,
      setIsMaximized,
    ],
  );

  const handleWindowResizeBottomRight = useCallback(
    (event: MouseEvent) => {
      if (resizeDirection !== ResizeDirection.BOTTOM_RIGHT) return;
      const newWidth = event.clientX - position.x;
      const clampedWidth = Math.max(300, Math.min(newWidth, window.innerWidth - position.x));
      const newHeight = event.clientY - position.y;
      const clampedHeight = Math.max(300, Math.min(newHeight, window.innerHeight - position.y));
      setSize(id, { width: clampedWidth, height: clampedHeight });
      setIsMaximized(id, false);
    },
    [resizeDirection, id, setSize, position, setIsMaximized],
  );

  const handleWindowFullSize = useCallback(() => {
    setIsAnimating(id, true);
    if (isMaximized) {
      setWindowDimensions(id, unmaximizedDimensions);
      setIsMaximized(id, false);
    } else {
      setUnmaximizedDimensions(id, windowDimensions);
      setWindowDimensions(id, viewportDimensions);
      setIsMaximized(id, true);
    }
    setTimeout(() => {
      setIsAnimating(id, false);
    }, 200);
  }, [
    id,
    isMaximized,
    viewportDimensions,
    unmaximizedDimensions,
    windowDimensions,
    setIsAnimating,
    setIsMaximized,
    setUnmaximizedDimensions,
    setWindowDimensions,
  ]);

  const handleWindowMinimizeToggle = useCallback(() => {
    setIsAnimating(id, true);
    if (isMinimized) {
      setWindowDimensions(id, unminimizedDimensions);
      setOpacity(id, 1);
      setIsMinimized(id, false);
    } else {
      setUnminimizedDimensions(id, windowDimensions);
      setWindowDimensions(id, minimizedDimensions);
      setOpacity(id, 0);
      setIsMinimized(id, true);
    }
    setTimeout(() => {
      setIsAnimating(id, false);
    }, 200);
  }, [
    setIsAnimating,
    setIsMinimized,
    setOpacity,
    setWindowDimensions,
    id,
    isMinimized,
    windowDimensions,
    unminimizedDimensions,
    minimizedDimensions,
    setUnminimizedDimensions,
  ]);

  const handleSelectStart = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    if (
      aNarrowerOrShorterThanB(unmaximizedDimensions, minSize) ||
      aWiderOrTallerThanB(unmaximizedDimensions, viewportDimensions)
    ) {
      setUnmaximizedDimensions(id, defaultDimensions);
    }
  }, [
    id,
    maximizedDimensions,
    unmaximizedDimensions,
    minSize,
    setMaximizedDimensions,
    setUnmaximizedDimensions,
    defaultDimensions,
    viewportDimensions,
  ]);

  // Handler for keeping minimized and unminimized window sizes appropriate
  useEffect(() => {
    // Reset default unminimized size to default if it ever becomes smaller than the minimum allowed size
    if (aNarrowerOrShorterThanB(unminimizedDimensions, minSize)) {
      setUnminimizedDimensions(id, defaultDimensions);
    }
  }, [id, unminimizedDimensions, defaultDimensions, minSize, setUnminimizedDimensions]);

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
