import { useEffect, useState } from 'react';

import useProcessesStore from '@/stores/use-processes-store';

interface taskbarEntryProperties {
  icon: string;
  title: string;
}

const TaskbarEntry = ({ icon, title }: taskbarEntryProperties): JSX.Element => (
  <figure className="flex h-full items-center justify-center bg-primary px-2 text-onPrimary">
    <img src={icon} alt={title} />
    <figcaption>{title}</figcaption>
  </figure>
);

const TaskbarEntries = (): JSX.Element => {
  const [opened, setOpened] = useState<string[]>([]);
  const store = useProcessesStore();

  useEffect(() => {
    setOpened(store.openedProcesses);
  }, [store.openedProcesses]);

  return (
    <ol className="flex size-full items-center justify-start bg-surface">
      {opened.map((process) => {
        const { icon, title } = store.processDirectory[process];
        return <TaskbarEntry key={process} icon={icon} title={title} />;
      })}
    </ol>
  );
};

export default TaskbarEntries;
