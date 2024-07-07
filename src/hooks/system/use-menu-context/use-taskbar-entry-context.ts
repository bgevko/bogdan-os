import useMenuStore from '@/stores/use-menu-store';
import useProcessesStore from '@/stores/use-processes-store';
import { ContextMenuItem, ContextCallback } from '@/types';

const useTaskbarEntryContext = (): ContextCallback => {
  const close = useProcessesStore((state) => state.close);
  const targetPath = useMenuStore((state) => state.targetPath);

  type TaskbarEntryMenuNames = 'Close';
  type TaskbarEntryMenuItems = Map<TaskbarEntryMenuNames, ContextMenuItem>;

  const fileIconMenuItems: TaskbarEntryMenuItems = new Map([
    [
      'Close',
      () => {
        close(targetPath);
      },
    ],
  ]);
  return () => fileIconMenuItems;
};

export default useTaskbarEntryContext;
