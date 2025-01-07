import useHeadersStore from '@/apps/headers/store';
// Headers menu bar items
import useFilesystemStore, { MenubarItems, MenubarAction } from '@/system/file-system/store';

const actions: MenubarItems = new Map([
  [
    'Headers',
    new Map<string, MenubarAction>([
      [
        'Reset',
        {
          callback: () => {
            const reset = useHeadersStore.getState().reset;
            reset();
          },
        },
      ],
      [
        'About',
        {
          callback: () => {
            const setShowHelpFlag = useHeadersStore.getState().setShowHelpFlag;
            setShowHelpFlag(true);
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
