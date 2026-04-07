"use client";
import Lucide, { LucideProps } from "@/components/ui/Lucide";
import { motion } from "motion/react";

export default function NavItem({
  icon,
  title,
  href,
}: {
  icon?: LucideProps["icon"];
  title?: string;
  href?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 100,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer"
      onClick={() => {
        if (href) {
          window.location.href = href;
        }
      }}
    >
      {icon ? (
        <Lucide className="h-6 w-6 text-brand-primary" icon={icon} />
      ) : (
        <span className="font-bold text-md text-brand-primary">{title}</span>
      )}
    </motion.div>
  );
}
