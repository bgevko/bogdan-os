import React, { ReactElement } from 'react';

import DropGuide from '@/components/system/fs/drop-guide';
import FileSystemIcon from '@/components/system/fs/fs-icon';
import Grid from '@/components/system/fs/grid';
import useFsStore from '@/stores/use-fs-store';

const FileSystemIconComponents = ({ rootPath }: { rootPath: string }): ReactElement => {
  const desktopItems = useFsStore((state) => state.getChildren(rootPath));
  const isDesktop = rootPath === '/Desktop';
  return (
    <>
      <DropGuide path={rootPath} />
      <Grid options={{ isDesktop }} path={rootPath}>
        {desktopItems.map((fileNode) => {
          return <FileSystemIcon key={fileNode.path} path={fileNode.path} icon={fileNode.icon} />;
        })}
      </Grid>
    </>
  );
};

const FileSystemIcons = React.memo(FileSystemIconComponents);
export default FileSystemIcons;
