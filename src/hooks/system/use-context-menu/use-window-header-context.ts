import useMenuStore from '@/stores/use-menu-store';
import useProcessesStore from '@/stores/use-processes-store';
import { ContextMenuItem, ContextCallback } from '@/types';

const useWindowHeaderContext = (): ContextCallback => {
  const closeProcess = useProcessesStore((state) => state.closeProcess);
  const targetPath = useMenuStore((state) => state.targetPath);

  type WindowHeaderMenuNames = 'Close';
  type WindowHeaderMenuItems = Map<WindowHeaderMenuNames, ContextMenuItem>;

  const fileIconMenuItems: WindowHeaderMenuItems = new Map([
    [
      'Close',
      () => {
        closeProcess(targetPath);
      },
    ],
  ]);
  return () => fileIconMenuItems;
};

export default useWindowHeaderContext;
