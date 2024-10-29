/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type ReactElement, ReactNode, useCallback } from 'react';

import WindowResizeHandles from '@/components/system/window/resize-handles';
import WindowHeader from '@/components/system/window/window-header';
import useMenuStore from '@/stores/use-menu-store';
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
  const setMenuContext = useMenuStore((state) => state.setMenuContext);
  const setMenuTargetPath = useMenuStore((state) => state.setTargetPath);
  const isFocused = useProcessesStore((state) => state.getIsFocused(path));

  // Set background to background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE1AF 100%)' if focused, otherwise to
  // background: linear-gradient(180deg, #FFE9C6 0%, rgba(91, 91, 91, 0.10) 100%);
  const background = isFocused
    ? 'linear-gradient(180deg, #FFFFFF 0%, #FFE1AF 100%)'
    : 'linear-gradient(180deg, #FFE9C6 0%, rgba(91, 91, 91, 0.10) 100%)';

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
        'window-shadow z-10 absolute flex flex-col rounded-lg',
        isAnimating && 'transition-all duration-200',
      )}
      style={{
        transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
        background,
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
      onDragOver={(event: React.DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        let target = event.target as HTMLElement;
        let dataId;
        while (!dataId) {
          dataId = target.dataset.id;
          target = target.parentElement!;
        }
        if (dataId === 'window-header' || dataId === 'folder' || dataId === 'file-icon') {
          return;
        }
        setMenuContext('window');
        setMenuTargetPath(path);
      }}
    >
      {!isMinimized && (
        <>
          <WindowResizeHandles path={path} />
          <WindowHeader path={path} />
          <article className={cn('relative flex flex-1 rounded-b-lg')}>
            <div className="absolute inset-y-0 w-full rounded-b-lg">{children}</div>
          </article>
        </>
      )}
    </section>
  );
};

export default Window;
