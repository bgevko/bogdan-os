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
        console.error(`Icon "${iconName}" not found.`, error);
      }) as Promise<{ default: React.FC<React.SVGProps<SVGSVGElement>> }>,
  );
}

export const getEventTargetDataId = (event: React.MouseEvent): string => {
  let target = event.target as HTMLElement;
  let dataId;
  while (!dataId) {
    dataId = target.dataset.id;
    target = assertNotNull(target.parentElement);
  }
  return dataId;
};

export const playSound = (soundTitle: string, volume = 0.5): void => {
  const audio = new Audio(`/sounds/${soundTitle}.wav`);
  audio.volume = volume;
  audio.play().catch((error: unknown) => {
    console.warn('Error playing sound:', error);
  });
};

export function assertNotNull<T>(value: T | null, errMsg?: string): T {
  if (value === null) {
    const errStr = errMsg ?? 'Value is null.';
    throw new Error(errStr);
  }
  return value;
}

export function assertDefined<T>(value: T | undefined, errMsg?: string): T {
  if (value === undefined) {
    const errStr = errMsg ?? 'Value is undefined.';
    throw new Error(errStr);
  }
  return value;
}

export function assertPop<T>(source: T[], errMsg?: string): T {
  if (source.length === 0) {
    throw new Error(errMsg ?? 'Cannot pop from an empty array.');
  }
  const value = source.pop();

  if (value === undefined) {
    throw new Error(errMsg ?? 'Popped value is undefined.');
  }
  return value;
}
