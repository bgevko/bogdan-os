import { ReactElement, useEffect } from 'react';

import { FileSystemEntry } from '@/system/file-system/store';
import UseWindowResize from '@/system/window-system/hooks/use-window-resize';

interface WindowHandlesProperties {
  entry: FileSystemEntry;
}

const WindowResizeHandles = ({ entry }: WindowHandlesProperties): ReactElement => {
  const { handleResizeStart, handleMouseMove, handleMouseUp } = UseWindowResize(entry);

  /*
   ***********************************
   *         Window Resizing         *
   ***********************************
   */
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <>
      <span
        draggable
        data-testid="resize-left"
        className="absolute left-[-5px] z-10 h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window left resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'left');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        draggable
        data-testid="resize-right"
        className="absolute right-[-5px] z-10 h-full w-3 cursor-ew-resize"
        role="toolbar"
        aria-label="Window right resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'right');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        draggable
        data-testid="resize-top"
        className="absolute top-[-5px] z-10 h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window top resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'top');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        draggable
        data-testid="resize-bottom"
        className="absolute bottom-[-5px] z-10 h-3 w-full cursor-ns-resize"
        role="toolbar"
        aria-label="Window bottom resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'bottom');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        draggable
        data-testid="resize-top-left"
        className="absolute left-[-5px] top-[-5px] z-10 size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window top left corner resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'top-left');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        draggable
        data-testid="resize-top-right"
        className="absolute right-[-5px] top-[-5px] z-10 size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window top right corner resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'top-right');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        draggable
        data-testid="resize-bottom-left"
        className="absolute bottom-[-5px] left-[-5px] z-10 size-4 cursor-nesw-resize"
        role="toolbar"
        aria-label="Window bottom left corner resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'bottom-left');
        }}
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      />
      <span
        draggable
        data-testid="resize-bottom-right"
        className="absolute bottom-[-5px] right-[-5px] z-10 size-4 cursor-nwse-resize"
        role="toolbar"
        aria-label="Window bottom right corner resize"
        onDragStart={(event: React.MouseEvent) => {
          handleResizeStart(event, 'bottom-right');
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
