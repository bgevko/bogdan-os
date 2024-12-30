/* eslint-disable no-underscore-dangle */
/* eslint-disable no-continue */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { enableMapSet } from 'immer';
import { type ComponentType, LazyExoticComponent, CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { applications, directories } from '@/defaults';
import { TASKBAR_HEIGHT, GRID_CELL_SIZE } from '@/themes';

enableMapSet();

const DEBUG = true;

/*
 ********************************
 *                              *
 *             Types            *
 *                              *
 ********************************
 */

// ------------------------------

/*
 ********************************
 *    Entry Id, App Component   *
 ********************************
 */
type UUID = string;
interface AppComponent {
  rootPath: string;
}
type LazyAppComponent = LazyExoticComponent<ComponentType<AppComponent>>;

/*
 ********************************
 *            Menubar           *
 ********************************
 */
export interface MenubarAction {
  callback?: (path?: string) => void;
  disableCallback?: () => boolean;
  bottomBorder?: boolean;
  subMenu?: MenubarItem; // Not implemented yet
  isCheckedCallback?: () => boolean; // Not implemented yet
}
export type MenubarItem = Map<string, MenubarAction>;
export type MenubarItems = Map<string, MenubarItem>;

/*
 ********************************
 *    File System Entry data    *
 ********************************
 */
interface Metadata {
  id: UUID;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: UUID | null;
  disableMobile?: boolean;
  component?: LazyAppComponent;
  defaultWindowSize?: { width: number; height: number };
  windowSize?: { width: number; height: number };
  menubarOptions?: {
    source: Promise<MenubarItems>;
    styles?: CSSProperties;
    className?: string;
  };

  // Icon stuff
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  iconPosition: { x: number; y: number };
  isIconSelected?: boolean;
  isIconDragging?: boolean;
}

/*
 ****************************************
 *  File, Directory, File System Entry  *
 ****************************************
 */
export interface File extends Metadata {
  type: 'file';
  extension: string;
  content: string;
}
export interface Directory extends Metadata {
  type: 'directory';
  children: UUID[];
}
export type FileSystemEntry = File | Directory;

/*
 ********************************
 *          Store Types         *
 ********************************
 */
interface StoreState {
  root: Directory;
  lookup: Map<UUID, FileSystemEntry>;

  // flags
  disableSelect: boolean;
}
interface StoreActions {
  /*
   ********************************
   *            Getters           *
   ********************************
   */
  getEntry: ({ id, name }: { id?: UUID; name?: string }) => FileSystemEntry | null;
  getId: (name: string) => UUID | null;
  getParentId: (id: UUID) => UUID | null;
  getName: (id: UUID) => string;
  getChildren: (id: UUID) => UUID[];
  getDirectory: (id: UUID) => FileSystemEntry[] | null;
  getAllIds: () => UUID[];
  isAncestor: (ancestorId: UUID, childId: UUID) => boolean;
  getContent: (id: UUID) => string | null;
  getPath: (id: UUID) => string;
  getRoot: () => Directory;
  getLookup: () => Map<UUID, FileSystemEntry>;
  getIsIconSelected: (id: UUID) => boolean;
  getAllSelectedIds: (id?: UUID) => UUID[];
  getIconPosition: (id: UUID) => { x: number; y: number } | null;
  getDisableSelect: () => boolean;
  getIsIconDragging: (id: UUID) => boolean;
  getIsAnyIconDragging: (id?: UUID) => boolean;
  getWindowSize: (id: UUID) => { width: number; height: number };
  isCellEmpty: (id: UUID, position: { x: number; y: number }) => boolean;

  /*
   ********************************
   *            Setters           *
   ********************************
   */
  setIconPosition: (id: UUID, { x, y }: { x: number; y: number }) => void;
  setIsIconSelected: (id: UUID, isSelected: boolean) => void;
  clearIconSelection: (parentId?: UUID) => void;
  setDisableSelect: (isDisabled: boolean) => void;
  setIsIconDragging: (id: UUID, isDragging: boolean) => void;

  /*
   ********************************
   *            Actions           *
   ********************************
   */
  createEntry: ({
    parentId,
    name,
    extension,
    content,
    type,
  }: {
    parentId: UUID;
    name: string;
    extension?: string;
    content?: string;
    type: 'file' | 'directory';
  }) => UUID | null;
  deleteEntry: (id: UUID) => boolean;
  renameEntry: (id: UUID, name: string) => void;
  updateFileContent: (id: UUID, content: string) => void;
  moveEntry: (id: UUID, targetParentId: UUID) => void;
  printTree: (id: UUID) => void;
  printDirectory: (id: UUID) => void;
  reset: () => void;
  resetForTest: () => void;
}
interface FileSystemState extends StoreState, StoreActions {}

/*
 ********************************
 *                              *
 *      Initial Store State     *
 *                              *
 ********************************
 */
const flags = {
  disableSelect: false,
};

const initialState: StoreState = {
  root: {
    id: 'root',
    iconPosition: { x: 0, y: 0 },
    name: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: null,
    type: 'directory',
    children: ['desktop'],
  },
  lookup: new Map([
    [
      'desktop',
      {
        id: 'desktop',
        iconPosition: { x: 0, y: 0 },
        name: 'Desktop',
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 'root',
        type: 'directory',
        defaultWindowSize: {
          width: window.innerWidth,
          height: window.innerHeight - TASKBAR_HEIGHT,
        },
        children: [...applications.keys(), ...directories.keys()],
      },
    ],
    ...generateAppsFromDefaults(),
    ...generateDirectoriesFromDefaults(),
  ]),
  ...flags,
};

const testState: StoreState = {
  root: {
    id: 'root',
    iconPosition: { x: 0, y: 0 },
    name: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: null,
    type: 'directory',
    children: [],
  },
  lookup: new Map(),
  ...flags,
};

/*
 ********************************
 *                              *
 *      UseFileSystemStore      *
 *                              *
 ********************************
 */
const useFileSystemStore = create<FileSystemState>()(
  immer((set, get) => ({
    ...initiateState(initialState),
    /*
     ********************************
     *            Getters           *
     ********************************
     */
    getEntry: ({ id, name }) => {
      if (id === 'root' || name === '') {
        return get().root;
      }
      if (id !== undefined) {
        const entry = get().lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:GetEntry: Entry with id ${id} not found`);
          return null;
        }
        return entry;
      }
      if (name !== undefined) {
        for (const entry of get().lookup.values()) {
          if (entry.name === name) {
            return entry;
          }
        }
        if (DEBUG) console.warn(`FileSystemStore:GetEntry: Entry with name ${name} not found`);
        return null;
      }
      return null;
    },
    getId: (name) => {
      if (name === '') {
        return 'root';
      }
      const { lookup } = get();
      for (const [id, entry] of lookup) {
        if (entry.name === name) {
          return id;
        }
      }
      return null;
    },
    getAllIds: () => {
      return [...get().lookup.keys()];
    },

    isAncestor: (ancestorId, childId) => {
      function _isAncestor(_ancestorId: UUID, _childId: UUID): boolean {
        const entry = get().getEntry({ id: _childId });
        if (!entry?.parentId) {
          return false;
        }
        if (entry.parentId === _ancestorId) {
          return true;
        }
        return _isAncestor(_ancestorId, entry.parentId);
      }
      return _isAncestor(ancestorId, childId);
    },

    getContent: (id) => {
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetContent: Entry with id ${id} not found`);
        return null;
      }
      if (entry.type !== 'file') {
        if (DEBUG) console.warn(`FileSystemStore:GetContent: Entry with id ${id} is not a file`);
        return null;
      }
      return entry.content;
    },

    getPath: (id) => {
      let path = '';
      function getPathHelper(currentId: UUID) {
        if (currentId === 'root') {
          path = `/${path}`;
          return;
        }
        const entry = get().getEntry({ id: currentId });
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:GetPath: Entry with id ${currentId} not found`);
          return;
        }
        if (entry.type === 'file') {
          const fileName = `${entry.name}.${entry.extension}`;
          path = `${fileName}${path}`;
        } else {
          path = `${entry.name}/${path}`;
        }
        getPathHelper(entry.parentId!);
      }

      getPathHelper(id);
      return path;
    },

    getRoot: () => get().root,
    getLookup: () => get().lookup,
    getIsIconSelected: (id) => {
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIsIconSelected: Entry with id ${id} not found`);
        return false;
      }
      return entry.isIconSelected ?? false;
    },
    getAllSelectedIds: (id) => {
      const selectedIds: UUID[] = [];
      if (id === undefined) {
        for (const entry of get().lookup.values()) {
          if (entry.isIconSelected) {
            selectedIds.push(entry.id);
          }
        }
      } else {
        const entry = get().getEntry({ id });
        if (!entry || entry.type !== 'directory') {
          if (DEBUG)
            console.warn(
              `FileSystemStore:GetAllSelectedIds: Entry with id ${id} not found or not a directory`,
            );
          return [];
        }
        const dir = entry;
        for (const childId of dir.children) {
          const child = get().getEntry({ id: childId })!;
          if (child.isIconSelected) {
            selectedIds.push(child.id);
          }
        }
      }
      return selectedIds;
    },

    getIconPosition: (id) => {
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIconPosition: Entry with id ${id} not found`);
        return null;
      }
      return entry.iconPosition ?? null;
    },

    getDisableSelect: () => get().disableSelect,

    getParentId: (id) => {
      return get().getEntry({ id })?.parentId ?? null;
    },
    getName: (id) => get().getEntry({ id })?.name ?? '',
    getChildren: (id) => {
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetChildren: Entry with id ${id} not found`);
        return [];
      }
      if (entry.type !== 'directory') {
        return [];
      }
      return entry.children;
    },
    getDirectory: (id) => {
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetDirectory: Entry with id ${id} not found`);
        return null;
      }
      if (entry.type !== 'directory') {
        return null;
      }
      return entry.children.map((childId) => get().getEntry({ id: childId })) as FileSystemEntry[];
    },
    getIsIconDragging: (id) => {
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIsIconDragging: Entry with id ${id} not found`);
        return false;
      }
      return entry.isIconDragging ?? false;
    },
    getIsAnyIconDragging: (id) => {
      if (id === undefined) {
        for (const entry of get().lookup.values()) {
          if (entry.isIconDragging) {
            return true;
          }
        }
        return false;
      }
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetIsAnyIconDragging: Entry with id ${id} not found`);
        return false;
      }
      if (entry.type !== 'directory') {
        return false;
      }
      for (const childId of entry.children) {
        const child = get().getEntry({ id: childId })!;
        if (child.isIconDragging) {
          return true;
        }
      }
      return false;
    },
    getWindowSize: (id) => {
      const entry = get().getEntry({ id });
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetWindowSize: Entry with id ${id} not found`);
        return { width: 0, height: 0 };
      }
      return entry.windowSize ?? entry.defaultWindowSize ?? { width: 0, height: 0 };
    },
    isCellEmpty: (id, position) => {
      const entry = get().getEntry({ id });
      // Not a directory, false by default
      if (!entry || entry.type !== 'directory') {
        if (DEBUG) console.warn(`FileSystemStore:IsCellEmpty: Entry with id ${id} not found`);
        return false;
      }
      // If out of bounds, return false
      const windowSize = get().getWindowSize(id);
      if (
        position.x < 0 ||
        position.x > windowSize.width ||
        position.y < 0 ||
        position.y > windowSize.height
      ) {
        return false;
      }
      // Check if there's another icon in the same position
      const dir = entry;
      for (const childId of dir.children) {
        const child = get().getEntry({ id: childId })!;
        if (child.iconPosition?.x === position.x && child.iconPosition?.y === position.y) {
          return false;
        }
      }
      return true;
    },

    /*
     ********************************
     *            Setters           *
     ********************************
     */
    setIconPosition: (id, position) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:SetPosition: Entry with id ${id} not found`);
          return;
        }
        // Position can be anything during dragging
        if (get().getIsAnyIconDragging()) {
          entry.iconPosition = position;
          return;
        }
        // Not dragging, and there's an empty cell at the position
        if (get().isCellEmpty(entry.parentId!, position)) {
          entry.iconPosition = position;
          return;
        }

        // Otherwise, we'll nudge the position to the first valid nearby cell
        const visited = new Set<string>();
        const exploreLimit = get().getChildren(entry.parentId!).length;
        interface Position {
          x: number;
          y: number;
        }
        type ExploreCount = number;
        function findEmptyCell(
          currentPosition: Position,
          exploreCount: ExploreCount,
        ): Position | false {
          if (exploreCount === exploreLimit) {
            return false;
          }
          const posString = `${currentPosition.x.toString()},${currentPosition.y.toString()}`;
          if (visited.has(posString)) {
            return false;
          }

          if (get().isCellEmpty(entry!.parentId!, currentPosition)) {
            return currentPosition;
          }

          visited.add(posString);

          const right = { x: currentPosition.x + GRID_CELL_SIZE, y: currentPosition.y };
          const down = { x: currentPosition.x, y: currentPosition.y + GRID_CELL_SIZE };
          const left = { x: currentPosition.x - GRID_CELL_SIZE, y: currentPosition.y };
          const up = { x: currentPosition.x, y: currentPosition.y - GRID_CELL_SIZE };

          return (
            findEmptyCell(right, exploreCount + 1) ||
            findEmptyCell(down, exploreCount + 1) ||
            findEmptyCell(left, exploreCount + 1) ||
            findEmptyCell(up, exploreCount + 1)
          );
        }

        const nudgedPosition = findEmptyCell(position, 0);
        if (nudgedPosition) {
          entry.iconPosition = nudgedPosition;
        } else if (DEBUG)
          console.warn(`FileSystemStore:SetPosition: No empty cell found for entry with id ${id}`);
      });
    },
    setIsIconSelected: (id, isSelected) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetIsIconSelected: Entry with id ${id} not found`);
          return;
        }
        entry.isIconSelected = isSelected;
      });
    },
    clearIconSelection: (parentId) => {
      set((state) => {
        // Clear all if parentId is not provided
        if (parentId === undefined) {
          for (const entry of state.lookup.values()) {
            if (entry.isIconSelected) {
              entry.isIconSelected = false;
            }
          }
          return;
        }

        // Clear only children of parent otherwise
        const parent = state.lookup.get(parentId);
        if (!parent || parent.type !== 'directory') {
          if (DEBUG)
            console.warn(
              `FileSystemStore:ClearIconSelection: Parent with id ${parentId} not found or not a directory`,
            );
          return;
        }
        const dir = parent;
        for (const childId of dir.children) {
          const child = state.lookup.get(childId);
          if (child?.isIconSelected) {
            child.isIconSelected = false;
          }
        }
      });
    },
    setDisableSelect: (isDisabled) => {
      set((state) => {
        state.disableSelect = isDisabled;
      });
    },
    setIsIconDragging: (id, isDragging) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetIsIconDragging: Entry with id ${id} not found`);
          return;
        }
        entry.isIconDragging = isDragging;
      });
    },

    /*
     ********************************
     *        Print Utilities       *
     ********************************
     */
    printTree: (id) => {
      const visited = new Set();
      function printTreeHelper(entryId: UUID, indent = '') {
        if (visited.has(entryId)) {
          return;
        }
        visited.add(entryId);
        const entry = get().getEntry({ id: entryId });
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:GetTree: Entry with id ${entryId} not found`);
          return;
        }
        const name = entry.type === 'file' ? `${entry.name}.${entry.extension}` : `${entry.name}/`;
        console.log(`${indent}${name}`);

        if (entry.type === 'file') {
          return;
        }
        const dir = entry;
        for (const childId of dir.children) {
          printTreeHelper(childId, `${indent}.`);
        }
      }
      printTreeHelper(id, '');
    },

    printDirectory: (id) => {
      const directory = get().getEntry({ id });
      if (!directory) {
        if (DEBUG) console.warn(`FileSystemStore:PrintDirectory: Entry with id ${id} not found`);
        return;
      }
      if (directory.type !== 'directory') {
        console.log(`${directory.name}.${directory.extension}`);
        return;
      }

      for (const childId of directory.children) {
        const child = get().getEntry({ id: childId })!;
        if (child.type === 'file') {
          console.log(`${child.name}.${child.extension}`);
        } else {
          console.log(`${child.name}/`);
        }
      }
    },

    /*
     ********************************
     *     Create File/Directory    *
     ********************************
     */
    createEntry: ({ parentId, name, extension, content, type }) => {
      // Throw a warning if extension is included in name
      if (name.includes('.') && DEBUG)
        console.warn(
          `FileSystemStore:CreateEntry: Don't include the extension in name: '${name}'. Use the 'extension' parameter instead`,
        );

      const id = uuidv4();
      const entry: FileSystemEntry =
        type === 'file'
          ? {
              id,
              iconPosition: { x: 0, y: 0 },
              name,
              createdAt: new Date(),
              updatedAt: new Date(),
              parentId,
              type: 'file',
              extension: extension ?? '',
              content: content ?? '',
            }
          : {
              id,
              iconPosition: { x: 0, y: 0 },
              name,
              createdAt: new Date(),
              updatedAt: new Date(),
              parentId,
              type: 'directory',
              children: [],
            };

      let didCreate = false;
      set((state) => {
        try {
          state.lookup.set(id, entry);
          if (parentId === 'root') {
            state.root.children.push(id);
          } else {
            const parent = state.lookup.get(parentId) as Directory;
            parent.children.push(id);
          }
          didCreate = true;
        } catch (error) {
          if (DEBUG) {
            console.error('FileSystemStore:CreateEntry:', error);
          }
          didCreate = false;
        }
      });
      if (didCreate) {
        return id;
      }
      return null;
    },

    /*
     ********************************
     *         Delete Entry         *
     ********************************
     */
    deleteEntry: (id) => {
      if (id === 'root') {
        if (DEBUG) console.warn(`FileSystemStore:DeleteEntry: Cannot delete root directory`);
        return false;
      }
      let didDelete = false;
      set((state) => {
        function deleteEntryHelper(entryId: UUID): boolean {
          const entry = state.lookup.get(entryId);
          if (!entry) {
            if (DEBUG)
              console.warn(`FileSystemStore:DeleteEntry: Entry with id ${entryId} not found`);
            return false;
          }
          if (entry.type === 'directory') {
            const dir = entry as Directory;
            for (const childId of dir.children) {
              deleteEntryHelper(childId);
            }
            dir.children = [];
          }

          // Delete entry from parent table
          const parent =
            entry.parentId === 'root'
              ? state.root
              : (state.lookup.get(entry.parentId!) as Directory);
          if (!parent) {
            if (DEBUG)
              console.warn(
                `FileSystemStore:DeleteEntry: Parent with id ${entry.parentId!} not found`,
              );
            return false;
          }
          parent.children = parent.children.filter((childId) => childId !== entryId);

          // Delete entry from root table
          state.lookup.delete(entryId);
          return true;
        }

        didDelete = deleteEntryHelper(id);
      });
      return didDelete;
    },
    /*
     ********************************
     *            Rename            *
     ********************************
     */
    renameEntry: (id, name) => {
      if (id === 'root') {
        if (DEBUG) console.warn(`FileSystemStore:RenameEntry: Cannot rename root directory`);
        return;
      }
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:RenameEntry: Entry with id ${id} not found`);
          return;
        }
        if (name.includes('.') && DEBUG) {
          console.warn(
            `FileSystemStore:RenameEntry: Don't include the extension in name: '${name}'.`,
          );
        }
        entry.name = name;
        entry.updatedAt = new Date();
      });
    },
    /*
     ********************************
     *        Update Content        *
     ********************************
     */
    updateFileContent: (id, content) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:UpdateFileContent: Entry with id ${id} not found`);
          return;
        }
        if (entry.type !== 'file') {
          if (DEBUG)
            console.warn(`FileSystemStore:UpdateFileContent: Entry with id ${id} is not a file`);
          return;
        }
        const file = entry as File;
        file.content = content;
        file.updatedAt = new Date();
      });
    },
    /*
     ********************************
     *          Move Entry          *
     ********************************
     */
    moveEntry: (id, targetParentId) => {
      if (id === 'root') {
        if (DEBUG) console.warn(`FileSystemStore:MoveEntry: Cannot move root directory`);
        return;
      }

      if (id === targetParentId) {
        if (DEBUG) console.warn(`FileSystemStore:MoveEntry: Cannot move entry into itself`);
        return;
      }

      if (get().isAncestor(id, targetParentId)) {
        if (DEBUG)
          console.warn(
            `FileSystemStore:MoveEntry: Cannot move entry with id ${id} into its descendant with id ${targetParentId}`,
          );
        return;
      }

      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:MoveEntry: Entry with id ${id} not found`);
          return;
        }

        const targetParentDir =
          targetParentId === 'root' ? state.root : (state.lookup.get(targetParentId) as Directory);
        if (!targetParentDir) {
          if (DEBUG)
            console.warn(`FileSystemStore:MoveEntry: Parent with id ${targetParentId} not found`);
          return;
        }

        if (targetParentDir.type !== 'directory') {
          if (DEBUG)
            console.warn(
              `FileSystemStore:MoveEntry: Target parent with id ${targetParentId} is not a directory`,
            );
          return;
        }
        const oldParent =
          entry.parentId === 'root' ? state.root : (state.lookup.get(entry.parentId!) as Directory);
        oldParent.children = oldParent.children.filter((childId) => childId !== id);

        // Add entry to new parent
        targetParentDir?.children.push(id);

        // Update parentId of entry
        entry.parentId = targetParentId;
      });
    },
    /*
     ********************************
     *             Reset            *
     ********************************
     */
    reset: () => {
      set(initiateState(initialState));
    },

    // Completely empty system for testing
    resetForTest: () => {
      set((state) => {
        state.root = testState.root;
        state.lookup = new Map();
      });
    },
  })),
);

/*
 ********************************
 *                              *
 *            Helpers           *
 *                              *
 ********************************
 */
function generateAppsFromDefaults(): Map<string, FileSystemEntry> {
  const apps = new Map<string, File>();
  for (const [key, value] of applications) {
    apps.set(key, value as File);
  }
  return apps;
}

function generateDirectoriesFromDefaults(): Map<string, FileSystemEntry> {
  const dirs = new Map<string, Directory>();
  for (const [key, value] of directories) {
    dirs.set(key, value as Directory);
  }
  return dirs;
}

function initiateState(state: StoreState): StoreState {
  /*
   ********************************
   *        Icon Positions        *
   ********************************
   */
  for (const entry of state.lookup.values()) {
    if (entry.type !== 'directory' || !entry.defaultWindowSize) {
      continue;
    }

    let column = 0;
    let row = 0;
    for (const childId of entry.children) {
      const child = state.lookup.get(childId)!;
      const cell = GRID_CELL_SIZE;
      let x = cell * column;
      let y = cell * row;

      if (y > entry.defaultWindowSize.height) {
        y = 0;
        x += cell;
        column += 1;
        row = 0;
      }

      child.iconPosition = child.iconPosition ?? { x, y };
      row += 1;
    }
  }

  return state;
}

export default useFileSystemStore;
