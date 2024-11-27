import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';

import { LeaderboardEntry } from '@/solitaire/store';
import cn, { formatTime } from '@/utils/format';

interface WinScreenProps {
  time: number;
  timeBonus: number;
  score: number;
  leaderboard: LeaderboardEntry[];
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
  setLeaderboard: (leaderboard: LeaderboardEntry[]) => void;
  onPlayAgain: () => void;
}

const WinScreen: React.FC<WinScreenProps> = ({
  time,
  timeBonus,
  score,
  leaderboard,
  submitted,
  setSubmitted,
  setLeaderboard,
  onPlayAgain,
}) => {
  const [name, setName] = useState('');
  const [focusMarkup, setFocusMarkup] = useState('');
  const [isHoverSubmit, setIsHoverSubmit] = useState(false);
  const [isHoverNewGame, setIsHoverNewGame] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Ghost entry represents the current user's score before submission
  const ghostEntry = useMemo(() => {
    return {
      name: name || 'You',
      time,
      score,
      highlight: true,
    };
  }, [name, time, score]);

  // Clear any highligted entries on mount
  useEffect(() => {
    setLeaderboard(
      leaderboard.map((entry) => {
        return { ...entry, highlight: false };
      }),
    );
  }, [leaderboard, setLeaderboard]);

  // Handle submit for user score when game is won
  const handleScoreSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (submitted) return;
      if (name) {
        setSubmitted(true);
        // Add the user's entry to the leaderboard
        setLeaderboard([...leaderboard, ghostEntry]);
        setFocusMarkup('');
        setIsHoverSubmit(false);
        setIsHoverNewGame(false);
      } else {
        // force focus on input field
        inputRef.current?.focus();
      }
    },
    [ghostEntry, setSubmitted, leaderboard, submitted, name, setLeaderboard],
  );

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const highlightedStyle = submitted
    ? 'bg-transparent transition-all border border-transparent'
    : 'border text-black/40';

  // Memoized calculation for leaderboard entries to display
  const { entriesPage, start } = useMemo(() => {
    const board = submitted ? [...leaderboard] : [...leaderboard, ghostEntry];

    // Sort and get the user's index
    board.sort((a, b) => {
      // Compare by score first
      if (b.score !== a.score) {
        return b.score - a.score; // Higher scores come first
      }
      // If scores are equal, compare by time
      return a.time - b.time; // Earlier times come first
    });
    const userIndex = board.findIndex((entry) => entry.highlight);

    // Determine the entries to display
    const entries = Math.min(10, board.length);
    const userPlacement = userIndex < 10 ? userIndex : 3; // Place user a little towards the top if not in top 10, for a psychological boost :)

    let entriesStart = userIndex - userPlacement;
    let entriesEnd = entriesStart + entries;

    // Adjust indices if out of bounds
    entriesEnd = Math.min(board.length, entriesEnd);
    entriesStart = Math.max(0, entriesEnd - entries);

    const displayed = board.slice(entriesStart, entriesEnd);

    return { entriesPage: displayed, start: entriesStart };
  }, [leaderboard, ghostEntry, submitted]);

  // Handle hover effect for submit button
  const handleSubmitHover = useCallback(() => {
    setIsHoverSubmit(true);
    if (name) {
      setFocusMarkup('');
    } else {
      setFocusMarkup('outline outline-red-300');
    }
  }, [name]);

  const handleSubmitHoverStop = useCallback(() => {
    setFocusMarkup('');
    setIsHoverSubmit(false);
  }, []);

  // key listener
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (formRef.current) {
          const fakeEvent = new Event('submit', { bubbles: true, cancelable: true });
          formRef.current.dispatchEvent(fakeEvent);
        }
      } else if (e.key === 'Escape' && submitted) {
        onPlayAgain();
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  }, [onPlayAgain, submitted]);

  return (
    <>
      {/* Overlay */}
      <div className="absolute right-0 top-0 size-full rounded-lg bg-black/30" />

      {/* Game Won Screen */}
      <div
        className="window-shadow absolute flex size-[500px] flex-col gap-4 rounded-lg bg-white p-4"
        style={{
          left: 'calc(50% - 250px)',
          top: 'calc(50% - 270px)',
        }}
      >
        <button
          onMouseEnter={() => {
            setIsHoverNewGame(true);
          }}
          onMouseLeave={() => {
            setIsHoverNewGame(false);
          }}
          className="absolute right-[5%] hover:underline"
          type="button"
          onClick={onPlayAgain}
        >
          Close
        </button>
        <p className="flex justify-center text-4xl">
          <span className="wave">W</span>
          <span className="wave">i</span>
          <span className="wave">n</span>
          <span className="wave">n</span>
          <span className="wave">e</span>
          <span className="wave">r</span>
        </p>

        {/* Game score and high scores */}
        <div className="flex h-full gap-4">
          {/* Score Block */}
          <div className="relative flex w-3/5 flex-col items-center justify-between rounded-lg border p-4">
            <p className="w-full text-center font-bold">Your Stats</p>
            <span>
              <p>Time: {formatTime(time)}</p>
              <p>Time Bonus: {timeBonus}</p>
              <p>Final Score: {score}</p>
            </span>

            {/* Input field to submit score */}
            <form ref={formRef} onSubmit={handleScoreSubmit} className="flex flex-col gap-1">
              <input
                ref={inputRef}
                className={cn(
                  'w-full rounded-md border p-1 select-none',
                  submitted && 'bg-gray-100 text-gray-400',
                  focusMarkup,
                )}
                type="text"
                placeholder="Name"
                maxLength={11}
                onChange={handleNameChange}
                disabled={submitted}
                onSubmit={handleScoreSubmit}
              />
              {submitted ? (
                <p className="cursor-default select-none p-1 text-center">Done!</p>
              ) : (
                <button
                  // className="w-full rounded-md border px-4 py-1 text-gray-800 hover:bg-gray-100"
                  className={cn(
                    'w-full rounded-md border px-4 py-1 text-gray',
                    name ? 'hover:bg-gray-100' : 'cursor-not-allowed',
                  )}
                  type="submit"
                  onMouseEnter={handleSubmitHover}
                  onMouseLeave={handleSubmitHoverStop}
                >
                  Submit Score &gt;&gt;&gt;
                </button>
              )}
            </form>
            <p className="text-balance text-center text-sm text-gray-600">
              Scores are saved locally on your device.
            </p>
          </div>

          {/* Leaderboard */}
          <div className="relative flex w-full flex-col items-center rounded-lg border p-4">
            <p className="mb-2 font-bold">Leaderboard</p>

            <table className="w-full cursor-default">
              <tbody>
                {entriesPage.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className={cn(
                        item.highlight && highlightedStyle,
                        item.highlight && isHoverSubmit && name && 'bg-green-50 border-green-200',
                        item.highlight &&
                          isHoverNewGame &&
                          !submitted &&
                          'bg-red-50 border-red-200 text-red-400 line-through',
                      )}
                      onClick={() => {
                        if (item.highlight) {
                          inputRef.current?.focus();
                        }
                      }}
                    >
                      <td className="w-1/6 pl-2">{start + index + 1}.</td>
                      <td className="w-2/6">{item.name}</td>
                      <td className="w-2/6">{formatTime(item.time)}</td>
                      <td className="w-1/6">{item.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* Play Again */}
        <span className="flex justify-center">
          <button
            className="rounded-md border px-4 py-1 text-gray-800 hover:bg-gray-100"
            onMouseEnter={() => {
              setIsHoverNewGame(true);
            }}
            onMouseLeave={() => {
              setIsHoverNewGame(false);
            }}
            type="button"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
        </span>
      </div>
    </>
  );
};

export default WinScreen;
