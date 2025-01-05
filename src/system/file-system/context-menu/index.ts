import useFileSystemStore, {
  ContextMenuItems,
  ContextMenuAction,
} from '@/system/file-system/store';

const directoryContextMenuItems: ContextMenuItems = new Map([
  [
    'directory',
    new Map<string, ContextMenuAction>([
      [
        'New Folder',
        {
          callback: (entry) => {
            entry = entry!;
            useFileSystemStore.getState().createEntry({
              parentId: entry.id,
              name: 'NewFolder',
              type: 'directory',
            });
          },
        },
      ],
      [
        'Sort',
        {
          callback: () => {
            console.log('Sort');
          },
          disableCallback: () => true,
        },
      ],
    ]),
  ],
  [
    'icon',
    new Map<string, ContextMenuAction>([
      [
        'Rename',
        {
          callback: () => {
            console.log('Rename');
          },
          disableCallback: () => true,
          bottomBorder: true,
        },
      ],
      [
        'Delete',
        {
          callback: () => {
            const selected = useFileSystemStore.getState().getAllSelectedIds();
            for (const id of selected) {
              useFileSystemStore.getState().deleteEntry(id);
            }
          },
          disableCallback: (entry) => {
            const canDeleteSelection = useFileSystemStore
              .getState()
              .getCanDeleteSelection(entry?.parentId ?? '');
            return !canDeleteSelection;
          },
        },
      ],
    ]),
  ],
]);

export default directoryContextMenuItems;
