import React, { type ReactElement, useEffect, useState, useCallback } from 'react';

import { iconDirectory } from '@/globals/process-directory';
import useEvents from '@/hooks/use-events';
import useDesktopStore from '@/stores/use-desktop-store';
import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { type Position, Window } from '@/types/units';
import cn, { parseFileName } from '@/utils/format';

const ICON_SIZE = 70;

const DesktopIconComponent = ({ id, path }: { id: string; path: string }): ReactElement => {
  const processDirectory = useProcessesStore((state) => state.processDirectory);
  const open = useProcessesStore((state) => state.open);
  const position = useFsStore((state) => state.getItemPosition(path));
  const setPosition = useFsStore((state) => state.setItemPosition);
  const getPosition = useFsStore((state) => state.getItemPosition);
  const selected = useFsStore((state) => state.getIsSelected(path));
  const allSelected = useFsStore((state) => state.getAllSelected());
  const isMultipleSelected = useFsStore((state) => state.getIsMultipleSelected());
  const setSelected = useFsStore((state) => state.setIsSelected);
  const selectingRect = useDesktopStore((state) => state.selectingRect);
  const selecting = useDesktopStore((state) => state.selecting);
  const iconSrc = `${iconDirectory}${processDirectory[id].icon}.png`;
  const { title } = processDirectory[id];

  const { registerEvents } = useEvents();
  const [start, setStart] = useState<Position>({ x: 0, y: 0 });
  const [shiftIsPressed, setShiftIsPressed] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleStartDrag = useCallback(() => {
    setDragging(true);
  }, []);

  const handleStopDrag = useCallback(() => {
    setDragging(false);
  }, []);

  const handleGetMouseStart = useCallback(
    (event: React.MouseEvent) => {
      setStart({ x: event.clientX - position.x, y: event.clientY - position.y });
    },
    [position],
  );

  const selectionIntersectsElement = useCallback((selection: Window, element: Position) => {
    if (
      element.x + ICON_SIZE + 20 < selection.position.x ||
      element.y + ICON_SIZE + 20 < selection.position.y ||
      element.x > selection.position.x + selection.size.width - 14 ||
      element.y > selection.position.y + selection.size.height - 14
    ) {
      return false;
    }
    return true;
  }, []);

  const handleSelectFocus = useCallback(() => {
    if (shiftIsPressed) return;
    setSelected(path, true);
  }, [path, setSelected, shiftIsPressed]);

  const handleSelectToggle = useCallback(() => {
    if (shiftIsPressed) {
      setSelected(path, !selected);
    }
  }, [path, setSelected, selected, shiftIsPressed]);

  const handleDeselectBlur = useCallback(() => {
    if (selected && isMultipleSelected) return;
    setSelected(path, false);
  }, [selected, path, setSelected, isMultipleSelected]);

  const handleDragSelect = useCallback(() => {
    if (!selecting) return;
    if (selectionIntersectsElement(selectingRect, position)) {
      setSelected(path, true);
    } else if (!shiftIsPressed) setSelected(path, false);
  }, [
    path,
    position,
    selecting,
    selectingRect,
    setSelected,
    selectionIntersectsElement,
    shiftIsPressed,
  ]);

  const handleDeselectAll = useCallback(() => {
    if (!shiftIsPressed) {
      setSelected(path, false);
    }
  }, [path, setSelected, shiftIsPressed]);

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

  const handleMove = useCallback(
    (event: MouseEvent) => {
      if (!dragging) return;

      const newX = event.clientX - start.x;
      const newY = event.clientY - start.y;
      const clampedX = Math.max(0, Math.min(newX, window.innerWidth - ICON_SIZE - 16));
      const clampedY = Math.max(
        0,
        Math.min(newY, window.innerHeight - ICON_SIZE - TASKBAR_HEIGHT - 16),
      );

      const updatePosition = (iconPath: string, baseX: number, baseY: number) => {
        const selectedPosition = getPosition(iconPath);
        const otherX = selectedPosition.x + baseX - position.x;
        const otherY = selectedPosition.y + baseY - position.y;
        const otherClampedX = Math.max(0, Math.min(otherX, window.innerWidth - ICON_SIZE - 16));
        const otherClampedY = Math.max(
          0,
          Math.min(otherY, window.innerHeight - ICON_SIZE - TASKBAR_HEIGHT - 16),
        );
        setPosition(iconPath, { x: otherClampedX, y: otherClampedY });
      };

      for (const selectedPath of allSelected) {
        if (selectedPath === path) {
          setPosition(selectedPath, { x: clampedX, y: clampedY });
        } else {
          updatePosition(selectedPath, clampedX, clampedY);
        }
      }
    },
    [dragging, start, path, setPosition, position, allSelected, getPosition],
  );

  const handlePreventSelect = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  const handlePreventContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);
  useEffect(() => {
    registerEvents('mousedown', [handleDeselectAll]);
    registerEvents('mousemove', [handleMove, handleDragSelect]);
    registerEvents('contextmenu', [handlePreventContextMenu]);
    registerEvents('selectstart', [handlePreventSelect]);
    registerEvents('keydown', [handleShiftPress]);
    registerEvents('keyup', [handleShiftRelease]);
  }, [
    handlePreventContextMenu,
    handleShiftRelease,
    registerEvents,
    handleMove,
    handlePreventSelect,
    handleShiftPress,
    handleDragSelect,
    handleDeselectBlur,
    handleDeselectAll,
  ]);

  return (
    <button
      type="button"
      // className="absolute flex min-h-[70px] min-w-[70px] cursor-default flex-col items-center"
      className={cn(
        'absolute flex cursor-default flex-col items-center focus:outline-none',
        selected && 'bg-accent-50/20',
        !selected && !selecting && 'hover:bg-accent-50/10',
      )}
      style={{
        width: `${ICON_SIZE.toString()}px`,
        height: `${ICON_SIZE.toString()}px`,
        transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
        handleStartDrag();
        handleGetMouseStart(event);
        handleSelectToggle();
      }}
      onFocus={() => {
        handleSelectFocus();
      }}
      onBlur={() => {
        handleDeselectBlur();
      }}
      onMouseUp={() => {
        handleStopDrag();
      }}
      onDoubleClick={(event) => {
        event.stopPropagation();
        open(id);
      }}
    >
      <img src={iconSrc} alt={title} width="48px" height="48px" />
      <span className="text-sm">{title}</span>
      {/* <span className={cn('text-sm', selected ? 'bg-surface text-onSurface' : '')}>{title}</span> */}
    </button>
  );
};

const DesktopIcon = React.memo(DesktopIconComponent);

const DesktopIconsComponents = (): ReactElement => {
  const desktopPaths = useFsStore().getChildren('/Desktop', { filesOnly: true });

  return (
    <section
      className="relative w-full p-4"
      style={{ height: `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)` }}
    >
      {desktopPaths.map((path) => {
        const fileName = parseFileName(path);
        return <DesktopIcon key={fileName} id={fileName} path={path} />;
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
    registerEvents('mousemove', [drawSelectRect]);
    registerEvents('mouseup', [handleMouseUp]);
  }, [registerEvents, handleMouseDown, getMouseClickStart, drawSelectRect, handleMouseUp]);

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
