import useFileIconContext from '@/hooks/system/use-menu-context/use-file-icon-context';
import useFolderContext from '@/hooks/system/use-menu-context/use-folder-context';
import useTaskbarEntryContext from '@/hooks/system/use-menu-context/use-taskbar-entry-context';
import useWindowHeaderContext from '@/hooks/system/use-menu-context/use-window-header-context';
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
