import Button from '@/components/system/button';
import useProcessesStore from '@/stores/use-processes-store';

const StartButton = (): JSX.Element => {
  const open = useProcessesStore((state) => state.open);
  return (
    <Button
      data-testid="start-button"
      className="flex h-full w-20 items-center justify-center p-2 text-onSurface"
      type="button"
      onMouseUpCapture={() => {
        open('HelloWorld');
      }}
    >
      Explore
    </Button>
  );
};

export default StartButton;
