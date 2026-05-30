import { motion } from "framer-motion";
import { useState } from "react";

function Loader() {
  const [isDone, setIsDone] = useState(false);

  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        delay: 1.5,
      }}
      onAnimationComplete={() => setIsDone(true)}
      className="fixed inset-0 z-[999] bg-[#2b1d18] flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="heading-font text-7xl text-white"
      >
        Prince.
      </motion.h1>
    </motion.div>
  );
}

export default Loader;