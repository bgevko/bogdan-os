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

const useMaxMin = (id: string): ReturnTypes => {
  const position = useProcessesStore((state) => state.getWindowPosition(id));

  const size = useProcessesStore((state) => state.getWindowSize(id));
  const minSize = useProcessesStore((state) => state.getWindowMinSize(id));

  const defaultWindow = useProcessesStore((state) => state.getDefaultWindow(id));

  const isMaximized = useProcessesStore((state) => state.getIsMaximized(id));
  const setIsMaximized = useProcessesStore((state) => state.setIsMaximized);

  const isMinimized = useProcessesStore((state) => state.getIsMinimized(id));
  const setIsMinimized = useProcessesStore((state) => state.setIsMinimized);

  const unMaximizedWindow = useProcessesStore((state) => state.getUnmaximizedWindow(id));
  const setUnmaximizedWindow = useProcessesStore((state) => state.setUnmaximizedWindow);
  const setWindow = useProcessesStore((state) => state.setWindow);

  const unMinimizedWindow = useProcessesStore((state) => state.getUnminimizedWindow(id));
  const setUnminimizedWindow = useProcessesStore((state) => state.setUnminimizedWindow);

  const minimizedWindow = useProcessesStore((state) => state.getMinimizedWindow(id));

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
    setIsAnimating(id, true);
    if (isMaximized) {
      if (WindowsEqualOrGreater(unMaximizedWindow, myViewport)) {
        setWindow(id, defaultWindow);
      } else {
        setWindow(id, WindowMax(defaultWindow, unMaximizedWindow));
      }
      setIsMaximized(id, false);
    } else {
      if (WindowsEqualOrGreater(unMaximizedWindow, myViewport)) {
        const minWindowSize = {
          position: myWindow.position,
          size: minSize,
        };
        setUnmaximizedWindow(id, WindowMax(minWindowSize, myWindow));
      } else {
        setUnmaximizedWindow(id, myWindow);
      }
      setWindow(id, myViewport);
      setIsMaximized(id, true);
    }
    setTimeout(() => {
      setIsAnimating(id, false);
    }, 200);
  }, [
    id,
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
    setIsAnimating(id, true);
    if (isMinimized) {
      setWindow(id, unMinimizedWindow);
      setOpacity(id, 1);
      setIsMinimized(id, false);
    } else {
      setUnminimizedWindow(id, myWindow);
      setWindow(id, minimizedWindow);
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
    setWindow,
    id,
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
