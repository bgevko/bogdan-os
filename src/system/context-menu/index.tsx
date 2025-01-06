/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Fragment, ReactElement } from 'react';

import UseContextMenu from '@/system/context-menu/hooks';
import useFileSystemStore, { FileSystemEntry, ContextMenuItem } from '@/system/file-system/store';
import { CONTEXT_MENU_WIDTH } from '@/themes';
import cn from '@/utils/format';

const ContextMenu = (): ReactElement => {
  const contextState = useFileSystemStore((state) => state.getContextState());
  const clearContextState = useFileSystemStore((state) => state.clearContextState);
  const { contextEntry, contextMenuItem, clickPosition } = UseContextMenu(contextState);
  const isAnyIconDragging = useFileSystemStore((state) => state.getIsAnyIconDragging());

  const isVisible = contextEntry && contextMenuItem && !isAnyIconDragging;

  if (!isVisible) {
    return <></>;
  }

  return (
    <>
      <DropdownMenu
        entry={contextEntry}
        contextMenuItem={contextMenuItem}
        position={clickPosition}
        onClick={() => {
          clearContextState();
        }}
      />
    </>
  );
};

const DropdownMenu = ({
  entry,
  contextMenuItem,
  position,
  onClick,
}: {
  entry: FileSystemEntry;
  contextMenuItem: ContextMenuItem;
  position: { x: number; y: number };
  onClick: () => void;
}): ReactElement => {
  return (
    <ul
      style={{
        width: CONTEXT_MENU_WIDTH,
        transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
      }}
      className="window-shadow absolute left-0 z-50 flex flex-col gap-1 rounded border border-stone-200 bg-stone-50 p-1"
      onClick={() => {
        onClick();
      }}
    >
      {[...contextMenuItem.entries()].map(([label, item]) => {
        let isDisabled = false;
        if (item.disableCallback) {
          isDisabled = item.disableCallback(entry);
        }
        return (
          <Fragment key={`${label}-dropdown-fragment`}>
            <li
              key={`${label}-dropdown-list-item`}
              className={cn(
                'flex select-none items-center',
                'px-3 text-stone-900 hover:rounded-md font-normal',
                !isDisabled && 'hover:bg-blue-400 hover:text-white cursor-pointer',
                isDisabled && 'cursor-default text-stone-400',
              )}
              style={{
                height: 30,
              }}
              onClick={() => {
                if (!isDisabled) item.callback(entry);
              }}
            >
              {label}
            </li>
            {item.bottomBorder && <hr key={`${label}-border`} className="border-stone-200" />}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default ContextMenu;
