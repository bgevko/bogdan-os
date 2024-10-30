/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { type ReactElement, useState, ReactNode } from 'react';
import { useEffect, useCallback } from 'react';

import UseHandleContextMenu from '@/hooks/system/use-context-menu/use-handle-context-menu';
import useDragStore from '@/stores/use-drag-store';
import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { TASKBAR_HEIGHT, WINDOW_HEADER_HEIGHT } from '@/themes';
import { MouseContext, type TransferData } from '@/types';
import { parseFullFileName } from '@/utils/fs';
import { positionToIndex } from '@/utils/grid';

const GRID_SIZE = 100;

interface GridProps {
  path?: string; // Optional, defaults to '/Desktop'
  children: ReactNode;
}

const Grid = ({ children, path = '/Desktop' }: GridProps): ReactElement => {
  // PROCESSES
  const setBlurFocus = useProcessesStore((state) => state.setBlurFocus);
  const getWindow = useProcessesStore((state) => state.getWindow);
  const setFocused = useProcessesStore((state) => state.setFocused);

  // GRID
  const setGridIndex = useGridStore((state) => state.setIndex);
  const grid = useGridStore((state) => state.getGrid(path));
  const updateGridSize = useGridStore((state) => state.updateSize);

  // SELECT
  const setMouseDownContext = useSelectStore((state) => state.setMouseDownContext);
  const setSelected = useSelectStore((state) => state.setSelected);
  const addSelected = useSelectStore((state) => state.addSelected);
  const removeSelected = useSelectStore((state) => state.removeSelected);

  // FS
  const mv = useFsStore((state) => state.mv);

  // MOUSE
  const resetMouseContext = useMouseStore((state) => state.reset);
  const setDragContext = useMouseStore((state) => state.setDragContext);

  // DRAG
  const setDragoverPath = useDragStore((state) => state.setDragoverPath);
  const setIsDragging = useDragStore((state) => state.setIsDragging);

  // HOOKS
  const { handleContextMenu } = UseHandleContextMenu();

  const [shiftIsPressed, setShiftIsPressed] = useState(false);
  const isDesktop = path === '/Desktop';

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

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      setIsDragging(false);

      let dropIndex = 0;

      if (isDesktop) {
        // For desktop, use clientX and clientY directly
        dropIndex = positionToIndex(event.clientX, event.clientY, grid.lineSize);
      } else {
        // For file explorer, adjust for window position and header
        const folder = getWindow(path);
        const dropX = event.clientX - folder.position.x;
        const dropY = event.clientY - folder.position.y - WINDOW_HEADER_HEIGHT;
        dropIndex = positionToIndex(dropX, dropY, grid.lineSize);
      }

      const elementPaths: TransferData[] = JSON.parse(
        event.dataTransfer.getData('text/plain'),
      ) as TransferData[];
      const headElement = elementPaths.find((element) => element.isHead) ?? elementPaths[0];
      const indexDifference = dropIndex - headElement.startingGridIndex;

      for (const element of elementPaths) {
        const finalIndex = element.startingGridIndex + indexDifference;
        const destinationPath = `${path}/${parseFullFileName(element.path)}`;

        if (element.path === destinationPath) {
          setGridIndex(element.path, finalIndex);
        } else {
          try {
            mv(element.path, destinationPath, { gridIndex: finalIndex });
            removeSelected(element.path);
            addSelected(destinationPath);
          } catch {
            // Handle errors silently
          }
        }
      }
    },
    [setGridIndex, mv, setIsDragging, grid.lineSize, getWindow, path, isDesktop],
  );

  const handleUpdateGridSize = useCallback(() => {
    if (isDesktop) {
      updateGridSize(path, window.innerWidth, window.innerHeight - TASKBAR_HEIGHT);
    } else {
      // For file explorer, adjust height accordingly if needed
      // Assuming the grid size is based on window dimensions
      updateGridSize(path, window.innerWidth, window.innerHeight - TASKBAR_HEIGHT);
    }
  }, [updateGridSize, path, isDesktop]);

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
    id: isDesktop ? 'desktop' : 'folder',
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
        if (isDesktop) {
          setBlurFocus(true);
        } else {
          setFocused(path);
        }
      }}
      onDrop={handleDrop}
      onMouseDown={(event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        const dataId = target.dataset.id ?? 'none';
        if (!shiftIsPressed) {
          setSelected([]);
        }
        setMouseDownContext(dataId);
        if (isDesktop && (dataId === 'desktop' || dataId === 'none')) {
          setBlurFocus(true);
        }
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const menuContext = isDesktop ? 'desktop' : 'folder';
        handleContextMenu(event, menuContext, path);
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
