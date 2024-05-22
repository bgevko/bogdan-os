/* eslint-disable react/button-has-type */
import { type ReactNode } from 'react';
import { useState } from 'react';

import cn from '@/utils/format';

interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

// TODO: Figure out the proper way to handle typing when it's necessary to pass props through a spread operator.

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProperties> = ({ className, children, ...properties }) => {
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <button
      className={cn('relative', mouseDown ? 'debossed-border' : 'button-border', className)}
      {...properties}
      onMouseDown={() => {
        setMouseDown(true);
      }}
      onMouseUp={() => {
        setMouseDown(false);
      }}
      onMouseLeave={() => {
        setMouseDown(false);
      }}
    >
      <span
        className={cn(
          'absolute inset-[-5px] flex items-center justify-center select-none',
          mouseDown ? 'bg-surface-200' : 'transparent',
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
