import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RotatingText = ({ tech }: { tech: string[] }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % tech.length);
    }, 1200); // Change text every 1.2 seconds

    return () => clearInterval(interval);
  }, [tech.length]);

  return (
    <AnimatePresence>
      <motion.div
        key={tech[visibleIndex]}
        className="text-xs font-semibold dark:text-white mt-1 mr-1 p-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, scaleY: 0.7 }}
      >
        {tech[visibleIndex]}
      </motion.div>
    </AnimatePresence>
  );
};

export default RotatingText;
