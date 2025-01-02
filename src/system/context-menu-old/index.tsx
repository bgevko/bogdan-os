import React, { useCallback, useState, useEffect, useMemo } from 'react';

import UseMenuContext from '@/hooks/system/use-context-menu';
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
      className="w-full p-2 text-left hover:bg-[#ffafaf]"
      type="button"
      onClick={() => {
        callback();
        resetMenuContext();
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        event.stopPropagation();
        callback();
        resetMenuContext();
      }}
    >
      {label}
    </button>
  );
};

const ContextMenu = (): React.ReactElement | null => {
  const menuContext = useMenuStore((state) => state.menuContext);
  const menuPos = useMenuStore((state) => state.menuPos);
  const setIsVisible = useMenuStore((state) => state.setIsVisible);

  const [isMouseOver, setIsMouseOver] = useState(false);

  const { contextOptions } = UseMenuContext();

  const menuItems: ContextMenuItems = useMemo(() => {
    const getter = contextOptions.get(menuContext);
    if (!getter) return new Map<string, () => void>();
    return getter();
  }, [contextOptions, menuContext]);

  const calculatedHeight = useMemo(() => {
    return menuItems.size * 40;
  }, [menuItems]);

  const adjustedPos = useMemo(() => {
    const { x, y } = menuPos;

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - calculatedHeight - TASKBAR_HEIGHT + 20;

    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));
    return {
      x: clamp(x, 0, maxX),
      y: clamp(y, 0, maxY),
    };
  }, [calculatedHeight, menuPos]);

  const handleHideMenu = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (isMouseOver) return;
      setIsVisible(false);
    },
    [isMouseOver, setIsVisible],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleHideMenu);
    return () => {
      document.removeEventListener('mousedown', handleHideMenu);
    };
  }, [handleHideMenu]);

  // If there are no menu items, do not render the component
  if (menuItems.size === 0) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <span
      role="menu"
      className={cn(
        `h-[${calculatedHeight.toString()}px] w-[200px]`,
        'window-shadow flex-col fixed z-20 select-none flex bg-white',
      )}
      style={{
        transform: `translate(${adjustedPos.x.toString()}px, ${adjustedPos.y.toString()}px)`,
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
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      {[...menuItems.entries()].map(([key, value]) => (
        <MenuEntry key={key} label={key} callback={value} />
      ))}
    </span>
  );
};

export default ContextMenu;
