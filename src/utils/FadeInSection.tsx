import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './FadeInSection.css';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<Props> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  if (isInView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="reveal-section"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
