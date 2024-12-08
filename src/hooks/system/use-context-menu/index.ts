import useFileIconContext from '@/hooks/system/use-context-menu/use-file-icon-context';
import useFolderContext from '@/hooks/system/use-context-menu/use-folder-context';
import useTaskbarEntryContext from '@/hooks/system/use-context-menu/use-taskbar-entry-context';
import useWindowHeaderContext from '@/hooks/system/use-context-menu/use-window-header-context';
import { ContextMenuCallbacks } from '@/types';

interface Returns {
  contextOptions: ContextMenuCallbacks;
}

const UseMenuContext = (): Returns => {
  const contextOptions: ContextMenuCallbacks = new Map([
    ['desktop', useFolderContext()],
    ['folder', useFolderContext()],
    ['file-icon', useFileIconContext()],
    ['taskbar-entry', useTaskbarEntryContext()],
    ['window-header', useWindowHeaderContext()],
  ]);

  return {
    contextOptions,
  };
};

export default UseMenuContext;
