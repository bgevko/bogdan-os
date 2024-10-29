import Clock from '@/components/system/taskbar/clock';
import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';
import useMenuStore from '@/stores/use-menu-store';
import useMouseStore from '@/stores/use-mouse-store';
import { TASKBAR_HEIGHT } from '@/themes';

const Taskbar = (): JSX.Element => {
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const setMenuContext = useMenuStore((state) => state.setMenuContext);
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
        const target = event.target as HTMLElement;
        const dataId = target.dataset.id;
        if (dataId === 'taskbar-entry') {
          return;
        }
        setMenuContext('taskbar');
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
