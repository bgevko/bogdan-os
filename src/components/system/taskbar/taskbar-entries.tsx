import { useEffect, useState, useRef } from 'react';

import { iconDirectory } from '@/globals/process-directory';
import useWindowState from '@/hooks/use-window';
import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format';

interface taskbarEntryProperties {
  icon: string;
  title: string;
  path: string;
}

const TaskbarEntry = ({ icon, title, path }: taskbarEntryProperties): JSX.Element => {
  const [imgError, setImgError] = useState(false);
  const [buttonDown, setButtonDown] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(path));
  const close = useProcessesStore((state) => state.close);
  const setMinimizedDimensions = useProcessesStore((state) => state.setMinimizedWindow);
  const tabReference = useRef<HTMLButtonElement>(null);

  const { handleWindowMinimizeToggle } = useWindowState(path);

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
      className={cn(
        'flex h-full items-center justify-center gap-1 text-onSurface cursor-pointer select-none',
        isMinimized ? 'embossed-border' : 'debossed-border',
        buttonDown ? 'debossed-border ' : 'embossed-border',
      )}
      onClick={() => {
        handleWindowMinimizeToggle();
      }}
      onContextMenuCapture={(event) => {
        event.preventDefault();
        // debug
        close(path);
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
        setButtonDown(true);
        setMouseDown(true);
      }}
      onMouseUp={() => {
        setButtonDown(false);
      }}
      onMouseLeave={() => {
        setButtonDown(false);
      }}
      onMouseEnter={() => {
        if (mouseDown) {
          setButtonDown(true);
        }
      }}
      onDoubleClick={(event) => {
        event.stopPropagation();
      }}
    >
      {!imgError && (
        <img
          src={`${iconDirectory}${icon}.png`}
          alt={title}
          width="24"
          onError={() => {
            setImgError(true);
          }}
        />
      )}
      {title}
    </button>
  );
};

const TaskbarEntries = (): JSX.Element => {
  const opened = useProcessesStore((state) => state.openedProcesses);

  return (
    <ol className="flex size-full items-center justify-start bg-surface">
      {[...opened].map(([process, { icon, fileName }]) => {
        return <TaskbarEntry key={process} path={process} icon={icon} title={fileName} />;
      })}
    </ol>
  );
};

export default TaskbarEntries;
