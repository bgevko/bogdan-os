import { type ReactElement, ReactNode, useCallback } from 'react';

import WindowResizeHandles from '@/components/system/window/resize-handles';
import WindowHeader from '@/components/system/window/window-header';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format';

interface WindowProperties {
  path: string;
  children: ReactNode;
}

const Window = ({ path, children }: WindowProperties): ReactElement => {
  const isAnimating = useProcessesStore((state) => state.getIsAnimating(path));
  const position = useProcessesStore((state) => state.getWindowPosition(path));
  const size = useProcessesStore((state) => state.getWindowSize(path));
  const opacity = useProcessesStore((state) => state.getOpacity(path));
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(path));
  const setFocused = useProcessesStore((state) => state.setFocused);
  const allFocused = useProcessesStore((state) => state.getFocused());
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);

  const handleWindowFocus = useCallback(() => {
    setFocused(path);
  }, [path, setFocused]);

  const calcZIndex = useCallback(() => {
    if (isMinimized) return -1;
    const myZIndex = allFocused.indexOf(path) * 10;
    return myZIndex + 1;
  }, [isMinimized, allFocused, path]);

  return (
    <section
      role="application"
      data-testid="window"
      className={cn(
        'z-10 embossed-border absolute flex flex-col',
        isAnimating && 'transition-all duration-200',
      )}
      style={{
        transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
        width: size.width,
        height: size.height,
        opacity,
        zIndex: calcZIndex(),
      }}
      onMouseDownCapture={handleWindowFocus}
      onMouseEnter={(event: React.MouseEvent) => {
        event.stopPropagation();
        appendMouseContext('window');
      }}
      onMouseLeave={() => {
        popMouseContext();
      }}
    >
      {!isMinimized && (
        <>
          <WindowResizeHandles path={path} />
          <WindowHeader path={path} />
          <article className={cn('relative flex flex-1 bg-surface pt-2 text-onSurface')}>
            <div className="absolute inset-x-[-5px] bottom-0 top-1">{children}</div>
          </article>
        </>
      )}
    </section>
  );
};

export default Window;
