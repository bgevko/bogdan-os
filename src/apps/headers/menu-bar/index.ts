import useHeadersStore from '@/apps/headers/store';
import useProcessesStore from '@/stores/use-processes-store';
// Headers menu bar items
import { MenuBarItems, MenuAction } from '@/types';

const actions: MenuBarItems = new Map([
  [
    'About',
    new Map<string, MenuAction>([
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
          callback: (path?: string) => {
            const close = useProcessesStore.getState().closeProcess;
            close(path!);
          },
        },
      ],
    ]),
  ],
]);

export default actions;
