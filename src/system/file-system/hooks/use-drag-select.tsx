import { useCallback, useState, useEffect } from 'react';

interface Returns {
  selectRectPosition: { x: number; y: number };
  selectRectSize: { width: number; height: number };
  selectRectVisible: boolean;
  handleMouseDown: (event: React.MouseEvent) => void;
}

const UseDragSelect = (): Returns => {
  const [selectRectPosition, setSelectRectPosition] = useState({ x: -1, y: -1 });
  const [selectRectSize, setSelectRectSize] = useState({ width: -1, height: -1 });
  const [selectRectVisible, setSelectRectVisible] = useState(false);
  const [mouseDownStart, setMouseDownStart] = useState({ x: 0, y: 0 });
  const [isSelecting, setIsSelecting] = useState(false);

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    if (event.button !== 0) return;
    const x = event.clientX;
    const y = event.clientY;
    setMouseDownStart({ x, y });
    setSelectRectSize({ width: 0, height: 0 });
    setIsSelecting(true);
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isSelecting) return;
      const width = Math.abs(mouseDownStart.x - event.clientX);
      const height = Math.abs(mouseDownStart.y - event.clientY);
      const x = Math.min(mouseDownStart.x, event.clientX);
      const y = Math.min(mouseDownStart.y, event.clientY);
      setSelectRectSize({ width, height });
      setSelectRectPosition({ x, y });
      setSelectRectVisible(true);
    },
    [mouseDownStart, isSelecting],
  );

  const handleMouseUp = useCallback(() => {
    setIsSelecting(false);
    setSelectRectVisible(false);
    setSelectRectSize({ width: -1, height: -1 });
    setSelectRectPosition({ x: -1, y: -1 });
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return {
    selectRectPosition,
    selectRectSize,
    selectRectVisible,
    handleMouseDown,
  };
};

export default UseDragSelect;
