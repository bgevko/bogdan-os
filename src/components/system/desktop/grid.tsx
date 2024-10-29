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
import { TASKBAR_HEIGHT } from '@/themes';
import { MenuContext, MouseContext, type TransferData } from '@/types';
import { parseFullFileName } from '@/utils/fs';
import { positionToIndex } from '@/utils/grid';

const GRID_SIZE = 100;

interface GridProps {
  children: ReactNode;
}

const Grid = ({ children }: GridProps): ReactElement => {
  const setGridIndex = useGridStore((state) => state.setIndex);
  const grid = useGridStore((state) => state.getGrid('/Desktop'));
  const updateSize = useGridStore((state) => state.updateSize);
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

  const handleDropOnDesktopGrid = useCallback(
    (event: React.DragEvent) => {
      // Drop logic for dropping items on the desktop
      event.preventDefault();
      setIsDragging(false);

      const dropIndex = positionToIndex(event.clientX, event.clientY, grid.lineSize);

      const elementPaths: TransferData[] = JSON.parse(
        event.dataTransfer.getData('text/plain'),
      ) as TransferData[];
      const headElement = elementPaths.find((element) => element.isHead) ?? elementPaths[0];
      const indexDifference = dropIndex - headElement.startingGridIndex;
      for (const element of elementPaths) {
        const finalIndex = element.startingGridIndex + indexDifference;
        const destinationPath = `/Desktop/${parseFullFileName(element.path)}`;
        // If we're moving around on the same grid, just update the grid index
        if (element.path === destinationPath) {
          setGridIndex(element.path, finalIndex);
          // Otherwise, move the file to the new location
        } else {
          try {
            mv(element.path, destinationPath, { gridIndex: finalIndex });
          } catch {
            // pass
          }
        }
      }
    },
    [setGridIndex, mv, setIsDragging, grid.lineSize],
  );

  const handleUpdateGridSize = useCallback(() => {
    updateSize('/Desktop', window.innerWidth, window.innerHeight - TASKBAR_HEIGHT);
  }, [updateSize]);

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

  const config = {
    id: 'desktop',
    className: 'grid grid-flow-col p-4',
    height: `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)`,
  };

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
        setDragoverPath('/Desktop');
        setBlurFocus(true);
      }}
      onDrop={handleDropOnDesktopGrid}
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
        let target = event.target as HTMLElement;
        let dataId;
        while (!dataId) {
          dataId = target.dataset.id;
          target = target.parentElement!;
        }
        if (dataId === 'file-icon') {
          return;
        }
        setMenuContext(config.id as MenuContext);
        setMenuTargetPath('/Desktop');
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
