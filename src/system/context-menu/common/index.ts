// Common context menu items for every file entry.
import useFilesystemStore, {
  ContextMenuItems,
  ContextMenuAction,
} from '@/system/file-system/store';
import { CLOSE_ANIMATION_DURATION } from '@/themes';

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
            if (!entry) return;
            const closeEntry = useFilesystemStore.getState().closeEntry;
            const setTransformScale = useFilesystemStore.getState().setTransformScale;
            setTransformScale(entry.id, 0);
            setTimeout(() => {
              closeEntry(entry.id);
            }, CLOSE_ANIMATION_DURATION);
          },
        },
      ],
    ]),
  ],
]);

export default commonEntryContextMenuItems;
