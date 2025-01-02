import { useState, useEffect, type CSSProperties } from 'react';

import { getMenubarOptions } from '@/defaults';
import { type FileSystemEntry, MenubarItems } from '@/system/file-system/store';

interface ReturnTypes {
  menubarStyles: CSSProperties | null;
  menubarClassName: string | null;
  menubarItems: MenubarItems | null;
}

const UseMenubar = (entry?: FileSystemEntry): ReturnTypes => {
  const menubarOptions = getMenubarOptions(entry?.id ?? '');
  const menubarSource = menubarOptions?.source ?? null;
  const menubarStyles = menubarOptions?.styles ?? null;
  const menubarClassName = menubarOptions?.className ?? null;

  const [menubarItems, setMenubarItems] = useState<MenubarItems | null>(null);

  useEffect(() => {
    if (menubarSource instanceof Promise) {
      menubarSource
        .then((actions) => {
          setMenubarItems(actions);
        })
        .catch((error: unknown) => {
          // eslint-disable-next-line no-console
          console.error('Error loading menu bar options:', error);
          setMenubarItems(null);
        });
    } else {
      setMenubarItems(null);
    }
  }, [menubarSource]);

  return {
    menubarStyles,
    menubarClassName,
    menubarItems,
  };
};

export default UseMenubar;
