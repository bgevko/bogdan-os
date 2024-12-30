import React from 'react';

interface HelpScreenProps {
  onClose: () => void;
}

const HelpScreen: React.FC<HelpScreenProps> = ({ onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute right-0 top-0 size-full rounded-b-lg bg-black/30"
      />

      {/* Help Screen */}
      <div
        className="absolute flex h-[200px] w-[450px] flex-col items-center gap-2 rounded-lg bg-white p-4"
        style={{
          left: 'calc(50% - 225px)',
          top: 'calc(50% - 100px)',
        }}
      >
        <h2 className="w-full border-b text-center text-2xl font-bold">Comment Header Tool</h2>
        <p className="w-full text-balance text-center">
          I designed this tool to quickly create comment headers. In large code files, these can
          really help make sections stand out. To understand how it works, just start changing the
          parameters, then click on the output to copy it.
        </p>

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
