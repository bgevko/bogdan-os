/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { type ReactElement, ReactNode, useState, useEffect } from 'react';

import useFileSystemStore, { FileSystemEntry } from '@/system/file-system/store';
import Menubar from '@/system/menubar';
import ResizeHandles from '@/system/window-system/components/resize-handles';
import WindowHeader from '@/system/window-system/components/window-header';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import cn from '@/utils/format';

interface WindowProperties {
  entry: FileSystemEntry;
  children: ReactNode;
}

const Window = ({ entry, children }: WindowProperties): ReactElement => {
  const pos = useFileSystemStore((state) => state.getWindowPosition(entry.id));
  const size = useFileSystemStore((state) => state.getWindowSize(entry.id));
  const windowState = useFileSystemStore((state) => state.getWindowState(entry.id));
  const isFocused = useFileSystemStore((state) => state.getIsWindowFocused(entry.id));
  const zIndex = useFileSystemStore((state) => state.getWindowZIndex(entry.id));
  const isWindowMoving = useFileSystemStore((state) => state.getIsWindowMoving(entry.id));
  const isWindowResizing = useFileSystemStore((state) => state.getIsWindowResizing(entry.id));
  const transformScale = useFileSystemStore((state) => state.getTransformScale(entry.id));
  const willTransform = useFileSystemStore((state) => state.getWillTransform(entry.id));
  const contentOpacity = useFileSystemStore((state) => state.getContentOpacity(entry.id));
  const setContentOpacity = useFileSystemStore((state) => state.setContentOpacity);
  const pushFocus = useFileSystemStore((state) => state.pushFocus);
  const setTransformScale = useFileSystemStore((state) => state.setTransformScale);
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const setDropTargetId = useFileSystemStore((state) => state.setDropTargetId);
  const isAnyIconDragging = useFileSystemStore((state) => state.getIsAnyIconDragging);

  const [isReady, setIsReady] = useState(false);

  /*
   **************************************
   *  Smooth Window content transition  *
   **************************************
   */
  // Set transform scale to 1 after a short delay after mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransformScale(entry.id, 1);
    }, 1);

    const timeout2 = setTimeout(() => {
      setIsReady(true);
    }, 200);

    const timeout3 = setTimeout(() => {
      setContentOpacity(entry.id, 1);
    }, 300);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [entry.id, setTransformScale, setContentOpacity]);

  const posY = windowState === 'minimized' ? window.innerHeight - WINDOW_HEADER_HEIGHT : pos.y;
  const posX = windowState === 'minimized' ? 0 : pos.x;

  const background = isFocused
    ? 'linear-gradient(180deg, #FFFFFF 0%, #FFE1AF 100%)'
    : 'linear-gradient(180deg, #FFE9C6 0%, rgba(91, 91, 91, 0.10) 100%)';

  return (
    <section
      role="application"
      className={cn(
        'window-shadow absolute flex flex-col rounded-lg',
        !isWindowMoving && !isWindowResizing && 'transition-transform duration-200 ease-out',
      )}
      style={{
        background,
        transform: `
          translate(${posX.toString()}px, ${posY.toString()}px)
          scale(${transformScale.toString()})
        `,
        width: size.width,
        height: size.height,
        zIndex: 10 + zIndex,
      }}
      onMouseEnter={() => {
        if (isAnyIconDragging()) {
          setDropTargetId(entry.id);
          pushFocus(entry.id);
        }
      }}
      onMouseDown={() => {
        pushFocus(entry.id);
      }}
    >
      <ResizeHandles entry={entry} />

      {/* Movement logic handled in header */}
      {windowState !== 'maximized' && <WindowHeader entry={entry} />}

      {/* Window Body */}
      {isReady && !willTransform && (
        <article
          className="relative flex flex-1 rounded-b-lg transition-opacity duration-200 ease-linear"
          style={{
            opacity: contentOpacity,
          }}
        >
          <div
            className="flex size-full flex-col"
            onMouseDown={() => {
              pushFocus(entry.id);
              clearContextState();
            }}
            style={{
              filter: isFocused ? 'none' : 'opacity(80%)',
            }}
          >
            {windowState !== 'maximized' && <Menubar entry={entry} />}
            {/* Content */}
            {children}
          </div>
        </article>
      )}
    </section>
  );
};

export default Window;
