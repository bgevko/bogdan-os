import React, { useState } from 'react';

import useSolitaireStore from '@/solitaire/store';

type Difficulty = 'easy' | 'normal' | 'hard';

interface HelpScreenProps {
  difficulty: Difficulty;
  onClose: () => void;
}

const GameSettingsBase: React.FC<HelpScreenProps> = ({ onClose, difficulty }) => {
  const setDifficulty = useSolitaireStore((state) => state.setDifficulty);
  const setNewGameFlag = useSolitaireStore((state) => state.setNewGameFlag);

  // Use state to track the selected difficulty
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(difficulty);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => {
          if (selectedDifficulty === difficulty) {
            onClose();
          }
        }}
        className="absolute right-0 top-0 size-full bg-black/30"
      />

      {/* Help Screen */}
      <div
        className="window-shadow absolute flex h-[360px] w-[300px] flex-col gap-2 rounded-lg bg-white p-4"
        style={{
          left: 'calc(50% - 150px)',
          top: 'calc(50% - 200px)',
        }}
      >
        <p className="w-full border-b text-center text-xl font-bold">Difficulty</p>

        {/* Radio Buttons */}
        <div className="flex flex-col gap-2">
          <div className="border-b py-2">
            <label htmlFor="difficulty-easy" className="flex items-center gap-2">
              <input
                id="difficulty-easy"
                type="radio"
                name="difficulty"
                value="easy"
                checked={selectedDifficulty === 'easy'}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value as Difficulty);
                }}
              />
              <span>Easy</span>
            </label>
            <span
              className="select-none pl-5 text-sm text-gray-500"
              onClick={() => {
                setSelectedDifficulty('easy');
              }}
            >
              Any card can move to an empty column
            </span>
          </div>
          <div className="border-b py-2">
            <label htmlFor="difficulty-medium" className="flex items-center gap-2">
              <input
                id="difficulty-medium"
                type="radio"
                name="difficulty"
                value="normal"
                checked={selectedDifficulty === 'normal'}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value as Difficulty);
                }}
              />
              <span>Normal</span>
            </label>
            <span
              className="select-none pl-5 text-sm text-gray-500"
              onClick={() => {
                setSelectedDifficulty('normal');
              }}
            >
              Only Kings can move to an empty column
            </span>
          </div>
          <div className="border-b py-2">
            <label htmlFor="difficulty-hard" className="flex items-center gap-2">
              <input
                id="difficulty-hard"
                type="radio"
                name="difficulty"
                value="hard"
                checked={selectedDifficulty === 'hard'}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value as Difficulty);
                }}
              />
              <span>Hard</span>
            </label>
            <span
              onClick={() => {
                setSelectedDifficulty('hard');
              }}
              className="select-none pl-5 text-sm text-gray-500"
            >
              Draw 3 cards at a time.
            </span>
          </div>
        </div>

        {/* Game reset warning */}
        <div className="h-2">
          {selectedDifficulty !== difficulty && (
            <p className="text-center text-sm text-rose-400">
              Changing difficulty will reset the game.
            </p>
          )}
        </div>

        {/* OK Button */}
        <button
          className="mt-auto rounded-md border px-4 py-1 text-gray-800 hover:bg-gray-100"
          type="button"
          onClick={() => {
            if (selectedDifficulty === difficulty) {
              onClose();
              return;
            }
            setDifficulty(selectedDifficulty);
            setNewGameFlag(true);
            onClose();
          }}
        >
          {selectedDifficulty === difficulty ? 'Cancel' : 'Confirm'}
        </button>
      </div>
    </>
  );
};

const GameSettings = React.memo(GameSettingsBase);

export default GameSettings;
