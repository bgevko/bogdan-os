import { type ReactElement, ReactNode } from 'react';

import CloseIcon from '@/assets/icons/close-icon.svg';
import MaxIcon from '@/assets/icons/max-icon.svg';
import MinIcon from '@/assets/icons/min-icon.svg';
import UnmaxIcon from '@/assets/icons/unmax-icon.svg';
import Button from '@/components/system/button';
import { useWindowState, ResizeDirection } from '@/hooks/use-window';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import { Size } from '@/types/units';
import cn from '@/utils/format';

interface WindowProperties {
  className?: string;
  title: string;
  minSize: Size;
  children: ReactNode;
}

const Window = ({ className, minSize, title, children }: WindowProperties): ReactElement => {
  const {
    isAnimatingResize,
    position,
    maxed,
    dimensions,
    handleMouseDownMove,
    handleMouseDownResize,
    handleWindowFullSize,
  } = useWindowState(minSize);

  return (
    <section
      className={cn(
        'embossed-border absolute flex min-h-[300px] min-w-[300px] flex-col',
        isAnimatingResize && 'transition-all duration-200',
      )}
      style={{
        transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      <span
        className="absolute left-[-16px] h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window left resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.LEFT);
        }}
      />
      <span
        className="absolute right-[-16px] h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window right resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.RIGHT);
        }}
      />
      <span
        className="absolute top-[-16px] h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window top resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.TOP);
        }}
      />
      <span
        className="absolute bottom-[-16px] h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window bottom resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.BOTTOM);
        }}
      />
      <span
        className="absolute left-[-16px] top-[-16px] size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window top left corner resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.TOP_LEFT);
        }}
      />
      <span
        className="absolute right-[-16px] top-[-16px] size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window top right corner resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.TOP_RIGHT);
        }}
      />
      <span
        className="absolute bottom-[-16px] left-[-16px] size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window bottom left corner resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.BOTTOM_LEFT);
        }}
      />
      <span
        className="absolute bottom-[-16px] right-[-16px] size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window bottom right corner resize"
        onMouseDown={() => {
          handleMouseDownResize(ResizeDirection.BOTTOM_RIGHT);
        }}
      />
      <header
        className="relative flex items-center justify-center bg-surface text-[14px]"
        style={{ height: `${WINDOW_HEADER_HEIGHT.toString()}px` }}
        role="toolbar"
        aria-label="Window header"
        onMouseDown={() => {
          handleMouseDownMove();
        }}
        onDoubleClick={() => {
          handleWindowFullSize();
        }}
      >
        <span className="absolute inset-x-[-5px] top-[-5px] flex h-6 select-none items-center justify-between bg-secondary px-[2px]">
          <h1 className="pb-1 pl-1">{title}</h1>
          <span className="flex gap-1">
            <Button className="size-4">
              <img
                src={MinIcon}
                draggable="false"
                alt="minimize"
                className="size-full select-none"
                style={{ transform: 'scale(1.5) translateY(-0.5px)' }}
              />
            </Button>
            <Button
              className="size-4"
              onClick={(event) => {
                event.stopPropagation();
                handleWindowFullSize();
              }}
            >
              <img
                src={maxed ? UnmaxIcon : MaxIcon}
                draggable="false"
                alt="maximize"
                className="size-full select-none"
                style={{ transform: 'scale(2.0) translateY(-0.5px)' }}
              />
            </Button>
            <Button className="size-4">
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
      <article className={cn('relative flex flex-1 bg-surface pt-2 text-onSurface', className)}>
        <div className="absolute inset-x-[-5px] bottom-0 top-1">{children}</div>
      </article>
    </section>
  );
};

export default Window;
