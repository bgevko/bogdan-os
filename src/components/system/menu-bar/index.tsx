/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Fragment, ReactElement, useEffect, useState, useCallback } from 'react';

import { getProcessOptions } from '@/static';
import { MENU_BAR_HEIGHT } from '@/themes';
import { MenuBarItems, MenuBarItem } from '@/types';
import cn from '@/utils/format';

interface MenuBarProps {
  path: string;
}

// FYI, in case I forget, or if you're not familiar with this codebase
// The menubar only gets called when MenuOptions are defined
// in the app repository file. I do make an assumption that if this component
// renders, then menu bar options have been defined. If they haven't, don't worry
// it will throw an error and break the entire app. So, you know, no big deal.
const MenuBar = ({ path }: MenuBarProps): ReactElement => {
  const menuBarSource: Promise<MenuBarItems> = getProcessOptions(path, false).menuBarOptions!
    .source;

  const menuBarStyles = getProcessOptions(path, false).menuBarOptions!.styles;
  const menuBarClassName = getProcessOptions(path, false).menuBarOptions!.className;

  // If menuBarSource is a Promise, await it (convert to async component if needed)
  const [menuItems, setMenuItems] = useState<MenuBarItems | null>(null);
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);

  useEffect(() => {
    if (menuBarSource instanceof Promise) {
      menuBarSource
        .then((actions) => {
          setMenuItems(actions);
        })
        .catch((error: unknown) => {
          // eslint-disable-next-line no-console
          console.error('Error loading menu bar options:', error);
          setMenuItems(null);
        });
    } else {
      setMenuItems(null);
    }
  }, [menuBarSource]);

  const handleOutsideClick = useCallback(() => {
    setVisibleMenu(null);
  }, []);

  useEffect(() => {
    if (visibleMenu) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [visibleMenu, handleOutsideClick]);

  // If empty, no need to render
  if (!menuItems || menuItems.size === 0) {
    return <></>;
  }

  return (
    <ul
      className={cn(
        `h-[${MENU_BAR_HEIGHT.toString()}px] flex w-full bg-stone-50 px-2`,
        menuBarClassName,
      )}
      style={menuBarStyles ?? {}}
    >
      {[...menuItems.entries()].map(([menuName, menuItem]) => (
        <li
          key={`${menuName}-list-item`}
          // className="relative cursor-pointer px-3 text-stone-900 hover:bg-stone-200/50"
          className={cn(
            'relative cursor-default px-3 text-stone-900',
            visibleMenu === menuName && 'bg-stone-200 rounded-md',
          )}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            // If clicking on an already visible menu, close it.
            if (visibleMenu === menuName) {
              setVisibleMenu(null);
              return;
            }
            setVisibleMenu(menuName);
          }}
          onMouseEnter={() => {
            // When any menu is open, hovering over another menu sets it to visible
            // if it's good enough for Apple, it's good enough for me
            if (visibleMenu) {
              setVisibleMenu(menuName);
            }
          }}
        >
          {menuName}
          {visibleMenu === menuName && (
            <DropDownMenu key={`${menuName}-dropdown-component`} path={path} menuItem={menuItem} />
          )}
        </li>
      ))}
    </ul>
  );
};

function shouldDisable(func: undefined | (() => boolean)): boolean {
  if (func) {
    return func();
  }
  return false;
}

const DropDownMenu = ({
  path,
  menuItem,
}: {
  path: string;
  menuItem: MenuBarItem;
}): ReactElement => {
  return (
    <ul className="window-shadow absolute left-0 z-50 flex w-max flex-col gap-1 rounded border border-stone-200 bg-stone-50 p-1">
      {[...menuItem.entries()].map(([label, item]) => (
        <Fragment key={`${label}-dropdown-fragment`}>
          <li
            key={`${label}-dropdown-list-item`}
            // className="cursor-pointer px-3 text-stone-900 hover:rounded-md hover:bg-blue-400 hover:text-white"
            className={cn(
              'px-3 text-stone-900 hover:rounded-md',
              !shouldDisable(item.disableCallback) &&
                'hover:bg-blue-400 hover:text-white cursor-pointer',
              shouldDisable(item.disableCallback) && 'cursor-default text-stone-400',
            )}
            onClick={() => {
              if (item.callback) {
                item.callback(path);
              }
            }}
          >
            {label}
          </li>
          {item.bottomBorder && <hr key={`${label}-border`} className="border-stone-200" />}
        </Fragment>
      ))}
    </ul>
  );
};

export default MenuBar;
