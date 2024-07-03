import { type ReactElement, ReactNode } from 'react';
import { useEffect, useCallback } from 'react';

import useEvents from '@/hooks/use-events';
import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { type TransferData } from '@/types';
import cn from '@/utils/format';
import { parseFullFileName } from '@/utils/fs';
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
  const mv = useFsStore((state) => state.mv);
  const resetMouseContext = useMouseStore((state) => state.reset);
  const setDragContext = useMouseStore((state) => state.setDragContext);

  const setBlurFocus = useProcessesStore((state) => state.setBlurFocus);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDragEnter = useCallback(() => {
    if (options?.isDesktop) {
      setDropContext('desktop');
      setDragContext('desktop');
    } else {
      setDropContext('folder');
      setDragContext('window');
    }
  }, [options?.isDesktop, setDropContext, setDragContext]);

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
        const sourcePath = element.path;
        const sourceName = parseFullFileName(sourcePath);
        const desinationName = parseFullFileName(path);
        if (sourceName === desinationName) {
          // eslint-disable-next-line no-continue
          continue;
        }
        const elementIndex = element.startingGridIndex + indexDifference;
        const destinationPath = `${path}/${parseFullFileName(sourcePath)}`;
        if (sourcePath !== destinationPath) {
          mv(sourcePath, destinationPath);
        }

        setGridIndex(element.path, elementIndex);
      }
    },
    [grid.lineSize, setGridIndex, path, getWindow, mv],
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

  const handleBlurWindowFocus = useCallback(() => {
    const localContext = options?.isDesktop ? 'desktop' : 'folder';
    if (localContext === 'desktop') {
      setBlurFocus(true);
    }
  }, [setBlurFocus, options?.isDesktop]);

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
        handleBlurWindowFocus();
      }}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
        if (options?.isDesktop) {
          resetMouseContext();
        }
      }}
    >
      {children}
    </ol>
  );
};

export default Grid;
