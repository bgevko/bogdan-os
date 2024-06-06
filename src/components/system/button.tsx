/* eslint-disable react/button-has-type */
import { type ReactNode } from 'react';
import { useState, useEffect } from 'react';

import cn from '@/utils/format';

interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

// TODO: Figure out the proper way to handle typing when it's necessary to pass props through a spread operator.

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProperties> = ({ className, children, ...properties }) => {
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
        'relative bg-surface',
        buttonDown ? 'debossed-border ' : 'button-border',
        className,
      )}
      {...properties}
      onMouseDown={(event) => {
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
      onDoubleClick={(event) => {
        event.stopPropagation();
      }}
      onContextMenuCapture={(event) => {
        event.preventDefault();
      }}
    >
      <span
        className={cn(
          'absolute inset-[-5px] flex items-center justify-center select-none',
          buttonDown ? 'bg-surface-200 translate-y-[1px]' : 'transparent',
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
