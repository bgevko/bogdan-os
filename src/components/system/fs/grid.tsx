import { type ReactElement, ReactNode, useState } from 'react';
import { useEffect, useCallback } from 'react';

import useEvents from '@/hooks/use-events';
import useFsStore from '@/stores/use-fs-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { type TransferData } from '@/types/file-system';
import cn from '@/utils/format';
import { positionToIndex } from '@/utils/grid';

export const GRID_SIZE = 100;

interface GridProps {
  options?: {
    isDesktop?: boolean;
    flow?: 'row' | 'column';
  };
  path: string;
  children: ReactNode;
}

const Grid = ({ children, path, options }: GridProps): ReactElement => {
  const { registerEvents } = useEvents();
  const setGrid = useFsStore((state) => state.setGridStack);
  const setGridIndex = useFsStore((state) => state.setGridIndex);
  const gridState = useFsStore((state) => state.getGridStack(path));
  const setSelected = useFsStore((state) => state.setSelected);

  const [numColumns, setNumColumns] = useState(0);
  const [numRows, setNumRows] = useState(0);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const dropX = event.clientX;
      const dropY = event.clientY;
      const dropIndex = positionToIndex(dropX, dropY, gridState.itemsPerLine, { multiplier: 100 });
      // const elementPaths = event.dataTransfer.getData('text/plain');
      const elementPaths: TransferData[] = JSON.parse(
        event.dataTransfer.getData('text/plain'),
      ) as TransferData[];
      const headElement = elementPaths.find((element) => element.isHead) ?? elementPaths[0];
      const indexDifference = dropIndex - headElement.startingGridIndex;
      for (const element of elementPaths) {
        const elementIndex = element.startingGridIndex + indexDifference;
        setGridIndex(element.path, elementIndex);
      }
    },
    [gridState.itemsPerLine, setGridIndex],
  );

  const setGridSize = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const rows = Math.floor((viewportHeight - TASKBAR_HEIGHT) / GRID_SIZE);
    const columns = Math.floor(viewportWidth / GRID_SIZE);
    setNumColumns(columns);
    setNumRows(rows);
    const itemsPerLine = options?.flow === 'row' ? columns : rows;
    setGrid(path, { itemsPerLine });
  }, [setGrid, path, options?.flow]);

  useEffect(() => {
    setGridSize();
  }, [setGridSize]);

  useEffect(() => {
    registerEvents('resize', [setGridSize]);
  }, [registerEvents, setGridSize]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ol
      className={cn('grid grid-flow-col p-4')}
      style={{
        height: options?.isDesktop ? `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)` : '100%',
        gridTemplateColumns: `repeat(${numColumns.toString()}, ${GRID_SIZE.toString()}px)`,
        gridTemplateRows: `repeat(${numRows.toString()}, ${GRID_SIZE.toString()}px)`,
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onMouseDown={() => {
        setSelected([]);
      }}
    >
      {children}
    </ol>
  );
};

export default Grid;
