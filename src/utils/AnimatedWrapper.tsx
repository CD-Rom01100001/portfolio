import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  keyProp: string;
}

const AnimatedWrapper: FC<AnimatedWrapperProps> = ({ children, keyProp }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyProp}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ originY: 0 }} // Анимация "снизу вверх"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedWrapper;