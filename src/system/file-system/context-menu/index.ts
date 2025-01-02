import useFileSsytemStore, {
  ContextMenuItems,
  ContextMenuAction,
} from '@/system/file-system/store';

const directoryContextMenuItems: ContextMenuItems = new Map([
  [
    'directory',
    new Map<string, ContextMenuAction>([
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
        'Delete',
        {
          callback: () => {
            console.log('Delete');
          },
          disableCallback: (entry) => {
            const isDisableDelete = useFileSsytemStore.getState().getIsDisableDelete;
            return isDisableDelete(entry?.id ?? '');
          },
        },
      ],
    ]),
  ],
]);

export default directoryContextMenuItems;
