import { Fragment, ReactElement, useEffect, useState, useCallback } from 'react';

import useFileSystemStore, { type FileSystemEntry, MenubarItem } from '@/system/file-system/store';
import UseMenubar from '@/system/menubar/hooks';
import { MENU_BAR_HEIGHT } from '@/themes';
import cn from '@/utils/format';

// The menubar only gets called when MenuOptions are defined in the app repository
const MenuBar = ({ entry }: { entry: FileSystemEntry }): ReactElement => {
  const isWindowFocused = useFileSystemStore((state) => state.getIsWindowFocused(entry.id));
  const { menubarStyles, menubarClassName, menubarItems } = UseMenubar(entry);

  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);

  const handleOutsideClick = useCallback(() => {
    setVisibleMenu(null);
  }, []);

  /*
   ***********************************
   *            Close Menu           *
   ***********************************
   */
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [visibleMenu, handleOutsideClick]);

  useEffect(() => {
    if (!isWindowFocused) {
      setVisibleMenu(null);
    }
  }, [isWindowFocused]);

  // If empty, no need to render
  if (!menubarItems || menubarItems.size === 0) {
    return <></>;
  }

  return (
    <ul
      className={cn(
        `h-[${MENU_BAR_HEIGHT.toString()}px] flex w-full bg-stone-50 px-2`,
        menubarClassName,
      )}
      style={menubarStyles ?? {}}
    >
      {[...menubarItems.entries()].map(([menuName, menuItem], index) => (
        <li
          key={`${menuName}-list-item`}
          className={cn(
            'relative cursor-default px-3 text-stone-900 select-none',
            visibleMenu === menuName && 'bg-stone-200 rounded-md',
            index === 0 && 'font-bold',
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
            <DropDownMenu
              key={`${menuName}-dropdown-component`}
              entry={entry}
              menuItem={menuItem}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

const DropDownMenu = ({
  entry,
  menuItem,
}: {
  entry: FileSystemEntry;
  menuItem: MenubarItem;
}): ReactElement => {
  return (
    <ul className="window-shadow absolute left-0 z-50 flex w-max flex-col gap-1 rounded-sm border border-stone-200 bg-stone-50 p-1">
      {[...menuItem.entries()].map(([label, item]) => {
        let isDisabled = false;
        if (item.disableCallback) {
          isDisabled = item.disableCallback(entry);
        }
        return (
          <Fragment key={`${label}-dropdown-fragment`}>
            <li
              key={`${label}-dropdown-list-item`}
              className={cn(
                'px-3 text-stone-900 hover:rounded-md font-normal',
                !isDisabled && 'hover:bg-blue-400 hover:text-white cursor-pointer',
                isDisabled && 'cursor-default text-stone-400',
              )}
              onClick={() => {
                if (!isDisabled) item.callback(entry);
              }}
            >
              {label}
            </li>
            {item.bottomBorder && <hr key={`${label}-border`} className="border-stone-200" />}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default MenuBar;
