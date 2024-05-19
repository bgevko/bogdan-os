import Clock from '@/components/system/taskbar/clock';
import StartButton from '@/components/system/taskbar/start-button';
import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';

const Taskbar = (): JSX.Element => (
  <nav className="absolute inset-x-0 bottom-0 flex h-[30px] w-dvw bg-primary">
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </nav>
);

export default Taskbar;
