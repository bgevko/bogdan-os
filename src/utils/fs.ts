import { ICON_SIZE } from '@/components/system/fs/fs-icon';
import { type Position, Window } from '@/types/units';

const selectionIntersectsElement = (selection: Window, element: Position): boolean => {
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

export default selectionIntersectsElement;
