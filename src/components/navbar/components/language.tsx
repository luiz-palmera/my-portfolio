"use client";

import { motion } from "motion/react";

export default function Language() {
  return (
    <motion.div
      initial={{ y: "-50vh" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 11,
      }}
      className="rounded-2xl gap-6 flex items-center bg-background-secondary justify-center px-7 py-3"
    >
      <span className="hover:scale-110 transition-all font-bold cursor-pointer text-md text-brand-primary">
        EN
      </span>
      <span className="hover:scale-110 transition-all font-bold cursor-pointer text-md text-brand-primary">
        PT
      </span>
    </motion.div>
  );
}
