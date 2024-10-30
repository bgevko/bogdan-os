import React, { useState, type ReactElement } from 'react';

import DynamicIcon from '@/components/system/icons';
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

interface HeaderButtonsProps {
  isFocused: boolean;
  path: string;
  close: (path: string) => void;
  handleWindowMinimizeToggle: () => void;
  handleWindowFullSize: () => void;
}

const HeaderButtons = ({
  isFocused,
  path,
  close,
  handleWindowMinimizeToggle,
  handleWindowFullSize,
}: HeaderButtonsProps): ReactElement => {
  const isMaximized = useProcessesStore((state) => state.getIsMaximized(path));
  const { handleContextMenu } = UseHandleContextMenu();

  const maximizeButtonName = isMaximized ? 'unmax' : 'max';

  const [isHovered, setIsHovered] = useState(false);

  const closeButtonColor = isFocused || isHovered ? 'bg-red-400' : 'bg-gray-400';
  const minimizeButtonColor = isFocused || isHovered ? 'bg-yellow-500' : 'bg-gray-400';
  const maximizeButtonColor = isFocused || isHovered ? 'bg-green-500' : 'bg-gray-400';

  const showIcons = isHovered;

  const headerButtonSize = 'w-4 h-4'; // 14px hitbox
  const innerButtonSize = 'w-3 h-3'; // 12px visible button

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
        <button
          type="button"
          data-testid="window-close"
          className={cn('flex items-center justify-center', headerButtonSize)}
          onMouseUpCapture={(event: React.MouseEvent) => {
            if (event.button !== 0) return;
            event.stopPropagation();
            close(path);
          }}
          onContextMenu={(event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            handleContextMenu(event, 'window-header', path);
          }}
        >
          <span
            className={cn(
              'rounded-full flex items-center justify-center',
              closeButtonColor,
              innerButtonSize,
            )}
          >
            {showIcons && <DynamicIcon iconName="close" size={6} shadow={false} />}
          </span>
        </button>

        <button
          type="button"
          data-testid="window-minimize"
          className={cn('flex items-center justify-center', headerButtonSize)}
          onMouseUpCapture={(event: React.MouseEvent) => {
            if (event.button !== 0) return;
            event.stopPropagation();
            handleWindowMinimizeToggle();
          }}
          onContextMenu={(event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <span
            className={cn(
              'rounded-full flex items-center justify-center',
              minimizeButtonColor,
              innerButtonSize,
            )}
          >
            {showIcons && <DynamicIcon iconName="min" size={8} shadow={false} />}
          </span>
        </button>

        <button
          type="button"
          data-testid="window-maximize"
          className={cn('flex items-center justify-center', headerButtonSize)}
          onClick={(event) => {
            event.stopPropagation();
            handleWindowFullSize();
          }}
          onContextMenu={(event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <span
            className={cn(
              'rounded-full flex items-center justify-center',
              maximizeButtonColor,
              innerButtonSize,
            )}
          >
            {showIcons && (
              <DynamicIcon iconName={maximizeButtonName} color="black" size={8} shadow={false} />
            )}
          </span>
        </button>
      </span>
    </span>
  );
};

const WindowHeader = ({ path }: WindowHandlesProperties): ReactElement => {
  const { handleWindowFullSize, handleMouseDownMove, handleWindowMinimizeToggle } =
    UseWindowState(path);
  const close = useProcessesStore((state) => state.close);
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
          close={close}
          handleWindowMinimizeToggle={handleWindowMinimizeToggle}
          handleWindowFullSize={handleWindowFullSize}
        />
        <h1 className={cn(headerTextColor, 'cursor-default')}>{title}</h1>
      </header>
    </>
  );
};

export default WindowHeader;
