import { triggerSave, triggerLoad } from '@/nes/events';
import useFilesystemStore from '@/system/file-system/store';

export function processShortcut(e: KeyboardEvent): void {
  // cmd/ctrl + s -> Save
  if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
    triggerSave(1);
  }

  // cmd/ctrl + l -> Load
  else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
    triggerLoad(1);
  }

  // cmd/ctrl + q -> Quit
  else if (e.key === 'q' && (e.ctrlKey || e.metaKey)) {
    useFilesystemStore.getState().closeEntry('nes-emulator');
  }
}
