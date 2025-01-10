import React, { useEffect, useCallback } from 'react';

import useFileSystemStore from '@/system/file-system/store';

const GlobalEvents = (): React.ReactElement => {
  const clearRenaming = useFileSystemStore((state) => state.clearRenaming);
  const setKeyCommand = useFileSystemStore((state) => state.setKeyCommand);

  const clearRenamingOnContextMenu = useCallback(() => {
    clearRenaming();
  }, [clearRenaming]);

  const handleCommands = useCallback(
    (event: KeyboardEvent) => {
      setKeyCommand(event);
    },
    [setKeyCommand],
  );

  useEffect(() => {
    window.addEventListener('contextmenu', clearRenamingOnContextMenu);
    window.addEventListener('keydown', handleCommands);
    return () => {
      window.removeEventListener('contextmenu', clearRenamingOnContextMenu);
      window.removeEventListener('keydown', handleCommands);
    };
  }, [clearRenamingOnContextMenu, handleCommands]);

  return <></>;
};

export default GlobalEvents;
