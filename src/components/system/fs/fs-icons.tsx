import React, { ReactElement } from 'react';

import FileSystemIcon from '@/components/system/fs/fs-icon';
import Grid from '@/components/system/fs/grid';
import useFsStore from '@/stores/use-fs-store';
import { parseFileName } from '@/utils/format';

const FileSystemIconComponents = (): ReactElement => {
  const desktopPaths = useFsStore().loadDirectory('/Desktop');

  return (
    <Grid options={{ isDesktop: true }} path="/Desktop">
      {desktopPaths.map((path) => {
        const fileName = parseFileName(path);
        return <FileSystemIcon key={fileName} id={fileName} path={path} />;
      })}
    </Grid>
  );
};

const FileSystemIcons = React.memo(FileSystemIconComponents);
export default FileSystemIcons;
