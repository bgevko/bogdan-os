import React, { type ReactElement, useState, useEffect, useCallback } from 'react';

import { iconDirectory } from '@/globals/process-directory';
import useEvents from '@/hooks/use-events';
import useDesktopStore from '@/stores/use-desktop-store';
import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';
// import { type Position, Window } from '@/types/units';
import { GridState } from '@/types/file-system';
import { Position } from '@/types/units';
import cn, { parseFileName } from '@/utils/format';
import { indexToPosition, positionToIndex } from '@/utils/grid';

const ICON_SIZE = 70;
const GRID_SIZE = 100;

const DesktopIconComponent = ({
  id,
  path,
  gridState,
}: {
  id: string;
  path: string;
  gridState: GridState;
}): ReactElement => {
  const processDirectory = useProcessesStore((state) => state.processDirectory);
  const gridIndex = useFsStore((state) => state.getItemGridIndex(path));
  const iconSrc = `${iconDirectory}${processDirectory[id].icon}.png`;
  const { title } = processDirectory[id];
  const [gridPosition, setGridPosition] = useState<Position>(
    indexToPosition(gridIndex, gridState.rows, { multiplier: GRID_SIZE }),
  );
  useEffect(() => {
    setGridPosition(indexToPosition(gridIndex, gridState.rows, { multiplier: GRID_SIZE }));
  }, [gridIndex, gridState.rows]);

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const dropX = event.clientX;
      const dropY = event.clientY;
      const dropIndex = positionToIndex(dropX, dropY, gridState.rows, { multiplier: GRID_SIZE });
      console.log(dropIndex);
      setGridPosition(indexToPosition(dropIndex, gridState.rows, { multiplier: GRID_SIZE }));
    },
    [gridState.rows],
  );

  return (
    <button
      type="button"
      draggable
      className={cn(
        'absolute flex background-transparent cursor-default flex-col items-center focus:outline-none',
        'hover:bg-accent-50/10',
      )}
      style={{
        width: `${ICON_SIZE.toString()}px`,
        height: `${ICON_SIZE.toString()}px`,
        transform: `translate( ${gridPosition.x.toString()}px, ${gridPosition.y.toString()}px)`,
      }}
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={(event) => {
        event.preventDefault();
      }}
      onDragEnd={handleDrop}
    >
      <img draggable="false" src={iconSrc} alt={title} width="48px" height="48px" />
      <span className="text-sm">{title}</span>
      {/* <span className={cn('text-sm', selected ? 'bg-surface text-onSurface' : '')}>{title}</span> */}
    </button>
  );
};

const DesktopIcon = React.memo(DesktopIconComponent);

const DesktopIconsComponents = (): ReactElement => {
  const desktopPaths = useFsStore().loadDirectory('/Desktop');
  const gridState = useFsStore((state) => state.getDirectoryGrid('/Desktop'));

  return (
    <section
      className="relative w-full p-4"
      style={{ height: `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)` }}
    >
      {desktopPaths.map((path) => {
        const fileName = parseFileName(path);
        return <DesktopIcon key={fileName} id={fileName} path={path} gridState={gridState} />;
      })}
    </section>
  );
};

const DesktopIcons = React.memo(DesktopIconsComponents);

const Desktop = (): React.ReactElement => {
  const selecting = useDesktopStore((state) => state.selecting);
  const setSelecting = useDesktopStore((state) => state.setSelecting);
  const selectRect = useDesktopStore((state) => state.selectingRect);
  const setSelectRect = useDesktopStore((state) => state.setSelectingRect);
  const start = useDesktopStore((state) => state.clickStart);
  const setStart = useDesktopStore((state) => state.setClickStart);
  const { registerEvents } = useEvents();
  const setGrid = useFsStore((state) => state.setDirectoryGrid);

  const handleMouseDown = useCallback(() => {
    setSelecting(true);
    setSelectRect({ size: { width: 0, height: 0 }, position: { x: 0, y: 0 } });
  }, [setSelecting, setSelectRect]);

  const getMouseClickStart = useCallback(
    (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setStart({ x, y });
    },
    [setStart],
  );

  const drawSelectRect = useCallback(
    (event: MouseEvent) => {
      if (!selecting) return;
      const x = Math.min(start.x, event.clientX);
      const y = Math.min(start.y, event.clientY);

      const width = Math.abs(start.x - event.clientX);
      const height = Math.abs(start.y - event.clientY);

      const rectSize = { width, height };
      const rectPos = { x, y };

      setSelectRect({ size: rectSize, position: rectPos });
    },
    [selecting, start, setSelectRect],
  );

  const handleMouseUp = useCallback(() => {
    setSelecting(false);
  }, [setSelecting]);

  useEffect(() => {
    registerEvents('mousedown', [handleMouseDown, getMouseClickStart]);
    // registerEvents('mousemove', [drawSelectRect]);
    registerEvents('mouseup', [handleMouseUp]);
  }, [registerEvents, handleMouseDown, getMouseClickStart, drawSelectRect, handleMouseUp]);

  const setGridSize = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const rows = Math.floor((viewportHeight - TASKBAR_HEIGHT) / GRID_SIZE);
    const columns = Math.floor(viewportWidth / GRID_SIZE);
    setGrid('/Desktop', { columns, rows });
  }, [setGrid]);

  useEffect(() => {
    setGridSize();
  }, [setGridSize]);

  useEffect(() => {
    registerEvents('resize', [setGridSize]);
  }, [registerEvents, setGridSize]);
  return (
    <>
      <span
        className="absolute border border-dashed border-accent bg-accent/10"
        style={{
          display: selecting ? 'block' : 'none',
          width: selectRect.size.width,
          height: selectRect.size.height,
          transform: `translate(${selectRect.position.x.toString()}px, ${selectRect.position.y.toString()}px)`,
        }}
      />
      <DesktopIcons />
    </>
  );
};

export default Desktop;
