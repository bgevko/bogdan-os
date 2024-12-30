import { type ReactElement, ReactNode, useCallback } from 'react';

import { getProcessOptions, doesOptionExist } from '@/static';
import useFsStore from '@/stores/use-fs-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import { DynamicIconsByName } from '@/system/dynamic-icons';
import MenuBar from '@/system/menu-bar';
import WindowResizeHandles from '@/system/window/resize-handles';
import WindowHeader from '@/system/window/window-header';
import cn from '@/utils/format';

interface WindowProperties {
  path: string;
  children: ReactNode;
}

const Window = ({ path, children }: WindowProperties): ReactElement => {
  const isAnimating = useProcessesStore((state) => state.getIsAnimating(path));
  const position = useProcessesStore((state) => state.getWindowPosition(path));
  const size = useProcessesStore((state) => state.getWindowSize(path));
  const minSize = useProcessesStore((state) => state.getWindowMinSize(path));
  const opacity = useProcessesStore((state) => state.getOpacity(path));
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(path));
  const setFocused = useProcessesStore((state) => state.setFocused);
  const allFocused = useProcessesStore((state) => state.getFocused());
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const isDir = useFsStore((state) => state.isDir);
  const isFocused = useProcessesStore((state) => state.getIsFocused(path));

  // Check if mobile mode is disabled
  const { disableMobile } = getProcessOptions(path, isDir(path));
  const willRenderWarning =
    disableMobile && (window.innerWidth <= minSize.width || window.innerHeight <= minSize.height);

  const menuBarExists = doesOptionExist(path, 'menuBarOptions');

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
        appendMouseContext('folder');
      }}
      onMouseLeave={() => {
        popMouseContext();
      }}
      onDragOver={(event: React.DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      {!isMinimized && (
        <>
          <WindowResizeHandles path={path} />
          <WindowHeader path={path} />
          <article className={cn('relative flex flex-1 rounded-b-lg')}>
            <div className="absolute inset-y-0 w-full rounded-b-lg">
              {willRenderWarning ? (
                <div className="flex size-full flex-col items-center justify-center gap-1">
                  <p className="font-bold">Psst!</p>
                  <DynamicIconsByName iconName="secret" size={150} color="#FFBF9A" shadow={false} />
                  <p className="font-bold"> This app doesn&apos;t work on mobile.. yet!</p>
                </div>
              ) : (
                <div className="flex size-full flex-col">
                  {menuBarExists && <MenuBar path={path} />}
                  {children}
                </div>
              )}
            </div>
          </article>
        </>
      )}
    </section>
  );
};

export default Window;
