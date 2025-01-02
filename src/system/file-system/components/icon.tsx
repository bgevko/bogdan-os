import React, { Suspense, ReactElement, useMemo, useEffect } from 'react';

import UseKeyPresses from '@/hooks/use-key-presses';
import UseIconDrag from '@/system/file-system/hooks/use-icon-drag';
import UseIconSelect from '@/system/file-system/hooks/use-icon-select';
import { type FileSystemEntry } from '@/system/file-system/store';
import useFileSystemStore from '@/system/file-system/store';
import { roundPosition } from '@/system/file-system/utils';
import { getLazyIcon } from '@/utils';
import cn from '@/utils/format';

interface IconProps {
  entry: FileSystemEntry;
  selectRectVisible: boolean;
  selectRect: { position: { x: number; y: number }; size: { width: number; height: number } };
}

const FileExplorerIcon: React.FC<IconProps> = ({
  entry,
  selectRect,
  selectRectVisible,
}): ReactElement => {
  const setIsIconSelected = useFileSystemStore((state) => state.setIsIconSelected);
  const isIconSelected = useFileSystemStore((state) => state.getIsIconSelected(entry.id));
  const isIconDragging = useFileSystemStore((state) => state.getIsIconDragging(entry.id));
  const getWindowSize = useFileSystemStore((state) => state.getWindowSize);
  const openEntry = useFileSystemStore((state) => state.openEntry);
  const setContextState = useFileSystemStore((state) => state.setContextState);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);

  const { isShiftPressed } = UseKeyPresses();

  const { handleMouseDownSelect, handleMouseUpSelect, handleFocusSelect, handleToggleSelect } =
    UseIconSelect(entry, selectRectVisible);
  const { handleDragStart, handleMouseMove, handleMouseUp } = UseIconDrag(entry);
  const LazyIcon = useMemo(() => getLazyIcon(entry.icon!), [entry.icon]);

  /*
   ********************************
   *   Select Rect Intersection   *
   ********************************
   */
  useEffect(() => {
    if (!selectRectVisible) {
      return;
    }
    const { position: rectPosition, size: rectSize } = selectRect;
    const iconPosition = entry.iconPosition;
    const [iconXmin, iconXmax] = [iconPosition.x, iconPosition.x + 100];
    const [iconYmin, iconYmax] = [iconPosition.y, iconPosition.y + 100];
    const [rectXmin, rectXmax] = [rectPosition.x, rectPosition.x + rectSize.width];
    const [rectYmin, rectYmax] = [rectPosition.y, rectPosition.y + rectSize.height];

    if (
      // Intersection in the X axis
      rectXmin <= iconXmax &&
      rectXmax >= iconXmin &&
      // Intersection in the Y axis
      rectYmin <= iconYmax &&
      rectYmax >= iconYmin
    ) {
      setIsIconSelected(entry.id, true);
    } else if (!isShiftPressed) {
      setIsIconSelected(entry.id, false);
    }
  }, [selectRect, entry, selectRectVisible, setIsIconSelected, isShiftPressed]);

  /*
   ********************************
   *         Icon Movement        *
   ********************************
   */
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const dropGuidePos = useMemo(() => {
    const pos = roundPosition(entry.iconPosition, getWindowSize(entry.parentId!));
    return pos;
  }, [entry.iconPosition, entry.parentId, getWindowSize]);

  return (
    <Suspense
      fallback={
        <div
          className="absolute size-[80px] animate-pulse bg-gray-500/10"
          style={{
            transform: `translate(${entry.iconPosition.x.toString()}px, ${entry.iconPosition.y.toString()}px)`,
          }}
        />
      }
    >
      <>
        {/* Drop Preview */}
        {isIconDragging && (
          <span
            className="pointer-events-none absolute h-[88px] w-[80px] border-2 border-dashed border-accent-400 transition-transform"
            style={{
              transform: `
            translate(${dropGuidePos.x.toString()}px, ${dropGuidePos.y.toString()}px)
                      `,
            }}
          />
        )}

        {/* File System Icon */}
        <button
          draggable
          onDragStart={handleDragStart}
          type="button"
          data-id={entry.type}
          className={cn(
            'w-[80px] h-[88px]',
            'absolute px-2 rounded-md background-transparent cursor-default flex flex-col items-center focus:outline-none',
            isIconSelected && 'bg-black/20',
            isIconDragging && 'z-50',
            !isIconSelected && !isIconDragging && 'hover:bg-black/10',
          )}
          style={{
            transform: `
            translate(${entry.iconPosition.x.toString()}px, ${entry.iconPosition.y.toString()}px)
            scale(${isIconDragging ? '1.1' : '1'})
          `,
          }}
          onClick={(event) => {
            event.stopPropagation();
          }}
          onMouseDown={(event: React.MouseEvent) => {
            event.stopPropagation();
            handleToggleSelect();
            handleMouseDownSelect(event);
            clearContextState();
          }}
          onMouseUp={() => {
            handleMouseUpSelect();
          }}
          onFocus={(event: React.FocusEvent) => {
            event.stopPropagation();
            handleFocusSelect();
          }}
          onDoubleClick={() => {
            openEntry(entry.id);
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            const clickPosition = { x: event.clientX, y: event.clientY };
            setContextState({
              id: entry.id,
              category: 'icon',
              clickPosition,
            });
          }}
        >
          <LazyIcon
            className={cn('icon-shadow')}
            data-id={entry.type}
            width={entry.iconSize ?? 64}
            height={entry.iconSize ?? 64}
            fill={entry.iconColor}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
          <span className="select-none text-base font-bold">{entry.name}</span>
        </button>
      </>
    </Suspense>
  );
};

export default FileExplorerIcon;
