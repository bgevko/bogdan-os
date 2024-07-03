import React from 'react';

import FileSystemIcons from '@/components/system/fs/fs-icons';
import SelectRect from '@/components/system/fs/select-rect';

const FileExplorer = ({ rootPath }: { rootPath: string }): React.ReactElement => {
  return (
    <>
      <SelectRect rootPath={rootPath} />
      <div className="debossed-border flex size-full overflow-hidden">
        <FileSystemIcons rootPath={rootPath} />
      </div>
    </>
  );
};

export default FileExplorer;
