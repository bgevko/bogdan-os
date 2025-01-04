import { renderHook, act } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import useFileSystemStore from '@/system/file-system/store';

describe('useFileSystemStore', () => {
  const { result } = renderHook(() => useFileSystemStore());
  const store = result.current;
  /*
   ********************************
   *             init             *
   ********************************
   */
  it('should init correctly', () => {
    act(() => {
      store.resetForTest();
      expect(store).toBeDefined();
      expect(store.getRoot()).toBeDefined();
      expect(store.getLookup()).toEqual(new Map());
    });
  });

  /*
   ********************************
   *     Create File/Directory    *
   ********************************
   */
  it('should create a new file/folder', () => {
    act(() => {
      // Files
      const file1Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      });
      expect(file1Id).toBeDefined();
      let children = store.getChildren('root');
      expect(children).toHaveLength(1);

      const file2Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file2',
        extension: 'txt',
        content: 'Hello World2',
      });
      expect(file2Id).toBeDefined();
      children = store.getChildren('root');
      expect(children).toHaveLength(2);

      // Single folder
      const folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });
      expect(folder1Id).toBeDefined();
      children = store.getChildren('root');
      expect(children).toHaveLength(3);
    });
  });

  it('should create a nested folder', () => {
    act(() => {
      // One level
      store.resetForTest();
      const folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });
      const folder2Id = store.createEntry({
        parentId: store.getId('folder1')!,
        type: 'directory',
        name: 'folder2',
      });
      expect(store.getAllIds()).toHaveLength(2);
      let folder1children = store.getChildren(folder1Id!);
      expect(folder1children).toHaveLength(1);
      expect(folder1children[0]).toEqual(folder2Id);

      // Two levels
      const folder3Id = store.createEntry({
        parentId: store.getId('folder2')!,
        type: 'directory',
        name: 'folder3',
      });
      expect(store.getAllIds()).toHaveLength(3);
      const folder2children = store.getChildren(folder2Id!);
      folder1children = store.getChildren(folder1Id!);
      expect(folder1children).toHaveLength(1);
      expect(folder2children).toHaveLength(1);
      expect(folder2children[0]).toEqual(folder3Id);

      // Three levels
      const folder4Id = store.createEntry({
        parentId: store.getId('folder3')!,
        type: 'directory',
        name: 'folder4',
      });
      expect(store.getAllIds()).toHaveLength(4);
      const folder3children = store.getChildren(folder3Id!);
      expect(folder3children).toHaveLength(1);
      expect(folder3children[0]).toEqual(folder4Id);
    });
  });
  /*
   ********************************
   *         Delete Entry         *
   ********************************
   */
  it('should delete an entry', () => {
    act(() => {
      store.resetForTest();
      // Individual files/folders on root level
      let file1Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      });
      let folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });

      expect(store.getAllIds()).toHaveLength(2);
      expect(store.getChildren('root')).toHaveLength(2);
      store.deleteEntry(file1Id!);
      expect(store.getAllIds()).toHaveLength(1);
      expect(store.getChildren('root')).toHaveLength(1);
      store.deleteEntry(folder1Id!);
      expect(store.getAllIds()).toHaveLength(0);
      expect(store.getChildren('root')).toHaveLength(0);

      // Individual files in a folder
      folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });

      file1Id = store.createEntry({
        parentId: folder1Id!,
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      });

      const file2Id = store.createEntry({
        parentId: folder1Id!,
        type: 'file',
        name: 'file2',
        extension: 'txt',
        content: 'Hello World',
      });

      const folder1Children = store.getChildren(folder1Id!);
      expect(store.getAllIds()).toHaveLength(3);
      expect(store.getChildren('root')).toHaveLength(1);
      expect(folder1Children).toHaveLength(2);

      store.deleteEntry(file1Id!);
      expect(store.getAllIds()).toHaveLength(2);
      expect(store.getChildren('root')).toHaveLength(1);
      expect(store.getChildren(folder1Id!)).toHaveLength(1);
      store.deleteEntry(file2Id!);
      expect(store.getAllIds()).toHaveLength(1);
      expect(store.getChildren('root')).toHaveLength(1);
      expect(store.getChildren(folder1Id!)).toHaveLength(0);

      // Deleting a nested folder
      let folder2Id = store.createEntry({
        parentId: folder1Id!,
        type: 'directory',
        name: 'folder2',
      });
      let folder3Id = store.createEntry({
        parentId: folder2Id!,
        type: 'directory',
        name: 'folder3',
      });
      let folder4Id = store.createEntry({
        parentId: folder3Id!,
        type: 'directory',
        name: 'folder4',
      });

      // Deleting folder 4
      store.deleteEntry(folder4Id!);
      expect(store.getChildren(folder3Id!)).toHaveLength(0);
      expect(store.getChildren(folder2Id!)).toHaveLength(1);
      expect(store.getChildren(folder1Id!)).toHaveLength(1);
      expect(store.getChildren('root')).toHaveLength(1);
      expect(store.getAllIds()).toHaveLength(3);

      // Deleting folder 2 (should delete folder 3 as well)
      store.deleteEntry(folder2Id!);
      expect(store.getChildren(folder1Id!)).toHaveLength(0);
      expect(store.getAllIds()).toHaveLength(1);
      expect(store.getChildren('root')).toHaveLength(1);

      // Add folder 2, 3, and 4 again
      folder2Id = store.createEntry({
        parentId: folder1Id!,
        type: 'directory',
        name: 'folder2',
      });
      folder3Id = store.createEntry({
        parentId: folder2Id!,
        type: 'directory',
        name: 'folder3',
      });
      folder4Id = store.createEntry({
        parentId: folder3Id!,
        type: 'directory',
        name: 'folder4',
      });
      const folder2fileId = store.createEntry({
        parentId: folder2Id!,
        type: 'file',
        name: 'folder2file',
        extension: 'txt',
        content: 'Hello World',
      });
      const folder2folder2Id = store.createEntry({
        parentId: folder2Id!,
        type: 'directory',
        name: 'folder2folder2',
      });
      const folder2EmptyFolder = store.createEntry({
        parentId: folder2Id!,
        type: 'directory',
        name: 'folder2EmptyFolder',
      });
      const folder3fileId = store.createEntry({
        parentId: folder3Id!,
        type: 'file',
        name: 'folder3file',
        extension: 'txt',
        content: 'Hello World',
      });
      const folder4fileId = store.createEntry({
        parentId: folder4Id!,
        type: 'file',
        name: 'folder4file',
        extension: 'txt',
        content: 'Hello World',
      });

      store.deleteEntry(folder4fileId!);
      expect(store.getChildren(folder4Id!)).toHaveLength(0);
      store.deleteEntry(folder3fileId!);
      expect(store.getChildren(folder3Id!)).toHaveLength(1);
      store.deleteEntry(folder2fileId!);
      expect(store.getChildren(folder2Id!)).toHaveLength(3);
      expect(store.getAllIds()).toHaveLength(6);
      store.deleteEntry(folder2EmptyFolder!);
      expect(store.getChildren(folder2Id!)).toHaveLength(2);
      expect(store.getAllIds()).toHaveLength(5);
      store.deleteEntry(folder2folder2Id!);
      expect(store.getChildren(folder2Id!)).toHaveLength(1);
      expect(store.getAllIds()).toHaveLength(4);
      store.deleteEntry(folder1Id!);
      expect(store.getAllIds()).toHaveLength(0);
    });
  });

  /*
   ********************************
   *            Rename            *
   ********************************
   */
  it('should rename an entry', () => {
    act(() => {
      store.resetForTest();
      const file1Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      });
      let folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });
      store.renameEntry(file1Id!, 'file1-renamed');
      expect(store.getName(file1Id!)).toEqual('file1-renamed');
      store.renameEntry(folder1Id!, 'folder1-renamed');
      expect(store.getName(folder1Id!)).toEqual('folder1-renamed');

      // Nested folders
      store.resetForTest();
      folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });
      const folder2Id = store.createEntry({
        parentId: folder1Id!,
        type: 'directory',
        name: 'folder2',
      });
      const folder3Id = store.createEntry({
        parentId: folder2Id!,
        type: 'directory',
        name: 'folder3',
      });
      const folder4Id = store.createEntry({
        parentId: folder3Id!,
        type: 'directory',
        name: 'folder4',
      });
      store.renameEntry(folder1Id!, 'folder1-renamed');
      expect(store.getName(folder1Id!)).toEqual('folder1-renamed');
      store.renameEntry(folder2Id!, 'folder2-renamed');
      expect(store.getName(folder2Id!)).toEqual('folder2-renamed');
      store.renameEntry(folder3Id!, 'folder3-renamed');
      expect(store.getName(folder3Id!)).toEqual('folder3-renamed');
      store.renameEntry(folder4Id!, 'folder4-renamed');
      expect(store.getName(folder4Id!)).toEqual('folder4-renamed');
    });
  });
  /*
   ********************************
   *          Move Entry          *
   ********************************
   */
  it('should move an entry', () => {
    act(() => {
      store.resetForTest();
      const folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });
      const folder2Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder2',
      });
      const file1Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      });
      const file2Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file2',
        extension: 'txt',
        content: 'Hello World',
      });

      expect(store.getChildren(folder1Id!)).toHaveLength(0);
      expect(store.getParentId(file1Id!)).toEqual('root');
      expect(store.getChildren('root')).toHaveLength(4);

      store.moveEntry(file1Id!, folder1Id!);
      expect(store.getChildren('root')).toHaveLength(3);
      expect(store.getChildren(folder1Id!)).toHaveLength(1);
      expect(store.getParentId(file1Id!)).toEqual(folder1Id);
      expect(store.getChildren(folder2Id!)).toHaveLength(0);
      expect(store.getParentId(file2Id!)).toEqual('root');

      store.moveEntry(folder1Id!, folder2Id!);
      expect(store.getChildren('root')).toHaveLength(2);
      expect(store.getChildren(folder2Id!)).toHaveLength(1);
      expect(store.getParentId(folder1Id!)).toEqual(folder2Id);

      store.moveEntry(file2Id!, folder1Id!);
      expect(store.getChildren('root')).toHaveLength(1);
      expect(store.getChildren(folder2Id!)).toHaveLength(1);
      expect(store.getChildren(folder1Id!)).toHaveLength(2);

      // Moving unto itself doesn't do anything
      store.moveEntry(folder1Id!, folder1Id!);
      expect(store.getChildren(folder1Id!)).toHaveLength(2);

      // Moving unto a file doesn't do anything
      store.moveEntry(folder1Id!, file1Id!);
      expect(store.getChildren(folder1Id!)).toHaveLength(2);

      // Moving a parent folder into a child folder doesn't do anything
      store.moveEntry(folder2Id!, folder1Id!);
      expect(store.getChildren(folder1Id!)).toHaveLength(2);

      // Moving all items back into root
      store.moveEntry(file1Id!, 'root');
      store.moveEntry(folder1Id!, 'root');
      store.moveEntry(file2Id!, 'root');
      expect(store.getChildren('root')).toHaveLength(4);
    });
  });

  /*
   ********************************
   *        Update Content        *
   ********************************
   */
  it('should update content of a file', () => {
    act(() => {
      store.resetForTest();
      const file1Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      });
      expect(store.getContent(file1Id!)).toEqual('Hello World');
      store.updateFileContent(file1Id!, 'Hello World Updated');
      expect(store.getContent(file1Id!)).toEqual('Hello World Updated');
    });
  });
  /*
   ********************************
   *           Get Path           *
   ********************************
   */
  it('should get path of an entry', () => {
    act(() => {
      store.resetForTest();
      expect(store.getPath('root')).toEqual('/');
      const folder1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      });
      expect(store.getPath(folder1Id!)).toEqual('/folder1/');
      const folder2Id = store.createEntry({
        parentId: folder1Id!,
        type: 'directory',
        name: 'folder2',
      });
      expect(store.getPath(folder2Id!)).toEqual('/folder1/folder2/');
      const folder3Id = store.createEntry({
        parentId: folder2Id!,
        type: 'directory',
        name: 'folder3',
      });
      expect(store.getPath(folder3Id!)).toEqual('/folder1/folder2/folder3/');
      expect(store.getPath(folder2Id!)).toEqual('/folder1/folder2/');
      const file1Id = store.createEntry({
        parentId: folder3Id!,
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      });
      expect(store.getPath(file1Id!)).toEqual('/folder1/folder2/folder3/file1.txt');
      store.moveEntry(file1Id!, 'root');
      expect(store.getPath(file1Id!)).toEqual('/file1.txt');
      expect(store.getPath(folder3Id!)).toEqual('/folder1/folder2/folder3/');
    });
  });
});
