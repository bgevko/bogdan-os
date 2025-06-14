import React from 'react';
interface ToastProps {
  isVisible: boolean;
  message: string;
  type: string;
}

const Toast: React.FC<ToastProps> = ({ isVisible, message, type }) => {
  if (!isVisible) return <></>;
  const common =
    'absolute bottom-0 opacity-90 font-bold flex px-2 justify-center items-center text-lg';
  let style = 'w-full h-2 bg-red-300';
  switch (type) {
    case 'info':
      style = 'w-full h-10 bg-blue-300 text-gray-900';
      break;
    default:
  }
  return <div className={`${common} ${style}`}>{message}</div>;
};

export default Toast;
