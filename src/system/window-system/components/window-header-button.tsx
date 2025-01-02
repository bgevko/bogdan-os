import { ReactElement, Suspense, useEffect, useMemo, useState } from 'react';

import { getLazyIcon } from '@/utils';
import cn from '@/utils/format';

interface WindowHeaderButtonProps {
  iconName: string;
  iconSize: number;
  iconColor?: string;
  onClick: (event: React.MouseEvent) => void;
  onContextMenu?: (event: React.MouseEvent) => void;
  dataTestId?: string;
  buttonColor: string;
  showIcons: boolean;
  disabled?: boolean;
}

const WindowHeaderButton = ({
  iconName,
  iconSize,
  iconColor,
  onClick,
  onContextMenu,
  dataTestId,
  buttonColor,
  showIcons,
  disabled,
}: WindowHeaderButtonProps): ReactElement => {
  const [buttonDown, setButtonDown] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const headerButtonSize = 'w-4 h-4'; // 14px hitbox
  const innerButtonSize = 'w-3 h-3'; // 12px visible button

  const LazyIcon = useMemo(() => getLazyIcon(iconName), [iconName]);

  useEffect(() => {
    const handleMouseUp = () => {
      setMouseDown(false);
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseDown]);

  return (
    <button
      type="button"
      data-testid={dataTestId}
      className={cn(
        'flex items-center justify-center cursor-default',
        headerButtonSize,
        'hover:brightness-90',
      )}
      onMouseDown={(event: React.MouseEvent) => {
        event.stopPropagation();
        setButtonDown(true);
        setMouseDown(true);
      }}
      onMouseUp={() => {
        setButtonDown(false);
      }}
      onMouseLeave={() => {
        setButtonDown(false);
      }}
      onMouseEnter={() => {
        if (mouseDown) {
          setButtonDown(true);
        }
      }}
      onClick={(event: React.MouseEvent) => {
        if (event.button !== 0) return;
        event.stopPropagation();
        onClick(event);
      }}
      onContextMenu={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (onContextMenu) {
          onContextMenu(event);
        }
      }}
    >
      <span
        className={cn(
          'rounded-full flex items-center justify-center',
          buttonColor,
          innerButtonSize,
          buttonDown && !disabled ? 'filter brightness-[.8]' : '',
        )}
      >
        {showIcons && (
          <Suspense
            fallback={
              <span
                className="animate-pulse rounded-full"
                style={{ width: `${iconSize.toString()}px`, height: `${iconSize.toString()}px` }}
              />
            }
          >
            <LazyIcon width={iconSize} height={iconSize} fill={iconColor} className="select-none" />
          </Suspense>
        )}
      </span>
    </button>
  );
};

export default WindowHeaderButton;
