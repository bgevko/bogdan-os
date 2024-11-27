import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

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
      secondsRef.current += 1;
    }, 1000);

    // Clear interval on unmount
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return null; // No UI rendering to avoid re-renders
});

export default Timer;
