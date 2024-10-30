import useFileIconContext from '@/hooks/system/use-context-menu/use-file-icon-context';
import useFolderContext from '@/hooks/system/use-context-menu/use-folder-context';
import useTaskbarEntryContext from '@/hooks/system/use-context-menu/use-taskbar-entry-context';
import useWindowHeaderContext from '@/hooks/system/use-context-menu/use-window-header-context';
import { ContextCallbacks } from '@/types';

interface Returns {
  contextOptions: ContextCallbacks;
}

const UseMenuContext = (): Returns => {
  const contextOptions: ContextCallbacks = new Map([
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
