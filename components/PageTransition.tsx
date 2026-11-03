import { motion } from 'motion/react';

import React, { ReactNode } from 'react';

const variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.61, 1, 0.88, 1] as const,
    }
  }
};

export const PageTransition = ({
  children
}: {
  children: ReactNode;
}): React.ReactElement => {
  return (
    <motion.div data-page-transition initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  );
};
