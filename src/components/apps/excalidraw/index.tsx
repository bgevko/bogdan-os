import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { useEffect, useRef } from 'react';

import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format'; // Assuming 'cn' is your classnames utility

// Import CSS Module
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import styles from './excalidraw.module.scss';

const ExcalidrawWrapper = ({ rootPath }: { rootPath: string }): React.ReactElement => {
  const resized = useProcessesStore((state) => state.getIsUpdatingSize(rootPath));
  const moved = useProcessesStore((state) => state.getIsUpdatingPosition(rootPath));
  const excalidrawAPI = useRef<ExcalidrawImperativeAPI>();

  // Refresh Excalidraw when resized or moved
  useEffect(() => {
    if (resized || moved) {
      excalidrawAPI.current?.refresh();
    }
  }, [resized, moved]);

  return (
    <div
      role="toolbar"
      onMouseDown={(event: React.MouseEvent) => {
        event.stopPropagation();
      }}
      className={cn(
        styles.excalidrawContainer,
        'debossed-border flex size-full items-center justify-center',
      )}
    >
      <Excalidraw
        excalidrawAPI={(api) => {
          excalidrawAPI.current = api;
        }}
        initialData={{
          appState: {
            viewBackgroundColor: '#f8f6f4',
          },
        }}
      />
    </div>
  );
};

export default ExcalidrawWrapper;
