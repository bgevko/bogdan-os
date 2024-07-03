import Clock from '@/components/system/taskbar/clock';
import StartButton from '@/components/system/taskbar/start-button';
import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';
import useMouseStore from '@/stores/use-mouse-store';
import { TASKBAR_HEIGHT } from '@/themes';

const Taskbar = (): JSX.Element => {
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  return (
    <footer
      className="embossed-border-t absolute inset-x-0 bottom-0 w-dvw"
      style={{ top: `calc(100% - ${TASKBAR_HEIGHT.toString()}px)` }}
      onMouseLeave={(event: React.MouseEvent) => {
        event.stopPropagation();
        popMouseContext();
      }}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
        appendMouseContext('taskbar');
      }}
    >
      <nav className="absolute inset-x-0 bottom-0 top-[-5px] flex gap-1 bg-surface px-[5px] pb-[5px]">
        <StartButton />
        <TaskbarEntries />
        <Clock />
      </nav>
    </footer>
  );
};

export default Taskbar;
