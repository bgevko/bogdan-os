import { appOptions } from '@/static';
import useFsStore from '@/stores/use-fs-store';
import useMenuStore from '@/stores/use-menu-store';
import useProcessesStore from '@/stores/use-processes-store';
import { ContextMenuItem, ContextCallback } from '@/types';
import { parseFullFileName } from '@/utils/fs';

const useFileIconContext = (): ContextCallback => {
  const open = useProcessesStore((state) => state.open);
  const close = useProcessesStore((state) => state.close);
  const rm = useFsStore((state) => state.rm);
  const targetPath = useMenuStore((state) => state.targetPath);

  type FileIconMenuNames = 'Open' | 'Delete';
  type FileIconMenuItems = Map<FileIconMenuNames, ContextMenuItem>;

  const fileIconMenuItems: FileIconMenuItems = new Map([
    [
      'Open',
      () => {
        open(targetPath);
      },
    ],
  ]);

  // add a Delete option if disableDelete is false or undefined
  const disableDelete = appOptions.get(parseFullFileName(targetPath))?.disableDelete ?? false;
  if (!disableDelete) {
    fileIconMenuItems.set('Delete', () => {
      try {
        close(targetPath);
      } catch {
        // pass
      }
      rm(targetPath);
    });
  }
  return () => fileIconMenuItems;
};

export default useFileIconContext;
