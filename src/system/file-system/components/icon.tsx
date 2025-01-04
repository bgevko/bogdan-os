import React, { Suspense, ReactElement, useMemo, useEffect } from 'react';

import UseKeyPresses from '@/hooks/use-key-presses';
import UseIconDrag from '@/system/file-system/hooks/use-icon-drag';
import UseIconSelect from '@/system/file-system/hooks/use-icon-select';
import { type FileSystemEntry } from '@/system/file-system/store';
import useFileSystemStore from '@/system/file-system/store';
import { areBoundingBoxesIntersecting, snapPosition } from '@/system/file-system/utils';
import { GRID_CELL_SIZE } from '@/themes';
import { getLazyIcon, getEventTargetDataId } from '@/utils';
import cn from '@/utils/format';

interface IconProps {
  entry: FileSystemEntry;
  selectRectVisible: boolean;
  selectRect: { position: { x: number; y: number }; size: { width: number; height: number } };
  dropTargetId: string;
  isAnyIconDragging: boolean;
}

const FileExplorerIcon: React.FC<IconProps> = ({
  entry,
  selectRect,
  selectRectVisible,
  dropTargetId,
  isAnyIconDragging,
}): ReactElement => {
  const setIsIconSelected = useFileSystemStore((state) => state.setIsIconSelected);
  const isIconSelected = useFileSystemStore((state) => state.getIsIconSelected(entry.id));
  const isIconDragging = useFileSystemStore((state) => state.getIsIconDragging(entry.id));
  const openEntry = useFileSystemStore((state) => state.openEntry);
  const setContextState = useFileSystemStore((state) => state.setContextState);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const getWindowPosition = useFileSystemStore((state) => state.getWindowPosition);
  const blurWindowFocus = useFileSystemStore((state) => state.blurWindowFocus);
  const pushFocus = useFileSystemStore((state) => state.pushFocus);

  const { isShiftPressed } = UseKeyPresses();

  const { handleMouseDownSelect, handleMouseUpSelect, handleFocusSelect, handleToggleSelect } =
    UseIconSelect(entry, selectRectVisible);
  const { handleDragStart, handleMouseMove, handleMouseUp } = UseIconDrag(entry, dropTargetId);
  const LazyIcon = useMemo(() => getLazyIcon(entry.icon!), [entry.icon]);

  /*
   ********************************
   *   Select Rect Intersection   *
   ********************************
   */

  const isSelectRectIntersecting = selectRectVisible
    ? areBoundingBoxesIntersecting(
        {
          x: selectRect.position.x,
          y: selectRect.position.y,
          width: selectRect.size.width,
          height: selectRect.size.height,
        },
        {
          x: entry.iconPosition.x,
          y: entry.iconPosition.y,
          width: GRID_CELL_SIZE,
          height: GRID_CELL_SIZE,
        },
      )
    : false;

  useEffect(() => {
    if (isSelectRectIntersecting) {
      setIsIconSelected(entry.id, true);
    } else if (!isShiftPressed && selectRectVisible) {
      setIsIconSelected(entry.id, false);
    }
  }, [entry.id, isShiftPressed, setIsIconSelected, selectRectVisible, isSelectRectIntersecting]);
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

  /*
   ***********************************
   *            Drop Guide           *
   ***********************************
   */
  const dropGuidePos = useMemo(() => {
    const pos = snapPosition({
      parentId: entry.parentId!,
      targetId: dropTargetId,
      iconPosition: entry.iconPosition,
      parentPosition: getWindowPosition(entry.parentId!),
    });
    return pos;
  }, [entry.iconPosition, entry.parentId, getWindowPosition, dropTargetId]);

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
            className={cn(
              'border-black pointer-events-none absolute h-[88px] w-[80px] border-2 border-dashed transition-transform',
            )}
            style={{
              transform: `
                translate(${dropGuidePos.x.toString()}px, ${dropGuidePos.y.toString()}px)
              `,
              zIndex: 49,
            }}
          />
        )}

        {/* File System Icon */}
        <button
          draggable
          onDragStart={handleDragStart}
          type="button"
          data-id={`${entry.type}-icon`}
          className={cn(
            'w-[80px] h-[88px]',
            'absolute px-2 rounded-md background-transparent cursor-default flex flex-col items-center focus:outline-none',
            isIconSelected && 'bg-black/20',
            isIconDragging && 'z-50',
            !isIconDragging && 'transition-transform duragion 500',
            !isIconSelected && !isAnyIconDragging && 'hover:bg-black/10',
          )}
          style={{
            transform: `
              translate(${entry.iconPosition.x.toString()}px, ${entry.iconPosition.y.toString()}px)
              scale(${isIconDragging ? '1.1' : '1'})
            `,
            pointerEvents: isIconDragging ? 'none' : 'auto',
          }}
          onClick={(event) => {
            event.stopPropagation();
          }}
          onMouseDown={(event: React.MouseEvent) => {
            event.stopPropagation();
            if (event.button === 2) return;
            handleToggleSelect();
            handleMouseDownSelect(event);
            clearContextState();
            if (entry.parentId === 'desktop') {
              blurWindowFocus(true);
            } else {
              pushFocus(entry.parentId!);
            }
          }}
          onMouseUp={(event: React.MouseEvent) => {
            if (event.button === 2) return;
            handleMouseUpSelect(event);
          }}
          onFocus={(event: React.FocusEvent) => {
            event.stopPropagation();
            if (isAnyIconDragging) return;
            handleFocusSelect();
          }}
          onDoubleClick={() => {
            openEntry(entry.id);
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            const targetDataId = getEventTargetDataId(event);
            if (targetDataId === `${entry.type}-icon`) {
              const clickPosition = { x: event.clientX, y: event.clientY };
              setContextState({
                id: entry.id,
                category: 'icon',
                clickPosition,
              });
            }
          }}
        >
          <LazyIcon
            className={cn('icon-shadow')}
            data-id={`${entry.type}-icon`}
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
