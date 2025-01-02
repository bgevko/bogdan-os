import { ContextMenuItems, ContextMenuAction } from '@/system/file-system/store';

const taskbarContextMenuItems: ContextMenuItems = new Map([
  [
    'taskbar',
    new Map<string, ContextMenuAction>([
      [
        'About',
        {
          callback: () => {
            console.log('About');
          },
        },
      ],
    ]),
  ],
]);

export default taskbarContextMenuItems;
