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
  appendParent: (finalPath: string) => void;
  setIndex: (path: string, index: number) => void;
  getIndex: (path: string) => number;
  getLineSize: (path: string) => number;
  getNumColumns: (path: string) => number;
  sort: (gridPath: string, order: 'asc' | 'desc') => void;
  updateSize: (path: string, width: number, height: number) => void;
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
    getItems: (path) => {
      validateParentPath(path);
      return get().gridMap.get(path)!.items;
    },
    appendParent: (finalPath) => {
      if (finalPath === '/') return;
      const parentPath = parseParentPath(finalPath);
      set((state) => {
        const grid = state.gridMap.get(parentPath)!;
        grid.items.set(finalPath, grid.items.size);
      });
    },
    setIndex: (path, index) => {
      validateGridChild(path);
      const parentPath = parseParentPath(path);
      set((state) => {
        const grid = state.gridMap.get(parentPath)!;
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
    sort: (gridPath, order) => {
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
