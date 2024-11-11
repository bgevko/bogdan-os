/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

import cn from '@/utils/format';

const CARD_WIDTH = 100;
const CARD_HEIGHT = 145;

interface CardIconProps {
  iconName: string;
  isFlipped?: boolean;
  color?: string;
  shadow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const CardIcon: React.FC<CardIconProps> = ({
  iconName,
  isFlipped,
  color = 'white',
  shadow = false,
  className,
  style,
}) => {
  const [Icon, setIcon] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);
  useEffect(() => {
    const icon = isFlipped ? 'back' : iconName;
    let isMounted = true;
    (
      import(`@/components/apps/solitaire/assets/${icon}.svg?react`) as Promise<{
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
        console.error(`Icon "${icon}" not found.`, error);
      });
    return () => {
      isMounted = false;
    };
  }, [isFlipped, iconName]);
  if (!Icon) return null;
  return (
    <Icon
      className={cn(shadow && 'icon-shadow', className)}
      fill={color}
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      style={style}
    />
  );
};

interface CardProps {
  value: number;
  offsetX: number;
  offsetY: number;
  className?: string;
  onDoubleClick?: () => void;
  handleFlip?: () => void;
  onDragTableauStart?: (event: React.DragEvent) => void;
}

const CardBase = ({
  value,
  offsetX = 0,
  offsetY = 0,
  className,
  onDoubleClick,
  handleFlip,
  onDragTableauStart,
}: CardProps): React.ReactElement => {
  const isFlipped = value < 0;

  return (
    <span
      draggable
      onDoubleClick={() => onDoubleClick?.()}
      onClick={isFlipped ? () => handleFlip?.() : undefined}
      onDragStart={(event) => onDragTableauStart?.(event)}
    >
      <CardIcon
        style={{
          left: `${offsetX.toString()}px`,
          top: `${offsetY.toString()}px`,
        }}
        iconName={value.toString()}
        isFlipped={isFlipped}
        className={className}
      />
    </span>
  );
};

const Card = React.memo(CardBase);

export default Card;
