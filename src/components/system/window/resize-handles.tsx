import { ReactElement } from 'react';

import UseWindowState from '@/hooks/system/use-window';

interface WindowHandlesProperties {
  path: string;
}

const WindowResizeHandles = ({ path }: WindowHandlesProperties): ReactElement => {
  const { handleSetResizeDirection } = UseWindowState(path);
  return (
    <>
      <span
        data-testid="resize-left"
        className="absolute left-[-16px] h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window left resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('LEFT');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        data-testid="resize-right"
        className="absolute right-[-16px] h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window right resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('RIGHT');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        data-testid="resize-top"
        className="absolute top-[-16px] h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window top resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('TOP');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        data-testid="resize-bottom"
        className="absolute bottom-[-16px] h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window bottom resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('BOTTOM');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        data-testid="resize-top-left"
        className="absolute left-[-16px] top-[-16px] size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window top left corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('TOP_LEFT');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        data-testid="resize-top-right"
        className="absolute right-[-16px] top-[-16px] size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window top right corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('TOP_RIGHT');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        data-testid="resize-bottom-left"
        className="absolute bottom-[-16px] left-[-16px] size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window bottom left corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('BOTTOM_LEFT');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        data-testid="resize-bottom-right"
        className="absolute bottom-[-16px] right-[-16px] size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window bottom right corner resize"
        onMouseDown={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleSetResizeDirection('BOTTOM_RIGHT');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
    </>
  );
};

export default WindowResizeHandles;
