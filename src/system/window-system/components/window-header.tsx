import React, { useState, useEffect, type ReactElement } from 'react';

import useFileSystemStore, { FileSystemEntry } from '@/system/file-system/store';
import WindowHeaderButton from '@/system/window-system/components/window-header-button';
import UseWindowMove from '@/system/window-system/hooks/use-window-move';
import UseWindowResize from '@/system/window-system/hooks/use-window-resize';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import cn from '@/utils/format';

interface WindowHeaderProperties {
  entry: FileSystemEntry;
}
const WindowHeader: React.FC<WindowHeaderProperties> = ({ entry }): ReactElement => {
  const isFocused = useFileSystemStore((state) => state.getIsWindowFocused(entry.id));
  const isOpen = useFileSystemStore((state) => state.getIsOpen(entry.id));
  const name = useFileSystemStore((state) => state.getName(entry.id));
  const pushFocus = useFileSystemStore((state) => state.pushFocus);
  const toggleSizeToViewport = useFileSystemStore((state) => state.toggleSizeToViewport);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const { handleMoveStart, handleMouseMove, handleMouseUp } = UseWindowMove(entry);

  /*
   ***********************************
   *       Window Focus Colors       *
   ***********************************
   */
  // const headerColor = isFocused ? 'bg-[#4A4947]' : 'bg-gray-800/20';
  const headerColor = isFocused ? 'bg-[#4A4947]' : 'bg-[#4A4947]/80';
  // const headerTextColor = isFocused ? 'text-white' : 'text-gray-800';
  const headerTextColor = 'text-white';

  /*
   ********************************
   *        Window Movement       *
   ********************************
   */
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <header
        draggable
        onDragStart={handleMoveStart}
        className={cn(
          'relative flex items-center px-4 text-base font-bold gap-4 rounded-t-lg',
          headerColor,
        )}
        data-testid="window-header"
        data-id="window-header"
        style={{
          height: `${WINDOW_HEADER_HEIGHT.toString()}px`,
        }}
        role="toolbar"
        aria-label="Window header"
        onClick={() => {
          pushFocus(entry.id);
          clearContextState();
        }}
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          pushFocus(entry.id);
        }}
        onDoubleClick={(event) => {
          event.stopPropagation();
          toggleSizeToViewport(entry.id);
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <HeaderButtons entry={entry} />
        <h1 className={cn(headerTextColor, 'cursor-default select-none')}>{name}</h1>
      </header>
    </>
  );
};

const HeaderButtons = ({ entry }: { entry: FileSystemEntry }): ReactElement => {
  const getWindowState = useFileSystemStore((state) => state.getWindowState);
  const isFocused = useFileSystemStore((state) => state.getIsWindowFocused(entry.id));
  const isDisabledResize = useFileSystemStore((state) => state.getIsDisabledResize(entry.id));

  const { handleToggleMaximize, handleClose } = UseWindowResize(entry);

  const { handleMinimize } = UseWindowMove(entry);

  const [isHovered, setIsHovered] = useState(false);

  // Button colors
  const closeButtonColor = isFocused || isHovered ? 'bg-red-400' : 'bg-gray-400';
  const minimizeButtonColor = isFocused || isHovered ? 'bg-yellow-500' : 'bg-gray-400';
  const maximizeButtonColor = isFocused || isHovered ? 'bg-green-500' : 'bg-gray-400';

  const showIcons = isHovered;

  return (
    <span
      className="flex h-6 select-none items-center"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <span className="flex gap-1">
        <WindowHeaderButton
          iconName="close"
          iconSize={6}
          onClick={() => {
            handleClose();
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // TODO: Context menu
          }}
          dataTestId="window-closeProcess"
          buttonColor={closeButtonColor}
          showIcons={showIcons}
        />
        <WindowHeaderButton
          iconName="min"
          iconSize={8}
          onClick={() => {
            handleMinimize();
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          dataTestId="window-minimize"
          buttonColor={minimizeButtonColor}
          showIcons={showIcons}
        />
        {!isDisabledResize && (
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
            showIcons={showIcons}
          />
        )}
      </span>
    </span>
  );
};

export default WindowHeader;
