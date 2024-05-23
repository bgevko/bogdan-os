import Button from '@/components/system/button';
import useProcessesStore from '@/stores/use-processes-store';

const StartButton = (): JSX.Element => {
  const store = useProcessesStore();
  return (
    <Button
      className="flex h-full w-20 items-center justify-center p-2 text-onSurface"
      type="button"
      onMouseUpCapture={() => {
        store.open('HelloWorld');
      }}
    >
      Explore
    </Button>
  );
};

export default StartButton;
