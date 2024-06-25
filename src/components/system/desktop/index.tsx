import React from 'react';

import FileSystemIcons from '@/components/system/fs/fs-icons';
import SelectRect from '@/components/system/fs/select-rect';

const Desktop = (): React.ReactElement => {
  return (
    <>
      <SelectRect rootPath="/Desktop" />
      <FileSystemIcons rootPath="/Desktop" />
    </>
  );
};

export default Desktop;
