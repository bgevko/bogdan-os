import { motion, AnimatePresence } from 'framer-motion';

import React from 'react';
interface ToastProps {
  isVisible: boolean;
  message: string;
  type: string;
}

const Toast: React.FC<ToastProps> = ({ isVisible, message, type }) => {
  const common = 'absolute bottom-0 right-0 opacity-80 font-bold flex p-2 text-lg';
  let style = 'w-full h-2 bg-red-300';
  switch (type) {
    case 'info':
      style = 'bg-white text-gray-900';
      break;
    default:
  }
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`${common} ${style} bottom-0 right-0`}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
