import { renderHook, act } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import useFileSystemStore, { type File, Directory } from '@/system/file-system/store';

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
    });
  });

  /*
   ********************************
   *     Create File/Directory    *
   ********************************
   */
  it('should create a new file/folder', () => {
    act(() => {
      store.resetForTest();
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
      expect(store.getAllIds()).toHaveLength(3);
      let folder1children = store.getChildren(folder1Id!);
      expect(folder1children).toHaveLength(1);
      expect(folder1children[0]).toEqual(folder2Id);

      // Two levels
      const folder3Id = store.createEntry({
        parentId: store.getId('folder2')!,
        type: 'directory',
        name: 'folder3',
      });
      expect(store.getAllIds()).toHaveLength(4);
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
      expect(store.getAllIds()).toHaveLength(5);
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

      expect(store.getAllIds()).toHaveLength(3);
      expect(store.getChildren('root')).toHaveLength(2);
      store.deleteEntry(file1Id!);
      expect(store.getAllIds()).toHaveLength(2);
      expect(store.getChildren('root')).toHaveLength(1);
      store.deleteEntry(folder1Id!);
      expect(store.getAllIds()).toHaveLength(1);
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
      expect(store.getAllIds()).toHaveLength(4);
      expect(store.getChildren('root')).toHaveLength(1);
      expect(folder1Children).toHaveLength(2);

      store.deleteEntry(file1Id!);
      expect(store.getAllIds()).toHaveLength(3);
      expect(store.getChildren('root')).toHaveLength(1);
      expect(store.getChildren(folder1Id!)).toHaveLength(1);
      store.deleteEntry(file2Id!);
      expect(store.getAllIds()).toHaveLength(2);
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
      expect(store.getAllIds()).toHaveLength(4);

      // Deleting folder 2 (should delete folder 3 as well)
      store.deleteEntry(folder2Id!);
      expect(store.getChildren(folder1Id!)).toHaveLength(0);
      expect(store.getAllIds()).toHaveLength(2);
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
      expect(store.getAllIds()).toHaveLength(7);
      store.deleteEntry(folder2EmptyFolder!);
      expect(store.getChildren(folder2Id!)).toHaveLength(2);
      expect(store.getAllIds()).toHaveLength(6);
      store.deleteEntry(folder2folder2Id!);
      expect(store.getChildren(folder2Id!)).toHaveLength(1);
      expect(store.getAllIds()).toHaveLength(5);
      store.deleteEntry(folder1Id!);
      expect(store.getAllIds()).toHaveLength(1);
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

  /*
   ********************************
   *          Copy Entry          *
   ********************************
   */
  it('should copy a single file', () => {
    act(() => {
      store.resetForTest();

      // copy non-directory
      const file1Id = store.createEntry({
        parentId: 'root',
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      })!;
      let rootChildren = store.getChildren('root');
      expect(rootChildren).toHaveLength(1);
      const file2Id = store.copyEntry(file1Id, 'root')!;
      expect(file2Id).not.toBeNull();
      const file2Entry = store.getEntry(file2Id) as File;
      expect(file2Entry).not.toBeNull();
      rootChildren = store.getChildren('root');
      expect(rootChildren).toHaveLength(2);

      // Check various properties
      expect(file2Entry.name).toEqual('file1(2)');
      expect(file2Entry.id).toEqual(file2Id);
      expect(file2Entry.parentId).toEqual('root');
      expect(file2Entry.type).toEqual('file');
      expect(file2Entry.extension).toEqual('txt');
      expect(file2Entry.content).toEqual('Hello World');

      // Original file should not be affected
      const file1Entry = store.getEntry(file1Id) as File;
      expect(file1Entry).not.toBeNull();
      expect(file1Entry.name).toEqual('file1');
      expect(file1Entry.id).toEqual(file1Id);
      expect(file1Entry.parentId).toEqual('root');
      expect(file1Entry.type).toEqual('file');
      expect(file1Entry.extension).toEqual('txt');
      expect(file1Entry.content).toEqual('Hello World');

      // copy file 1 again
      const file3Id = store.copyEntry(file1Id, 'root')!;
      expect(file3Id).not.toBeNull();
      const file3Entry = store.getEntry(file3Id) as File;
      expect(file3Entry).not.toBeNull();
      expect(file3Entry.name).toEqual('file1(3)');

      // Copy into another directory
      const dir1Id = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'dir1',
      })!;
      const file4Id = store.copyEntry(file1Id, dir1Id)!;
      const dir1Children = store.getChildren(dir1Id);
      expect(dir1Children).toHaveLength(1);
      const file4Entry = store.getEntry(file4Id) as File;
      expect(file4Entry).not.toBeNull();
      expect(file4Entry.name).toEqual('file1');
      expect(file4Entry.parentId).toEqual(dir1Id);
      expect(file4Entry.type).toEqual('file');
      expect(file4Entry.extension).toEqual('txt');
      expect(file4Entry.content).toEqual('Hello World');

      // Copy it back to root
      const file5Id = store.copyEntry(file4Id, 'root')!;
      const file5Entry = store.getEntry(file5Id) as File;
      expect(file5Entry).not.toBeNull();
      expect(file5Entry.name).toEqual('file1(4)');
      expect(file5Entry.parentId).toEqual('root');
      expect(file5Entry.type).toEqual('file');
      expect(file5Entry.extension).toEqual('txt');
      expect(file5Entry.content).toEqual('Hello World');
    });
  });

  it('it should copy a directory', () => {
    act(() => {
      store.resetForTest();
      const folderId = store.createEntry({
        parentId: 'root',
        type: 'directory',
        name: 'folder1',
      })!;
      const folderFileId = store.createEntry({
        parentId: folderId,
        type: 'file',
        name: 'file1',
        extension: 'txt',
        content: 'Hello World',
      })!;
      const nestedFolderId = store.createEntry({
        parentId: folderId,
        type: 'directory',
        name: 'nestedFolder',
      })!;
      const nestedFolderFileId = store.createEntry({
        parentId: nestedFolderId,
        type: 'file',
        name: 'nestedFile',
        extension: 'txt',
        content: 'Hello World',
      })!;

      // Copy folder in root
      const folderCopyId = store.copyEntry(folderId, 'root')!;
      const rootChildren = store.getChildren('root');
      expect(rootChildren).toHaveLength(2);
      const folderCopyEntry = store.getEntry(folderCopyId) as Directory;
      expect(folderCopyEntry).not.toBeNull();
      expect(folderCopyEntry.name).toEqual('folder1(2)');
      expect(folderCopyEntry.parentId).toEqual('root');
      expect(folderCopyEntry.type).toEqual('directory');

      // Compare the contents of the copied folder
      const folderCopyChildren = store.getChildren(folderCopyId);
      const folderCopyFileId = folderCopyChildren.find(
        (id) => store.getEntry(id)?.type === 'file',
      )!;
      const folderCopyNestedFolderId = folderCopyChildren.find(
        (id) => store.getEntry(id)?.type === 'directory',
      )!;
      expect(folderCopyFileId).not.toBeNull();
      expect(folderCopyNestedFolderId).not.toBeNull();

      // ids should be different
      expect(folderCopyFileId).not.toEqual(folderFileId);
      expect(folderCopyNestedFolderId).not.toEqual(nestedFolderId);

      const folderCopyFileEntry = store.getEntry(folderCopyFileId) as File;
      const folderCopyNestedFolderEntry = store.getEntry(folderCopyNestedFolderId) as Directory;
      expect(folderCopyFileEntry.name).toEqual('file1');
      expect(folderCopyFileEntry.parentId).toEqual(folderCopyId);
      expect(folderCopyFileEntry.type).toEqual('file');
      expect(folderCopyFileEntry.extension).toEqual('txt');
      expect(folderCopyFileEntry.content).toEqual('Hello World');
      expect(folderCopyNestedFolderEntry.name).toEqual('nestedFolder');
      expect(folderCopyNestedFolderEntry.parentId).toEqual(folderCopyId);
      expect(folderCopyNestedFolderEntry.type).toEqual('directory');
      expect(store.getChildren(folderCopyNestedFolderId)).toHaveLength(1);

      const folderCopyNestedFolderFileId = store.getChildren(folderCopyNestedFolderId)[0];
      expect(folderCopyNestedFolderFileId).not.toEqual(nestedFolderFileId);
      const folderCopyNestedFolderFileEntry = store.getEntry(folderCopyNestedFolderFileId) as File;
      expect(folderCopyNestedFolderFileEntry.name).toEqual('nestedFile');
      expect(folderCopyNestedFolderFileEntry.parentId).toEqual(folderCopyNestedFolderId);
      expect(folderCopyNestedFolderFileEntry.parentId).not.toEqual(nestedFolderFileId);
      expect(folderCopyNestedFolderFileEntry.type).toEqual('file');
      expect(folderCopyNestedFolderFileEntry.extension).toEqual('txt');
      expect(folderCopyNestedFolderFileEntry.content).toEqual('Hello World');

      // copy into root one more time, the third copy in root should have a different name,
      // but all nested names should remain the same. Ids and parents should be different
      const folderCopy2Id = store.copyEntry(folderId, 'root')!;
      const rootChildren2 = store.getChildren('root');
      expect(rootChildren2).toHaveLength(3);
      const folderCopy2Entry = store.getEntry(folderCopy2Id) as Directory;
      expect(folderCopy2Entry).not.toBeNull();
      expect(folderCopy2Entry.name).toEqual('folder1(3)');
      expect(folderCopy2Entry.parentId).toEqual('root');
      const folderCopy2Children = store.getChildren(folderCopy2Id);
      const folderCopy2FileId = folderCopy2Children.find(
        (id) => store.getEntry(id)?.type === 'file',
      )!;
      const folderCopy2NestedFolderId = folderCopy2Children.find(
        (id) => store.getEntry(id)?.type === 'directory',
      )!;
      expect(folderCopy2FileId).not.toEqual(folderFileId);
      expect(folderCopy2NestedFolderId).not.toEqual(nestedFolderId);
      const folderCopy2FileEntry = store.getEntry(folderCopy2FileId) as File;
      expect(folderCopy2FileEntry.name).toEqual('file1');
      expect(folderCopy2FileEntry.parentId).toEqual(folderCopy2Id);
      expect(folderCopy2FileEntry.type).toEqual('file');
      expect(folderCopy2FileEntry.extension).toEqual('txt');
      expect(folderCopy2FileEntry.content).toEqual('Hello World');
      const folderCopy2NestedFolderEntry = store.getEntry(folderCopy2NestedFolderId) as Directory;
      expect(folderCopy2NestedFolderEntry.name).toEqual('nestedFolder');
      expect(folderCopy2NestedFolderEntry.parentId).toEqual(folderCopy2Id);
      expect(folderCopy2NestedFolderEntry.type).toEqual('directory');
      expect(store.getChildren(folderCopy2NestedFolderId)).toHaveLength(1);
    });
  });
});
