/* eslint-disable no-underscore-dangle */
/* eslint-disable no-continue */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { enableMapSet } from 'immer';
import { type ComponentType, LazyExoticComponent, CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { applications } from '@/defaults';
import { TASKBAR_HEIGHT, GRID_CELL_SIZE, DEFAULT_WINDOW_SIZE } from '@/themes';

enableMapSet();

const DEBUG = false;

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
export interface AppComponent {
  entry?: FileSystemEntry;
}
export type EntryId = string;
export type LazyAppComponent = LazyExoticComponent<ComponentType<AppComponent>>;

/*
 ********************************
 *            Menubar           *
 ********************************
 */
export type MenubarActionCallback = (entry?: FileSystemEntry) => void;
export interface MenubarAction {
  callback: MenubarActionCallback;
  disableCallback?: (entry?: FileSystemEntry) => boolean;
  isCheckedCallback?: (entry?: FileSystemEntry) => boolean;
  bottomBorder?: boolean;
  subMenu?: MenubarItem; // Not implemented yet
}
export type MenubarItem = Map<string, MenubarAction>;
export type MenubarItems = Map<string, MenubarItem>;
export interface MenubarOptions {
  source: Promise<MenubarItems>;
  styles?: CSSProperties;
  className?: string;
}

/*
 ***********************************
 *           Context Menu          *
 ***********************************
 */
export type ContextMenuActionCallback = MenubarActionCallback;
export type ContextMenuAction = MenubarAction;
export type ContextMenuItem = Map<string, ContextMenuAction>;

export type ContextMenuCategory =
  | 'icon'
  | 'directory-icon'
  | 'directory'
  | 'taskbar'
  | 'taskbar-entry';
export type ContextMenuItems = Map<ContextMenuCategory, ContextMenuItem>;
export interface ContextMenuOptions {
  source: Promise<ContextMenuItems>;
  styles?: CSSProperties;
  className?: string;
}

// Context state may be associated with a given icon
// or it can be generic, like the taskbar or other system
// components that don't have a direct entry.
export interface ContextState {
  id?: EntryId;
  category: ContextMenuCategory;
  clickPosition: Position;
}

/*
 ***********************************
 *            Misc Types           *
 ***********************************
 */
export interface Position {
  x: number;
  y: number;
}
export interface Size {
  width: number;
  height: number;
}
export type KeyCommand = 'copy' | 'paste' | 'delete' | 'select-all';

/*
 ********************************
 *    File System Entry data    *
 ********************************
 */
interface Metadata {
  id: EntryId;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: EntryId | null;

  // Icon stuff
  disableDelete: boolean;
  disableCopy?: boolean;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  iconPosition: Position;
  isIconSelected?: boolean;
  isIconDragging?: boolean;

  // window stuff
  defaultWindowSize: Size;
  disableMobile?: boolean;
  isOpen?: boolean;
  windowSize?: { width: number; height: number };
  windowPosition?: Position;
  windowState?: 'minimized' | 'maximized' | 'normal';
  isWindowMoving?: boolean;
  isWindowResizing?: boolean;
  disableResize?: boolean;
  disableMaximize?: boolean;
  willTransform?: boolean;
  contentOpacity?: number;

  // Animation meta
  transformScale?: number; // For window and taskbar entry animations
  iconTransformScale?: number; // For icon animations

  // Window callbacks
  windowOnUpdateCallback?: () => void;
  windowOnCloseCallback?: () => void;
  windowOnMinimizeCallback?: () => void;
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
  children: EntryId[];
}
export type FileSystemEntry = File | Directory;

/*
 ********************************
 *          Store Types         *
 ********************************
 */
interface StoreState {
  lookup: Map<EntryId, FileSystemEntry>;

  // flags
  disableSelect: boolean;
  windowBlur: boolean;
  isMaximizedWindowHeaderVisible?: boolean;
  isUsingSelectRect?: boolean;
  shouldUpdateName?: boolean;
  keyCommand?: KeyCommand | null;

  // window state
  opened: EntryId[];
  focused: EntryId[];
  isFullscreen: boolean;

  // icon global info
  selected: EntryId[];
  dragging: EntryId[];
  clipboard: EntryId[];
  renaming: EntryId | null;
  dragInitiatorId?: EntryId | null;
  dropTarget?: EntryId;
  dropTargetIcon?: EntryId | null;
  isDragOverFolder?: boolean;

  // context menu
  contextState?: ContextState;
}
interface StoreActions {
  /*
   ********************************
   *            Getters           *
   ********************************
   */
  getEntry: (id: EntryId) => FileSystemEntry | null;
  getOpenedEntries: () => EntryId[];
  getId: (name: string) => EntryId | null;
  getParentId: (id: EntryId) => EntryId | null;
  getName: (id: EntryId) => string;
  getChildren: (id: EntryId) => EntryId[];
  getDirectory: (id: EntryId) => FileSystemEntry[] | null;
  getAllIds: () => EntryId[];
  getIsAncestor: (ancestorId: EntryId, childId: EntryId) => boolean;
  getContent: (id: EntryId) => string | null;
  getPath: (id: EntryId) => string;
  getIsIconSelected: (id: EntryId) => boolean;
  getAllSelectedIds: () => EntryId[];
  getAllSelectedIdsSameParent: (parentId: EntryId) => EntryId[];
  getIconPosition: (id: EntryId) => Position | null;
  getIconPositions: (parentId: EntryId) => { id: EntryId; position: Position }[];
  getIsIconPositionEmpty: (parentId: EntryId, position: Position) => boolean;
  getEmptyIconPosition: (parentId: EntryId, rowOrColumn?: 'row' | 'column') => Position | null;
  getDisableSelect: () => boolean;
  getIsIconDragging: (id: EntryId) => boolean;
  getIsAnyIconDragging: () => boolean;
  getWindowSize: (id: EntryId) => { width: number; height: number };
  getDefaultWindowSize: (id: EntryId) => { width: number; height: number };
  getIsOpen: (id: EntryId) => boolean;
  getWindowPosition: (id: EntryId) => Position;
  getOpenedWindowSizesAndPositions: () => { id: EntryId; size: Size; position: Position }[];
  getWindowState: (id: EntryId) => 'minimized' | 'maximized' | 'normal' | null;
  getIsWindowFocused: (id: EntryId) => boolean;
  getFocusedWindowId: () => EntryId;
  getFocusStack: () => EntryId[];
  getWindowZIndex: (id: EntryId) => number;
  getIsWindowMoving: (id: EntryId) => boolean;
  getIsWindowResizing: (id: EntryId) => boolean;
  getTransformScale: (id: EntryId) => number;
  getIconTransformScale: (id: EntryId) => number;
  getWillTransform: (id: EntryId) => boolean;
  getContentOpacity: (id: EntryId) => number;
  getIsDisabledResize: (id: EntryId) => boolean;
  getMaximizedEntry: () => FileSystemEntry | null;
  getIsMaximizedWindowHeaderVisible: () => boolean;
  getWindowCenterPosition: (id: EntryId) => Position;
  getContextState: () => ContextState | null;
  getIsDisableDelete: (id: EntryId) => boolean;
  getIsDisableCopy: (id: EntryId) => boolean;
  getCanDeleteSelection: (parentId: EntryId) => boolean;
  getCanCopySelection: (parentId: EntryId) => boolean;
  getIsUsingSelectRect: () => boolean;
  getDropTargetId: () => EntryId;
  getDropTargetIconId: () => EntryId | null;
  getIsDirectory: (id: EntryId) => boolean;
  getIconAtPosition: (parentId: EntryId, position: Position) => FileSystemEntry | null;
  getDragInitiatorId: () => EntryId | null;
  getIsDragOverFolder: () => boolean;
  getIsDisableMaximize: (id: EntryId) => boolean;
  getIsFullscreen: () => boolean;
  getIsRenaming: (id: EntryId) => boolean;
  getShouldUpdateName: () => boolean;
  getDirectoryNames: (id: EntryId) => Set<string>;
  // validateName: (parentId: EntryId, name: string, exclude?: string) => string | null;
  validateName: ({
    parentId,
    name,
    exclude,
    include,
  }: {
    parentId: EntryId;
    name: string;
    exclude?: string;
    include?: Set<string>;
  }) => string | null;
  getClipboard: () => EntryId[];
  getKeyCommand: () => KeyCommand | null;
  // getters end

  /*
   ********************************
   *            Setters           *
   ********************************
   */
  reset: () => void;
  resetForTest: () => void;
  setIconPosition: (id: EntryId, position: Position) => void;
  setIsIconSelected: (id: EntryId, isSelected: boolean) => void;
  selectAllIcons: (parentId: EntryId) => void;
  clearIconSelection: () => void;
  setDisableSelect: (isDisabled: boolean) => void;
  setIsIconDragging: (id: EntryId, isDragging: boolean) => void;
  clearAllIconsDragging: () => void;
  setIsOpen: (id: EntryId, isOpen: boolean) => void;
  setWindowState: (id: EntryId, state: 'minimized' | 'maximized' | 'normal') => void;
  setWindowPosition: (id: EntryId, position: Position) => void;
  blurWindowFocus: (isBlurred: boolean) => void;
  setIsWindowMoving: (id: EntryId, isMoving: boolean) => void;
  setIsWindowResizing: (id: EntryId, isResizing: boolean) => void;
  setTransformScale: (id: EntryId, scale: number) => void;
  setIconTransformScale: (id: EntryId, scale: number) => void;
  setWillTransform: (id: EntryId, willTransform: boolean) => void;
  setContentOpacity: (id: EntryId, opacity: number) => void;
  setWindowSize: (id: EntryId, { width, height }: { width: number; height: number }) => void;
  setIsMaximizedWindowHeaderVisible: (isVisible: boolean) => void;
  setWindowOnUpdateCallback: (id: EntryId, callback: () => void) => void;
  setContextState: (contextState: ContextState) => void;
  clearContextState: () => void;
  setIsUsingSelectRect: (isUsing: boolean) => void;
  setDropTargetId: (id: EntryId) => void;
  setDropTargetIconId: (id: EntryId | null) => void;
  setDragInitiatorId: (id: EntryId | null) => void;
  setWindowOnCloseCallback: (id: EntryId, callback: () => void) => void;
  setWindowOnMinimizeCallback: (id: EntryId, callback: () => void) => void;
  setRenaming: (id: EntryId) => void;
  clearRenaming: () => void;
  setKeyCommand: (event: KeyboardEvent) => void;
  clearKeyCommand: () => void;
  // setters end

  /*
   ********************************
   *      File System Actions     *
   ********************************
   */
  createEntry: ({
    parentId,
    name,
    extension,
    content,
    type,
  }: {
    parentId: EntryId;
    name: string;
    extension?: string;
    content?: string;
    type: 'file' | 'directory';
  }) => EntryId | null;
  deleteEntry: (id: EntryId) => boolean;
  renameEntry: (id: EntryId, name: string) => string | null;
  updateFileContent: (id: EntryId, content: string) => void;
  moveEntry: (sourceId: EntryId, targetParentId: EntryId) => void;
  copyEntry: (sourceId: EntryId, targetParentId: EntryId) => EntryId | null;
  printTree: (id: EntryId) => void;
  printDirectory: (id: EntryId) => void;
  sortIcons: (parentId: EntryId, by: 'name' | 'date') => void;

  /*
   ********************************
   *        Window Actions        *
   ********************************
   */
  openEntry: (id: EntryId) => void;
  closeEntry: (id: EntryId) => void;
  minimizeEntry: (id: EntryId) => void;
  toggleMinimize: (id: EntryId) => void;
  toggleMaximize: (id: EntryId) => void;
  toggleSizeToViewport: (id: EntryId) => void;
  pushFocus: (id: EntryId) => void;
  popFocus: () => void;
  resetWindow(id: EntryId): void;
  executeWindowOnUpdateCallback: (id: EntryId) => void;
  executeWindowOnCloseCallback: (id: EntryId) => void;
  executeWindowOnMinimizeCallback: (id: EntryId) => void;
  selectedToClipboard: () => void;
  pasteClipboard: (parentId: EntryId) => void;
}
interface FileSystemState extends StoreState, StoreActions {}

/*
 ***********************************
 *                                 *
 *          Initial State          *
 *                                 *
 ***********************************
 */
const flags = {
  disableSelect: false,
  windowBlur: false,
  isFullscreen: false,
};

const windowState = {
  opened: [],
  focused: [],
  selected: [],
  dragging: [],
  clipboard: [],
  renaming: null,
};

const initialState: StoreState = {
  ...flags,
  ...windowState,
  lookup: new Map([
    [
      'root',
      {
        id: 'root',
        iconPosition: { x: 0, y: 0 },
        defaultWindowSize: DEFAULT_WINDOW_SIZE,
        name: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: null,
        type: 'directory',
        children: ['desktop'],
        disableDelete: true,
        disableCopy: true,
      },
    ],
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
        children: [...applications.keys(), 'test-folder'],
        disableDelete: true,
        disableCopy: true,
      },
    ],
    [
      'test-folder',
      {
        id: 'test-folder',
        iconPosition: { x: 0, y: 0 },
        iconColor: '#fff',
        defaultWindowSize: { width: 500, height: 500 },
        icon: 'folder',
        name: 'TestFolder',
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 'desktop',
        type: 'directory',
        children: ['test-folder2', 'test-folder3'],
        disableDelete: false,
      },
    ],
    [
      'test-folder2',
      {
        id: 'test-folder2',
        iconPosition: { x: 0, y: 0 },
        iconColor: '#fff',
        defaultWindowSize: { width: 500, height: 500 },
        icon: 'folder',
        name: 'TestFolder2',
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 'test-folder',
        type: 'directory',
        children: [],
        disableDelete: false,
      },
    ],
    [
      'test-folder3',
      {
        id: 'test-folder3',
        iconPosition: { x: 0, y: 0 },
        iconColor: '#fff',
        defaultWindowSize: { width: 500, height: 500 },
        icon: 'folder',
        name: 'TestFolder3',
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: 'test-folder',
        type: 'directory',
        children: [],
        disableDelete: false,
      },
    ],
    ...generateAppsFromDefaults(),
  ]),
};

const testState: StoreState = {
  ...flags,
  ...windowState,
  lookup: new Map([
    [
      'root',
      {
        id: 'root',
        iconPosition: { x: 0, y: 0 },
        defaultWindowSize: DEFAULT_WINDOW_SIZE,
        name: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        parentId: null,
        type: 'directory',
        children: [],
        disableDelete: true,
      },
    ],
  ]),
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
    getEntry: (id: EntryId) => {
      const entry = get().lookup.get(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetEntry: Entry with id ${id} not found`);
        return null;
      }
      return entry;
    },
    getOpenedEntries: () => {
      return get().opened;
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

    getIsAncestor: (ancestorId, childId) => {
      function _isAncestor(_ancestorId: EntryId, _childId: EntryId): boolean {
        const entry = get().getEntry(_childId);
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
      const entry = get().getEntry(id);
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
      function getPathHelper(currentId: EntryId) {
        if (currentId === 'root') {
          path = `/${path}`;
          return;
        }
        const entry = get().getEntry(currentId);
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

    getIsIconSelected: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIsIconSelected: Entry with id ${id} not found`);
        return false;
      }
      return entry.isIconSelected ?? false;
    },
    getAllSelectedIds: () => {
      return get().selected;
    },
    getAllSelectedIdsSameParent: (parentId) => {
      const entry = get().getEntry(parentId);
      if (!entry || entry.type !== 'directory') {
        if (DEBUG)
          console.warn(
            `FileSystemStore:GetAllSelectedIdsSameParent: Entry with id ${parentId} not found or not a directory`,
          );
        return [];
      }
      return get().selected.filter((selectedId) => {
        const selectedEntry = get().getEntry(selectedId);
        return selectedEntry?.parentId === parentId;
      });
    },
    getIconPosition: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIconPosition: Entry with id ${id} not found`);
        return null;
      }
      return entry.iconPosition ?? null;
    },

    getIconPositions(parentId) {
      const entry = get().getEntry(parentId);
      if (!entry || entry.type !== 'directory') {
        if (DEBUG)
          console.warn(
            `FileSystemStore:GetIconPositions: Entry with id ${parentId} not found or not a directory`,
          );
        return [];
      }
      const items = [];
      for (const childId of entry.children) {
        const position = get().getIconPosition(childId);
        if (position) items.push({ id: childId, position });
      }
      return items;
    },

    getDisableSelect: () => get().disableSelect,

    getParentId: (id) => {
      return get().getEntry(id)?.parentId ?? null;
    },
    getName: (id) => get().getEntry(id)?.name ?? '',
    getChildren: (id) => {
      const entry = get().getEntry(id);
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
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetDirectory: Entry with id ${id} not found`);
        return null;
      }
      if (entry.type !== 'directory') {
        return null;
      }
      return entry.children.map((childId) => get().getEntry(childId)) as FileSystemEntry[];
    },
    getIsIconDragging: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIsIconDragging: Entry with id ${id} not found`);
        return false;
      }
      return entry.isIconDragging ?? false;
    },
    getIsAnyIconDragging: () => {
      return get().dragging.length > 0;
    },
    getWindowSize: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetWindowSize: Entry with id ${id} not found`);
        return { width: 0, height: 0 };
      }
      const size = entry.windowSize ?? entry.defaultWindowSize ?? { width: 0, height: 0 };
      return {
        width: Math.min(size.width, window.innerWidth),
        height: Math.min(size.height, window.innerHeight - TASKBAR_HEIGHT),
      };
    },
    getDefaultWindowSize: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetDefaultWindowSize: Entry with id ${id} not found`);
        return { width: 0, height: 0 };
      }
      return entry.defaultWindowSize ?? { width: 0, height: 0 };
    },
    getIsIconPositionEmpty: (parentId, position) => {
      const entry = get().getEntry(parentId);
      if (!entry || entry.type !== 'directory') {
        if (DEBUG) console.warn(`FileSystemStore:IsCellEmpty: Entry with id ${parentId} not found`);
        return false;
      }
      // If out of bounds, return false
      const windowSize = get().getWindowSize(parentId);
      if (
        position.x < 0 ||
        position.x > windowSize.width ||
        position.y < 0 ||
        position.y > windowSize.height
      ) {
        return false;
      }
      // Check if there's another icon in the same position
      const adjacentPositions = get().getIconPositions(parentId);
      for (const { id, position: adjacentPosition } of adjacentPositions) {
        if (
          adjacentPosition.x === position.x &&
          adjacentPosition.y === position.y &&
          id !== parentId
        ) {
          return false;
        }
      }
      return true;
    },
    getEmptyIconPosition: (parentId, rowOrColumn = 'column') => {
      const entry = get().getEntry(parentId);
      if (!entry || entry.type !== 'directory') {
        if (DEBUG)
          console.warn(`FileSystemStore:getEmptyIconPosition: Entry with id ${parentId} not found`);
        return null;
      }
      const adjacentPositions = get().getIconPositions(parentId);
      const parentWindowSize = get().getWindowSize(parentId);
      const cellSize = GRID_CELL_SIZE;
      const [parentWidth, parentHeight] = [parentWindowSize.width, parentWindowSize.height];
      const maxCols = Math.floor(parentWidth / cellSize);
      let maxRows = Math.floor(parentHeight / cellSize);
      const occupied = new Set(
        adjacentPositions.map(
          ({ position }) => `${position.x.toString()},${position.y.toString()}`,
        ),
      );

      // Dynamically expand rows if the grid is full
      while (adjacentPositions.length >= maxCols * maxRows) {
        maxRows++;
      }

      const searchOrder = rowOrColumn === 'column' ? [maxCols, maxRows] : [maxRows, maxCols];
      for (let i = 0; i < searchOrder[0]; i++) {
        for (let j = 0; j < searchOrder[1]; j++) {
          const x = rowOrColumn === 'column' ? i * cellSize : j * cellSize;
          const y = rowOrColumn === 'column' ? j * cellSize : i * cellSize;
          if (!occupied.has(`${x.toString()},${y.toString()}`)) {
            return { x, y };
          }
        }
      }

      // We're garaunteed to find an empty position since we expanded the grid
      // If we find ourselves here, we done fucked up.
      if (DEBUG) {
        console.warn(
          `FileSystemStore:getEmptyIconPosition: No empty position found for parentId: ${parentId}`,
        );
      }
      return null;
    },
    getIsOpen: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIsOpen: Entry with id ${id} not found`);
        return false;
      }
      return entry.isOpen ?? false;
    },
    getWindowPosition: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetWindowPosition: Entry with id ${id} not found`);
        return { x: 0, y: 0 };
      }
      return entry.windowPosition ?? { x: 0, y: 0 };
    },
    getOpenedWindowSizesAndPositions: () => {
      const focused = get().focused;
      const items = [];
      for (const id of focused) {
        const size = get().getWindowSize(id);
        const position = get().getWindowPosition(id);
        if (position) items.push({ id, size, position });
      }
      return items;
    },
    getWindowCenterPosition: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetWindowCenterPosition: Entry with id ${id} not found`);
        return { x: 0, y: 0 };
      }
      const [viewportWidth, viewportHeight] = [
        window.innerWidth,
        window.innerHeight - TASKBAR_HEIGHT,
      ];
      const defaultWindowSize = get().getDefaultWindowSize(id);
      return {
        x: (viewportWidth - defaultWindowSize.width) / 2,
        y: (viewportHeight - defaultWindowSize.height) / 2,
      };
    },
    getWindowState: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetWindowState: Entry with id ${id} not found`);
        return null;
      }
      return entry.windowState ?? 'normal';
    },
    getIsWindowFocused: (id) => {
      const isBlurred = get().windowBlur;
      const focused = get().focused;
      if (isBlurred || focused.length === 0) {
        return id === 'desktop';
      }
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetIsWindowFocused: Entry with id ${id} not found`);
        return false;
      }
      return get().focused.at(-1) === id;
    },
    getFocusedWindowId: () => {
      const isBlurred = get().windowBlur;
      const focused = get().focused;
      if (isBlurred || !focused || focused.length === 0) {
        return 'desktop';
      }
      return focused.at(-1)!;
    },
    getFocusStack: () => {
      return get().focused;
    },
    getWindowZIndex: (id) => {
      const entry = get().getEntry(id);
      if (!entry?.isOpen) {
        return 0;
      }

      const index = get().focused.indexOf(id) ?? 0;
      return index + 2;
    },
    getIsWindowMoving: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetIsWindowMoving: Entry with id ${id} not found`);
        return false;
      }
      return entry.isWindowMoving ?? false;
    },
    getIsWindowResizing: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetIsWindowResizing: Entry with id ${id} not found`);
        return false;
      }
      return entry.isWindowResizing ?? false;
    },
    getTransformScale: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetTransformScale: Entry with id ${id} not found`);
        return 1;
      }
      return entry.transformScale ?? 0;
    },
    getIconTransformScale: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetIconTransformScale: Entry with id ${id} not found`);
        return 1;
      }
      return entry.iconTransformScale ?? 1;
    },
    getWillTransform: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:GetWillTransform: Entry with id ${id} not found`);
        return false;
      }
      return entry.willTransform ?? false;
    },
    getContentOpacity: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG) console.warn(`FileSystemStore:getContentOpacity: Entry with id ${id} not found`);
        return 1;
      }
      return entry.contentOpacity ?? 0;
    },
    getIsDisabledResize: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetIsDisabledResize: Entry with id ${id} not found`);
        return false;
      }
      return entry.disableResize ?? false;
    },
    getMaximizedEntry: () => {
      // There should really only be one maximized window at a time,
      // since the maximized entry takes up the entire viewport and prevents
      // interaction with other windows.
      const opened = get().getOpenedEntries();
      for (const id of opened) {
        const entry = get().getEntry(id);
        if (entry?.windowState === 'maximized') {
          return entry;
        }
      }
      return null;
    },
    getIsMaximizedWindowHeaderVisible: () => {
      return get().isMaximizedWindowHeaderVisible ?? false;
    },
    getContextState: () => {
      const contextState = get().contextState;
      return contextState ?? null;
    },
    getIsDisableDelete: (id) => {
      function _isDisableDelete(_id: EntryId): boolean {
        const entry = get().getEntry(_id);
        const isDisabled = entry?.disableDelete ?? false;
        if (isDisabled) {
          return true;
        }
        const children = get().getChildren(_id);
        if (!children) {
          return false;
        }
        for (const childId of children) {
          if (_isDisableDelete(childId)) {
            return true;
          }
        }
        return false;
      }
      return _isDisableDelete(id);
    },
    getIsDisableCopy: (id) => {
      function _isDisableCopy(_id: EntryId): boolean {
        const entry = get().getEntry(_id);
        const isDisabled = entry?.disableCopy ?? false;
        if (isDisabled) {
          return true;
        }
        const children = get().getChildren(_id);
        if (!children) {
          return false;
        }
        for (const childId of children) {
          if (_isDisableCopy(childId)) {
            return true;
          }
        }
        return false;
      }
      return _isDisableCopy(id);
    },
    getCanDeleteSelection: (parentId) => {
      const parent = get().getEntry(parentId);
      if (!parent) {
        return false;
      }
      const selectedIds = get().getAllSelectedIds();
      if (selectedIds.length === 0) {
        return false;
      }
      return selectedIds.every((selectedId) => !get().getIsDisableDelete(selectedId));
    },
    getCanCopySelection: (parentId) => {
      const parent = get().getEntry(parentId);
      if (!parent) {
        return false;
      }
      const selectedIds = get().getAllSelectedIds();
      if (selectedIds.length === 0) {
        return false;
      }
      return selectedIds.every((selectedId) => !get().getIsDisableCopy(selectedId));
    },
    getIsUsingSelectRect: () => {
      return get().isUsingSelectRect ?? false;
    },
    getDropTargetId: () => {
      return get().dropTarget ?? 'desktop';
    },
    getDropTargetIconId: () => {
      return get().dropTargetIcon ?? null;
    },
    getIsDirectory: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetIsIconDirectory: Entry with id ${id} not found`);
        return false;
      }
      return entry.type === 'directory';
    },
    getIconAtPosition: (parentId, position) => {
      const parent = get().getEntry(parentId);
      if (!parent || parent.type !== 'directory') {
        if (DEBUG)
          console.warn(
            `FileSystemStore:GetIconAtPosition: Entry with id ${parentId} not found or not a directory`,
          );
        return null;
      }
      for (const childId of parent.children) {
        const child = get().getEntry(childId)!;
        if (child.iconPosition?.x === position.x && child.iconPosition?.y === position.y) {
          return child;
        }
      }
      return null;
    },
    getDragInitiatorId: () => {
      return get().dragInitiatorId ?? null;
    },
    getIsDragOverFolder: () => {
      return get().isDragOverFolder ?? false;
    },
    getIsDisableMaximize: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:GetIsDisableMaximize: Entry with id ${id} not found`);
        return false;
      }
      return entry.disableMaximize ?? false;
    },
    getIsFullscreen: () => {
      return get().isFullscreen ?? false;
    },
    getIsRenaming: (id) => {
      return get().renaming === id;
    },
    getShouldUpdateName: () => {
      return get().shouldUpdateName ?? false;
    },
    getDirectoryNames: (id) => {
      const entry = get().getEntry(id);
      if (!entry || entry.type !== 'directory') {
        if (DEBUG)
          console.warn(
            `FileSystemStore:GetDirectoryNames: Entry with id ${id} not found or not a directory`,
          );
        return new Set();
      }
      const children = get().getDirectory(id);
      if (!children) {
        return new Set();
      }
      return new Set(children.map((child) => child.name));
    },

    /**
     * Returns a unique name in the directory, appending an index if necessary
     * @param parentId - The id of the parent directory
     * @param name - The name to validate
     * @param exclude - The name to exclude from the validation. Useful in some cases, like renaming
     * @param include - Additional names to check against. Useful when trying to validate names for directory that hasn't finished updating, during copying.
     */
    validateName: ({ parentId, name, exclude, include }) => {
      // Will ensure that the name is unique within the parent directory
      const parent = get().getEntry(parentId);
      if (!parent || parent.type !== 'directory') {
        if (DEBUG && !include?.has(name))
          console.warn(
            `FileSystemStore:ValidateName: Entry with id ${parentId} not found or not a directory`,
          );
        return null;
      }
      const directoryNames = get().getDirectoryNames(parentId);
      if (!directoryNames.has(name) && !include?.has(name)) return name;
      let index = 2;
      let unqiueName = `${name}(${index.toString()})`;
      while (directoryNames.has(unqiueName) || include?.has(unqiueName)) {
        if (unqiueName === exclude) break;
        index++;
        unqiueName = `${name}(${index.toString()})`;
      }
      return unqiueName.slice(0, 26); // 26 character limit for names
    },
    getClipboard: () => {
      return get().clipboard;
    },
    getKeyCommand: () => {
      return get()?.keyCommand ?? null;
    },
    // getters end

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

        // Not dragging, and there's an empty position
        if (get().getIsIconPositionEmpty(entry.parentId!, position)) {
          entry.iconPosition = position;
          return;
        }

        // Otherwise, find an empty position
        const emptyPosition =
          entry.parentId === 'desktop'
            ? get().getEmptyIconPosition(entry.parentId, 'column')
            : get().getEmptyIconPosition(entry.parentId!, 'row');

        if (!emptyPosition) {
          if (DEBUG)
            console.warn(
              'FileSystemStore:SetPosition: No empty position found for parentId:',
              entry.parentId,
            );
          return;
        }
        entry.iconPosition = emptyPosition;
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
        if (isSelected) {
          state.selected.push(id);
        } else {
          state.selected = state.selected.filter((selectedId) => selectedId !== id);
        }
      });
    },
    clearIconSelection: () => {
      set((state) => {
        const selected = state.selected;
        for (const id of selected) {
          const entry = state.lookup.get(id);
          if (entry) {
            entry.isIconSelected = false;
          }
        }
        state.selected = [];
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
        if (isDragging) {
          state.dragging.push(id);
        } else {
          state.dragging = state.dragging.filter((draggingId) => draggingId !== id);
        }
      });
    },
    clearAllIconsDragging: () => {
      set((state) => {
        const dragging = state.dragging;
        for (const id of dragging) {
          const entry = state.lookup.get(id);
          if (entry) {
            entry.isIconDragging = false;
          }
        }
        state.dragging = [];
      });
    },
    setIsOpen: (id, isOpen) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:SetIsOpen: Entry with id ${id} not found`);
          return;
        }
        entry.isOpen = isOpen;
      });
    },
    setWindowState: (id, newState) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:SetWindowState: Entry with id ${id} not found`);
          return;
        }
        entry.windowState = newState;
      });
    },
    setWindowPosition: (id, position) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetWindowPosition: Entry with id ${id} not found`);
          return;
        }
        entry.windowPosition = position;
      });
    },
    blurWindowFocus: (isBlurred) => {
      set((state) => {
        state.windowBlur = isBlurred;
      });
    },
    setIsWindowMoving: (id, isMoving) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetIsWindowMoving: Entry with id ${id} not found`);
          return;
        }
        entry.isWindowMoving = isMoving;
      });
    },
    setIsWindowResizing: (id, isResizing) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetIsWindowResizing: Entry with id ${id} not found`);
          return;
        }
        entry.isWindowResizing = isResizing;
      });
    },
    setTransformScale: (id, scale) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetTransformScale: Entry with id ${id} not found`);
          return;
        }
        entry.transformScale = scale;
      });
    },
    setIconTransformScale: (id, scale) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetIconTransformScale: Entry with id ${id} not found`);
          return;
        }
        entry.iconTransformScale = scale;
      });
    },
    setWillTransform: (id, willTransform) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetWillTransform: Entry with id ${id} not found`);
          return;
        }
        entry.willTransform = willTransform;
      });
    },
    setContentOpacity: (id, opacity) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetWindowOpacity: Entry with id ${id} not found`);
          return;
        }
        entry.contentOpacity = opacity;
      });
    },
    setWindowSize: (id, size) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:SetWindowSize: Entry with id ${id} not found`);
          return;
        }
        entry.windowSize = size;
      });
    },
    setIsMaximizedWindowHeaderVisible: (isVisible) => {
      set((state) => {
        state.isMaximizedWindowHeaderVisible = isVisible;
      });
    },
    setWindowOnUpdateCallback: (id, callback) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetWindowUpdateCallback: Entry with id ${id} not found`);
          return;
        }
        entry.windowOnUpdateCallback = callback;
      });
    },
    setContextState: (contextState) => {
      const { id } = contextState;
      if (!id) return;
      const entry = get().getEntry(id);
      set((state) => {
        if (entry) {
          state.contextState = contextState;
        }
      });
    },
    clearContextState: () => {
      set((state) => {
        state.contextState = undefined;
      });
    },
    setIsUsingSelectRect: (isUsing) => {
      set((state) => {
        state.isUsingSelectRect = isUsing;
      });
    },
    setDropTargetId: (id) => {
      set((state) => {
        state.dropTarget = id;
      });
    },
    setDropTargetIconId: (id) => {
      set((state) => {
        state.dropTargetIcon = id;
        if (id) {
          const entry = get().getEntry(id);
          if (entry) {
            state.isDragOverFolder = entry.type === 'directory';
          }
        } else {
          state.isDragOverFolder = false;
        }
      });
    },
    setDragInitiatorId: (id) => {
      set((state) => {
        state.dragInitiatorId = id;
      });
    },
    setWindowOnCloseCallback: (id, callback) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:SetWindowOnCloseCallback: Entry with id ${id} not found`);
          return;
        }
        entry.windowOnCloseCallback = callback;
      });
    },
    setWindowOnMinimizeCallback: (id, callback) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(
              `FileSystemStore:SetWindowOnMinimizeCallback: Entry with id ${id} not found`,
            );
          return;
        }
        entry.windowOnMinimizeCallback = callback;
      });
    },
    setRenaming: (id) => {
      // debug
      set((state) => {
        state.renaming = id;
      });
    },
    clearRenaming: () => {
      set((state) => {
        state.renaming = null;
        state.shouldUpdateName = true;
      });
    },
    selectAllIcons(parentId) {
      const parent = get().getEntry(parentId);
      if (!parent || parent.type !== 'directory') {
        if (DEBUG)
          console.warn(
            `FileSystemStore:SelectAllIcons: Entry with id ${parentId} not found or not a directory`,
          );
        return;
      }
      set((state) => {
        for (const childId of parent.children) {
          const entry = state.lookup.get(childId);
          if (entry) {
            entry.isIconSelected = true;
            state.selected.push(childId);
          }
        }
      });
    },
    clearKeyCommand: () => {
      set((state) => {
        state.keyCommand = null;
      });
    },
    // setters end

    /*
     ********************************
     *        Print Utilities       *
     ********************************
     */
    printTree: (id) => {
      const visited = new Set();
      function printTreeHelper(entryId: EntryId, indent = '') {
        if (visited.has(entryId)) {
          return;
        }
        visited.add(entryId);
        const entry = get().getEntry(entryId);
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
      const directory = get().getEntry(id);
      if (!directory) {
        if (DEBUG) console.warn(`FileSystemStore:PrintDirectory: Entry with id ${id} not found`);
        return;
      }
      if (directory.type !== 'directory') {
        console.log(`${directory.name}.${directory.extension}`);
        return;
      }

      for (const childId of directory.children) {
        const child = get().getEntry(childId)!;
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
      const parentEntry = get().getEntry(parentId);
      if (!parentEntry || parentEntry.type !== 'directory') {
        if (DEBUG)
          console.warn(
            `FileSystemStore:CreateEntry: Parent with id ${parentId} not found or not a directory`,
          );
        return null;
      }

      // If over 1000 lookup entries, don't create any more. Will change later for something more elegant,
      // but for now, let's save the user from themselves.
      if (get().lookup.size >= 1000) {
        if (DEBUG) console.warn(`FileSystemStore:CreateEntry: Maximum entries reached`);
        return null;
      }

      // Throw a warning if extension is included in name
      if (name.includes('.') && DEBUG)
        console.warn(
          `FileSystemStore:CreateEntry: Don't include the extension in name: '${name}'. Use the 'extension' parameter instead`,
        );

      const emptyPosition =
        parentId === 'desktop'
          ? get().getEmptyIconPosition(parentId, 'column')
          : get().getEmptyIconPosition(parentId, 'row');

      if (!emptyPosition) {
        if (DEBUG)
          console.warn(
            `FileSystemStore:CreateEntry: No empty position found for parentId: ${parentId}`,
          );
        return null;
      }

      const id = uuidv4();
      const uniqueName = get().validateName({ parentId, name })!;
      const common = {
        name: uniqueName,
        id,
        iconPosition: emptyPosition,
        iconColor: '#fff',
        disableDelete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        iconSize: 64,
        parentId,
        content: content ?? '',
        defaultWindowSize: { width: 400, height: 500 },
      };
      const entry: FileSystemEntry =
        type === 'file'
          ? {
              ...common,
              type: 'file',
              icon: 'file',
              extension: extension ?? '',
            }
          : {
              ...common,
              type: 'directory',
              icon: 'folder',
              createdAt: new Date(),
              updatedAt: new Date(),
              parentId,
              children: [],
            };

      let didCreate = false;
      set((state) => {
        state.lookup.set(id, entry);
        const parent = state.lookup.get(parentId) as Directory;
        if (!parent) {
          if (DEBUG)
            console.warn(`FileSystemStore:CreateEntry: Parent with id ${parentId} not found`);
          didCreate = false;
          return;
        }
        parent.children.push(id);
        state.lookup.set(parentId, parent);
        didCreate = true;
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
        function deleteEntryHelper(entryId: EntryId): boolean {
          const entry = state.lookup.get(entryId);
          if (!entry) {
            if (DEBUG)
              console.warn(`FileSystemStore:DeleteEntry: Entry with id ${entryId} not found`);
            return false;
          }
          // Close the entry if it's open
          if (get().getIsOpen(entry.id)) {
            get().closeEntry(entry.id);
          }
          if (entry.type === 'directory') {
            const dir = entry as Directory;
            for (const childId of dir.children) {
              deleteEntryHelper(childId);
            }
            dir.children = [];
          }

          // Delete entry from parent table
          const parent = state.lookup.get(entry.parentId!) as Directory;
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
        return null;
      }
      let newName = null;
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
        if (name === '') {
          if (DEBUG) console.warn(`FileSystemStore:RenameEntry: Name cannot be empty`);
          state.shouldUpdateName = false;
          return;
        }
        if (entry.name !== name) {
          const uniqueName = get().validateName({
            parentId: entry.parentId!,
            name,
            exclude: entry.name,
          })!;
          entry.name = uniqueName;
          entry.updatedAt = new Date();
          newName = uniqueName;
        }
        state.shouldUpdateName = false;
      });
      return newName;
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
    moveEntry: (sourceId, targetParentId) => {
      if (sourceId === 'root') {
        if (DEBUG) console.warn(`FileSystemStore:MoveEntry: Cannot move root directory`);
        return;
      }

      if (sourceId === targetParentId) {
        if (DEBUG) console.warn(`FileSystemStore:MoveEntry: Cannot move entry into itself`);
        return;
      }

      if (get().getIsAncestor(sourceId, targetParentId)) {
        if (DEBUG)
          console.warn(
            `FileSystemStore:MoveEntry: Cannot move entry with id ${sourceId} into its descendant with id ${targetParentId}`,
          );
        return;
      }

      set((state) => {
        const sourceEntry = state.lookup.get(sourceId);
        if (!sourceEntry) {
          if (DEBUG) console.warn(`FileSystemStore:MoveEntry: Entry with id ${sourceId} not found`);
          return;
        }

        const targetParentDir = state.lookup.get(targetParentId) as Directory;
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
        const oldParent = state.lookup.get(sourceEntry.parentId!) as Directory;
        oldParent.children = oldParent.children.filter((childId) => childId !== sourceId);

        // Add entry to new parent
        targetParentDir?.children.push(sourceId);

        // Update parentId of entry
        sourceEntry.parentId = targetParentId;

        // Set icon scale to 1, to avoid animating in. I mostly want an abrupt drop, not a smooth transition here
        sourceEntry.iconTransformScale = 1;

        // If the name of the entry already exists in the parent id, give the entry a unqiue name
        sourceEntry.name = get().validateName({
          parentId: targetParentId,
          name: sourceEntry.name,
        })!;
      });
    },

    /*
     ********************************
     *          Copy Entry          *
     ********************************
     */
    copyEntry(sourceId, targetParentId) {
      let copyEntryId: EntryId | null = null;
      // No copying root
      if (sourceId === 'root') {
        if (DEBUG) console.warn(`FileSystemStore:CopyEntry: Cannot copy root directory`);
        return null;
      }

      set((state) => {
        const sourceEntry = state.getEntry(sourceId);
        const targetParentDir = state.getEntry(targetParentId) as Directory;

        if (!sourceEntry) {
          if (DEBUG) console.warn(`FileSystemStore:CopyEntry: Entry with id ${sourceId} not found`);
          return;
        }
        if (!targetParentDir || targetParentDir.type !== 'directory') {
          if (DEBUG)
            console.warn(`FileSystemStore:CopyEntry: Parent with id ${targetParentId} not found`);
          return;
        }

        // Collect copies into a new map
        const collectedCopies = new Map<EntryId, FileSystemEntry>();
        copyEntryId = gatherCopies(sourceId, targetParentId);

        // No need to do anything else if no copies were successful
        if (!copyEntryId) return;

        // Update the state with the collected copies
        for (const [newId, entry] of collectedCopies) {
          const parent = state.lookup.get(entry.parentId!) as Directory;
          if (parent && parent.type === 'directory') {
            parent.children.push(newId);
          }
          state.lookup.set(newId, entry);
        }

        // helper to get all the copies
        function gatherCopies(_sourceId: EntryId, _parentId: EntryId): EntryId | null {
          const source = state.getEntry(_sourceId)!;
          if (!source) return null;

          // Create a shallow copy
          const newId = uuidv4();
          const shallowCopy = {
            ...source,
            id: newId,
            parentId: _parentId,
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          // If directory, gather child copies
          if (shallowCopy.type === 'directory') {
            const srcDir = source as Directory;
            const copyDir = shallowCopy as Directory;
            const newChildren: EntryId[] = [];

            for (const childId of srcDir.children) {
              const childCopyId = gatherCopies(childId, newId);
              if (childCopyId) {
                newChildren.push(childCopyId);
              }
            }
            copyDir.children = newChildren;
          }

          // Stash the copy in the collected copies map
          collectedCopies.set(newId, shallowCopy);
          return newId;
        }
      });

      // Rename the base copy entry folder.
      // We're doing it out here because we don't want to rename every child, just the copy that is in the same
      // directory as the original. Also move the position over so it doesn't copy directly on top of the original
      set((state) => {
        if (!copyEntryId) return;
        const copyEntry = state.getEntry(copyEntryId)!;
        copyEntry.name = state.validateName({
          parentId: targetParentId,
          name: copyEntry.name,
        })!;

        // Move the copy over a bit
        const shiftDirection = copyEntry.parentId === 'desktop' ? 'column' : 'row';
        copyEntry.iconPosition = state.getEmptyIconPosition(copyEntry.parentId!, shiftDirection)!;
      });

      return copyEntryId;
    },

    /*
     ********************************
     *          Open Entry          *
     ********************************
     */
    openEntry: (id) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:OpenEntry: Entry with id ${id} not found`);
          return;
        }
        if (get().getIsOpen(id)) {
          return;
        }
        entry.isOpen = true;
        state.opened.push(id);
        state.focused.push(id);

        // Center the window position
        // with slight offsets each time
        const offset = Math.floor(Math.random() * 50);
        const addOrSubtract = Math.random() < 0.5 ? -1 : 1;
        const [winWidth, winHeight] = [window.innerWidth, window.innerHeight - TASKBAR_HEIGHT];
        const isWidthBiggerThanViewport = entry.defaultWindowSize.width > winWidth;
        const pos = {
          x: isWidthBiggerThanViewport
            ? 0
            : winWidth / 2 - entry.defaultWindowSize.width / 2 + offset * addOrSubtract,
          y: winHeight / 2 - entry.defaultWindowSize.height / 2 + offset * addOrSubtract,
        };
        state.lookup.get(id)!.windowPosition = pos;

        // Turn off global blur
        state.windowBlur = false;
      });
    },
    /*
     ********************************
     *          Close Entry         *
     ********************************
     */
    closeEntry: (id) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:CloseEntry: Entry with id ${id} not found`);
          return;
        }
        entry.isOpen = false;
        state.opened = state.opened.filter((openedId) => openedId !== id);
        state.focused = state.focused.filter((focusedId) => focusedId !== id);
        entry.windowState = 'normal';

        // Set window back to default window size
        const defaultWindowSize = get().getDefaultWindowSize(id);
        entry.windowSize = defaultWindowSize;

        // if there's a close callback, call it
        if (entry.windowOnCloseCallback) {
          entry.windowOnCloseCallback();
        }
        // clear callbacks
        entry.windowOnUpdateCallback = undefined;
        entry.windowOnCloseCallback = undefined;
        entry.windowOnMinimizeCallback = undefined;
      });
    },

    /*
     ********************************
     *          Sort Icons          *
     ********************************
     */
    sortIcons: (parentId, sortType) => {
      set((state) => {
        const parent = state.lookup.get(parentId) as Directory;
        if (!parent) {
          if (DEBUG)
            console.warn(
              `FileSystemStore:SortIcons: Entry with id ${parentId} not found or not a directory`,
            );
          return;
        }
        const children = parent.children.map((childId) => state.lookup.get(childId)!);
        if (sortType === 'name') {
          children.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortType === 'date') {
          children.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        }

        const cellSize = GRID_CELL_SIZE;
        const parentWindowSize = get().getWindowSize(parentId);
        const [parentWidth, parentHeight] = [parentWindowSize.width, parentWindowSize.height];
        const maxCols = Math.floor(parentWidth / cellSize);
        let maxRows = Math.floor(parentHeight / cellSize);
        while (children.length >= maxCols * maxRows) {
          maxRows++;
        }
        let col = 0;
        let row = 0;
        for (const child of children) {
          child.iconPosition = { x: col * cellSize, y: row * cellSize };
          row++;
          if (row >= maxRows) {
            row = 0;
            col++;
          }
        }
      });
    },

    /*
     ********************************
     *         Window State         *
     ********************************
     */
    minimizeEntry: (id) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:MinimizeEntry: Entry with id ${id} not found`);
          return;
        }
        entry.windowState = 'minimized';

        // Remove focus
        state.focused = state.focused.filter((focusedId) => focusedId !== id);

        // Set the transform scale
        entry.transformScale = 0;

        // if there's a minimize callback, call it
        if (entry.windowOnMinimizeCallback) {
          entry.windowOnMinimizeCallback();
        }
      });
    },
    toggleMinimize: (id) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:ToggleMinimizeEntry: Entry with id ${id} not found`);
          return;
        }
        entry.windowState = entry.windowState === 'minimized' ? 'normal' : 'minimized';

        // handle focus
        if (entry.windowState === 'minimized') {
          state.focused = state.focused.filter((focusedId) => focusedId !== id);
        } else {
          const focused = state.focused.filter((openedId) => openedId !== id);
          focused.push(id);
          state.focused = focused;
          state.windowBlur = false;
        }

        // Set the transform scale
        entry.transformScale = entry.windowState === 'minimized' ? 0 : 1;

        // if there's a minimize callback, call it
        if (entry.windowState === 'minimized' && entry.windowOnMinimizeCallback) {
          entry.windowOnMinimizeCallback();
        }
      });
    },
    toggleMaximize: (id) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:ToggleMaximizeEntry: Entry with id ${id} not found`);
          return;
        }

        const newState = entry.windowState === 'maximized' ? 'normal' : 'maximized';

        // handle focus
        state.focused = state.focused.filter((focusedId) => focusedId !== id);
        state.focused.push(id);

        // Set position and scale
        // Maximized windows will take up the entire viewport. Restored windows
        // can be positioned in the center, reverting to their default size
        const [winWidth, winHeight] = [window.innerWidth, window.innerHeight];

        // Normal to max
        if (newState === 'maximized') {
          entry.windowPosition = { x: 0, y: 0 };
          entry.windowSize = { width: winWidth, height: winHeight };

          // Start with maximized header not visible
          state.isMaximizedWindowHeaderVisible = false;

          // If another window is maximized, restore it
          const maximized = get().getMaximizedEntry();
          if (maximized) {
            const defaultSize = get().getDefaultWindowSize(maximized.id);
            const center = {
              x: winWidth / 2 - defaultSize.width / 2,
              y: winHeight / 2 - defaultSize.height / 2,
            };
            const maximizedEntry = state.lookup.get(maximized.id)!;
            maximizedEntry.windowPosition = center;
            maximizedEntry.windowSize = defaultSize;
            maximizedEntry.windowState = 'normal';
          }

          // Set the full screen flag
          state.isFullscreen = true;
        }
        // Max back to normal
        else if (newState === 'normal') {
          const defaultSize = get().getDefaultWindowSize(id);
          const center = {
            x: winWidth / 2 - defaultSize.width / 2,
            y: winHeight / 2 - defaultSize.height / 2,
          };
          entry.windowPosition = center;
          entry.windowSize = defaultSize;
          state.isFullscreen = false;
        }

        entry.windowState = newState;
      });
    },
    toggleSizeToViewport(id) {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG)
            console.warn(`FileSystemStore:ToggleSizeToViewport: Entry with id ${id} not found`);
          return;
        }
        const [viewportWidth, viewportHeight] = [
          window.innerWidth,
          window.innerHeight - TASKBAR_HEIGHT + 10,
        ];
        const windowSize = get().getWindowSize(id);
        const defaultSize = get().getDefaultWindowSize(id);
        const centerPosition = get().getWindowCenterPosition(id);

        // Toggle between viewport size and default size
        if (windowSize.width === viewportWidth && windowSize.height === viewportHeight) {
          entry.windowSize = defaultSize;
          entry.windowPosition = centerPosition;
        } else {
          entry.windowSize = { width: viewportWidth, height: viewportHeight };
          entry.windowPosition = { x: 0, y: 0 };
        }
      });
    },
    pushFocus: (id) => {
      const entry = get().getEntry(id);
      if (!entry?.isOpen) {
        return;
      }

      set((state) => {
        // If the window is already focused, do nothing
        if (state.focused.at(-1) === id) {
          state.windowBlur = false;
          return;
        }

        // Push push id focus to the back
        const focused = state.focused.filter((openedId) => openedId !== id);
        focused.push(id);
        state.focused = focused;
        state.windowBlur = false;
      });
    },
    popFocus: () => {
      set((state) => {
        const focused = state.focused;
        focused.pop();
        state.focused = focused;
        state.windowBlur = focused.length === 0;
      });
    },
    executeWindowOnUpdateCallback: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(`FileSystemStore:executeWindowCallbac: Entry with id ${id} not found`);
        return;
      }
      const callback = entry.windowOnUpdateCallback;
      if (callback) {
        callback();
      }
    },
    executeWindowOnCloseCallback: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(
            `FileSystemStore:executeWindowOnCloseCallbac: Entry with id ${id} not found`,
          );
        return;
      }
      const callback = entry.windowOnCloseCallback;
      if (callback) {
        callback();
      }
    },
    executeWindowOnMinimizeCallback: (id) => {
      const entry = get().getEntry(id);
      if (!entry) {
        if (DEBUG)
          console.warn(
            `FileSystemStore:executeWindowOnMinimizeCallback: Entry with id ${id} not found`,
          );
        return;
      }
      const callback = entry.windowOnMinimizeCallback;
      if (callback) {
        callback();
      }
    },
    resetWindow: (id) => {
      set((state) => {
        const entry = state.lookup.get(id);
        if (!entry) {
          if (DEBUG) console.warn(`FileSystemStore:ResetWindow: Entry with id ${id} not found`);
          return;
        }
        entry.windowState = 'normal';
        entry.windowPosition = get().getWindowCenterPosition(id);
        entry.windowSize = get().getDefaultWindowSize(id);
        console.log(entry.windowSize);
      });
    },
    selectedToClipboard: () => {
      set((state) => {
        state.clipboard = [...state.selected];
      });
    },
    pasteClipboard: (parentId) => {
      const clipboard = get().clipboard;
      const lookup = get().lookup;
      const copyEntry = get().copyEntry;

      if (clipboard.length === 0) {
        return;
      }

      // If over 1000 total lookup items, don't paste
      if (lookup.size + clipboard.length > 1000) {
        if (DEBUG)
          console.warn(
            `FileSystemStore:PasteClipboard: Cannot paste. Would exceed 1000 total items`,
          );
        return;
      }
      for (const id of clipboard) {
        if (!get().getIsDisableCopy(id)) {
          copyEntry(id, parentId);
        }
      }
    },

    /*
     ********************************
     *       Keyboard Commands      *
     ********************************
     */
    setKeyCommand: (event) => {
      set((state) => {
        // Do this to retrigger whatever component is listening to the keyCommand state
        state.keyCommand = null;

        if (event.metaKey && event.key === 'a') {
          state.keyCommand = 'select-all';
        } else if (event.metaKey && event.key === 'c') {
          state.keyCommand = 'copy';
        } else if (event.metaKey && event.key === 'v') {
          state.keyCommand = 'paste';
        }
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

    resetForTest: () => {
      set(initiateState(testState));
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
    // Remove things that may mess up immer state, like lazy loaded components,
    // but otherwise fit with the state.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { component, menubarOptions, contextMenuOptions, ...app } = value;
    apps.set(key, app as File);
  }
  return apps;
}

function initiateState(state: StoreState): StoreState {
  /*
   ********************************
   *        Icon Positions        *
   ********************************
   */
  for (const dir of state.lookup.values()) {
    if (dir.type !== 'directory' || !dir.defaultWindowSize) {
      continue;
    }

    let column = 0;
    let row = 0;
    for (const childId of dir.children) {
      const child = state.lookup.get(childId);
      if (!child) {
        // This happens when we included a child in a directory children, but it doesn't exist in the lookup
        console.warn(
          `FileSystemStore:InitiateState: Child with id ${childId} not found. Did you forget to add it to the lookup?`,
        );
        continue;
      }
      const cell = GRID_CELL_SIZE;
      let x = cell * column;
      let y = cell * row;

      if (y > dir.defaultWindowSize.height) {
        y = 0;
        x += cell;
        column += 1;
        row = 0;
      }

      child.iconPosition = { x, y };
      row += 1;
    }
  }

  return state;
}

export default useFileSystemStore;
