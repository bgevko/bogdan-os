import { type ReactElement, Suspense, useState, useMemo, useEffect } from 'react';
import { getComponent } from '@/defaults';
import useFileSystemStore, { FileSystemEntry } from '@/system/file-system/store';
import Menubar from '@/system/menubar';
import Loading from '@/system/window-system/components/loading';
import ResizeHandles from '@/system/window-system/components/resize-handles';
import WindowHeader from '@/system/window-system/components/window-header';
import { WINDOW_HEADER_HEIGHT } from '@/themes';
import { getLazyIcon } from '@/utils';
import cn from '@/utils/format';

interface WindowProperties {
  entry: FileSystemEntry;
}

const Window = ({ entry }: WindowProperties): ReactElement => {
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
  const LazyIcon = useMemo(() => getLazyIcon('secret'), [entry.id]);
  const Component = useMemo(() => getComponent(entry.id, entry.type), [entry.id, entry.type]);
  /*
   ***********************************
   *  Not Ready For Smaller Screens  *
   ***********************************
   */
  const shouldWarnUser =
    entry.disableMobile &&
    (window.innerWidth < entry.defaultWindowSize.width ||
      window.innerHeight < entry.defaultWindowSize.height);

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

  const background =
    isFocused || windowState === 'maximized'
      ? 'linear-gradient(180deg, #FFFFFF 0%, #FFE1AF 100%)'
      : 'linear-gradient(180deg, #FFE9C6 0%, rgba(91, 91, 91, 0.10) 100%)';

  return (
    <section
      role="application"
      className={cn(
        'preserve-3d',
        'window-shadow absolute flex flex-col rounded-lg',
        !isWindowMoving && !isWindowResizing && 'transition-transform duration-200 ease-out',
      )}
      style={{
        background,
        transform: `
          translate(${posX.toString()}px, ${posY.toString()}px)
          scale(${transformScale.toString()})
          translateZ(0px)
        `,
        width: size.width,
        height: size.height,
        zIndex: windowState === 'maximized' ? 1 : zIndex,
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
          className="preserve-3d relative flex flex-1 rounded-b-lg transition-opacity duration-200 ease-linear"
          style={{
            opacity: contentOpacity,
          }}
        >
          <div
            className="preserve-3d flex size-full flex-col"
            onMouseDown={() => {
              pushFocus(entry.id);
              clearContextState();
            }}
          >
            {shouldWarnUser ? (
              <div className="flex size-full flex-col items-center justify-center gap-1">
                <p className="font-bold">Psst!</p>
                <LazyIcon width={150} height={150} fill="#FBF0C7" className="select-none" />
                <p className="font-bold"> This app doesn&apos;t work on mobile.. yet!</p>
              </div>
            ) : (
              <>
                {windowState !== 'maximized' && <Menubar entry={entry} />}
                {/* App Componet */}
                <Suspense fallback={<Loading />}>
                  {Component && <Component entry={entry} />}
                </Suspense>
              </>
            )}
          </div>
        </article>
      )}
    </section>
  );
};

export default Window;
