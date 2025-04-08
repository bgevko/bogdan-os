/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useCallback, useRef, useState, useEffect, Fragment, ReactElement } from 'react';

import useFileSystemStore, { type FileSystemEntry, MenubarItem } from '@/system/file-system/store';
import UseMenubar from '@/system/menubar/hooks';
import WindowHeaderButton from '@/system/window-system/components/window-header-button';
import UseWindowResize from '@/system/window-system/hooks/use-window-resize';
import { MAXIMIZED_WINDOW_HEADER_HEIGHT } from '@/themes';
import cn from '@/utils/format';

const MaximizedWindowHeader = (): React.ReactElement => {
  const isVisible = useFileSystemStore((state) => state.getIsMaximizedWindowHeaderVisible());
  const setIsVisible = useFileSystemStore((state) => state.setIsMaximizedWindowHeaderVisible);
  const maximizedEntry = useFileSystemStore((state) => state.getMaximizedEntry());
  const isUsingSelectRect = useFileSystemStore((state) => state.getIsUsingSelectRect());
  const { menubarItems } = UseMenubar(maximizedEntry ?? undefined);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [didMouseEnterTrigger, setDidMouseEnterTrigger] = useState(false);

  /*
   ***********************************
   *      Appear Disappear Logic     *
   ***********************************
   */
  const resetHoverTimeout = useCallback(() => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = null;
  }, []);

  const closeAfterTimeout = useCallback(() => {
    hoverTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, [setIsVisible]);

  const handleMouseEnter = useCallback(() => {
    if (isUsingSelectRect) return;
    setIsVisible(true);
    setDidMouseEnterTrigger(true);
    resetHoverTimeout();
  }, [setIsVisible, resetHoverTimeout, isUsingSelectRect]);

  const handleMouseLeave = useCallback(() => {
    setDidMouseEnterTrigger(false);
    if (visibleMenu) return;
    resetHoverTimeout();
    closeAfterTimeout();
  }, [visibleMenu, closeAfterTimeout, resetHoverTimeout]);

  useEffect(() => {
    if (!isHovering && !visibleMenu) {
      resetHoverTimeout();
      closeAfterTimeout();
    }
  }, [visibleMenu, isHovering, setIsVisible, resetHoverTimeout, closeAfterTimeout]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const mouseY = event.clientY;
      if (mouseY >= MAXIMIZED_WINDOW_HEADER_HEIGHT || mouseY < 0) {
        if (isHovering) {
          setIsHovering(false);
        }
      } else {
        if (!isHovering) {
          setIsHovering(true);
        }
        if (!didMouseEnterTrigger) {
          handleMouseEnter();
        }
      }
    },
    [isHovering, didMouseEnterTrigger, handleMouseEnter],
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);
  /*
   ***********************************
   *             Menubar             *
   ***********************************
   */
  const handleOutsideClick = useCallback(() => {
    setVisibleMenu(null);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [visibleMenu, handleOutsideClick]);

  if (!maximizedEntry) {
    return <></>;
  }
  return (
    <header
      className={cn(
        'sticky top-0 w-full bg-black transition-opacity duration-300 bg-black/50',
        'relative flex items-center px-4 text-base font-bold gap-4',
      )}
      style={{
        height: `${MAXIMIZED_WINDOW_HEADER_HEIGHT.toString()}px`,
        opacity: isVisible ? 1 : 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
    >
      <HeaderButtons entry={maximizedEntry} />

      {/* Menu bar */}
      <ul className="flex w-full select-none text-white">
        {[...(menubarItems?.entries() ?? [])].map(([menuName, menubarItem], index) => (
          <li
            key={`${menuName}-list-item`}
            className={cn(
              'relative cursor-default px-3 text-white select-none font-normal',
              visibleMenu === menuName && 'bg-white/20 rounded-md',
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
                entry={maximizedEntry}
                menubarItem={menubarItem}
              />
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

const HeaderButtons = ({ entry }: { entry: FileSystemEntry }): ReactElement => {
  const getWindowState = useFileSystemStore((state) => state.getWindowState);
  const setIsMaximizedWindowHeaderVisible = useFileSystemStore(
    (state) => state.setIsMaximizedWindowHeaderVisible,
  );
  const { handleToggleMaximize, handleClose } = UseWindowResize(entry);

  // Button colors
  const closeButtonColor = 'bg-red-400';
  const minimizeButtonColor = 'bg-gray-400';
  const maximizeButtonColor = 'bg-green-500';

  return (
    <span className="flex h-6 select-none items-center">
      <span className="flex gap-1">
        <WindowHeaderButton
          iconName="close"
          iconSize={6}
          onClick={() => {
            handleClose();
            setIsMaximizedWindowHeaderVisible(false);
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // TODO: Context menu
          }}
          dataTestId="window-closeProcess"
          buttonColor={closeButtonColor}
          showIcons
        />
        <WindowHeaderButton
          disabled
          iconName="min"
          iconSize={8}
          onClick={() => {}}
          onContextMenu={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          dataTestId="window-minimize"
          buttonColor={minimizeButtonColor}
          showIcons={false}
        />
        <WindowHeaderButton
          iconName={getWindowState(entry.id) === 'maximized' ? 'unmax' : 'max'}
          iconSize={8}
          iconColor="black"
          onClick={() => {
            handleToggleMaximize();
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          dataTestId="window-maximize"
          buttonColor={maximizeButtonColor}
          showIcons
        />
      </span>
    </span>
  );
};

const DropDownMenu = ({
  entry,
  menubarItem,
}: {
  entry: FileSystemEntry;
  menubarItem: MenubarItem;
}): ReactElement => {
  return (
    <ul className="window-shadow absolute left-0 z-50 flex w-max flex-col gap-1 rounded-sm border border-stone-200 bg-stone-50 p-1">
      {[...menubarItem.entries()].map(([label, item]) => {
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

export default MaximizedWindowHeader;
