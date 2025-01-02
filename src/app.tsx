import ContextMenu from '@/system/context-menu';
import Desktop from '@/system/file-system/desktop';
import Taskbar from '@/system/taskbar';
import Wallpaper from '@/system/wallpaper';
import WindowSystem from '@/system/window-system';
import MaximizedWindowHeader from '@/system/window-system/components/maximized-window-header';

const App = (): React.ReactElement => {
  return (
    <>
      <Wallpaper>
        <WindowSystem />
        <Taskbar />
        <Desktop />
      </Wallpaper>
      <MaximizedWindowHeader />
      <ContextMenu />
    </>
  );
};

export default App;
