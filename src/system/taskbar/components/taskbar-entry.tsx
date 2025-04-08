import React, { useMemo, useEffect, useState, useRef, Suspense } from 'react';

import useFileSystemsStore, { type FileSystemEntry } from '@/system/file-system/store';
import UseWindowMove from '@/system/window-system/hooks/use-window-move';
import { TASKBAR_ENTRY_WIDTH, TASKBAR_ENTRY_HEIGHT } from '@/themes';
import { getLazyIcon, getEventTargetDataId } from '@/utils';
import cn from '@/utils/format';

interface taskbarEntryProperties {
  entry: FileSystemEntry;
}

const TaskbarEntry = ({ entry }: taskbarEntryProperties): React.JSX.Element => {
  const pushFocus = useFileSystemsStore((state) => state.pushFocus);
  const setContextState = useFileSystemsStore((state) => state.setContextState);
  const clearContextState = useFileSystemsStore((state) => state.clearContextState);
  const clearRenaming = useFileSystemsStore((state) => state.clearRenaming);
  const clearKeyCommand = useFileSystemsStore((state) => state.clearKeyCommand);
  const windowState = useFileSystemsStore((state) => state.getWindowState(entry.id));
  const isFocused = useFileSystemsStore((state) => state.getIsWindowFocused(entry.id));
  const isOpen = useFileSystemsStore((state) => state.getIsOpen(entry.id));
  const transformScale = useFileSystemsStore((state) => state.getTransformScale(entry.id));
  const { handleToggleMinimize } = UseWindowMove(entry);
  let name = useFileSystemsStore((state) => state.getName(entry.id));
  name = name.length <= 11 ? name : `${name.slice(0, 11)}...`;

  const [buttonDown, setButtonDown] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const isMinimized = windowState === 'minimized';

  const tabReference = useRef<HTMLButtonElement>(null);
  const LazyIcon = useMemo(() => getLazyIcon(entry.icon!), [entry.icon]);

  useEffect(() => {
    const handleMouseUp = () => {
      setMouseDown(false);
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseDown]);

  if (!isOpen) {
    return <></>;
  }
  return (
    <button
      type="button"
      ref={tabReference}
      data-testid="taskbar-entry"
      data-id="taskbar-entry"
      className={cn(
        'rounded-[4px] flex items-center justify-center gap-1 text-grey-800 cursor-pointer select-none transition-transform duration-200',
        isMinimized && 'embossed',
        isFocused && 'debossed',
        buttonDown ? 'debossed' : 'embossed',
      )}
      style={{
        width: TASKBAR_ENTRY_WIDTH,
        height: TASKBAR_ENTRY_HEIGHT,
        transform: `
          scale(${isMinimized ? '1' : transformScale.toString()})
        `,
      }}
      onClick={(event) => {
        const eventTargetDataId = getEventTargetDataId(event);
        if (eventTargetDataId === 'taskbar-entry') {
          event.stopPropagation();
        }
        // Tab focus
        if (isFocused || isMinimized) {
          handleToggleMinimize();
        } else {
          pushFocus(entry.id);
        }
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
        setButtonDown(true);
        setMouseDown(true);

        clearContextState();
        clearRenaming();
        clearKeyCommand();
      }}
      onMouseUp={() => {
        setButtonDown(false);
      }}
      onMouseLeave={(event: React.MouseEvent) => {
        event.stopPropagation();
        setButtonDown(false);
      }}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
        if (mouseDown) {
          setButtonDown(true);
        }
      }}
      onDoubleClick={(event) => {
        event.stopPropagation();
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        if (getEventTargetDataId(event) === 'taskbar-entry') {
          const clickPosition = {
            x: event.clientX,
            y: event.clientY,
          };
          setContextState({
            id: entry.id,
            category: 'taskbar-entry',
            clickPosition,
          });
        }
      }}
    >
      <Suspense fallback={<span className="size-8 animate-pulse rounded-md" />}>
        <LazyIcon width={32} height={32} fill="#fff" className="select-none" />
      </Suspense>
      {name}
    </button>
  );
};

export default TaskbarEntry;
