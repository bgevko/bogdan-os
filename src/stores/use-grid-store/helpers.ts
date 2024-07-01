import { TASKBAR_HEIGHT } from '@/themes';
import { GridOptions, GridState } from '@/types';

function newGridState(options: GridOptions): GridState {
  const { cellSize, childPaths } = options;
  const rows = Math.floor((window.innerHeight - TASKBAR_HEIGHT) / cellSize);
  const columns = Math.floor(window.innerWidth / cellSize);
  const items = new Map<string, number>();

  // Any sort logic can be applied to items here
  for (const [i, childPath] of childPaths.entries()) {
    items.set(childPath, i);
  }

  return {
    rows,
    columns,
    flow: options.flow,
    lineSize: options.flow === 'row' ? rows : columns,
    items,
  };
}

export default newGridState;
