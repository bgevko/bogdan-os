import React from 'react';

interface HelpScreenProps {
  onClose: () => void;
}

const HelpScreen: React.FC<HelpScreenProps> = ({ onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} className="absolute right-0 top-0 size-full bg-black/30" />

      {/* Help Screen */}
      <div
        className="window-shadow absolute flex h-[340px] w-[500px] flex-col items-center gap-2 rounded-lg bg-white p-4"
        style={{
          left: 'calc(50% - 250px)',
          top: 'calc(50% - 200px)',
        }}
      >
        <p className="w-full border-b text-center text-2xl font-bold">Solitaire Rules</p>
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

export default HelpScreen;
