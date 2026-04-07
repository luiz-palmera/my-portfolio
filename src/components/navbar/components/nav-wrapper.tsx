"use client";

import { motion } from "motion/react";

export default function NavWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: "-50vh" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 11,
      }}
      className={
        "rounded-2xl gap-6 flex items-center bg-background-secondary justify-center px-7 py-3 " +
        className
      }
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
