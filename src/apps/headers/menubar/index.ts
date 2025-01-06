import useHeadersStore from '@/apps/headers/store';
// Headers menu bar items
import useFilesystemStore, { MenubarItems, MenubarAction } from '@/system/file-system/store';

const actions: MenubarItems = new Map([
  [
    'Headers',
    new Map<string, MenubarAction>([
      [
        'Help',
        {
          callback: () => {
            const setShowHelpFlag = useHeadersStore.getState().setShowHelpFlag;
            setShowHelpFlag(true);
          },
        },
      ],
      [
        'GitHub',
        {
          callback: () => {
            const url = 'https://github.com/bgevko/bogdan-os';
            window.open(url, '_blank');
          },
          bottomBorder: true,
        },
      ],
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
