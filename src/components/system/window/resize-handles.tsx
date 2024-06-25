import { ReactElement } from 'react';

import useWindowState from '@/hooks/use-window';
import { ResizeDirection } from '@/hooks/use-window/use-resize';

interface WindowHandlesProperties {
  path: string;
}

const WindowResizeHandles = ({ path }: WindowHandlesProperties): ReactElement => {
  const { handleSetResizeDirection } = useWindowState(path);
  return (
    <>
      <span
        data-testid="resize-left"
        className="absolute left-[-16px] h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window left resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.LEFT);
        }}
      />
      <span
        data-testid="resize-right"
        className="absolute right-[-16px] h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window right resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.RIGHT);
        }}
      />
      <span
        data-testid="resize-top"
        className="absolute top-[-16px] h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window top resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.TOP);
        }}
      />
      <span
        data-testid="resize-bottom"
        className="absolute bottom-[-16px] h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window bottom resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.BOTTOM);
        }}
      />
      <span
        data-testid="resize-top-left"
        className="absolute left-[-16px] top-[-16px] size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window top left corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.TOP_LEFT);
        }}
      />
      <span
        data-testid="resize-top-right"
        className="absolute right-[-16px] top-[-16px] size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window top right corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.TOP_RIGHT);
        }}
      />
      <span
        data-testid="resize-bottom-left"
        className="absolute bottom-[-16px] left-[-16px] size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window bottom left corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.BOTTOM_LEFT);
        }}
      />
      <span
        data-testid="resize-bottom-right"
        className="absolute bottom-[-16px] right-[-16px] size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window bottom right corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection(ResizeDirection.BOTTOM_RIGHT);
        }}
      />
    </>
  );
};

export default WindowResizeHandles;
