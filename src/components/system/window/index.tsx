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
  const isMinimized = useProcessesStore((state) => state.getIsMinimized(id));
  const position = useProcessesStore((state) => state.getWindowPosition(id));
  const size = useProcessesStore((state) => state.getWindowSize(id));
  return (
    <section
      data-testid="window"
      className={cn(
        'embossed-border absolute flex min-h-[300px] min-w-[300px] flex-col',
        isAnimating && 'transition-all duration-200',
      )}
      style={
        isMinimized
          ? {
              display: 'none',
            }
          : {
              transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
              width: size.width,
              height: size.height,
            }
      }
    >
      <WindowResizeHandles id={id} />
      <WindowMoveHandle id={id} />
      <article className={cn('relative flex flex-1 bg-surface pt-2 text-onSurface')}>
        <div className="absolute inset-x-[-5px] bottom-0 top-1">{children}</div>
      </article>
    </section>
  );
};

export default Window;
