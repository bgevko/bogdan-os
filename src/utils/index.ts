import { lazy } from 'react';

export function getLazyIcon(
  iconName: string,
): React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>> {
  if (!iconName) {
    return lazy(
      () => import('@/system/dynamic-icons/assets/file.svg?react'),
    ) as React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>;
  }
  return lazy(
    () =>
      import(`@/system/dynamic-icons/assets/${iconName}.svg?react`).catch((error: unknown) => {
        // eslint-disable-next-line no-console
        console.error(`Icon "${iconName}" not found.`, error);
      }) as Promise<{ default: React.FC<React.SVGProps<SVGSVGElement>> }>,
  );
}

export const getEventTargetDataId = (event: React.MouseEvent): string => {
  let target = event.target as HTMLElement;
  let dataId;
  while (!dataId) {
    dataId = target.dataset.id;
    target = target.parentElement!;
  }
  return dataId;
};
