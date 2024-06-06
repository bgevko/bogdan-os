import { useState } from 'react';

import { iconDirectory } from '@/globals/process-directory';
import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format';

interface taskbarEntryProperties {
  icon: string;
  title: string;
  id: string;
}

const TaskbarEntry = ({ icon, title, id }: taskbarEntryProperties): JSX.Element => {
  const [imgError, setImgError] = useState(false);
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(id));
  const setIsMinimized = useProcessesStore((state) => state.setIsMinimized);

  return (
    <button
      type="button"
      data-testid="taskbar-entry"
      className={cn(
        'flex h-full items-center justify-center gap-1 text-onSurface cursor-pointer',
        isMinimized ? 'embossed-border' : 'debossed-border',
      )}
      onClick={() => {
        setIsMinimized(id, !isMinimized);
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
      {Object.entries(opened).map(([process, { icon, title }]) => {
        return <TaskbarEntry key={process} id={process} icon={icon} title={title} />;
      })}
    </ol>
  );
};

export default TaskbarEntries;
