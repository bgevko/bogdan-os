import useFilesystemStore, {
  ContextMenuItems,
  ContextMenuAction,
} from '@/system/file-system/store';

const actions: ContextMenuItems = new Map([
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
]);

export default actions;
