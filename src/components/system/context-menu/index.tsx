import React, { useState, useCallback, useEffect } from 'react';

import useEvents from '@/hooks/use-events';
import useMouseStore from '@/stores/use-mouse-store';
import { TASKBAR_HEIGHT } from '@/themes';
import cn from '@/utils/format';

const ContextMenuComponent = (): React.ReactElement => {
  const [menuPos, setMenuPos] = useState({ x: -500, y: 0 });
  const { registerEvents } = useEvents();
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const mouseoverContext = useMouseStore((state) => state.getMouseoverContext());
  const [visible, setVisible] = useState(false);

  const handleShowMenu = useCallback(
    (event: MouseEvent) => {
      if (mouseoverContext === 'context-menu') return;
      setVisible(true);
      const width = 200;
      const height = 300;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight - TASKBAR_HEIGHT;

      const x = event.clientX + width > viewportWidth ? event.clientX - width : event.clientX;
      const y = event.clientY + height > viewportHeight ? event.clientY - height : event.clientY;
      setMenuPos({ x, y });
    },
    [setVisible, mouseoverContext],
  );

  const handleHideMenu = useCallback(
    (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (mouseoverContext === 'context-menu') return;
      setVisible(false);
    },
    [setVisible, mouseoverContext],
  );

  const preventDefault = useCallback((event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  useEffect(() => {
    registerEvents('contextmenu', [preventDefault, handleShowMenu]);
    registerEvents('mousedown', [handleHideMenu]);
  }, [handleShowMenu, preventDefault, registerEvents, handleHideMenu]);
  return (
    <>
      {visible && (
        <span
          className={cn(
            'embossed-border fixed z-20 flex h-[300px] w-[200px] items-center justify-center bg-surface text-onSurface',
          )}
          style={{
            transform: `translate(${menuPos.x.toString()}px, ${menuPos.y.toString()}px)`,
          }}
          onMouseLeave={(event: React.MouseEvent) => {
            event.stopPropagation();
            popMouseContext();
          }}
          onMouseEnter={(event: React.MouseEvent) => {
            event.stopPropagation();
            appendMouseContext('context-menu');
          }}
        >
          I am the context menu
        </span>
      )}
    </>
  );
};

const ContextMenu = React.memo(ContextMenuComponent);
export default ContextMenu;
