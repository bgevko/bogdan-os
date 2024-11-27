/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState, useRef } from 'react';

import { Stock, Waste, Foundations, Tableau } from '@/solitaire/components';
import HelpScreen from '@/solitaire/components/help-screen';
import Timer, { TimerHandle } from '@/solitaire/components/timer';
import WinScreen from '@/solitaire/components/win-screen';
import useSolitaireStore from '@/solitaire/store';
import { formatTime } from '@/utils/format';

const Solitaire = (): React.ReactElement => {
  const init = useSolitaireStore((state) => state.init);
  const undo = useSolitaireStore((state) => state.undo);
  const reset = useSolitaireStore((state) => state.reset);
  const isGameWon = useSolitaireStore((state) => state.getIsWon());
  const getSecondsElapsed = useSolitaireStore((state) => state.getSecondsElapsed);
  const setSecondsElapsed = useSolitaireStore((state) => state.setSecondsElapsed);
  const setScore = useSolitaireStore((state) => state.setScore);
  const getScore = useSolitaireStore((state) => state.getScore);
  const calcFinalScore = useSolitaireStore((state) => state.calcFinalScore);
  const getLeaderboard = useSolitaireStore((state) => state.getLeaderboard);
  const setLeaderboard = useSolitaireStore((state) => state.setLeaderboard);
  const submitted = useSolitaireStore((state) => state.getSubmitted());
  const setSubmitted = useSolitaireStore((state) => state.setSubmitted);

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
          setScore(getScore() - 2);
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
  }, [setSecondsElapsed, setScore, getScore, isGameWon]);

  // Game is won
  useEffect(() => {
    if (isGameWon) {
      const completionTime = timerRef.current?.getTime() ?? 0;
      setSecondsElapsed(completionTime);

      // reward player with a flat 300 points if their time is under 2 minutes
      // otherwise, taper it off by 1 point per second. Past 5 minutes, no bonus.
      // If the player completes under 5 minutes, also take away the 2 point penalty for every 10 seconds.
      const completionBonus = completionTime < 120 ? 3000 : Math.max(0, 300 - completionTime) * 10;

      setTimeBonus(completionBonus);
    }
  }, [isGameWon, setSecondsElapsed, setScore]);

  // Escape to reset the game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !helpVisible && !isGameWon) {
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
        <WinScreen
          time={time}
          timeBonus={timeBonus}
          score={calcFinalScore()}
          leaderboard={getLeaderboard()}
          setLeaderboard={setLeaderboard}
          submitted={submitted}
          setSubmitted={setSubmitted}
          onPlayAgain={() => {
            reset();
            init();
            if (timerRef.current) {
              timerRef.current.reset();
            }
            setTime(startingTime);
          }}
        />
      )}

      {helpVisible && (
        <HelpScreen
          onClose={() => {
            setHelpVisible(false);
          }}
        />
      )}
      <div className="absolute bottom-0 flex w-full cursor-default select-none justify-between rounded-b-lg bg-white px-4 py-1">
        <span className="flex gap-4">
          <p>Score: {getScore()}</p>
          <p className="w-[90px]">Time: {formatTime(time)}</p>
          <Timer ref={timerRef} initialSeconds={startingTime} />
        </span>
        <p className="ml-[-70px]">Esc To Restart</p>
        <button
          className="size-6 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
          type="button"
          disabled={isGameWon}
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
