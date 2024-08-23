// src/components/TransitionWrapper.jsx
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TransitionWrapperProps {
    children: ReactNode;
  }
const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
        <motion.div
        className='AnimatePresenceMotion'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{height:'100%'}}
        >
          {children}
        </motion.div>
    </AnimatePresence>
  );
};

export default TransitionWrapper;
