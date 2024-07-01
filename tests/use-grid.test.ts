import { renderHook, act } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';

describe('useGridStore', () => {
  const { result: fsResult } = renderHook(() => useFsStore());
  const { result } = renderHook(() => useGridStore());
  const store = result.current;
  const fs = fsResult.current;
  it('should initialize grid', () => {
    act(() => {
      const desktopGrid = store.getGrid('/Desktop');
      const desktopItems = fs.getChildPaths('/Desktop');
      expect([...desktopGrid.items.keys()]).toEqual(desktopItems);

      const rootGrid = store.getGrid('/');
      const rootItems = fs.getChildPaths('/');
      expect([...rootGrid.items.keys()]).toEqual(rootItems);
    });
  });

  it('Should create a new grid when a directory is created', () => {
    act(() => {
      fs.mkdir('/Desktop/New Folder');

      let desktopGrid = store.getGrid('/Desktop');
      let destopItems = fs.getChildPaths('/Desktop');
      expect([...desktopGrid.items.keys()]).toEqual(destopItems);

      fs.mkdir('/Desktop/New Folder 2');
      fs.touch('/Desktop/newFile.txt');
      desktopGrid = store.getGrid('/Desktop');
      destopItems = fs.getChildPaths('/Desktop');
      expect([...desktopGrid.items.keys()]).toEqual(destopItems);

      let folderGrid = store.getGrid('/Desktop/New Folder');
      let folderItems = fs.getChildPaths('/Desktop/New Folder');
      expect([...folderGrid.items.keys()]).toEqual(folderItems);

      fs.mkdir('/Desktop/New Folder/Another Folder');
      fs.touch('/Desktop/New Folder/newFile.txt');
      folderGrid = store.getGrid('/Desktop/New Folder');
      folderItems = fs.getChildPaths('/Desktop/New Folder');
      expect([...folderGrid.items.keys()]).toEqual(folderItems);

      fs.initDir(['/1', '/2', '/3', '/4', '/5']);
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/4', '/5']);
      const rootGrid = store.getGrid('/');
      expect([...rootGrid.items.values()]).toEqual([0, 1, 2, 3, 4]);
    });
  });

  it('Should set grid indeces sequentially by default', () => {
    act(() => {
      fs.initDir(['/Desktop/']);
      const paths = [...fs.getPaths()];
      expect(paths).toEqual(['/', '/Desktop']);
      fs.mkdir('/Desktop/1');
      fs.mkdir('/Desktop/2');
      fs.mkdir('/Desktop/3');
      fs.touch('/Desktop/4');
      fs.touch('/Desktop/5');

      const rootGrid = store.getGrid('/');
      expect([...rootGrid.items.values()]).toEqual([0]);
      const desktopGrid = store.getGrid('/Desktop');
      expect([...desktopGrid.items.values()]).toEqual([0, 1, 2, 3, 4]);
    });
  });

  it('Should be able to set a grid index for a given path', () => {
    act(() => {
      fs.initDir(['/1', '/2', '/3', '/4', '/5']);
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/4', '/5']);
      let rootGrid = store.getGrid('/');
      expect([...rootGrid.items.values()]).toEqual([0, 1, 2, 3, 4]);

      store.setIndex('/1', 10);
      store.setIndex('/2', 20);
      store.setIndex('/3', 30);
      store.setIndex('/4', 40);
      store.setIndex('/5', 50);
      rootGrid = store.getGrid('/');
      expect([...rootGrid.items.values()]).toEqual([10, 20, 30, 40, 50]);
    });
  });

  it('Should be able to sort grid items', () => {
    act(() => {
      fs.initDir(['/1', '/2', '/3', '/4', '/5']);
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/4', '/5']);
      let rootGrid = store.getGrid('/');
      expect([...rootGrid.items.keys()]).toEqual(['/1', '/2', '/3', '/4', '/5']);

      store.sort('/', 'desc');
      rootGrid = store.getGrid('/');
      expect([...rootGrid.items.keys()]).toEqual(['/5', '/4', '/3', '/2', '/1']);
      store.sort('/', 'asc');
      rootGrid = store.getGrid('/');
      expect([...rootGrid.items.keys()]).toEqual(['/1', '/2', '/3', '/4', '/5']);

      fs.initDir([
        '/Desktop/1',
        '/Desktop/zasdf',
        '/Desktop/3',
        '/Desktop/brownBroBeans',
        '/Desktop/abcdef',
      ]);
      expect([...fs.getPaths()]).toEqual([
        '/',
        '/Desktop',
        '/Desktop/1',
        '/Desktop/zasdf',
        '/Desktop/3',
        '/Desktop/brownBroBeans',
        '/Desktop/abcdef',
      ]);

      let desktopGrid = store.getGrid('/Desktop');
      expect([...desktopGrid.items.keys()]).toEqual([
        '/Desktop/1',
        '/Desktop/zasdf',
        '/Desktop/3',
        '/Desktop/brownBroBeans',
        '/Desktop/abcdef',
      ]);
      store.sort('/Desktop', 'asc');
      desktopGrid = store.getGrid('/Desktop');
      expect([...desktopGrid.items.keys()]).toEqual([
        '/Desktop/1',
        '/Desktop/3',
        '/Desktop/abcdef',
        '/Desktop/brownBroBeans',
        '/Desktop/zasdf',
      ]);
      store.sort('/Desktop', 'desc');
      desktopGrid = store.getGrid('/Desktop');
      expect([...desktopGrid.items.keys()]).toEqual([
        '/Desktop/zasdf',
        '/Desktop/brownBroBeans',
        '/Desktop/abcdef',
        '/Desktop/3',
        '/Desktop/1',
      ]);
    });
  });
});
