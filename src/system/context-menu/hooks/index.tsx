import { useState, useEffect, useMemo, type CSSProperties } from 'react';

import { getContextMenuOptions } from '@/defaults';
import commonEntryContextMenuItems from '@/system/context-menu/common';
import { mergeContextMenuItems } from '@/system/context-menu/utils';
import directoryContextMenuItems from '@/system/file-system/context-menu';
import useFileSystemStore, {
  type FileSystemEntry,
  ContextState,
  ContextMenuItem,
  ContextMenuItems,
} from '@/system/file-system/store';
import {
  CONTEXT_MENU_WIDTH,
  CONTEXT_MENU_ITEM_HEIGHT,
  TASKBAR_HEIGHT,
  MAXIMIZED_WINDOW_HEADER_HEIGHT,
} from '@/themes';

interface ReturnTypes {
  contextMenuStyles: CSSProperties | null;
  contextMenuClassname: string | null;
  contextMenuItem: ContextMenuItem | null;
  contextEntry: FileSystemEntry | null;
  clickPosition: { x: number; y: number };
}

const UseContextMenu = (contextState: ContextState | null): ReturnTypes => {
  const contextMenuOptions = getContextMenuOptions(contextState?.id ?? '');
  const contextMenuSource = contextMenuOptions?.source ?? null;
  const contextMenuStyles = contextMenuOptions?.styles ?? null;
  const contextMenuClassname = contextMenuOptions?.className ?? null;
  const contextEntry = useFileSystemStore((state) => state.getEntry(contextState?.id ?? ''));
  const getIsFullscreen = useFileSystemStore((state) => state.getIsFullscreen);
  const [contextMenuItemsFromSource, setContextMenuItemsFromSource] =
    useState<ContextMenuItems | null>(null);

  // fetch from source, if provided
  useEffect(() => {
    if (!contextState) return;
    if (contextMenuSource instanceof Promise) {
      contextMenuSource
        .then((actions) => {
          setContextMenuItemsFromSource(actions);
        })
        .catch(() => {
          setContextMenuItemsFromSource(null);
        });
    }
  }, [contextMenuSource, contextState]);

  const contextMenuActions = useMemo(() => {
    if (!contextState) return null;
    // Merge common items with source items if provided
    if (contextMenuItemsFromSource) {
      return mergeContextMenuItems(commonEntryContextMenuItems, contextMenuItemsFromSource);
    }
    // Merge with directory items if category is directory or target entry is a directory
    if (contextState.category === 'directory' || contextEntry?.type === 'directory') {
      return mergeContextMenuItems(commonEntryContextMenuItems, directoryContextMenuItems);
    }

    // If specified system category, return those items by themselves
    switch (contextState.category) {
      case 'taskbar': {
        return null;
      }
      default: {
        // Otherwise, just return common entry items (open, etc.)
        return commonEntryContextMenuItems;
      }
    }
  }, [contextMenuItemsFromSource, contextState, contextEntry]);

  const contextMenuItem = useMemo(() => {
    if (!contextState) return null;
    return contextMenuActions?.get(contextState.category) ?? null;
  }, [contextMenuActions, contextState]);

  const clickPosition = useMemo(() => {
    const pos = contextState?.clickPosition ?? { x: 0, y: 0 };
    // Adjust position to ensure the context menu is fully visible
    const numItems = contextMenuItem?.size ?? 0;
    const menuPadding = 2 + (numItems + 1) * 4;
    const menuHeight = numItems * CONTEXT_MENU_ITEM_HEIGHT + menuPadding;
    const windowHeight = window.innerHeight - TASKBAR_HEIGHT;
    const windowWidth = window.innerWidth;

    let x = pos.x;
    let y = pos.y;
    if (pos.y + menuHeight > windowHeight) {
      y = windowHeight - menuHeight;
    }
    if (pos.x + CONTEXT_MENU_WIDTH > windowWidth) {
      x = windowWidth - CONTEXT_MENU_WIDTH;
    }
    const isFullscreen = getIsFullscreen();
    return {
      x,
      y: isFullscreen ? y - MAXIMIZED_WINDOW_HEADER_HEIGHT : y,
    };
  }, [contextState, contextMenuItem, getIsFullscreen]);

  return {
    contextMenuStyles,
    contextMenuClassname,
    contextMenuItem,
    contextEntry,
    clickPosition,
  };
};

export default UseContextMenu;
