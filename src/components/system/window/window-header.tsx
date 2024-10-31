import React, { useState, useEffect, type ReactElement } from 'react';

import { DynamicIconsByName } from '@/components/system/dynamic-icons';
import UseHandleContextMenu from '@/hooks/system/use-context-menu/use-handle-context-menu';
import UseWindowState from '@/hooks/system/use-window';
import useDragStore from '@/stores/use-drag-store';
import useMenuStore from '@/stores/use-menu-store';
import useProcessesStore from '@/stores/use-processes-store';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import cn from '@/utils/format';
import { parseFileName } from '@/utils/fs';

interface WindowHandlesProperties {
  path: string;
}

interface WindowHeaderButtonProps {
  iconName: string;
  iconSize: number;
  iconColor?: string;
  onClick: (event: React.MouseEvent) => void;
  onContextMenu?: (event: React.MouseEvent) => void;
  dataTestId?: string;
  buttonColor: string;
  showIcons: boolean;
}

const WindowHeaderButton = ({
  iconName,
  iconSize,
  iconColor,
  onClick,
  onContextMenu,
  dataTestId,
  buttonColor,
  showIcons,
}: WindowHeaderButtonProps): ReactElement => {
  const [buttonDown, setButtonDown] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const headerButtonSize = 'w-4 h-4'; // 14px hitbox
  const innerButtonSize = 'w-3 h-3'; // 12px visible button

  useEffect(() => {
    const handleMouseUp = () => {
      setMouseDown(false);
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseDown]);

  return (
    <button
      type="button"
      data-testid={dataTestId}
      className={cn('flex items-center justify-center', headerButtonSize)}
      onMouseDown={(event: React.MouseEvent) => {
        event.stopPropagation();
        setButtonDown(true);
        setMouseDown(true);
      }}
      onMouseUp={() => {
        setButtonDown(false);
      }}
      onMouseLeave={() => {
        setButtonDown(false);
      }}
      onMouseEnter={() => {
        if (mouseDown) {
          setButtonDown(true);
        }
      }}
      onClick={(event: React.MouseEvent) => {
        if (event.button !== 0) return;
        event.stopPropagation();
        onClick(event);
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (onContextMenu) {
          onContextMenu(event);
        }
      }}
    >
      <span
        className={cn(
          'rounded-full flex items-center justify-center',
          buttonColor,
          innerButtonSize,
          buttonDown ? 'filter brightness-[.8]' : '',
        )}
      >
        {showIcons && (
          <DynamicIconsByName
            iconName={iconName}
            size={iconSize}
            color={iconColor}
            shadow={false}
          />
        )}
      </span>
    </button>
  );
};

interface HeaderButtonsProps {
  isFocused: boolean;
  path: string;
  closeProcess: (path: string) => void;
  handleWindowMinimizeToggle: () => void;
  handleWindowFullSize: () => void;
}

const HeaderButtons = ({
  isFocused,
  path,
  closeProcess,
  handleWindowMinimizeToggle,
  handleWindowFullSize,
}: HeaderButtonsProps): ReactElement => {
  const isMaximized = useProcessesStore((state) => state.getIsMaximized(path));
  const isDisabledResize = useProcessesStore((state) => state.getIsDisabledResize(path));
  const { handleContextMenu } = UseHandleContextMenu();

  const maximizeButtonName = isMaximized ? 'unmax' : 'max';

  const [isHovered, setIsHovered] = useState(false);

  // Button colors
  const closeButtonColor = isFocused || isHovered ? 'bg-red-400' : 'bg-gray-400';
  const minimizeButtonColor = isFocused || isHovered ? 'bg-yellow-500' : 'bg-gray-400';
  const maximizeButtonColor = isFocused || isHovered ? 'bg-green-500' : 'bg-gray-400';

  const showIcons = isHovered;

  const commonOnContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    handleContextMenu(event, 'window-header', path);
  };

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
            closeProcess(path);
          }}
          onContextMenu={commonOnContextMenu}
          dataTestId="window-closeProcess"
          buttonColor={closeButtonColor}
          showIcons={showIcons}
        />
        <WindowHeaderButton
          iconName="min"
          iconSize={8}
          onClick={handleWindowMinimizeToggle}
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
            iconName={maximizeButtonName}
            iconSize={8}
            iconColor="black"
            onClick={handleWindowFullSize}
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

const WindowHeader = ({ path }: WindowHandlesProperties): ReactElement => {
  const { handleWindowFullSize, handleMouseDownMove, handleWindowMinimizeToggle } =
    UseWindowState(path);
  const closeProcess = useProcessesStore((state) => state.closeProcess);
  const title = parseFileName(path);
  const isFocused = useProcessesStore((state) => state.getIsFocused(path));
  const setIsVisible = useMenuStore((state) => state.setIsVisible);
  const setGuideIndex = useDragStore((state) => state.setGuideIndex);
  const setGuideOpacity = useDragStore((state) => state.setGuideOpacity);
  const { handleContextMenu } = UseHandleContextMenu();

  const headerColor = isFocused ? 'bg-[#4A4947]' : 'bg-gray-800/20';
  const headerTextColor = isFocused ? 'text-white' : 'text-gray-800';

  return (
    <>
      <header
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
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleMouseDownMove(event);
          setIsVisible(false);
        }}
        onDoubleClick={(event) => {
          event.stopPropagation();
          handleWindowFullSize();
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
          handleContextMenu(event, 'window-header', path);
        }}
        onDragOver={(event: React.DragEvent) => {
          event.preventDefault();
          // eslint-disable-next-line no-param-reassign
          event.dataTransfer.dropEffect = 'move';
          setGuideIndex(0);
          setGuideOpacity(0);
        }}
      >
        <HeaderButtons
          isFocused={isFocused}
          path={path}
          closeProcess={closeProcess}
          handleWindowMinimizeToggle={handleWindowMinimizeToggle}
          handleWindowFullSize={handleWindowFullSize}
        />
        <h1 className={cn(headerTextColor, 'cursor-default')}>{title}</h1>
      </header>
    </>
  );
};

export default WindowHeader;
