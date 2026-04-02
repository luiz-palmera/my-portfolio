"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { motion } from "motion/react";

export default function Theme() {
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
      <LucideSun className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
      <LucideMoon className="hover:scale-110 transition-all cursor-pointer h-6 w-6 text-brand-primary" />
    </motion.div>
  );
}
