import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Custom easing for "classy" feel
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
