import { useEffect, useState, useRef } from 'react';

import { Stock, Waste, Foundations, Tableau } from '@/solitaire/components';
import GameSettings from '@/solitaire/components/game-settings';
import HelpScreen from '@/solitaire/components/help-screen';
import HighScores from '@/solitaire/components/high-scores';
import Timer, { TimerHandle } from '@/solitaire/components/timer';
import WinScreen from '@/solitaire/components/win-screen';
import useSolitaireStore from '@/solitaire/store';
import useFileSystemStore from '@/system/file-system/store';
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
  const newGameFlag = useSolitaireStore((state) => state.getNewGameFlag());
  const setNewGameFlag = useSolitaireStore((state) => state.setNewGameFlag);
  const helpVisible = useSolitaireStore((state) => state.getShowGameRulesFlag());
  const setHelpVisible = useSolitaireStore((state) => state.setShowGameRulesFlag);
  const showHighScores = useSolitaireStore((state) => state.getShowHighScoresFlag());
  const setHighScoresVisible = useSolitaireStore((state) => state.setShowHighScoresFlag);
  const showGameSettings = useSolitaireStore((state) => state.getShowGameSettingsFlag());
  const setShowGameSettings = useSolitaireStore((state) => state.setShowGameSettingsFlag);
  const difficulty = useSolitaireStore((state) => state.getDifficulty());
  const pauseGameFlag = useSolitaireStore((state) => state.getPauseGameFlag());
  const setPauseGameFlag = useSolitaireStore((state) => state.setPauseGameFlag);
  const setWindowOnCloseCallback = useFileSystemStore((state) => state.setWindowOnCloseCallback);
  const setWindowOnMinimizeCallback = useFileSystemStore(
    (state) => state.setWindowOnMinimizeCallback,
  );

  const timerRef = useRef<TimerHandle>(null);

  const startingTime = getSecondsElapsed();
  const [time, setTime] = useState(startingTime);
  const [timeBonus, setTimeBonus] = useState(0);
  // Init game on component mount
  useEffect(() => {
    // Init game
    try {
      init();
      setWindowOnCloseCallback('solitaire', () => {
        setPauseGameFlag(true);
      });
      setWindowOnMinimizeCallback('solitaire', () => {
        setPauseGameFlag(true);
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        console.error('Storage quota exceeded:', error);
        localStorage.clear();
        alert('The game state was too large and has been reset.');
      }
    }
  }, [init]);

  // Set the timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerRef.current && !isGameWon && !pauseGameFlag) {
        const currentTime = timerRef.current.getTime();

        // every 10 seconds, adjust the score by -2
        if (currentTime % 10 === 0 && currentTime !== 0) {
          setScore(getScore() - 20);
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
  }, [setSecondsElapsed, setScore, getScore, isGameWon, pauseGameFlag]);

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

  // Listen for new game trigger
  useEffect(() => {
    if (newGameFlag) {
      reset();
      init();
      if (timerRef.current) {
        timerRef.current.reset();
      }
      setTime(startingTime);
    }
  }, [newGameFlag, init, reset, startingTime]);

  // Escape to reset the game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !helpVisible && !isGameWon) {
        setNewGameFlag(true);
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
  }, [init, undo, reset, startingTime, isGameWon, helpVisible, setNewGameFlag]);

  return (
    <section
      className="size-full rounded-b-lg"
      style={{
        background: 'linear-gradient(180deg, #63AFE5 0%, #93E9B8 100%)',
      }}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      {!pauseGameFlag && (
        <div className="mx-auto flex h-full w-[800px] flex-col gap-2 rounded-b-lg pt-8">
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
      )}
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
            setNewGameFlag(true);
          }}
        />
      )}

      {showHighScores && (
        <HighScores
          onClose={() => {
            setHighScoresVisible(false);
          }}
        />
      )}

      {showGameSettings && (
        <GameSettings
          difficulty={difficulty}
          onClose={() => {
            setShowGameSettings(false);
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

      {pauseGameFlag && (
        <div className="absolute left-0 top-0 z-50 flex size-full items-center justify-center rounded-b-lg bg-white">
          <div className="flex flex-col gap-2 rounded-lg bg-white p-4 text-center">
            <p className="border-b">Game Paused</p>
            <button
              className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100"
              type="button"
              onClick={() => {
                useSolitaireStore.getState().setPauseGameFlag(false);
              }}
            >
              Resume
            </button>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 flex w-full cursor-default select-none justify-between rounded-b-lg bg-white px-4 py-1">
        <p>Score: {getScore()}</p>
        <span className="flex gap-4">
          <button
            type="button"
            className="w-[60px] rounded-md hover:bg-gray-100"
            onClick={() => {
              setPauseGameFlag(true);
            }}
          >
            {formatTime(time)}
          </button>
          <Timer ref={timerRef} initialSeconds={startingTime} />
        </span>
      </div>
    </section>
  );
};

export default Solitaire;
