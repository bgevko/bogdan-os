import useFilesystemStore, { MenubarItems, MenubarAction } from '@/system/file-system/store';
import { triggerSave, triggerLoad } from '@/apps/nes-emulator/events';

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
  [
    'State',
    new Map<string, MenubarAction>([
      [
        'Save',
        {
          callback: () => {
            triggerSave(1);
          },
        },
      ],
      [
        'Load',
        {
          callback: () => {
            triggerLoad(1);
          },
        },
      ],
    ]),
  ],
]);

export default actions;
