/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import newGridState from '@/stores/use-grid-store/helpers';
import { GRID_CELL_SIZE } from '@/themes';
import { GridOptions } from '@/types';
import { parseParentPath } from '@/utils/fs';

enableMapSet();

interface GridSystem {
  gridMap: Map<string, GridState>;
}

interface GridState {
  columns: number;
  rows: number;
  flow: 'row' | 'col';
  lineSize: number;
  items: Map<string, number>;
}

interface GridActions {
  getGrid: (path: string) => GridState;
  getItems: (path: string) => Map<string, number>;
  createGrid: (path: string, options: GridOptions) => void;
  removeGrid: (path: string) => void;
  addItem: (finalPath: string, index?: number) => void;
  removeItem: (path: string) => void;
  getLineSize: (path: string) => number;
  getNumColumns: (path: string) => number;
  sort: (gridPath: string, order?: 'asc' | 'desc') => void;
  updateSize: (path: string, width: number, height: number) => void;
  setIndex: (path: string, index: number) => void;
  getIndex: (path: string) => number;
  getNextIndex: (parentPath: string) => number;
  gridIndexExists: (path: string, index?: number) => boolean;
  reset: () => void;
}

// const useGridStore = create<GridSystem & GridActions>(() => ({
const useGridStore = create<GridSystem & GridActions>()(
  immer((set, get) => ({
    gridMap: new Map<string, GridState>([
      [
        '/',
        newGridState({
          cellSize: GRID_CELL_SIZE,
          flow: 'col',
          childPaths: [],
        }),
      ],
    ]),
    getGrid: (path) => {
      validateParentPath(path);
      return get().gridMap.get(path)!;
    },
    createGrid: (path, options) => {
      set((state) => {
        state.gridMap.set(path, newGridState(options));
      });
    },
    removeGrid: (path) => {
      validateParentPath(path);
      set((state) => {
        for (const dirPath of state.gridMap.keys()) {
          if (dirPath.startsWith(path)) {
            state.gridMap.delete(dirPath);
          }
        }
      });
    },
    getItems: (path) => {
      validateParentPath(path);
      return get().gridMap.get(path)!.items;
    },
    addItem: (finalPath, index) => {
      if (finalPath === '/') return;
      const parentPath = parseParentPath(finalPath);
      const nextIndex = index ?? get().getNextIndex(parentPath);
      set((state) => {
        const grid = state.gridMap.get(parentPath)!;
        grid.items.set(finalPath, nextIndex);
      });
    },
    removeItem: (finalPath) => {
      validateGridChild(finalPath);
      const parentPath = parseParentPath(finalPath);
      set((state) => {
        const grid = state.gridMap.get(parentPath)!;
        grid.items.delete(finalPath);
      });
    },
    setIndex: (path, index) => {
      const parentPath = parseParentPath(path);
      validateParentPath(parentPath);
      set((state) => {
        const grid = state.gridMap.get(parentPath)!;
        const existing = new Set(grid.items.values());
        if (existing.has(index)) return;
        grid.items.set(path, index);
      });
    },
    getIndex: (path) => {
      validateGridChild(path);
      const parentPath = parseParentPath(path);
      return get().gridMap.get(parentPath)!.items.get(path)!;
    },
    getLineSize: (path) => {
      validateParentPath(path);
      return get().gridMap.get(path)!.lineSize;
    },
    getNumColumns: (path) => {
      validateParentPath(path);
      return get().gridMap.get(path)!.columns;
    },
    sort: (gridPath, order = 'asc') => {
      validateParentPath(gridPath);
      set((state) => {
        const grid = state.gridMap.get(gridPath)!;
        const items = [...grid.items.entries()];
        items.sort((a, b) => {
          if (order === 'asc') {
            return a[0].localeCompare(b[0]);
          }
          return b[0].localeCompare(a[0]);
        });
        const newItems = new Map(items.map(([path], index) => [path, index]));
        grid.items = newItems;
      });
    },
    updateSize: (path, width, height) => {
      validateParentPath(path);
      set((state) => {
        const grid = state.gridMap.get(path)!;
        grid.columns = Math.floor(width / GRID_CELL_SIZE);
        grid.rows = Math.floor(height / GRID_CELL_SIZE);
        grid.lineSize = grid.flow === 'row' ? grid.rows : grid.columns;
      });
    },
    getNextIndex: (parentPath) => {
      validateParentPath(parentPath);
      const items = new Set(get().gridMap.get(parentPath)!.items.values());
      let nextIndex = 0;
      while (items.has(nextIndex)) {
        nextIndex += 1;
      }
      return nextIndex;
    },
    gridIndexExists: (path, index) => {
      if (!index) return false;
      try {
        validateParentPath(path);
        const existing = new Set(get().gridMap.get(path)!.items.values());
        return existing.has(index);
      } catch {
        return false;
      }
    },
    reset: () => {
      set(() => ({
        gridMap: new Map<string, GridState>([
          [
            '/',
            newGridState({
              cellSize: GRID_CELL_SIZE,
              flow: 'col',
              childPaths: [],
            }),
          ],
        ]),
      }));
    },
  })),
);

function validateParentPath(path: string): void {
  const { gridMap } = useGridStore.getState();
  if (!gridMap.has(path)) {
    throw new Error(`Path ${path} does not exist in gridMap`);
  }
}

function validateGridChild(path: string): void {
  const { getItems } = useGridStore.getState();
  const parentPath = parseParentPath(path);
  validateParentPath(parentPath);
  const items = getItems(parentPath);
  if (!items.has(path)) {
    throw new Error(`Path ${path} does not exist in gridMap`);
  }
}

export default useGridStore;
