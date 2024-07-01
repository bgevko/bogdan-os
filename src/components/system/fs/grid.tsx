import { type ReactElement, ReactNode } from 'react';
import { useEffect, useCallback } from 'react';

import useEvents from '@/hooks/use-events';
import useGridStore from '@/stores/use-grid-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { type TransferData } from '@/types';
import cn from '@/utils/format';
import { positionToIndex } from '@/utils/grid';

const GRID_SIZE = 100;

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
  const setGridIndex = useGridStore((state) => state.setIndex);
  const grid = useGridStore((state) => state.getGrid(path));
  const updateGridSize = useGridStore((state) => state.updateSize);
  const getWindow = useProcessesStore((state) => state.getWindow);
  const setSelectContext = useSelectStore((state) => state.setSelectContext);
  const setDropContext = useSelectStore((state) => state.setDropContext);
  const setSelected = useSelectStore((state) => state.setSelected);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDragEnter = useCallback(() => {
    if (options?.isDesktop) {
      setDropContext('desktop');
    } else {
      setDropContext('folder');
    }
  }, [options?.isDesktop, setDropContext]);

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const { x: folderX, y: folderY } = getWindow(path).position;
      const dropX = event.clientX - folderX;
      const dropY = event.clientY - folderY;
      const dropIndex = positionToIndex(dropX, dropY, grid.lineSize, {
        multiplier: GRID_SIZE,
      });
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
    [grid.lineSize, setGridIndex, path, getWindow],
  );

  const handleUpdateGridSize = useCallback(() => {
    updateGridSize(path, window.innerWidth, window.innerHeight - TASKBAR_HEIGHT);
  }, [updateGridSize, path]);

  const handleSelectRectContext = useCallback(() => {
    const localContext = options?.isDesktop ? 'desktop' : 'folder';
    setSelectContext(localContext);
  }, [setSelectContext, options?.isDesktop]);

  useEffect(() => {
    registerEvents('resize', [handleUpdateGridSize]);
  }, [registerEvents, handleUpdateGridSize]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ol
      className={cn('grid grid-flow-col', options?.isDesktop ? 'p-4' : 'p-0')}
      style={{
        height: options?.isDesktop ? `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)` : '100%',
        gridTemplateColumns: `repeat(${grid.columns.toString()}, ${GRID_SIZE.toString()}px)`,
        gridTemplateRows: `repeat(${grid.rows.toString()}, ${GRID_SIZE.toString()}px)`,
      }}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      onMouseDown={() => {
        setSelected([]);
        handleSelectRectContext();
      }}
    >
      {children}
    </ol>
  );
};

export default Grid;
