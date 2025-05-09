import React, { useEffect, useRef } from 'react';

interface WorkerMessage {
  type: 'init' | 'frame';
}

const NES = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./nes.worker.js', import.meta.url), { type: 'module' });
    workerRef.current = worker;

    worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
      if (e.data.type === 'frame') {
        console.log('Got frame from worker');
      }

      if (e.data.type === 'init') {
        console.log('Worker is ready');
        animationIdRef.current = requestAnimationFrame(frame);
      }
    };

    worker.postMessage({ type: 'init' });

    const frame = () => {
      worker.postMessage({ type: 'frame' });
      animationIdRef.current = requestAnimationFrame(frame);
    };

    return () => {
      if (animationIdRef.current != null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      worker.terminate();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas ref={canvasRef} width={256} height={240} />
    </div>
  );
};

export default NES;
