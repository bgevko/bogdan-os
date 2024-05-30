import useProcessesStore from '@/stores/use-processes-store';

interface taskbarEntryProperties {
  icon: string;
  title: string;
}

const TaskbarEntry = ({ icon, title }: taskbarEntryProperties): JSX.Element => (
  <figure
    data-testid="taskbar-entry"
    className="flex h-full items-center justify-center bg-primary px-2 text-onPrimary"
  >
    <img src={icon} alt={title} />
    <figcaption>{title}</figcaption>
  </figure>
);

const TaskbarEntries = (): JSX.Element => {
  const opened = useProcessesStore((state) => state.openedProcesses);

  return (
    <ol className="flex size-full items-center justify-start bg-surface">
      {Object.entries(opened).map(([process, { icon, title }]) => {
        return <TaskbarEntry key={process} icon={icon} title={title} />;
      })}
    </ol>
  );
};

export default TaskbarEntries;
