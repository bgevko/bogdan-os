import { useCallback } from 'react';

import useMenuStore from '@/stores/use-menu-store';
import { MenuContext } from '@/types';

interface ReturnTypes {
  handleContextMenu: (event: React.MouseEvent, menuContext: MenuContext, path?: string) => void;
}

function UseHandleContextMenu(): ReturnTypes {
  const setMenuContext = useMenuStore((state) => state.setMenuContext);
  const setMenuTargetPath = useMenuStore((state) => state.setTargetPath);
  const setMenuPos = useMenuStore((state) => state.setMenuPos);
  const setIsVisible = useMenuStore((state) => state.setIsVisible);

  const handleContextMenu = useCallback(
    (event: React.MouseEvent, menuContext: MenuContext, path?: string) => {
      event.preventDefault();
      event.stopPropagation();

      setMenuPos({
        x: event.clientX + 8,
        y: event.clientY,
      });
      setMenuContext(menuContext);
      if (path) {
        setMenuTargetPath(path);
      } else {
        setMenuTargetPath('/Desktop');
      }
      setIsVisible(true);
    },
    [setMenuPos, setMenuContext, setMenuTargetPath, setIsVisible],
  );

  return { handleContextMenu };
}

export default UseHandleContextMenu;
