import { useMemo, useEffect, useState, useRef, Suspense } from 'react';

import useFileSystemsStore, { type FileSystemEntry } from '@/system/file-system/store';
import UseWindowMove from '@/system/window-system/hooks/use-window-move';
import { getLazyIcon, getEventTargetDataId } from '@/utils';
import cn from '@/utils/format';

interface taskbarEntryProperties {
  entry: FileSystemEntry;
}

const TaskbarEntry = ({ entry }: taskbarEntryProperties): JSX.Element => {
  const isFocused = useFileSystemsStore((state) => state.getIsWindowFocused(entry.id));
  const pushFocus = useFileSystemsStore((state) => state.pushFocus);
  const setContextState = useFileSystemsStore((state) => state.setContextState);
  const clearContextState = useFileSystemsStore((state) => state.clearContextState);
  const windowState = useFileSystemsStore((state) => state.getWindowState(entry.id));
  const { handleToggleMinimize } = UseWindowMove(entry);

  const [buttonDown, setButtonDown] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  // temp stubs
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

  return (
    <button
      type="button"
      ref={tabReference}
      data-testid="taskbar-entry"
      data-id="taskbar-entry"
      className={cn(
        'rounded-[4px] flex h-full w-[112px] items-center justify-center gap-1 text-grey-800 cursor-pointer select-none',
        isMinimized && 'embossed',
        isFocused && 'debossed',
        buttonDown ? 'debossed' : 'embossed',
      )}
      onClick={(event) => {
        event.stopPropagation();
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
      {/* <DynamicIcons path={path} color="white" size={32} shadow={false} /> */}
      <Suspense fallback={<span className="size-8 animate-pulse rounded-md" />}>
        <LazyIcon width={32} height={32} fill="#fff" className="select-none" />
      </Suspense>
      {entry.name}
    </button>
  );
};

export default TaskbarEntry;
