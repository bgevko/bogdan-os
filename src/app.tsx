import Desktop from '@/system/file-system/desktop';
import ProcessLoader from '@/system/process-loader';
import Taskbar from '@/system/taskbar';
import Wallpaper from '@/system/wallpaper';

const App = (): React.ReactElement => {
  return (
    <Wallpaper>
      <ProcessLoader />
      <Taskbar />
      <Desktop />
    </Wallpaper>
  );
};

export default App;
