// src/components/PageTransition.tsx
'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(5px)' }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
