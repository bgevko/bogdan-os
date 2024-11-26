import React, { useState, useEffect } from 'react';

import { getProcessOptions } from '@/static';
import useFsStore from '@/stores/use-fs-store';
import cn from '@/utils/format';

interface DynamicIconProps {
  path: string;
  size?: number;
  color?: string;
  shadow?: boolean;
}

const DynamicIcons: React.FC<DynamicIconProps> = ({
  path,
  size = 64,
  color = 'white',
  shadow = true,
}) => {
  const isDir = useFsStore((state) => state.isDir);
  const options = getProcessOptions(path, isDir(path));
  const { iconName, iconColor } = options;

  color = iconColor ?? color;

  const [Icon, setIcon] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    let isMounted = true;
    (
      import(`@/components/system/dynamic-icons/assets/${iconName}.svg?react`) as Promise<{
        default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      }>
    )
      .then((module) => {
        if (isMounted) {
          setIcon(() => module.default);
        }
      })
      .catch((error: unknown) => {
        // eslint-disable-next-line no-console
        console.error(`Icon "${iconName}" not found.`, error);
      });

    return () => {
      isMounted = false;
    };
  }, [iconName]);

  if (!Icon) return null;

  return <Icon className={cn(shadow && 'icon-shadow')} width={size} height={size} fill={color} />;
};

interface DynamicIconsByNameProps {
  iconName: string;
  size?: number;
  color?: string;
  shadow?: boolean;
}
export const DynamicIconsByName: React.FC<DynamicIconsByNameProps> = ({
  iconName,
  size = 64,
  color = 'white',
  shadow = true,
}) => {
  const [Icon, setIcon] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);
  useEffect(() => {
    let isMounted = true;
    (
      import(`@/components/system/dynamic-icons/assets/${iconName}.svg?react`) as Promise<{
        default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      }>
    )
      .then((module) => {
        if (isMounted) {
          setIcon(() => module.default);
        }
      })
      .catch((error: unknown) => {
        // eslint-disable-next-line no-console
        console.error(`Icon "${iconName}" not found.`, error);
      });
    return () => {
      isMounted = false;
    };
  }, [iconName]);
  if (!Icon) return null;
  return <Icon className={cn(shadow && 'icon-shadow')} width={size} height={size} fill={color} />;
};

export default DynamicIcons;
