import useFilesystemStore, { MenubarItems, MenubarAction } from '@/system/file-system/store';

const actions: MenubarItems = new Map([
  [
    'File',
    new Map<string, MenubarAction>([
      [
        'Quit',
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

export default actions;
