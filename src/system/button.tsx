/* eslint-disable react/button-has-type */
import { type ReactNode } from 'react';
import { useState, useEffect } from 'react';

import useMenuStore from '@/stores/use-menu-store';
import cn from '@/utils/format';

interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProperties> = ({ className, children, ...properties }) => {
  const setIsVisible = useMenuStore((state) => state.setIsVisible);
  const [buttonDown, setButtonDown] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

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
      className={cn(
        'px-4 relative rounded-[4px] h-8 font-semibold text-gray-800',
        buttonDown ? 'debossed' : 'embossed',
        className,
      )}
      {...properties}
      onMouseDown={(event) => {
        event.stopPropagation();
        setButtonDown(true);
        setMouseDown(true);
        setIsVisible(false);
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
      onDoubleClick={(event) => {
        event.stopPropagation();
      }}
      onContextMenuCapture={(event) => {
        event.preventDefault();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
