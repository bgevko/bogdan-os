import { useEffect, useState, useRef, useCallback } from 'react';

import DynamicIcon from '@/components/system/icons';
import UseHandleContextMenu from '@/hooks/system/use-context-menu/use-handle-context-menu';
import UseWindowState from '@/hooks/system/use-window';
import { appOptions } from '@/static';
import useFsStore from '@/stores/use-fs-store';
import useMenuStore from '@/stores/use-menu-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format';
import { parseFileName, parseFullFileName } from '@/utils/fs';

interface taskbarEntryProperties {
  path: string;
}

const TaskbarEntry = ({ path }: taskbarEntryProperties): JSX.Element => {
  const [buttonDown, setButtonDown] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(path));
  const setMinimizedDimensions = useProcessesStore((state) => state.setMinimizedWindow);
  const tabReference = useRef<HTMLButtonElement>(null);
  const setFocused = useProcessesStore((state) => state.setFocused);
  const isFocused = useProcessesStore((state) => state.getIsFocused(path));
  const isDir = useFsStore((state) => state.isDir(path));
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const setIsVisible = useMenuStore((state) => state.setIsVisible);
  const { handleContextMenu } = UseHandleContextMenu();

  const title = parseFileName(path);
  const iconName = appOptions.get(parseFullFileName(path))?.iconName ?? (isDir ? 'folder' : 'file');

  const { handleWindowMinimizeToggle } = UseWindowState(path);

  const handleTabFocus = useCallback(() => {
    if (isFocused || isMinimized) {
      handleWindowMinimizeToggle();
    } else {
      setFocused(path);
    }
  }, [handleWindowMinimizeToggle, isFocused, isMinimized, path, setFocused]);

  useEffect(() => {
    if (tabReference.current) {
      const rect = tabReference.current.getBoundingClientRect();
      const tabRect = {
        size: {
          width: rect.width,
          height: rect.height,
        },
        position: {
          x: rect.left,
          y: rect.top,
        },
      };
      setMinimizedDimensions(path, tabRect);
    }
  }, [path, setMinimizedDimensions]);

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
      onClick={() => {
        handleTabFocus();
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
        setButtonDown(true);
        setMouseDown(true);

        // if not right click, hide context menu
        if (event.button !== 2) {
          setIsVisible(false);
        }
      }}
      onMouseUp={() => {
        setButtonDown(false);
      }}
      onMouseLeave={(event: React.MouseEvent) => {
        event.stopPropagation();
        setButtonDown(false);
        popMouseContext();
      }}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
        if (mouseDown) {
          setButtonDown(true);
        }
        appendMouseContext('taskbar-entry');
      }}
      onDoubleClick={(event) => {
        event.stopPropagation();
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        handleContextMenu(event, 'taskbar-entry', path);
      }}
    >
      <DynamicIcon iconName={iconName} color="white" size={32} shadow={false} />
      {title}
    </button>
  );
};

const TaskbarEntries = (): JSX.Element => {
  const opened = useProcessesStore((state) => state.getOpenedPaths());

  return (
    <ol className="flex size-full items-center justify-start gap-1">
      {/* {[...opened].map(([process, { icon, fileName }]) => { */}
      {opened.map((processPath) => {
        return <TaskbarEntry key={processPath} path={processPath} />;
      })}
    </ol>
  );
};

export default TaskbarEntries;
