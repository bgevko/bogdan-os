import { renderHook, act } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import useFsStore from '@/stores/use-fs-store';
import { getChildPathsDeep } from '@/stores/use-fs-store/fs-helpers';
import useGridStore from '@/stores/use-grid-store';
import useProcessesStore from '@/stores/use-processes-store';
// import useProcessesStore from '@/stores/use-processes-store';

beforeEach(() => {
  const { result } = renderHook(() => useFsStore());
  const fs = result.current;
  act(() => {
    expect(fs).toBeDefined();
    fs.initDir();
    const paths = [...fs.getPaths()];
    expect([...fs.getDir().keys()]).toEqual(['/']);
    expect(paths).toEqual(['/']);
  });
});

describe('useFsStore', () => {
  const { result } = renderHook(() => useFsStore());
  const fs = result.current;
  it('should init correctly', () => {
    act(() => {
      fs.initDir();
      fs.initDir(['/Desktop/myFile.txt', '/Desktop/MyFolder/1', '/Desktop/MyFolder/2']);
      expect([...fs.getPaths()]).toEqual([
        '/',
        '/Desktop',
        '/Desktop/myFile.txt',
        '/Desktop/MyFolder',
        '/Desktop/MyFolder/1',
        '/Desktop/MyFolder/2',
      ]);
      fs.initDir(['1', '2', '3', '4', '5']);
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/4', '/5']);
    });
  });
  it('should be able to create a directory with mkdir', () => {
    act(() => {
      fs.mkdir('/test');
      const paths = [...fs.getPaths()];
      expect(paths).toEqual(['/', '/test']);
      fs.mkdir('/test2');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test2']);
      fs.mkdir('/test2/');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test2']);
      fs.mkdir('');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test2']);
      fs.mkdir('/');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test2']);
    });
  });

  it('should be able to create chain of directories with mkdir', () => {
    act(() => {
      fs.mkdir('/test/test2');
      const paths = [...fs.getPaths()];
      expect(paths).toEqual(['/', '/test', '/test/test2']);
      fs.initDir();
      fs.mkdir('/1/2/3/4/5');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/1/2', '/1/2/3', '/1/2/3/4', '/1/2/3/4/5']);
      fs.mkdir('/test/test2');
      expect([...fs.getPaths()]).toEqual([
        '/',
        '/1',
        '/1/2',
        '/1/2/3',
        '/1/2/3/4',
        '/1/2/3/4/5',
        '/test',
        '/test/test2',
      ]);
      fs.initDir();
      fs.mkdir('1');
      expect([...fs.getPaths()]).toEqual(['/', '/1']);
      fs.initDir();
      fs.mkdir('1/2/3');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/1/2', '/1/2/3']);

      fs.initDir();
      fs.mkdir('/1/2/');
      fs.mkdir('1/3/');
      fs.mkdir('1/4');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/1/2', '/1/3', '/1/4']);

      fs.initDir();
      fs.mkdir('1/hello.txt/3');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/1/hello.txt', '/1/hello.txt/3']);

      fs.initDir();
      fs.mkdir('/1/2/');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/1/2']);
    });
  });

  it('should be able to create a file with touch', () => {
    act(() => {
      fs.initDir();
      fs.touch('/test.txt');
      const paths = [...fs.getPaths()];
      expect(paths).toEqual(['/', '/test.txt']);
      fs.touch('/test2.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/test.txt', '/test2.txt']);

      // should throw error
      expect(() => {
        fs.touch('/test3.txt/');
      }).toThrowError();

      fs.initDir();
      fs.touch('/test.app');
      expect([...fs.getPaths()]).toEqual(['/', '/test.app']);
    });
  });

  it('should be able to create chain of directories, leading to the file with touch', () => {
    act(() => {
      fs.initDir();
      fs.touch('/test/test2.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test/test2.txt']);

      expect(() => {
        fs.touch('/test/test2.txt/');
      }).toThrowError();
    });
  });

  it('it should throw an error when trying to touch onto an existing path', () => {
    act(() => {
      fs.initDir();
      fs.mkdir('/test');
      expect(() => {
        fs.touch('/test');
      }).toThrowError();

      fs.mkdir('/my/nested/test');
      expect(() => {
        fs.touch('/my');
      }).toThrowError();
      expect(() => {
        fs.touch('/my/nested');
      }).toThrowError();
      expect(() => {
        fs.touch('/my/nested/test');
      }).toThrowError();
    });
  });

  it('should set isDir correctly when using mkdir and touch', () => {
    act(() => {
      fs.initDir();
      expect(fs.isDir('/')).toBe(true);
      fs.mkdir('/test');
      expect(fs.isDir('/test')).toBe(true);
      fs.mkdir('/test/1/2/3');
      expect(fs.isDir('/test/1')).toBe(true);
      expect(fs.isDir('/test/1/2')).toBe(true);
      expect(fs.isDir('/test/1/2/3')).toBe(true);

      fs.touch('/test.txt');
      expect(fs.isDir('/test.txt')).toBe(false);
      fs.touch('/test/1/2/3.txt');
      expect(fs.isDir('/test')).toBe(true);
      expect(fs.isDir('/test/1')).toBe(true);
      expect(fs.isDir('/test/1/2')).toBe(true);
      expect(fs.isDir('/test/1/2/3.txt')).toBe(false);

      fs.initDir();
      fs.touch('/1.txt/2/3');
      expect(fs.isDir('/1.txt')).toBe(true);
      expect(fs.isDir('/1.txt/2')).toBe(true);
      expect(fs.isDir('/1.txt/2/3')).toBe(false);

      fs.initDir();
      fs.mkdir('/1/2/3/');
      expect(fs.isDir('/1')).toBe(true);
      expect(fs.isDir('/1/2')).toBe(true);
      expect(fs.isDir('/1/2/3')).toBe(true);
    });
  });

  it('should be able to initialize a directory with initDir', () => {
    const customDir = ['/', '/Desktop/MyFolder/', '/Documents/'];
    act(() => {
      fs.initDir(customDir);
      const paths = [...fs.getPaths()];
      expect(paths).toEqual(['/', '/Desktop', '/Desktop/MyFolder', '/Documents']);
      fs.initDir();
      expect([...fs.getPaths()]).toEqual(['/']);

      fs.initDir(['/test.app', '/file', '/folder/']);
      expect([...fs.getPaths()]).toEqual(['/', '/test.app', '/file', '/folder']);
    });
  });

  it('should correctly set files and folders with initDir', () => {
    act(() => {
      const customDir = [
        '/',
        '/Desktop/',
        '/Desktop/MyFolder/1',
        '/Desktop/MyFolder/2',
        '/Desktop/MyFolder/3',
        '/Desktop/MyFile',
        '/Documents/',
      ];

      fs.initDir(customDir);
      expect(fs.isDir('/')).toBe(true);
      expect(fs.isDir('/Desktop')).toBe(true);
      expect(fs.isDir('/Desktop/MyFolder')).toBe(true);
      expect(fs.isDir('/Desktop/MyFolder/1')).toBe(false);
      expect(fs.isDir('/Desktop/MyFolder/2')).toBe(false);
      expect(fs.isDir('/Desktop/MyFolder/3')).toBe(false);
      expect(fs.isDir('/Desktop/MyFile')).toBe(false);
      expect(fs.isDir('/Documents')).toBe(true);
    });
  });

  it('should get children nodes correctly', () => {
    act(() => {
      const dirSource = [
        '/',
        '/Desktop/MyFolder/',
        '/Desktop/MyFolder/1',
        '/Desktop/MyFolder/2',
        '/Desktop/MyFolder/3',
        '/Desktop/MyFile',
        '/Documents/',
      ];
      fs.initDir(dirSource);

      const rootChildren = [...fs.getChildren('/')];
      const rootChildrenPaths = rootChildren.map((node) => node.path);
      expect(rootChildrenPaths).toEqual(['/Desktop', '/Documents']);

      const desktopChildren = [...fs.getChildren('/Desktop')];
      const desktopChildrenPaths = desktopChildren.map((node) => node.path);
      expect(desktopChildrenPaths).toEqual(['/Desktop/MyFolder', '/Desktop/MyFile']);

      const myFolderChildren = [...fs.getChildren('/Desktop/MyFolder')];
      const myFolderChildrenPaths = myFolderChildren.map((node) => node.path);
      expect(myFolderChildrenPaths).toEqual([
        '/Desktop/MyFolder/1',
        '/Desktop/MyFolder/2',
        '/Desktop/MyFolder/3',
      ]);

      const myFileChildren = [...fs.getChildren('/Desktop/MyFile')];
      expect(myFileChildren).toEqual([]);
    });
  });

  it('should get deep child paths correctly', () => {
    act(() => {
      fs.initDir();
      expect([...fs.getPaths()]).toEqual(['/']);
      fs.mkdir('/test/1/2/3');
      let dir = fs.getDir();
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test/1', '/test/1/2', '/test/1/2/3']);
      expect(getChildPathsDeep(dir, '/')).toEqual(['/test', '/test/1', '/test/1/2', '/test/1/2/3']);
      expect(getChildPathsDeep(dir, '/test')).toEqual(['/test/1', '/test/1/2', '/test/1/2/3']);
      expect(getChildPathsDeep(dir, '/test/1')).toEqual(['/test/1/2', '/test/1/2/3']);
      expect(getChildPathsDeep(dir, '/test/1/2')).toEqual(['/test/1/2/3']);
      expect(getChildPathsDeep(dir, '/test/1/2/3')).toEqual([]);

      fs.initDir();
      fs.mkdir('/test/1/2/3');
      fs.mkdir('/test2/1/2/3');
      fs.mkdir('/test3/1/2/3');
      dir = fs.getDir();
      expect(getChildPathsDeep(dir, '/')).toEqual([
        '/test',
        '/test/1',
        '/test/1/2',
        '/test/1/2/3',
        '/test2',
        '/test2/1',
        '/test2/1/2',
        '/test2/1/2/3',
        '/test3',
        '/test3/1',
        '/test3/1/2',
        '/test3/1/2/3',
      ]);

      fs.initDir();
      fs.mkdir('/test/1/2/3');
      fs.mkdir('/test/1/4/5');
      dir = fs.getDir();
      expect(getChildPathsDeep(dir, '/')).toEqual([
        '/test',
        '/test/1',
        '/test/1/2',
        '/test/1/2/3',
        '/test/1/4',
        '/test/1/4/5',
      ]);
      expect(getChildPathsDeep(dir, '/test')).toEqual([
        '/test/1',
        '/test/1/2',
        '/test/1/2/3',
        '/test/1/4',
        '/test/1/4/5',
      ]);
    });
  });
  it('should remove a file with rm', () => {
    act(() => {
      fs.initDir();
      fs.touch('/test.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/test.txt']);
      expect(fs.getChildPaths('/')).toEqual(['/test.txt']);

      fs.rm('/test.txt');
      expect([...fs.getPaths()]).toEqual(['/']);
      expect(fs.getChildPaths('/')).toEqual([]);
    });
  });

  it('should throw an error if attempting to rm with constraint options set', () => {
    act(() => {
      fs.initDir();
      fs.mkdir('/test/hi.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test/hi.txt']);

      expect(() => {
        fs.rm('/test', { filesOnly: true });
      }).toThrowError();

      expect(() => {
        fs.rm('/test', { emptyDirsOnly: true });
      }).toThrowError();
    });
  });

  it('should remove a directory with rm', () => {
    act(() => {
      fs.initDir();
      fs.mkdir('/test/1/2/3');
      fs.mkdir('/test/1/2/4');
      fs.mkdir('/test2');

      expect([...fs.getPaths()]).toEqual([
        '/',
        '/test',
        '/test/1',
        '/test/1/2',
        '/test/1/2/3',
        '/test/1/2/4',
        '/test2',
      ]);

      fs.rm('test2');
      expect([...fs.getPaths()]).toEqual([
        '/',
        '/test',
        '/test/1',
        '/test/1/2',
        '/test/1/2/3',
        '/test/1/2/4',
      ]);

      fs.rm('/test/1/2');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test/1']);

      fs.rm('/test');
      expect([...fs.getPaths()]).toEqual(['/']);
    });
  });
});

describe('useFsStore - mv function', () => {
  const { result } = renderHook(() => useFsStore());
  const fs = result.current;

  it('should move a file or empty directory in the same directory', () => {
    act(() => {
      fs.initDir();
      fs.touch('/file.txt');
      fs.mv('/file.txt', '/newfile.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/newfile.txt']);
      expect(fs.getNode('/newfile.txt')).toBeDefined();
      expect(() => fs.getNode('/file.txt')).toThrowError();

      fs.mkdir('/test');
      fs.mv('/test', '/test2');
      expect([...fs.getPaths()]).toEqual(['/', '/newfile.txt', '/test2']);
      expect(fs.getNode('/test2')).toBeDefined();
      expect(() => fs.getNode('/test')).toThrowError();
    });
  });
  it('should move a file or empty directory to a different directory', () => {
    act(() => {
      fs.initDir();
      fs.touch('/file.txt');
      fs.mkdir('/test');
      fs.mv('/file.txt', '/test/file.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test/file.txt']);
      expect(fs.getNode('/test/file.txt')).toBeDefined();
      expect(() => fs.getNode('/file.txt')).toThrowError();

      fs.mkdir('/test2');
      fs.mv('/test2', '/test/test2');
      expect([...fs.getPaths()]).toEqual(['/', '/test', '/test/file.txt', '/test/test2']);
      expect(fs.getNode('/test/test2')).toBeDefined();
      expect(() => fs.getNode('/test2')).toThrowError();

      fs.initDir(['/1', '/2', '/3', '/4', '/folder/']);
      fs.mv('/1', '/folder/1');
    });
  });

  it('should move a non-empty directory correctly', () => {
    act(() => {
      fs.initDir();
      fs.mkdir('/test/1');
      fs.mv('/test', '/test2');
      expect([...fs.getPaths()]).toEqual(['/', '/test2', '/test2/1']);

      fs.initDir();
      fs.mkdir('/1/2/3/4/5/');
      fs.mv('/1', '/2');
      expect([...fs.getPaths()]).toEqual(['/', '/2', '/2/2', '/2/2/3', '/2/2/3/4', '/2/2/3/4/5']);
      fs.mv('/2', '/1');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/1/2', '/1/2/3', '/1/2/3/4', '/1/2/3/4/5']);
      fs.mv('/1/2', '/2');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/2/3', '/2/3/4', '/2/3/4/5']);
      fs.mv('/2/3', '/3');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/3/4', '/3/4/5']);
      fs.mv('/3/4', '/4');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/4', '/4/5']);
      fs.mv('/4/5', '/5');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/4', '/5']);

      fs.mv('/5', '/4/5');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/4', '/4/5']);
      fs.mv('/4', '/3/4');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/3', '/3/4', '/3/4/5']);
      fs.mv('/3', '/2/3');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/2', '/2/3', '/2/3/4', '/2/3/4/5']);
      fs.mv('/2', '/1/2');
      expect([...fs.getPaths()]).toEqual(['/', '/1', '/1/2', '/1/2/3', '/1/2/3/4', '/1/2/3/4/5']);
    });
  });
});

describe('useFsStore - move and delete side effects', () => {
  const { result } = renderHook(() => useFsStore());
  const fs = result.current;
  const { result: resultProcesses } = renderHook(() => useProcessesStore());
  const pr = resultProcesses.current;
  const { result: resultGrid } = renderHook(() => useGridStore());
  const grid = resultGrid.current;

  it('should update an opened processs when moving(renaming) a file', () => {
    act(() => {
      fs.initDir(['myFile.txt']);
      expect([...fs.getPaths()]).toEqual(['/', '/myFile.txt']);
      pr.openProcess('/myFile.txt');
      expect(pr.getOpenedPaths()).toEqual(['/myFile.txt']);
      expect([...grid.getItems('/').keys()]).toEqual(['/myFile.txt']);

      fs.mv('/myFile.txt', '/myFile2.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/myFile2.txt']);
      expect(pr.getOpenedPaths()).toEqual(['/myFile2.txt']);
      expect([...grid.getItems('/').keys()]).toEqual(['/myFile2.txt']);
      expect(() => fs.getNode('/myFile.txt')).toThrowError();

      pr.closeProcess('/myFile2.txt');
      expect(pr.getOpenedPaths()).toEqual([]);

      fs.mv('/myFile2.txt', '/myFile.txt');
      expect([...fs.getPaths()]).toEqual(['/', '/myFile.txt']);
      expect([...grid.getItems('/').keys()]).toEqual(['/myFile.txt']);
      expect(() => fs.getNode('/myFile2.txt')).toThrowError();
      pr.openProcess('/myFile.txt');
      expect(pr.getOpenedPaths()).toEqual(['/myFile.txt']);
    });
  });

  it('should update the grid store when adding / deleting a file', () => {
    act(() => {
      fs.initDir();
      fs.touch('/file.txt');
      fs.touch('/file2.txt');
      let rootChildren = [...fs.getChildPaths('/')];
      let gridItems = [...grid.getItems('/').keys()];
      expect(rootChildren).toEqual(gridItems);
      fs.rm('/file.txt');
      rootChildren = [...fs.getChildPaths('/')];
      gridItems = [...grid.getItems('/').keys()];
      expect(rootChildren).toEqual(gridItems);
      fs.rm('/file2.txt');
      rootChildren = [...fs.getChildPaths('/')];
      gridItems = [...grid.getItems('/').keys()];
      expect(rootChildren).toEqual(gridItems);

      fs.mkdir('/test');
      fs.touch('/test/file.txt');
      fs.touch('/test/file2.txt');
      rootChildren = [...fs.getChildPaths('/')];
      gridItems = [...grid.getItems('/').keys()];
      expect(rootChildren).toEqual(gridItems);

      fs.rm('/test/file.txt');
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);

      fs.rm('/test');
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);

      fs.initDir();
      fs.mkdir('/test/1/2/3');
      fs.touch('/test/1/2/3/file.txt');
      fs.touch('/test/1/2/3/file2.txt');
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);
      fs.rm('/test/1/2/3/file.txt');
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);
      fs.rm('/test/1/2/3');
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);
      fs.rm('/test');
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);
    });
  });

  it('should also initiate the grid correctly when initDir is called', () => {
    act(() => {
      fs.initDir(['/Desktop/myFile.txt', '/Desktop/MyFolder/1', '/Desktop/MyFolder/2']);
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);
      fs.initDir(['/1', '/2', '/3', '/4', '/5/6/7/8/9']);
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);
      expect([...fs.getChildPaths('/5')]).toEqual([...grid.getItems('/5').keys()]);
    });
  });

  it('should also move / rename the grid items when mv is called', () => {
    act(() => {
      fs.initDir(['/Desktop/myFile.txt', '/Desktop/MyFolder/1', '/Desktop/MyFolder/2']);
      expect([...fs.getChildPaths('/Desktop')]).toEqual([...grid.getItems('/Desktop').keys()]);
      fs.mv('/Desktop/myFile.txt', '/Desktop/MyFolder/myFile.txt');
      expect([...fs.getChildPaths('/Desktop')]).toEqual([...grid.getItems('/Desktop').keys()]);
      expect([...fs.getChildPaths('/Desktop/MyFolder')]).toEqual([
        ...grid.getItems('/Desktop/MyFolder').keys(),
      ]);
      fs.mv('/Desktop/MyFolder', '/Desktop/MyFolder2');
      expect([...fs.getChildPaths('/Desktop')]).toEqual([...grid.getItems('/Desktop').keys()]);
      fs.mv('/Desktop/MyFolder2/1', '/Desktop/1');
      fs.mv('/Desktop/MyFolder2/2', '/Desktop/2');
      fs.mv('/Desktop/MyFolder2/myFile.txt', '/Desktop/myFile.txt');
      fs.rm('/Desktop/MyFolder2');
      expect([...fs.getChildPaths('/Desktop')]).toEqual([...grid.getItems('/Desktop').keys()]);
      expect([...fs.getChildPaths('/')]).toEqual([...grid.getItems('/').keys()]);
    });
  });

  it.only('should transfer items with similar names correctly correctly', () => {
    act(() => {
      fs.initDir(['/Desktop/MyFile2', '/Desktop/MyFile', '/Desktop/MyFolder/']);
      fs.mv('/Desktop/MyFile', '/Desktop/MyFolder/MyFile');
      let dirs = fs.getDirList();
      expect(dirs).toEqual([
        '/',
        '/Desktop',
        '/Desktop/MyFile2',
        '/Desktop/MyFolder',
        '/Desktop/MyFolder/MyFile',
      ]);

      fs.initDir(['/Desktop/MyFile2', '/Desktop/MyFile', '/Desktop/MyFolder/']);
      fs.mv('/Desktop/MyFile2', '/Desktop/MyFolder/MyFile2');
      dirs = fs.getDirList();
      expect(dirs).toEqual([
        '/',
        '/Desktop',
        '/Desktop/MyFile',
        '/Desktop/MyFolder',
        '/Desktop/MyFolder/MyFile2',
      ]);
      fs.mv('/Desktop/MyFolder/MyFile2', '/Desktop/MyFile2');
      dirs = fs.getDirList();
      expect(dirs).toEqual([
        '/',
        '/Desktop',
        '/Desktop/MyFile',
        '/Desktop/MyFolder',
        '/Desktop/MyFile2',
      ]);
    });
  });
});
