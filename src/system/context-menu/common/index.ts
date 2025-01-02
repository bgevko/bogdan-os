// Common context menu items for every file entry.
import useFilesystemStore, {
  ContextMenuItems,
  ContextMenuAction,
} from '@/system/file-system/store';

const commonEntryContextMenuItems: ContextMenuItems = new Map([
  [
    'icon',
    new Map<string, ContextMenuAction>([
      [
        'Open',
        {
          callback: (entry) => {
            const openEntry = useFilesystemStore.getState().openEntry;
            openEntry(entry?.id ?? '');
          },
        },
      ],
    ]),
  ],
  [
    'taskbar-entry',
    new Map<string, ContextMenuAction>([
      [
        'Close',
        {
          callback: (entry) => {
            const closeEntry = useFilesystemStore.getState().closeEntry;
            closeEntry(entry?.id ?? '');
          },
        },
      ],
    ]),
  ],
]);

export default commonEntryContextMenuItems;
