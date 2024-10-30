import { getProcessOptions } from '@/static';
import useFsStore from '@/stores/use-fs-store';
import useMenuStore from '@/stores/use-menu-store';
import useProcessesStore from '@/stores/use-processes-store';
import { ContextMenuItem, ContextCallback } from '@/types';

const useFileIconContext = (): ContextCallback => {
  const openProcess = useProcessesStore((state) => state.openProcess);
  const closeProcess = useProcessesStore((state) => state.closeProcess);
  const rm = useFsStore((state) => state.rm);
  const targetPath = useMenuStore((state) => state.targetPath);
  const isDir = useFsStore((state) => state.isDir);

  type FileIconMenuNames = 'Open' | 'Delete';
  type FileIconMenuItems = Map<FileIconMenuNames, ContextMenuItem>;

  const fileIconMenuItems: FileIconMenuItems = new Map([
    [
      'Open',
      () => {
        openProcess(targetPath);
      },
    ],
  ]);

  // add a Delete option if disableDelete is false or undefined
  const { disableDelete } = getProcessOptions(targetPath, isDir(targetPath));
  if (!disableDelete) {
    fileIconMenuItems.set('Delete', () => {
      try {
        closeProcess(targetPath);
      } catch {
        // pass
      }
      rm(targetPath);
    });
  }
  return () => fileIconMenuItems;
};

export default useFileIconContext;
