import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './FadeInSection.css';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<Props> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

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
