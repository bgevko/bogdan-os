import { useMemo } from 'react';

import useSolitaireStore, { LeaderboardEntry } from '@/solitaire/store';
import { formatTime } from '@/utils/format';

interface HighScoreProps {
  onClose: () => void;
}

const HighScores = ({ onClose }: HighScoreProps): React.ReactElement => {
  const leaderboard = useSolitaireStore((state) => state.getLeaderboard());

  const entries = useMemo(() => {
    const board: LeaderboardEntry[] = [...leaderboard];
    board.sort((a, b) => a.score - b.score);
    return board.slice(0, 10);
  }, [leaderboard]);

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} className="absolute right-0 top-0 size-full bg-black/30" />

      {/* Leaderboard */}
      <div
        className="window-shadow absolute flex size-[400px] flex-col items-center rounded-lg bg-white p-4"
        style={{
          left: 'calc(50% - 200px)',
          top: 'calc(50% - 250px)',
        }}
      >
        <p className="mb-2 w-full border-b text-center text-xl font-bold">Leaderboard</p>

        {entries.length === 0 && <p className="mt-auto text-center">No wins yet.</p>}
        {entries.length > 0 && (
          <table className="w-full cursor-default">
            <tbody>
              {entries.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="w-1/6 pl-2">{index + 1}.</td>
                    <td className="w-2/6">{item.name}</td>
                    <td className="w-2/6">{formatTime(item.time)}</td>
                    <td className="w-1/6">{item.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {/* OK Button */}
        <button
          className="mt-auto rounded-md border px-4 py-1 text-gray-800 hover:bg-gray-100"
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default HighScores;
