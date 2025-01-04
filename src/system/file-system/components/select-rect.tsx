import React from 'react';

interface SelectRectProps {
  isVisible: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const SelectRect: React.FC<SelectRectProps> = ({ isVisible, position, size }) => {
  return (
    <span
      className="fixed z-50 border border-dashed border-black bg-green-700/10"
      style={{
        display: isVisible ? 'block' : 'none',
        width: size.width,
        height: size.height,
        transform: `translate(${position.x.toString()}px, ${position.y.toString()}px)`,
      }}
    />
  );
};

export default SelectRect;
