import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

import useSolitaireStore from '@/solitaire/store';

export interface TimerHandle {
  getTime: () => number;
  reset: () => void;
}

interface TimerProps {
  initialSeconds: number;
}

const Timer = forwardRef<TimerHandle, TimerProps>(({ initialSeconds }, ref) => {
  const secondsRef = useRef<number>(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseGameFlag = useSolitaireStore((state) => state.getPauseGameFlag());

  // Expose getTime method to parent via ref
  useImperativeHandle(ref, () => ({
    getTime: () => secondsRef.current,
    reset: () => {
      secondsRef.current = 0;
    },
  }));

  useEffect(() => {
    // Start the timer
    intervalRef.current = setInterval(() => {
      if (!pauseGameFlag) {
        secondsRef.current += 1;
      }
    }, 1000);

    // Clear interval on unmount
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [pauseGameFlag]);

  return null; // No UI rendering to avoid re-renders
});

Timer.displayName = 'Timer';

export default Timer;
