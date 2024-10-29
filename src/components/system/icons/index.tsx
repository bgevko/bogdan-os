import React, { useState, useEffect } from 'react';

import cn from '@/utils/format';

interface DynamicIconProps {
  iconName: string;
  size?: number;
  color?: string;
  shadow?: boolean;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  iconName,
  size = 64,
  color = 'white',
  shadow = true,
}) => {
  const [Icon, setIcon] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    let isMounted = true;

    (
      import(`@/components/system/icons/assets/${iconName}.svg?react`) as Promise<{
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

export default DynamicIcon;
