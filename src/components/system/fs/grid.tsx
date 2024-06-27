import { type ReactElement, ReactNode, useState } from 'react';
import { useEffect, useCallback } from 'react';

import useEvents from '@/hooks/use-events';
import useFsStore from '@/stores/use-fs-store';
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
  const setGridItemsPerLine = useFsStore((state) => state.setGridItemsPerLine);
  const setGridIndex = useFsStore((state) => state.setGridIndex);
  const gridItemsPerLine = useFsStore((state) => state.getGridItemsPerLine(path));
  const getWindow = useProcessesStore((state) => state.getWindow);
  const isUpdatingSize = useProcessesStore((state) => state.getIsUpdatingSize(path));
  const setContext = useSelectStore((state) => state.setContext);
  const setSelected = useSelectStore((state) => state.setSelected);

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
      const { x: folderX, y: folderY } = getWindow(path).position;
      const dropX = event.clientX - folderX;
      const dropY = event.clientY - folderY;
      const dropIndex = positionToIndex(dropX, dropY, gridItemsPerLine, {
        multiplier: GRID_SIZE,
      });
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
    [gridItemsPerLine, setGridIndex, path, getWindow],
  );

  const setDesktopGridSize = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const rows = Math.floor((viewportHeight - TASKBAR_HEIGHT) / GRID_SIZE);
    const columns = Math.floor(viewportWidth / GRID_SIZE);
    setNumColumns(columns);
    setNumRows(rows);
    const itemsPerLine = columns;
    setGridItemsPerLine(path, itemsPerLine);
  }, [setGridItemsPerLine, path]);

  const setFolderGridSize = useCallback(() => {
    const { width, height } = getWindow(path).size;
    const rows = Math.floor(height / GRID_SIZE);
    const columns = Math.floor(width / GRID_SIZE);
    setNumColumns(columns);
    setNumRows(rows);
    const itemsPerLine = rows;
    setGridItemsPerLine(path, itemsPerLine);
  }, [getWindow, path, setGridItemsPerLine]);

  const handleSelectRectContext = useCallback(() => {
    const localContext = options?.isDesktop ? 'desktop' : 'folder';
    setContext(localContext);
  }, [setContext, options?.isDesktop]);

  useEffect(() => {
    if (options?.isDesktop) {
      setDesktopGridSize();
    } else {
      setFolderGridSize();
    }
  }, [setDesktopGridSize, options?.isDesktop, setFolderGridSize]);

  useEffect(() => {
    if (isUpdatingSize) {
      setFolderGridSize();
    }
  }, [isUpdatingSize, setFolderGridSize]);

  useEffect(() => {
    registerEvents('resize', [setDesktopGridSize]);
  }, [registerEvents, setDesktopGridSize]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ol
      className={cn('grid grid-flow-col', options?.isDesktop ? 'p-4' : 'p-0')}
      style={{
        height: options?.isDesktop ? `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)` : '100%',
        gridTemplateColumns: `repeat(${numColumns.toString()}, ${GRID_SIZE.toString()}px)`,
        gridTemplateRows: `repeat(${numRows.toString()}, ${GRID_SIZE.toString()}px)`,
      }}
      onDragOver={handleDragOver}
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
