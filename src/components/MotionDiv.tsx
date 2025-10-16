'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionDivProps {
  children: ReactNode;
  initial?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
  className?: string;
  delay?: number;
}

const MotionDiv = ({ 
  children, 
  initial = { opacity: 0, y: 30 }, 
  whileInView = { opacity: 1, y: 0 }, 
  transition = { duration: 0.8 }, 
  viewport = { once: true },
  className = "",
  delay = 0
}: MotionDivProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{ ...transition, delay }}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
