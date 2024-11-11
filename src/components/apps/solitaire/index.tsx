import { useEffect } from 'react';

import { Stock, Waste, Foundations, Tableau } from '@/solitaire/components';
import useSolitaireStore from '@/solitaire/store';

const Solitaire = (): React.ReactElement => {
  const init = useSolitaireStore((state) => state.init);
  const undo = useSolitaireStore((state) => state.undo);

  // Init game on component mount
  useEffect(() => {
    // Init game
    init();
  }, [init]);

  // We'll do an escape key listener to reset the game (temp)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        init();
      }
    };

    const handleUndo = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        undo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleUndo);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleUndo);
    };
  }, [init, undo]);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #63AFE5 0%, #93E9B8 100%)',
      }}
      className="size-full rounded-b-lg"
    >
      <div className="mx-auto flex h-full w-[800px] flex-col gap-2 rounded-b-lg pt-2">
        <div className="flex">
          <div className="flex min-h-[145px] gap-4">
            <Stock />
            <Waste />
          </div>
          <span className="ml-[132px] flex gap-4">
            <Foundations />
          </span>
        </div>
        <div className="flex size-full gap-4">
          <Tableau />
        </div>
      </div>
    </section>
  );
};

export default Solitaire;
