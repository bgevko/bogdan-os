import Desktop from '@/components/system/desktop/index';
import ProcessLoader from '@/components/system/process-loader';
import Taskbar from '@/components/system/taskbar';
import Wallpaper from '@/components/system/wallpaper';
import { startingDir } from '@/constants';
import useFsStore from '@/stores/use-fs-store';

const App = (): React.ReactElement => {
  const initDir = useFsStore((state) => state.initDir);
  initDir(startingDir);
  return (
    <Wallpaper>
      <ProcessLoader />
      <Taskbar />
      <Desktop />
    </Wallpaper>
  );
};

export default App;
