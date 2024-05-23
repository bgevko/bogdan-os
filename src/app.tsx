import Desktop from '@/components/system/desktop';
import ProcessLoader from '@/components/system/process-loader';
import Taskbar from '@/components/system/taskbar';

const App = (): React.ReactElement => {
  return (
    <Desktop>
      <Taskbar />
      <ProcessLoader />
    </Desktop>
  );
};

export default App;
