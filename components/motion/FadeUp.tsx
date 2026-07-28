'use client';

// components/motion/FadeUp.tsx
// Reusable scroll-triggered fade-up wrapper

import { motion, useReducedMotion } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              delay,
              ease: [0.25, 0.1, 0.25, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}
