import { ICON_SIZE } from '@/themes';
import { Position, SizePos } from '@/types';

export const selectionIntersectsElement = (selection: SizePos, element: Position): boolean => {
  if (
    element.x + ICON_SIZE.width + 20 < selection.position.x ||
    element.y + ICON_SIZE.height + 20 < selection.position.y ||
    element.x > selection.position.x + selection.size.width - 14 ||
    element.y > selection.position.y + selection.size.height - 14
  ) {
    return false;
  }
  return true;
};

interface FilePathTokens {
  parent: string;
  name: string;
  ext: string;
}

function tokenizePath(path: string): FilePathTokens {
  const regex = /([^/]\w+)\.*(\w+)*/g;
  const matches: string[] = [];
  let match = regex.exec(path);
  const tokens: FilePathTokens = { parent: '', name: '', ext: '' };

  while (match !== null) {
    matches.push(match[1]);
    if (match[2]) {
      tokens.ext = match[2];
    }
    match = regex.exec(path);
  }

  if (matches.length === 0) {
    return tokens;
  }
  if (matches.length === 1) {
    tokens.parent = '/';
    tokens.name = matches[0];
    return tokens;
  }

  tokens.name = matches.pop() ?? '';
  tokens.parent = `/${matches.join('/')}`;

  return tokens;
}

export function parseFileName(filePath: string): string {
  return tokenizePath(filePath).name;
}

export function parseParentPath(filePath: string): string {
  return tokenizePath(filePath).parent;
}

export function parseFileExt(filePath: string): string {
  return tokenizePath(filePath).ext;
}

export function parseFullFileName(filePath: string): string {
  const { name, ext } = tokenizePath(filePath);
  return ext ? `${name}.${ext}` : name;
}

export const splitPath = (path: string): string[] => ['/', ...path.split('/').filter(Boolean)];

export function normalizePath(filePath: string): string {
  /* Normlize to ensure always a consistent path format
   * All paths should start with a leading slash
   * No path should end with a trailing slash
   */
  let path: string = filePath;
  path = path.endsWith('/') ? path.slice(0, -1) : path;
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }
  return path;
}
