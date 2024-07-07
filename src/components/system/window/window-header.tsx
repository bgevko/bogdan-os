import React, { type ReactElement } from 'react';

import CloseIcon from '@/assets/icons/close-icon.svg';
import MaxIcon from '@/assets/icons/max-icon.svg';
import MinIcon from '@/assets/icons/min-icon.svg';
import UnmaxIcon from '@/assets/icons/unmax-icon.svg';
import Button from '@/components/system/button';
import UseWindowState from '@/hooks/system/use-window';
import useMenuStore from '@/stores/use-menu-store';
import useProcessesStore from '@/stores/use-processes-store';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import { parseFileName } from '@/utils/fs';

interface WindowHandlesProperties {
  path: string;
}

const WindowHeader = ({ path }: WindowHandlesProperties): ReactElement => {
  const { handleWindowFullSize, handleMouseDownMove, handleWindowMinimizeToggle } =
    UseWindowState(path);
  const close = useProcessesStore((state) => state.close);
  const title = parseFileName(path);
  const isMaximized = useProcessesStore((state) => state.getIsMaximized(path));
  const isFocused = useProcessesStore((state) => state.getIsFocused(path));
  const setMenuContext = useMenuStore((state) => state.setMenuContext);
  const setMenuTargetPath = useMenuStore((state) => state.setTargetPath);
  return (
    <>
      <header
        className="relative flex items-center justify-center bg-surface text-[14px]"
        data-testid="window-header"
        data-id="window-header"
        style={{
          height: `${WINDOW_HEADER_HEIGHT.toString()}px`,
          filter: isFocused ? 'none' : 'saturate(0.0)',
        }}
        role="toolbar"
        aria-label="Window header"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleMouseDownMove(event);
        }}
        onDoubleClick={(event) => {
          event.stopPropagation();
          handleWindowFullSize();
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          setMenuContext('window-header');
          setMenuTargetPath(path);
        }}
      >
        <span
          data-id="window-header"
          className="absolute inset-x-[-5px] top-[-5px] flex h-6 select-none items-center justify-between bg-secondary px-[2px]"
        >
          <h1 className="pb-1 pl-1">{title}</h1>
          <span className="flex gap-1">
            <Button
              className="size-4"
              data-testid="window-minimize"
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
              <img
                src={MinIcon}
                draggable="false"
                alt="minimize"
                className="size-full select-none"
                style={{ transform: 'scale(1.5) translateY(-0.5px)' }}
              />
            </Button>
            <Button
              data-testid="window-maximize"
              className="size-4"
              onClick={(event) => {
                event.stopPropagation();
                handleWindowFullSize();
              }}
              onContextMenu={(event: React.MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <img
                src={isMaximized ? UnmaxIcon : MaxIcon}
                draggable="false"
                alt="maximize"
                className="size-full select-none"
                style={{ transform: 'scale(2.0) translateY(-0.5px)' }}
              />
            </Button>
            <Button
              data-testid="window-close"
              className="size-4"
              onMouseUpCapture={(event: React.MouseEvent) => {
                if (event.button !== 0) return;
                event.stopPropagation();
                close(path);
              }}
              onContextMenu={(event: React.MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <img
                src={CloseIcon}
                draggable="false"
                alt="minimize"
                className="size-full select-none"
                style={{ transform: 'scale(2.0) translateY(-0.5px)' }}
              />
            </Button>
          </span>
        </span>
      </header>
    </>
  );
};

export default WindowHeader;
