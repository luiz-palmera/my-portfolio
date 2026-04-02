"use client";

import { motion } from "motion/react";

export default function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] flex flex-col items-center bg-background-secondary p-6 w-[22rem]">
      <motion.svg
        className="absolute inset-0 z-[1] w-full h-full pointer-events-none opacity-20 text-text-secondary"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d="M 60,-20 Q 120,100 -20,250 M 380,50 Q 280,180 400,320 M 100,500 Q 200,350 400,500"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -32 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      <img
        src="/profile.png"
        className="w-full rounded-[1.5rem] relative  object-cover"
        alt="Profile"
      />

      <div className="flex flex-col items-center mt-5 mb-1 relative z-10">
        <h1 className="font-display text-text-primary font-bold text-[1.7rem] tracking-wide">
          Luiz da Mata
        </h1>
        <p className="text-text-secondary font-medium text-[1.1rem]">
          Frontend Developer
        </p>
      </div>
    </div>
  );
}
