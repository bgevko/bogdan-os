import React, { useEffect, useCallback } from 'react';

import useFileSystemStore from '@/system/file-system/store';

const GlobalEvents = (): React.ReactElement => {
  const clearRenaming = useFileSystemStore((state) => state.clearRenaming);

  const clearRenamingOnContextMenu = useCallback(() => {
    clearRenaming();
  }, [clearRenaming]);

  useEffect(() => {
    window.addEventListener('contextmenu', clearRenamingOnContextMenu);
    return () => {
      window.removeEventListener('contextmenu', clearRenamingOnContextMenu);
    };
  }, [clearRenamingOnContextMenu]);

  return <></>;
};

export default GlobalEvents;
