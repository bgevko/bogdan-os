import useProcessesStore from '@/stores/use-processes-store';

const StartButton = (): JSX.Element => {
  const store = useProcessesStore();

  return (
    <button
      className="flex h-full w-[36px] items-center justify-center bg-secondary"
      type="button"
      onClick={() => {
        store.open('HelloWorld');
      }}
      onDoubleClick={() => {
        store.close('HelloWorld');
      }}
    />
  );
};

export default StartButton;
