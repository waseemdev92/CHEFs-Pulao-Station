'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Reveal({
  children, delay = 0, y = 32, x = 0,
}: { children: ReactNode; delay?: number; y?: number; x?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  );
}
