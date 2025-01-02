import {
  type ContextMenuItems,
  ContextMenuItem,
  ContextMenuCategory,
} from '@/system/file-system/store';

// Merge two context menu options. items2 will append or override items1.
// The intent is to merge really common options, like open / close etc. with
// more specific options, if they exist.
export function mergeContextMenuItems(
  items1: ContextMenuItems,
  items2: ContextMenuItems,
): ContextMenuItems {
  const merged: ContextMenuItems = new Map();

  const categories = new Set<ContextMenuCategory>([...items1.keys(), ...items2.keys()]);
  for (const category of categories) {
    const categoryItems1 = items1.get(category);
    const categoryItems2 = items2.get(category);
    const mergedCategoryItems = mergeCategoryItems(categoryItems1, categoryItems2);
    merged.set(category, mergedCategoryItems);
  }

  return merged;
}

export function mergeCategoryItems(
  item1?: ContextMenuItem,
  item2?: ContextMenuItem,
): ContextMenuItem {
  const mergedCategoryItems: ContextMenuItem = new Map();

  // Add all actions from item1
  if (item1) {
    for (const [key, action] of item1.entries()) {
      mergedCategoryItems.set(key, action);
    }
  }

  // Add all actions from item2
  if (item2) {
    for (const [key, action] of item2.entries()) {
      mergedCategoryItems.set(key, action);
    }
  }
  return mergedCategoryItems;
}
