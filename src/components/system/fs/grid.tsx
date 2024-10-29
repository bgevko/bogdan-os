/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { type ReactElement, useState, ReactNode } from 'react';
import { useEffect, useCallback } from 'react';

import useDragStore from '@/stores/use-drag-store';
import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMenuStore from '@/stores/use-menu-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { TASKBAR_HEIGHT, WINDOW_HEADER_HEIGHT } from '@/themes';
import { MenuContext, MouseContext, type TransferData } from '@/types';
import { parseFullFileName } from '@/utils/fs';
import { positionToIndex } from '@/utils/grid';

const GRID_SIZE = 100;

interface GridProps {
  options?: {
    isDesktop?: boolean;
  };
  path: string;
  children: ReactNode;
}

const Grid = ({ children, path, options }: GridProps): ReactElement => {
  const setGridIndex = useGridStore((state) => state.setIndex);
  const grid = useGridStore((state) => state.getGrid(path));
  const updateGridSize = useGridStore((state) => state.updateSize);
  const getWindow = useProcessesStore((state) => state.getWindow);
  const setMouseDownContext = useSelectStore((state) => state.setMouseDownContext);
  const setSelected = useSelectStore((state) => state.setSelected);
  const mv = useFsStore((state) => state.mv);
  const resetMouseContext = useMouseStore((state) => state.reset);
  const setDragContext = useMouseStore((state) => state.setDragContext);
  const setDragoverPath = useDragStore((state) => state.setDragoverPath);
  const setIsDragging = useDragStore((state) => state.setIsDragging);
  const setBlurFocus = useProcessesStore((state) => state.setBlurFocus);
  const setMenuContext = useMenuStore((state) => state.setMenuContext);
  const setMenuTargetPath = useMenuStore((state) => state.setTargetPath);

  const [shiftIsPressed, setShiftIsPressed] = useState(false);

  const handleShiftPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Shift') {
      setShiftIsPressed(true);
    }
  }, []);

  const handleShiftRelease = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Shift') {
      setShiftIsPressed(false);
    }
  }, []);

  const getDropIndex = useCallback(
    (event: React.DragEvent): number => {
      const target = event.target as HTMLElement;
      const dataId = target.dataset.id ?? 'none';

      // Get drop index using desktop viewport as the point of reference
      if (dataId === 'desktop') {
        return positionToIndex(event.clientX, event.clientY, grid.lineSize);
      }

      // Otherwise, use the folder as the main point of reference
      if (dataId === 'folder') {
        const folder = getWindow(path);
        const dropX = event.clientX - folder.position.x;
        const dropY = event.clientY - folder.position.y - WINDOW_HEADER_HEIGHT;
        return positionToIndex(dropX, dropY, grid.lineSize);
      }

      // Otherwise, return -1
      return -1;
    },
    [grid.lineSize, getWindow, path],
  );

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      setIsDragging(false);

      const dropIndex = getDropIndex(event);
      if (dropIndex < 0) return;

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
        const finalIndex = element.startingGridIndex + indexDifference;
        const destinationPath = `${path}/${parseFullFileName(sourcePath)}`;
        if (sourcePath !== destinationPath) {
          mv(sourcePath, destinationPath, { gridIndex: finalIndex });
          return;
        }

        setGridIndex(element.path, finalIndex);
      }
    },
    [setGridIndex, path, mv, setIsDragging, getDropIndex],
  );

  const handleUpdateGridSize = useCallback(() => {
    updateGridSize(path, window.innerWidth, window.innerHeight - TASKBAR_HEIGHT);
  }, [updateGridSize, path]);

  useEffect(() => {
    window.addEventListener('resize', handleUpdateGridSize);
    window.addEventListener('keydown', handleShiftPress);
    window.addEventListener('keyup', handleShiftRelease);
    return () => {
      window.removeEventListener('resize', handleUpdateGridSize);
      window.removeEventListener('keydown', handleShiftPress);
      window.removeEventListener('keyup', handleShiftRelease);
    };
  }, [handleUpdateGridSize, handleShiftPress, handleShiftRelease]);

  const deskopConfig = {
    id: 'desktop',
    className: 'grid grid-flow-col p-4',
    height: `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)`,
  };

  const folderConfig = {
    id: 'folder',
    className: 'grid grid-flow-col p-0',
    height: '100%',
  };

  const config = options?.isDesktop ? deskopConfig : folderConfig;

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ol
      className={config.className}
      data-testid={config.id}
      data-id={config.id}
      style={{
        height: config.height,
        gridTemplateColumns: `repeat(${grid.columns.toString()}, ${GRID_SIZE.toString()}px)`,
        gridTemplateRows: `repeat(${grid.rows.toString()}, ${GRID_SIZE.toString()}px)`,
      }}
      onDragOver={(event: React.DragEvent) => {
        event.preventDefault();
        // eslint-disable-next-line no-param-reassign
        event.dataTransfer.dropEffect = 'move';
      }}
      onDragEnter={(event: React.DragEvent) => {
        let target = event.target as HTMLElement;
        let dataId;
        while (!dataId) {
          dataId = target.dataset.id;
          target = target.parentElement!;
        }
        setDragContext(dataId as MouseContext);
        setDragoverPath(path);
      }}
      onDrop={handleDrop}
      onMouseDown={(event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        const dataId = target.dataset.id ?? 'none';
        if (!shiftIsPressed) {
          setSelected([]);
        }
        setMouseDownContext(dataId);
        if (dataId === 'desktop' || dataId === 'none') {
          setBlurFocus(true);
        }
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        const target = event.target as HTMLElement;
        const dataId = target.dataset.id;
        if (dataId === 'file-icon') {
          return;
        }
        setMenuContext(config.id as MenuContext);
        setMenuTargetPath(path);
      }}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
        const target = event.target as HTMLElement;
        const dataId = target.dataset.id ?? 'none';
        if (dataId === 'desktop' || dataId === 'none') {
          resetMouseContext();
        }
      }}
    >
      {children}
    </ol>
  );
};

export default Grid;
