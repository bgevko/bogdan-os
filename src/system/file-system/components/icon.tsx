import React, { Suspense, ReactElement, useMemo, useEffect, useRef, useState } from 'react';

import UseKeyPresses from '@/hooks/use-key-presses';
import UseIconDrag from '@/system/file-system/hooks/use-icon-drag';
import UseIconSelect from '@/system/file-system/hooks/use-icon-select';
import { type FileSystemEntry } from '@/system/file-system/store';
import useFileSystemStore from '@/system/file-system/store';
import {
  areBoundingBoxesIntersecting,
  getOffsetsForContext,
  snapToTargetGrid,
  transformPosition,
} from '@/system/file-system/utils';
import { GRID_CELL_SIZE, ICON_ANIMATION_DURATION } from '@/themes';
import { getLazyIcon, getEventTargetDataId } from '@/utils';
import cn from '@/utils/format';

interface IconProps {
  entry: FileSystemEntry;
  selectRectVisible: boolean;
  selectRect: { position: { x: number; y: number }; size: { width: number; height: number } };
  dropTargetId: string;
  isAnyIconDragging: boolean;
  parentPosition: { x: number; y: number };
  parentSize: { width: number; height: number };
}

const FileExplorerIcon: React.FC<IconProps> = ({
  entry,
  selectRect,
  selectRectVisible,
  dropTargetId,
  isAnyIconDragging,
  parentPosition,
  parentSize,
}): ReactElement => {
  const setIsIconSelected = useFileSystemStore((state) => state.setIsIconSelected);
  const openEntry = useFileSystemStore((state) => state.openEntry);
  const setContextState = useFileSystemStore((state) => state.setContextState);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const getWindowSize = useFileSystemStore((state) => state.getWindowSize);
  const getWindowPosition = useFileSystemStore((state) => state.getWindowPosition);
  const blurWindowFocus = useFileSystemStore((state) => state.blurWindowFocus);
  const pushFocus = useFileSystemStore((state) => state.pushFocus);
  const setDropTargetIconId = useFileSystemStore((state) => state.setDropTargetIconId);
  const getIconAtPosition = useFileSystemStore((state) => state.getIconAtPosition);
  const getIconTransformScale = useFileSystemStore((state) => state.getIconTransformScale);
  const setTransformScale = useFileSystemStore((state) => state.setIconTransformScale);
  const clearRenaming = useFileSystemStore((state) => state.clearRenaming);
  const renameEntry = useFileSystemStore((state) => state.renameEntry);
  const isDragOverFolder = useFileSystemStore((state) => state.getIsDragOverFolder());
  const isIconSelected = useFileSystemStore((state) => state.getIsIconSelected(entry.id));
  const isIconDragging = useFileSystemStore((state) => state.getIsIconDragging(entry.id));
  const dragInitiatorId = useFileSystemStore((state) => state.getDragInitiatorId());
  const isRenaming = useFileSystemStore((state) => state.getIsRenaming(entry.id));
  const shouldUpdateName = useFileSystemStore((state) => state.shouldUpdateName);

  const { isShiftPressed } = UseKeyPresses();

  const { handleMouseDownSelect, handleMouseUpSelect, handleFocusSelect, handleToggleSelect } =
    UseIconSelect(entry, selectRectVisible);
  const { handleDragStart, handleMouseMove, handleMouseUp } = UseIconDrag(entry, dropTargetId);
  const LazyIcon = useMemo(() => getLazyIcon(entry.icon!), [entry.icon]);

  /*
   ********************************
   *           Renaming           *
   ********************************
   */
  const [renameInputValue, setRenameInputValue] = useState(entry.name);
  const renameInputRef = useRef<HTMLTextAreaElement>(null);

  // Auto focus and select text when renaming
  useEffect(() => {
    if (isRenaming && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
    }
  }, [isRenaming]);

  // Stop the renaming when pressing Enter or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === 'Enter' || e.key === 'Escape') &&
        document.activeElement === renameInputRef.current
      ) {
        e.preventDefault();
        clearRenaming();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [clearRenaming]);

  // Update the store once the name is changed
  // We're using local state only while isRenaming is true, and when
  // clearRenaming is called, it sets a global flag, which the below
  // useEffect will listen for. Why the roundabout? Because renaming
  // can be cancelled from various other places, so it's best to just
  // use the observer pattern here.
  useEffect(() => {
    if (shouldUpdateName) {
      if (renameInputValue === '') {
        setRenameInputValue(entry.name);
      } else {
        const newName = renameEntry(entry.id, renameInputValue);
        if (newName) {
          setRenameInputValue(newName);
        }
      }
    }
  }, [shouldUpdateName, entry.id, renameInputValue, renameEntry, entry.name]);

  /*
   ***********************************
   *    Icon Smooth In transition    *
   ***********************************
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransformScale(entry.id, 1);
    }, 50);
    return () => {
      clearTimeout(timeout);
    };
  }, [entry.id, setTransformScale, getIconTransformScale]);

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
    let targetPosition = parentPosition;
    let targetSize = parentSize;
    if (dropTargetId !== entry.parentId) {
      targetPosition = getWindowPosition(dropTargetId);
      targetSize = getWindowSize(dropTargetId);
    }
    const pos = snapToTargetGrid({
      sourceId: entry.parentId!,
      targetId: dropTargetId,
      position: entry.iconPosition,
      sourceOrigin: parentPosition,
      targetOrigin: targetPosition,
      targetSize,
    });
    return pos;
  }, [
    entry.iconPosition,
    entry.parentId,
    parentPosition,
    parentSize,
    getWindowSize,
    getWindowPosition,
    dropTargetId,
  ]);

  /*
   ********************************
   *       Icon Drop Targets      *
   ********************************
   */
  // Get the icon at the location of the drop guide
  const dropTargetIcon = useMemo((): FileSystemEntry | null => {
    let targetOrigin = parentPosition;
    let iconPosition = dropGuidePos;
    if (dropTargetId !== entry.parentId) {
      const offsets = getOffsetsForContext(entry.parentId!, dropTargetId);
      targetOrigin = getWindowPosition(dropTargetId);
      iconPosition = transformPosition({
        position: dropGuidePos,
        sourceOrigin: parentPosition,
        targetOrigin: {
          x: targetOrigin.x + offsets.x,
          y: targetOrigin.y + offsets.y,
        },
      });
    }

    return getIconAtPosition(dropTargetId, iconPosition);
  }, [
    dropGuidePos,
    dropTargetId,
    entry.parentId,
    parentPosition,
    getIconAtPosition,
    getWindowPosition,
  ]);

  // Checks if this instance is the one that started the drag
  const isDragInitiator = dragInitiatorId === entry.id;

  // When a dropTargetIs defined, update the state to keep track of the id
  useEffect(() => {
    if (isIconDragging && isDragInitiator && dropTargetIcon?.id !== entry.id) {
      setDropTargetIconId(dropTargetIcon?.id ?? null);
    }
  }, [
    entry.id,
    dragInitiatorId,
    dropTargetIcon,
    isDragInitiator,
    isIconDragging,
    setDropTargetIconId,
  ]);

  // Conditions for valid and invalid drops
  const isValidDrop = isDragInitiator && dropTargetIcon && dropTargetIcon.type === 'directory';
  const isInvalidDrop = isDragInitiator && dropTargetIcon && dropTargetIcon.type === 'file';

  // This hides all the other drop guides when hovering over a folder.
  // It's mostly for a cleaner UX
  const shouldHide = !isDragInitiator && isDragOverFolder;

  return (
    <>
      {/* Drop Preview */}
      {isIconDragging && !shouldHide && (
        <span
          className={cn(
            'border-black pointer-events-none absolute h-[88px] w-[80px] border-2 border-dashed transition-transform',
            `duragion-${ICON_ANIMATION_DURATION.toString()}`,
            isValidDrop && 'bg-green-500/10 border-green-700',
            isInvalidDrop && 'bg-red-500/10 border-red-700',
            // When any other non-initator hovers over any other icon, negative feedback
            !isDragInitiator && dropTargetIcon && 'bg-red-500/10 border-red-700',
          )}
          style={{
            transform: `
                translate(${dropGuidePos.x.toString()}px, ${dropGuidePos.y.toString()}px)
                translateZ(1px)
              `,
            zIndex: 50,
          }}
        />
      )}

      {/* File System Icon */}
      <button
        draggable={!isRenaming}
        onDragStart={(event) => {
          handleDragStart(event);
        }}
        type="button"
        data-id={`${entry.type}-icon`}
        className={cn(
          'w-[80px] h-[88px]',
          'absolute px-2 rounded-md background-transparent cursor-default flex flex-col items-center focus:outline-hidden',
          isIconSelected && 'bg-black/20',
          !isIconDragging && 'transition-transform duragion 500',
          !isIconSelected && !isAnyIconDragging && 'hover:bg-black/10',
          isIconDragging && 'opacity-60',
        )}
        style={{
          transform: `
              translate(${entry.iconPosition.x.toString()}px, ${entry.iconPosition.y.toString()}px)
              scale(${isIconDragging ? '1.1' : getIconTransformScale(entry.id).toString()})
              ${isIconDragging ? 'translateZ(1px)' : ''}
            `,
          pointerEvents: isIconDragging ? 'none' : 'auto',
          zIndex: isIconDragging ? 50 : 0,
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          if (event.button === 2) return;
          handleToggleSelect();
          handleFocusSelect();
          handleMouseDownSelect(event);
          clearContextState();
          if (entry.parentId === 'desktop') {
            blurWindowFocus(true);
          } else {
            pushFocus(entry.parentId!);
          }
        }}
        onMouseUp={(event: React.MouseEvent) => {
          if (event.button === 2 || isRenaming) return;
          handleMouseUpSelect(event);
        }}
        onFocus={(event: React.FocusEvent) => {
          event.stopPropagation();
          if (isAnyIconDragging || isRenaming) return;
          handleFocusSelect();
        }}
        onDoubleClick={() => {
          if (isRenaming) return;
          openEntry(entry.id);
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          if (isRenaming) return;
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
        <Suspense fallback={null}>
          <LazyIcon
            className={cn('icon-shadow')}
            data-id={`${entry.type}-icon`}
            width={entry.iconSize ?? 64}
            height={entry.iconSize ?? 64}
            fill={entry.iconColor}
            onMouseDown={() => {
              clearRenaming();
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </Suspense>
        {!isRenaming && (
          <textarea
            maxLength={26}
            disabled
            className={cn(
              'absolute no-select resize-none overflow-visible text-base font-bold bg-transparent text-center',
              'focus:outline-hidden',
            )}
            style={{
              bottom: -20,
              width: '105px',
              overflowWrap: 'break-word',
              pointerEvents: 'none',
            }}
            value={renameInputValue}
          />
        )}
        {isRenaming && (
          <textarea
            ref={renameInputRef}
            maxLength={26}
            className={cn(
              'absolute resize-none overflow-visible text-base font-bold bg-transparent text-center',
              'focus:outline-hidden',
            )}
            style={{
              bottom: -20,
              width: '105px',
              overflowWrap: 'break-word',
            }}
            value={renameInputValue}
            onChange={(event) => {
              setRenameInputValue(event.target.value);
            }}
          />
        )}
      </button>
    </>
  );
};

export default FileExplorerIcon;
