import React, { ReactElement } from 'react';

import FileSystemIcon from '@/components/system/fs/fs-icon';
import Grid from '@/components/system/fs/grid';
import useFsStore from '@/stores/use-fs-store';

const FileSystemIconComponents = (): ReactElement => {
  const desktopItems = useFsStore((state) => state.getChildren('/Desktop'));

  return (
    <Grid options={{ isDesktop: true }} path="/Desktop">
      {desktopItems.map((fileNode) => {
        return <FileSystemIcon key={fileNode.path} path={fileNode.path} />;
      })}
    </Grid>
  );
};

const FileSystemIcons = React.memo(FileSystemIconComponents);
export default FileSystemIcons;
