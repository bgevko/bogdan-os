import Button from '@/system/button';

const StartButton = (): JSX.Element => {
  return (
    <Button
      data-testid="start-button"
      type="button"
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      Explore
    </Button>
  );
};

export default StartButton;
