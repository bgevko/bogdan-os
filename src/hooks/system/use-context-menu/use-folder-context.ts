import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMenuStore from '@/stores/use-menu-store';
import { ContextMenuItem, ContextMenuCallback } from '@/types';

const useFolderContext = (): ContextMenuCallback => {
  const mkdir = useFsStore((state) => state.mkdir);
  const touch = useFsStore((state) => state.touch);
  const hasPath = useFsStore((state) => state.hasPath);
  const sort = useGridStore((state) => state.sort);
  const targetPath = useMenuStore((state) => state.targetPath);

  type FolderMenuNames = 'New File' | 'New Folder' | 'Sort';
  type FolderMenuItems = Map<FolderMenuNames, ContextMenuItem>;

  const desktopMenuItems: FolderMenuItems = new Map([
    [
      'New File',
      () => {
        let path = `${targetPath.toString()}/NewFile`;
        let v = 1;
        while (hasPath(path)) {
          path = `${targetPath.toString()}/NewFile${v.toString()}`;
          v += 1;
        }
        touch(path);
      },
    ],
    [
      'New Folder',
      () => {
        let path = `${targetPath.toString()}/NewFolder`;
        let v = 1;
        while (hasPath(path)) {
          path = `${targetPath.toString()}/NewFolder${v.toString()}`;
          v += 1;
        }
        mkdir(path);
      },
    ],
    [
      'Sort',
      () => {
        sort(targetPath);
      },
    ],
  ]);
  return () => desktopMenuItems;
};

export default useFolderContext;
