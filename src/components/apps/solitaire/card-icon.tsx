import React, { useEffect, useState } from 'react';

import cn from '@/utils/format';

interface CardIconProps {
  iconName: string;
  color?: string;
  shadow?: boolean;
}
const CardIcon: React.FC<CardIconProps> = ({ iconName, color = 'white', shadow = false }) => {
  const [Icon, setIcon] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);
  useEffect(() => {
    let isMounted = true;
    (
      import(`@/components/apps/solitaire/assets/${iconName}.svg?react`) as Promise<{
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
  return (
    <Icon
      className={cn(shadow && 'icon-shadow', 'border-shadow')}
      fill={color}
      width={112}
      height={163}
    />
  );
};

export default CardIcon;
