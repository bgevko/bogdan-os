import useFsStore from '@/stores/use-fs-store';
import useMenuStore from '@/stores/use-menu-store';
import useProcessesStore from '@/stores/use-processes-store';
import { ContextMenuItem, ContextCallback } from '@/types';

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
    [
      'Delete',
      () => {
        try {
          close(targetPath);
        } catch {
          // pass
        }
        rm(targetPath);
      },
    ],
  ]);
  return () => fileIconMenuItems;
};

export default useFileIconContext;
