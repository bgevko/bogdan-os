import { it, expect, describe } from 'vitest';

import { parseFileExt, parseFileName, splitPath, parseParentPath } from '@/utils/fs';

const root = '/';
const path = '/path/to/file.app';
const folder = '/path/to/folder/';
const folder2 = '/path/to/folder';

describe('Fs Utils', () => {
  it('should return the file name', () => {
    const fileName = parseFileName(path);
    const folderName = parseFileName(folder);
    const folderName2 = parseFileName(folder2);
    const rootName = parseFileName(root);
    expect(fileName).toBe('file');
    expect(folderName).toBe('folder');
    expect(folderName2).toBe('folder');
    expect(rootName).toBe('');
  });

  it('should return the parent path', () => {
    const parentPath = parseParentPath(path);
    const parentFolder = parseParentPath(folder);
    const parentFolder2 = parseParentPath(folder2);
    const parentRoot = parseParentPath(root);
    expect(parentPath).toBe('/path/to');
    expect(parentFolder).toBe('/path/to');
    expect(parentFolder2).toBe('/path/to');
    expect(parentRoot).toBe('');

    let test = '/folder/';
    let res = parseParentPath(test);
    expect(res).toBe('/');
    test = '/folder';
    res = parseParentPath(test);
    expect(res).toBe('/');

    const other = '/Desktop/MyFolder/MyFile';
    res = parseParentPath(other);
    expect(res).toBe('/Desktop/MyFolder');
  });

  it('should return the file extension', () => {
    const ext = parseFileExt(path);
    const extFolder = parseFileExt(folder);
    const extFolder2 = parseFileExt(folder2);
    const extRoot = parseFileExt(root);

    expect(ext).toBe('app');
    expect(extFolder).toBe('');
    expect(extFolder2).toBe('');
    expect(extRoot).toBe('');
  });

  it('should return the file info', () => {
    let name = parseFileName(path);
    let ext = parseFileExt(path);
    expect(name).toBe('file');
    expect(ext).toBe('app');

    name = parseFileName('/');
    ext = parseFileExt('/');
    expect(name).toBe('');
    expect(ext).toBe('');
  });

  it('should correctly split a path into path components', () => {
    const components = splitPath(path);
    expect(components).toEqual(['/', 'path', 'to', 'file.app']);

    let test = '/folder/';
    expect(splitPath(test)).toEqual(['/', 'folder']);
    test = '/folder';
    expect(splitPath(test)).toEqual(['/', 'folder']);
    test = '/';
    expect(splitPath(test)).toEqual(['/']);
    test = '';
    expect(splitPath(test)).toEqual(['/']);
    test = 'folder';
    expect(splitPath(test)).toEqual(['/', 'folder']);
    test = 'folder/';
    expect(splitPath(test)).toEqual(['/', 'folder']);
    test = 'folder/file.txt';
    expect(splitPath(test)).toEqual(['/', 'folder', 'file.txt']);
    test = '1/2/3/4/5/6/7/8/9/10';
    expect(splitPath(test)).toEqual(['/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  });
});
