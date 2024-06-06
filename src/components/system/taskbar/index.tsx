import Clock from '@/components/system/taskbar/clock';
import StartButton from '@/components/system/taskbar/start-button';
import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';
import { TASKBAR_HEIGHT } from '@/themes';

const Taskbar = (): JSX.Element => (
  <footer
    className="embossed-border-t absolute inset-x-0 bottom-0 w-dvw"
    style={{ top: `calc(100% - ${TASKBAR_HEIGHT.toString()}px)` }}
  >
    <nav className="absolute inset-x-0 bottom-0 top-[-5px] flex gap-1 bg-surface px-[5px] pb-[5px]">
      <StartButton />
      <TaskbarEntries />
      <Clock />
    </nav>
  </footer>
);

export default Taskbar;
