import { useState, useMemo, useEffect, useCallback } from 'react';

import useEvents from '@/hooks/use-events';
import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { Window } from '@/types/units';
import { WindowMax, WindowsEqualOrGreater } from '@/utils/compare';

interface ReturnTypes {
  toggleMaximizeWindow: () => void;
  toggleMinimizeWindow: () => void;
}

const useMaxMin = (path: string): ReturnTypes => {
  const position = useProcessesStore((state) => state.getWindowPosition(path));

  const size = useProcessesStore((state) => state.getWindowSize(path));
  const minSize = useProcessesStore((state) => state.getWindowMinSize(path));

  const defaultWindow = useProcessesStore((state) => state.getDefaultWindow(path));

  const isMaximized = useProcessesStore((state) => state.getIsMaximized(path));
  const setIsMaximized = useProcessesStore((state) => state.setIsMaximized);

  const isMinimized = useProcessesStore((state) => state.getIsMinimized(path));
  const setIsMinimized = useProcessesStore((state) => state.setIsMinimized);

  const unMaximizedWindow = useProcessesStore((state) => state.getUnmaximizedWindow(path));
  const setUnmaximizedWindow = useProcessesStore((state) => state.setUnmaximizedWindow);
  const setWindow = useProcessesStore((state) => state.setWindow);

  const unMinimizedWindow = useProcessesStore((state) => state.getUnminimizedWindow(path));
  const setUnminimizedWindow = useProcessesStore((state) => state.setUnminimizedWindow);

  const minimizedWindow = useProcessesStore((state) => state.getMinimizedWindow(path));

  const setIsAnimating = useProcessesStore((state) => state.setIsAnimating);
  const setOpacity = useProcessesStore((state) => state.setOpacity);

  const { registerEvents } = useEvents();

  const [myViewport, setMyViewport] = useState<Window>({
    size: {
      width: window.innerWidth,
      height: window.innerHeight - TASKBAR_HEIGHT,
    },
    position: {
      x: 0,
      y: 0,
    },
  });

  const myWindow = useMemo(() => {
    return {
      position,
      size,
    };
  }, [position, size]);

  const handleUpdateViewport = useCallback(() => {
    setMyViewport({
      size: {
        width: window.innerWidth,
        height: window.innerHeight - TASKBAR_HEIGHT,
      },
      position: {
        x: 0,
        y: 0,
      },
    });
  }, []);

  const toggleMaximizeWindow = useCallback(() => {
    setIsAnimating(path, true);
    if (isMaximized) {
      if (WindowsEqualOrGreater(unMaximizedWindow, myViewport)) {
        setWindow(path, defaultWindow);
      } else {
        setWindow(path, WindowMax(defaultWindow, unMaximizedWindow));
      }
      setIsMaximized(path, false);
    } else {
      if (WindowsEqualOrGreater(unMaximizedWindow, myViewport)) {
        const minWindowSize = {
          position: myWindow.position,
          size: minSize,
        };
        setUnmaximizedWindow(path, WindowMax(minWindowSize, myWindow));
      } else {
        setUnmaximizedWindow(path, myWindow);
      }
      setWindow(path, myViewport);
      setIsMaximized(path, true);
    }
    setTimeout(() => {
      setIsAnimating(path, false);
    }, 200);
  }, [
    path,
    isMaximized,
    myViewport,
    unMaximizedWindow,
    myWindow,
    minSize,
    defaultWindow,
    setIsAnimating,
    setIsMaximized,
    setUnmaximizedWindow,
    setWindow,
  ]);

  const toggleMinimizeWindow = useCallback(() => {
    setIsAnimating(path, true);
    if (isMinimized) {
      setWindow(path, unMinimizedWindow);
      setOpacity(path, 1);
      setIsMinimized(path, false);
    } else {
      setUnminimizedWindow(path, myWindow);
      setWindow(path, minimizedWindow);
      setOpacity(path, 0);
      setIsMinimized(path, true);
    }
    setTimeout(() => {
      setIsAnimating(path, false);
    }, 200);
  }, [
    setIsAnimating,
    setIsMinimized,
    setOpacity,
    setWindow,
    path,
    isMinimized,
    myWindow,
    unMinimizedWindow,
    minimizedWindow,
    setUnminimizedWindow,
  ]);

  useEffect(() => {
    registerEvents('resize', [handleUpdateViewport]);
  }, [handleUpdateViewport, registerEvents]);

  return {
    toggleMaximizeWindow,
    toggleMinimizeWindow,
  };
};

export default useMaxMin;
