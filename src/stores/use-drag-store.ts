import { create } from 'zustand';

import useProcessesStore from '@/stores/use-processes-store';
import { FileSystemContext } from '@/types';

interface DragState {
  isDragging: boolean;
  dragoverPath: string;
  dragStartContext: FileSystemContext;
  guideIndex: number;
  group: string[]; // last index is the current dragging item
  groupSpacingOffsets: number[];
}

interface DragActions {
  setDragStartContext: (context: FileSystemContext) => void;
  getIsDragging: () => boolean;
  setDragging: (group: string[]) => void;
  setGroupSpacingOffsets: (offsets: number[]) => void;
  setGuideIndex: (index: number) => void;
  setDragoverPath: (path: string) => void;
  setIsDragging: (isDragging: boolean) => void;
}

const useDragStore = create<DragState & DragActions>((set, get) => ({
  isDragging: false,
  dragStartContext: 'desktop',
  dragoverPath: '/Desktop',
  initialized: false,
  guideIndex: 0,
  group: [],
  groupSpacingOffsets: [],

  setDragStartContext: (context) => {
    set({ dragStartContext: context });
  },
  getIsDragging: () => {
    return get().group.length > 0;
  },
  setDragging: (group) => {
    set({ group });
  },
  setGroupSpacingOffsets: (offsets) => {
    set({ groupSpacingOffsets: offsets });
  },
  setGuideIndex: (index) => {
    set({ guideIndex: index });
  },
  setDragoverPath: (path) => {
    const { setFocused } = useProcessesStore.getState();
    const { setBlurFocus } = useProcessesStore.getState();
    if (path === '/Desktop') {
      setBlurFocus(true);
    } else {
      setFocused(path);
    }
    set({ dragoverPath: path });
  },
  setIsDragging: (isDragging) => {
    set({ isDragging });
  },
}));

export default useDragStore;
