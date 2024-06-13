import Button from '@/components/system/button';

const StartButton = (): JSX.Element => {
  return (
    <Button
      data-testid="start-button"
      className="flex h-full w-20 items-center justify-center p-2 text-onSurface"
      type="button"
    >
      Explore
    </Button>
  );
};

export default StartButton;
