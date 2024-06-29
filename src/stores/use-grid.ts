/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import useFsStore from '@/stores/use-fs-store';
import { TASKBAR_HEIGHT } from '@/themes';

enableMapSet();

const validatePath = (path: string): void => {
  const state = useFsStore.getState();
  state.validatePath(path);
};

const getChildPaths = (path: string): string[] => {
  const state = useFsStore.getState();
  state.validatePath(path);
  return state.getChildPaths(path);
};

interface GridState {
  columns: number;
  rows: number;
  flow: 'row' | 'col';
  lineSize: number;
  items: string[];
}

interface GridSystem {
  gridMap: Map<string, GridState>;
}

interface GridOptions {
  path: string;
  parentWidth: number;
  parentHeight: number;
  cellSize: number;
  flow: 'row' | 'col';
}

interface GridActions {
  getGrid: (path: string) => GridState;
  setGrid: (path: string, rows: number, columns: number) => void;
  getItems: (path: string) => string[];
  createGrid: (path: string, options: GridOptions) => void;
}

function newState(options: GridOptions): GridState {
  const { parentWidth, parentHeight, cellSize, path } = options;
  const rows = Math.floor(parentHeight / cellSize);
  const columns = Math.floor(parentWidth / cellSize);
  const items = getChildPaths(path);

  // Any sort logic can be applied to items here

  return {
    rows,
    columns,
    flow: options.flow,
    lineSize: options.flow === 'row' ? rows : columns,
    items,
  };
}

// const useGrid = create<GridSystem & GridActions>(() => ({
const useGrid = create<GridSystem & GridActions>()(
  immer((set, get) => ({
    gridMap: new Map<string, GridState>([
      [
        '/Desktop',
        newState({
          path: '/Desktop',
          parentWidth: window.innerWidth,
          parentHeight: window.innerHeight - TASKBAR_HEIGHT,
          cellSize: 100,
          flow: 'row',
        }),
      ],
    ]),
    getGrid: (path) => {
      validatePath(path);
      return get().gridMap.get(path)!;
    },
    setGrid: (path, rows, columns) => {
      set((state) => {
        validatePath(path);
        const grid = state.gridMap.get(path)!;
        grid.rows = rows;
        grid.columns = columns;
      });
    },
    createGrid: (path, options) => {
      set((state) => {
        state.gridMap.set(path, newState(options));
      });
    },
    getItems: (path) => {
      validatePath(path);
      return get().gridMap.get(path)!.items;
    },
  })),
);

export default useGrid;
