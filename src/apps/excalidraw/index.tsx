import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useEffect, useRef } from 'react';

import useFileSystemStore, { AppComponent } from '@/system/file-system/store';
import cn from '@/utils/format';

const ExcalidrawWrapper = ({ entry }: AppComponent): React.ReactElement => {
  entry = entry!;
  const setWindowCallback = useFileSystemStore((state) => state.setWindowCallback);
  const clearWindowCallback = useFileSystemStore((state) => state.clearWindowCallback);
  const excalidrawAPI = useRef<ExcalidrawImperativeAPI>();

  useEffect(() => {
    const updateExcalidraw = () => {
      excalidrawAPI.current?.refresh();
    };

    setWindowCallback(entry.id, updateExcalidraw);

    return () => {
      clearWindowCallback(entry.id);
    };
  }, [entry.id, setWindowCallback, clearWindowCallback]);

  return (
    <div
      role="toolbar"
      className={cn('flex size-full items-center justify-center')}
      onContextMenu={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <Excalidraw
        excalidrawAPI={(api) => {
          excalidrawAPI.current = api;
        }}
        initialData={{
          appState: {
            viewBackgroundColor: '#fff',
          },
        }}
      />
    </div>
  );
};

export default ExcalidrawWrapper;
