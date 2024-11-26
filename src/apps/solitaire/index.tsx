/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState, useRef } from 'react';

import { Stock, Waste, Foundations, Tableau } from '@/solitaire/components';
import Timer, { TimerHandle } from '@/solitaire/components/timer';
import useSolitaireStore from '@/solitaire/store';
import { formatTime } from '@/utils/format';

const Solitaire = (): React.ReactElement => {
  const init = useSolitaireStore((state) => state.init);
  const undo = useSolitaireStore((state) => state.undo);
  const reset = useSolitaireStore((state) => state.reset);
  const isGameWon = useSolitaireStore((state) => state.getIsWon());
  // const isGameWon = true;
  const score = useSolitaireStore((state) => state.getScore());
  const getSecondsElapsed = useSolitaireStore((state) => state.getSecondsElapsed);
  const setSecondsElapsed = useSolitaireStore((state) => state.setSecondsElapsed);
  const adjustScore = useSolitaireStore((state) => state.adjustScore);

  const [helpVisible, setHelpVisible] = useState(false);
  const timerRef = useRef<TimerHandle>(null);

  const startingTime = getSecondsElapsed();
  const [time, setTime] = useState(startingTime);
  const [timeBonus, setTimeBonus] = useState(0);

  // Init game on component mount
  useEffect(() => {
    // Init game
    init();
  }, [init]);

  // Set the timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerRef.current && !isGameWon) {
        const currentTime = timerRef.current.getTime();

        // every 10 seconds, adjust the score by -2
        if (currentTime % 10 === 0 && currentTime !== 0) {
          adjustScore(-20);
        }

        setTime(currentTime);
      }
    }, 1000);

    // Cleanup (save the time)
    const copiedTimerRef = timerRef.current;
    return () => {
      clearInterval(timerInterval);

      if (copiedTimerRef) {
        const finalTime = copiedTimerRef.getTime();
        setSecondsElapsed(finalTime);
      }
    };
  }, [setSecondsElapsed, adjustScore, isGameWon]);

  // Game is won
  useEffect(() => {
    if (isGameWon) {
      const completionTime = timerRef.current?.getTime() ?? 0;
      setSecondsElapsed(completionTime);

      // reward player with a flat 300 points if their time is under 2 minutes
      // otherwise, taper it off by 1 point per second. Past 5 minutes, no bonus.
      // If the player completes under 5 minutes, also take away the 2 point penalty for every 10 seconds.
      const completionBonus = completionTime < 120 ? 3000 : Math.max(0, 300 - completionTime) * 10;

      adjustScore(completionBonus);
      setTimeBonus(completionBonus);
    }
  }, [isGameWon, setSecondsElapsed, adjustScore]);
  // Escape to reset the game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !helpVisible) {
        reset();
        init();

        if (timerRef.current) {
          timerRef.current.reset();
        }
        setTime(startingTime);
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
  }, [init, undo, reset, startingTime, isGameWon, helpVisible]);

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
            className="window-shadow absolute flex size-[200px] flex-col items-center justify-center gap-2 rounded-lg bg-white"
            style={{
              left: 'calc(50% - 100px)',
              top: 'calc(50% - 100px)',
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
            <div>
              <p>Time: {formatTime(time)}</p>
              <p>Time Bonus: {timeBonus}</p>
              <p>Final Score: {score}</p>
            </div>
            <button
              className="rounded-md border px-4 py-1 text-gray-800 hover:bg-gray-100"
              type="button"
              onClick={() => {
                reset();
                init();

                if (timerRef.current) {
                  timerRef.current.reset();
                }
                setTime(startingTime);
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
      <div className="absolute bottom-0 flex w-full cursor-default select-none justify-between rounded-b-lg bg-white px-4 py-1">
        <span className="flex gap-4">
          <p>Score: {score}</p>
          <p className="w-[90px]">Time: {formatTime(time)}</p>
          <Timer ref={timerRef} initialSeconds={startingTime} />
        </span>
        <p className="ml-[-70px]">Esc To Restart</p>
        <button
          className="size-6 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
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
