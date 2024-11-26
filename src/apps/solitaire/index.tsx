/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';

import { Stock, Waste, Foundations, Tableau } from '@/solitaire/components';
import useSolitaireStore from '@/solitaire/store';

const Solitaire = (): React.ReactElement => {
  const init = useSolitaireStore((state) => state.init);
  const undo = useSolitaireStore((state) => state.undo);
  const reset = useSolitaireStore((state) => state.reset);
  const isGameWon = useSolitaireStore((state) => state.getIsWon());
  const score = useSolitaireStore((state) => state.getScore());

  const [helpVisible, setHelpVisible] = useState(false);

  // Init game on component mount
  useEffect(() => {
    // Init game
    init();
  }, [init]);

  // We'll do an escape key listener to reset the game (temp)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        reset();
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
  }, [init, undo, reset]);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #63AFE5 0%, #93E9B8 100%)',
      }}
      className="size-full rounded-b-lg"
    >
      <div className="mx-auto flex h-full w-[800px] flex-col gap-2 rounded-b-lg pt-2">
        <div className="flex">
          <div className="flex min-h-[148px] gap-4">
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
      {isGameWon && (
        <>
          <div className="absolute right-0 top-0 size-full bg-black/30" />
          <div
            className="window-shadow absolute flex h-[140px] w-[200px] flex-col items-center justify-center gap-2 rounded-lg bg-white"
            style={{
              left: 'calc(50% - 100px)',
              top: 'calc(50% - 70px)',
            }}
          >
            <p className="text-2xl">
              <span className="wave">W</span>
              <span className="wave">i</span>
              <span className="wave">n</span>
              <span className="wave">n</span>
              <span className="wave">e</span>
              <span className="wave">r</span>
            </p>
            <button
              className="rounded-md border px-4 py-1 text-gray-800 hover:bg-gray-100"
              type="button"
              onClick={() => {
                reset();
                init();
              }}
            >
              Deal Again
            </button>
          </div>
        </>
      )}
      {helpVisible && (
        <>
          <div
            onClick={() => {
              setHelpVisible(false);
            }}
            className="absolute right-0 top-0 size-full bg-black/30"
          />
          <div
            className="window-shadow absolute flex h-[340px] w-[500px] flex-col items-center gap-2 rounded-lg bg-white py-4"
            style={{
              left: 'calc(50% - 250px)',
              top: 'calc(50% - 200px)',
            }}
          >
            <p className="text-2xl font-bold">Welcome to Solitaire</p>
            <ul className="list-disc px-4">
              <li>Move cards between columns in descending order and alternating colors.</li>
              <li>Build each foundation (top) by suit in ascending order from Ace to King.</li>
              <li>Double-click or right-click a card to send it to the foundation if possible.</li>
            </ul>
            <ul className="mt-4 px-4 text-center">
              <li>
                <strong>Cmd/Ctrl + Z:</strong> Undo last move
              </li>
              <li>
                <strong>Esc:</strong> Restart game
              </li>
            </ul>
            <p
              style={{
                textWrap: 'balance',
              }}
              className="mt-4 px-4 text-center text-sm text-gray-600"
            >
              The game is playable, but I&apos;m adding polish and additional features. You may
              experience an occassional bug.
            </p>

            <button
              className="mt-4 rounded-md border px-4 py-1 text-gray-800 hover:bg-gray-100"
              type="button"
              onClick={() => {
                setHelpVisible(false);
              }}
            >
              OK
            </button>
          </div>
        </>
      )}
      <div className="absolute bottom-0 flex w-full cursor-default select-none justify-center rounded-b-lg bg-white px-4 py-1">
        <p>Score: {score}</p>
        <p className="ml-auto">Esc To Restart</p>
        <button
          className="ml-auto size-6 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
          type="button"
          onClick={() => {
            setHelpVisible(true);
          }}
        >
          ?
        </button>
      </div>
    </section>
  );
};

export default Solitaire;
