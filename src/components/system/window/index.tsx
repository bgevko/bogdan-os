import { type ReactElement, ReactNode } from 'react';

import WindowMoveHandle from '@/components/system/window/move-handle';
import WindowResizeHandles from '@/components/system/window/resize-handles';
import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format';

interface WindowProperties {
  id: string;
  children: ReactNode;
}

const Window = ({ id, children }: WindowProperties): ReactElement => {
  const isAnimating = useProcessesStore((state) => state.getIsAnimating(id));
  const position = useProcessesStore((state) => state.getWindowPosition(id));
  const size = useProcessesStore((state) => state.getWindowSize(id));
  const opacity = useProcessesStore((state) => state.getOpacity(id));
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(id));

  return (
    <section
      data-testid="window"
      className={cn(
        'embossed-border absolute flex flex-col',
        isAnimating && 'transition-all duration-200',
      )}
      style={{
        transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
        width: size.width,
        height: size.height,
        opacity,
        zIndex: isMinimized ? -1 : 1,
      }}
    >
      {!isMinimized && (
        <>
          <WindowResizeHandles id={id} />
          <WindowMoveHandle id={id} />
          <article className={cn('relative flex flex-1 bg-surface pt-2 text-onSurface')}>
            <div className="absolute inset-x-[-5px] bottom-0 top-1">{children}</div>
          </article>
        </>
      )}
    </section>
  );
};

export default Window;
