import { iconsPath, appDirectory, DefaultApp } from '@/constants';
import { ICON_SIZE } from '@/themes';
import { type FileInfo, Position, Window } from '@/types';

export const selectionIntersectsElement = (selection: Window, element: Position): boolean => {
  if (
    element.x + ICON_SIZE + 20 < selection.position.x ||
    element.y + ICON_SIZE + 20 < selection.position.y ||
    element.x > selection.position.x + selection.size.width - 14 ||
    element.y > selection.position.y + selection.size.height - 14
  ) {
    return false;
  }
  return true;
};

export function parseFileName(filePath: string): string {
  // Remove trailing slash
  let path = filePath;
  if (path.at(-1) === '/') {
    path = path.slice(0, -1);
  }

  let fileName = path.split('/').at(-1) ?? '';
  if (fileName === '') {
    fileName = path;
  }

  // if has extension, remove it
  fileName = fileName.split('.').length > 1 ? fileName.split('.').slice(0, -1).join('.') : fileName;
  return fileName;
}

export function parseParentPath(filePath: string): string {
  let path = filePath;
  if (path === '/') {
    return '';
  }
  if (path.at(-1) === '/') {
    path = path.slice(0, -1);
  }

  return path.split('/').slice(0, -1).join('/') || '/';
}

export function normalizePath(filePath: string): string {
  let path: string = filePath;
  path = path.endsWith('/') ? path.slice(0, -1) : path;
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }
  return path;
}

export function parseFileExt(filePath: string): string {
  return filePath.search(/\.[\da-z]+$/i) === -1 ? '' : filePath.split('.').at(-1) ?? '';
}

export function parseFileInfo(filePath: string): FileInfo {
  if (filePath === '/') {
    return {
      fileName: '',
      fileExt: '',
      icon: '',
    };
  }
  const fileName = parseFileName(filePath);
  const fileExt = parseFileExt(filePath);

  const iconName = appDirectory.get(fileExt)?.icon ?? 'default';
  const icon = `${iconsPath}/${iconName}.png`;
  const component = appDirectory.get(fileExt)?.component ?? DefaultApp;

  return {
    fileName,
    fileExt,
    icon,
    component,
  };
}

export const splitPath = (path: string): string[] => ['/', ...path.split('/').filter(Boolean)];

export const getParentPath = (path: string): string => {
  const components = splitPath(path);
  const parentPath = components.slice(0, -1).join('');
  return parentPath === '' ? '/' : parentPath;
};
