import Clock from '@/components/system/taskbar/clock';
import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';
import useMouseStore from '@/stores/use-mouse-store';
import { TASKBAR_HEIGHT } from '@/themes';

const Taskbar = (): JSX.Element => {
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const taskbarColor = '#FFAFAF';
  return (
    <footer
      className="absolute inset-x-0 bottom-0 w-dvw"
      style={{ top: `calc(100% - ${TASKBAR_HEIGHT.toString()}px)` }}
      onMouseLeave={(event: React.MouseEvent) => {
        event.stopPropagation();
        popMouseContext();
      }}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
        appendMouseContext('taskbar');
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <nav
        style={{ backgroundColor: taskbarColor }}
        className=" absolute bottom-0 flex h-10 w-full gap-1 px-4 py-1"
      >
        {/* <StartButton /> */}
        <TaskbarEntries />
        <Clock />
      </nav>
    </footer>
  );
};

export default Taskbar;
