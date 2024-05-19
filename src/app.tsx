import Desktop from '@/components/system/desktop';
import ProcessLoader from '@/components/system/process-loader';

const App = (): React.ReactElement => (
  <Desktop>
    <ProcessLoader />
  </Desktop>
);

export default App;
