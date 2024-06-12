import { create } from 'zustand';

import { validProcesses } from '@/globals/process-directory';
import { type Position } from '@/types/units';

interface DesktopItem {
  id: string;
  position: Position;
}

type DesktopItems = DesktopItem[];

interface DesktopState {
  desktopItems: DesktopItems;
  gap: number;
  iconWidth: number;
  iconHeight: number;
  addItems: (processId: string | string[]) => void;
  removeItems: (processId: string | string[]) => void;
  getItemPosition: (processId: string) => Position;
  setItemPosition: (processId: string, position: Position) => void;
}

function validateProcesses(processId: string[]): void {
  for (const id of processId) {
    if (!validProcesses.has(id)) {
      throw new Error(`No such processId: ${id}`);
    }
  }
}

function validateIsOnDesktop(state: DesktopState, processId: string[]): void {
  for (const id of processId) {
    if (!state.desktopItems.some((item) => item.id === id)) {
      throw new Error(`ProcessId: ${id} is not on the desktop`);
    }
  }
}

const useDesktopStore = create<DesktopState>((set, get) => ({
  desktopItems: [],
  gap: 10,
  iconWidth: 70,
  iconHeight: 70,
  addItems: (processId) => {
    const requested = Array.isArray(processId) ? processId : [processId];

    validateProcesses(requested);
    set((state) => {
      // If icon is already on desktop, don't add another
      const filtered = requested.filter((id) => !state.desktopItems.some((item) => item.id === id));

      // Add the new items
      const toAdd = [];
      for (const id of filtered) {
        const newItemX = 0;
        const newItemY = 0;
        const newItem: DesktopItem = {
          id,
          position: { x: newItemX, y: newItemY },
        };
        toAdd.push(newItem);
      }
      return { desktopItems: [...state.desktopItems, ...toAdd] };
    });
  },
  removeItems: (processId) => {
    const requested = Array.isArray(processId) ? processId : [processId];
    validateProcesses(requested);

    set((state) => {
      const newDesktopItems = state.desktopItems.filter((item) => !requested.includes(item.id));
      return { desktopItems: newDesktopItems };
    });
  },
  getItemPosition: (processId) => {
    validateProcesses([processId]);
    validateIsOnDesktop(get(), [processId]);
    return get().desktopItems.find((item) => item.id === processId)?.position ?? { x: 0, y: 0 };
  },
  setItemPosition: (processId, position) => {
    validateProcesses([processId]);
    validateIsOnDesktop(get(), [processId]);
    set((state) => {
      const newDesktopItems = state.desktopItems.map((item) => {
        if (item.id === processId) {
          return { ...item, position };
        }
        return item;
      });
      return { desktopItems: newDesktopItems };
    });
  },
}));

export default useDesktopStore;
