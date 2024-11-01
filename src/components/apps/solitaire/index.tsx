import Card from '@/components/apps/solitaire/card';

const Solitaire = (): React.ReactElement => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #63AFE5 0%, #93E9B8 100%)',
      }}
      className="flex size-full items-center justify-center rounded-b-lg"
    >
      <Card value={52} />
    </div>
  );
};

export default Solitaire;
