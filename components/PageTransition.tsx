import { motion, useReducedMotion } from 'motion/react';

import React ,{ ReactNode } from 'react';

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
      easing: [0.61, 1, 0.88, 1],
    }
  }
};

export const PageTransition = ({
  children
}: {
  children: ReactNode;
}): React.ReactElement => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  );
};
