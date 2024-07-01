import { GridOptions, GridState } from '@/types';

function newGridState(options: GridOptions): GridState {
  const { parentWidth, parentHeight, cellSize, childPaths } = options;
  const rows = Math.floor(parentHeight / cellSize);
  const columns = Math.floor(parentWidth / cellSize);
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
