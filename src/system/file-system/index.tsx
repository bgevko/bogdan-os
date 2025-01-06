import React from 'react';

const FileExplorer = (): React.ReactElement => {
  return (
    <>
      <div
        className="flex size-full select-none overflow-hidden"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
};

export default FileExplorer;
