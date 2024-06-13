import React, { type ReactElement } from 'react';

import CloseIcon from '@/assets/icons/close-icon.svg';
import MaxIcon from '@/assets/icons/max-icon.svg';
import MinIcon from '@/assets/icons/min-icon.svg';
import UnmaxIcon from '@/assets/icons/unmax-icon.svg';
import Button from '@/components/system/button';
import useWindowState from '@/hooks/use-window';
import useProcessesStore from '@/stores/use-processes-store';
import { WINDOW_HEADER_HEIGHT } from '@/themes';

interface WindowHandlesProperties {
  id: string;
}

const WindowMoveHandle = ({ id }: WindowHandlesProperties): ReactElement => {
  const { handleWindowFullSize, handleMouseDownMove, handleWindowMinimizeToggle } =
    useWindowState(id);
  const close = useProcessesStore((state) => state.close);
  const title = useProcessesStore((state) => state.getTitle(id));
  const isMaximized = useProcessesStore((state) => state.getIsMaximized(id));
  return (
    <>
      <header
        className="relative flex items-center justify-center bg-surface text-[14px]"
        data-testid="window-header"
        style={{ height: `${WINDOW_HEADER_HEIGHT.toString()}px` }}
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
      >
        <span className="absolute inset-x-[-5px] top-[-5px] flex h-6 select-none items-center justify-between bg-secondary px-[2px]">
          <h1 className="pb-1 pl-1">{title}</h1>
          <span className="flex gap-1">
            <Button className="size-4" data-testid="window-minimize">
              <img
                src={MinIcon}
                draggable="false"
                alt="minimize"
                className="size-full select-none"
                style={{ transform: 'scale(1.5) translateY(-0.5px)' }}
                onMouseUpCapture={() => {
                  handleWindowMinimizeToggle();
                }}
              />
            </Button>
            <Button
              data-testid="window-maximize"
              className="size-4"
              onClick={(event) => {
                event.stopPropagation();
                handleWindowFullSize();
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
              onMouseUpCapture={() => {
                close(id);
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

export default WindowMoveHandle;
