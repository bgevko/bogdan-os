import Desktop from '@/components/system/desktop/index';
import ProcessLoader from '@/components/system/process-loader';
import Taskbar from '@/components/system/taskbar';
import Wallpaper from '@/components/system/wallpaper';

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
