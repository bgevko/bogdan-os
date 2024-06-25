import React from 'react';

import FileSystemIcons from '@/components/system/fs/fs-icons';
import SelectRect from '@/components/system/fs/select-rect';

const FileExplorer = ({ rootPath }: { rootPath: string }): React.ReactElement => {
  return (
    <>
      <SelectRect rootPath={rootPath} />
      <FileSystemIcons rootPath={rootPath} />
    </>
  );
};

export default FileExplorer;
