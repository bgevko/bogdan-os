import React from 'react';

import DropGuide from '@/components/system/fs/drop-guide';
import FileSystemIcon from '@/components/system/fs/fs-icon';
import Grid from '@/components/system/fs/grid';
import SelectRect from '@/components/system/fs/select-rect';
import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format';

const FileExplorer = ({ rootPath }: { rootPath: string }): React.ReactElement => {
  const isFocused = useProcessesStore((state) => state.getIsFocused(rootPath));
  const folderItems = useFsStore((state) => state.getChildren(rootPath));
  return (
    <>
      {isFocused && <SelectRect path={rootPath} />}
      <div className={cn('flex size-full overflow-hidden', !isFocused && 'opacity-25')}>
        {isFocused && <DropGuide path={rootPath} />}
        <Grid path={rootPath}>
          {folderItems.map((fileNode) => {
            return <FileSystemIcon key={fileNode.path} path={fileNode.path} />;
          })}
        </Grid>
      </div>
    </>
  );
};

export default FileExplorer;
