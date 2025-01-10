import useFileSystemStore, {
  ContextMenuItems,
  ContextMenuAction,
} from '@/system/file-system/store';
import { CLOSE_ANIMATION_DURATION } from '@/themes';

const directoryContextMenuItems: ContextMenuItems = new Map([
  [
    'directory',
    new Map<string, ContextMenuAction>([
      [
        'New Folder',
        {
          callback: (entry) => {
            if (!entry) return;
            const newEntryId = useFileSystemStore.getState().createEntry({
              parentId: entry.id,
              name: 'NewFolder',
              type: 'directory',
            });
            if (newEntryId) {
              useFileSystemStore.getState().setRenaming(newEntryId);
            }
          },
        },
      ],
      [
        'Paste',
        {
          callback: (entry) => {
            if (!entry) return;
            useFileSystemStore.getState().pasteClipboard(entry.id);
          },
          disableCallback: (entry) => {
            if (!entry) return true;
            const clipBoardEmptry = useFileSystemStore.getState().getClipboard().length === 0;
            const canPaste = useFileSystemStore.getState().getCanPaste(entry.id);
            return clipBoardEmptry || !canPaste;
          },
          bottomBorder: true,
        },
      ],
      [
        'Sort',
        {
          callback: (entry) => {
            useFileSystemStore.getState().sortIcons(entry?.id ?? '', 'name');
          },
        },
      ],
    ]),
  ],
  [
    'icon',
    new Map<string, ContextMenuAction>([
      [
        'Copy',
        {
          callback: (entry) => {
            if (!entry) return;
            useFileSystemStore.getState().selectedToClipboard();
          },
          disableCallback: (entry) => {
            const canCopySelection = useFileSystemStore
              .getState()
              .getCanCopySelection(entry?.parentId ?? '');
            return !canCopySelection;
          },
          bottomBorder: true,
        },
      ],
      [
        'Rename',
        {
          callback: (entry) => {
            if (!entry) return;
            useFileSystemStore.getState().setRenaming(entry.id);
          },
          bottomBorder: true,
        },
      ],
      [
        'Delete',
        {
          callback: () => {
            const selected = useFileSystemStore.getState().getAllSelectedIds();
            const setIconTransformScale = useFileSystemStore.getState().setIconTransformScale;
            for (const id of selected) {
              setIconTransformScale(id, 0);
            }
            setTimeout(() => {
              for (const id of selected) {
                useFileSystemStore.getState().deleteEntry(id);
              }
            }, CLOSE_ANIMATION_DURATION);
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
