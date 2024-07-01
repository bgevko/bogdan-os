import { renderHook, act } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import { iconsPath } from '@/constants';
import useFsStore from '@/stores/use-fs-store';

beforeEach(() => {
  const { result } = renderHook(() => useFsStore());
  const fs = result.current;
  act(() => {
    expect(fs).toBeDefined();
    fs.initDir();
    const paths = [...fs.getPaths()];
    expect(paths).toEqual(['/']);
  });
});

describe('useFsStore', () => {
  const { result } = renderHook(() => useFsStore());
  const fs = result.current;
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

  it('it should set the folder icon correctly', () => {
    act(() => {
      fs.initDir();
      expect(fs.getNode('/').icon).toBe(`${iconsPath}/folder.png`);

      fs.mkdir('/test');
      expect(fs.getNode('/test').icon).toBe(`${iconsPath}/folder.png`);

      fs.mkdir('/test/1/2/3');
      expect(fs.getNode('/test/1').icon).toBe(`${iconsPath}/folder.png`);
      expect(fs.getNode('/test/1/2').icon).toBe(`${iconsPath}/folder.png`);
      expect(fs.getNode('/test/1/2/3').icon).toBe(`${iconsPath}/folder.png`);

      fs.touch('/test.app');
      expect(fs.getNode('/test.app').icon).toBe(`${iconsPath}/executable.png`);

      fs.touch('/test/1/2/3.app');
      expect(fs.getNode('/test').icon).toBe(`${iconsPath}/folder.png`);
      expect(fs.getNode('/test/1').icon).toBe(`${iconsPath}/folder.png`);
      expect(fs.getNode('/test/1/2').icon).toBe(`${iconsPath}/folder.png`);
      expect(fs.getNode('/test/1/2/3.app').icon).toBe(`${iconsPath}/executable.png`);

      fs.initDir();
      fs.touch('/1.app/2/3');
      expect(fs.getNode('/1.app').icon).toBe(`${iconsPath}/folder.png`);
      expect(fs.getNode('/1.app/2').icon).toBe(`${iconsPath}/folder.png`);
      expect(fs.getNode('/1.app/2/3').icon).toBe(`${iconsPath}/default.png`);
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
});
