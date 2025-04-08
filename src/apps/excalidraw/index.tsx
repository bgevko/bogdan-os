import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useEffect, useRef } from 'react';

import useFileSystemStore, { AppComponent } from '@/system/file-system/store';
import cn from '@/utils/format';

const ExcalidrawWrapper = ({ entry }: AppComponent): React.ReactElement => {
  entry = entry!;
  const setWindowOnUpdateCallback = useFileSystemStore((state) => state.setWindowOnUpdateCallback);
  const excalidrawAPI = useRef<ExcalidrawImperativeAPI>(null);

  useEffect(() => {
    const updateExcalidraw = () => {
      excalidrawAPI.current?.refresh();
    };

    setWindowOnUpdateCallback(entry.id, updateExcalidraw);
  }, [entry.id, setWindowOnUpdateCallback]);

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
