import React, { useState, useCallback, useEffect, useMemo } from 'react';

import UseMenuContext from '@/hooks/system/use-menu-context';
import useMenuStore from '@/stores/use-menu-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { ContextMenuItems } from '@/types';
import cn from '@/utils/format';

interface MenuEntryProps {
  label: string;
  callback: () => void;
}

const MenuEntry = ({ label, callback }: MenuEntryProps): React.ReactElement => {
  const resetMenuContext = useMenuStore((state) => state.reset);
  const testId = label.toLowerCase().replace(' ', '-');
  return (
    <button
      data-testid={testId}
      className="w-full p-2 text-left hover:bg-secondary hover:text-surface"
      type="button"
      onClick={() => {
        callback();
        resetMenuContext();
      }}
    >
      {label}
    </button>
  );
};

const ContextMenu = (): React.ReactElement => {
  const [menuPos, setMenuPos] = useState({ x: -500, y: 0 });
  const menuContext = useMenuStore((state) => state.menuContext);
  const setContextMenuVisible = useMenuStore((state) => state.setContextMenuVisible);
  const isVisible = useMenuStore((state) => state.contextMenuVisible);
  const isMouseOver = useMenuStore((state) => state.isMouseOver);
  const setIsMouseOver = useMenuStore((state) => state.setIsMouseOver);

  const { contextOptions } = UseMenuContext();

  const menuItems: ContextMenuItems = useMemo(() => {
    const getter = contextOptions.get(menuContext);
    if (!getter) return new Map<string, () => void>();
    return getter();
  }, [contextOptions, menuContext]);

  const calculatedHeight = useMemo(() => {
    return menuItems.size * 40;
  }, [menuItems]);

  const handleShowMenu = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (isMouseOver) return;
      setContextMenuVisible(true);
      const width = 200;
      const height = calculatedHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight - TASKBAR_HEIGHT;

      const x = event.clientX + width > viewportWidth ? event.clientX - width : event.clientX;
      const y = event.clientY + height > viewportHeight ? event.clientY - height : event.clientY;
      setMenuPos({ x, y });
    },
    [setContextMenuVisible, calculatedHeight, isMouseOver],
  );

  const handleHideMenu = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (isMouseOver) return;
      setContextMenuVisible(false);
    },
    [setContextMenuVisible, isMouseOver],
  );

  useEffect(() => {
    document.addEventListener('contextmenu', handleShowMenu);
    document.addEventListener('mousedown', handleHideMenu);
    return () => {
      document.removeEventListener('contextmenu', handleShowMenu);
      document.removeEventListener('mousedown', handleHideMenu);
    };
  }, [handleShowMenu, handleHideMenu]);
  return (
    <>
      {isVisible && menuItems.size > 0 && (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <span
          role="menu"
          className={cn(
            `h-[${calculatedHeight.toString()}px] w-[200px]`,
            'embossed-border flex-col fixed z-20 select-none flex bg-surface text-onSurface',
          )}
          style={{
            transform: `translate(${menuPos.x.toString()}px, ${menuPos.y.toString()}px)`,
          }}
          onMouseDown={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
          onMouseLeave={(event: React.MouseEvent) => {
            event.stopPropagation();
            setIsMouseOver(false);
          }}
          onMouseEnter={(event: React.MouseEvent) => {
            event.stopPropagation();
            setIsMouseOver(true);
          }}
        >
          {[...menuItems.entries()].map(([key, value]) => {
            return <MenuEntry key={key} label={key} callback={value} />;
          })}
        </span>
      )}
    </>
  );
};

export default ContextMenu;
