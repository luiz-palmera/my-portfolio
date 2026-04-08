"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type TypewriterLoopProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
};

type Phase = "typing" | "pausing" | "deleting";

export function TypewriterLoop({
  words,
  typingSpeed = 60,
  deletingSpeed = 40,
  delay = 1200,
}: TypewriterLoopProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  const currentWord = words[index] ?? "";

  useEffect(() => {
    if (!words.length) return;

    const timeout = setTimeout(
      () => {
        if (phase === "typing") {
          const nextText = currentWord.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === currentWord) {
            setPhase("pausing");
          }
        }

        if (phase === "pausing") {
          setPhase("deleting");
        }

        if (phase === "deleting") {
          const nextText = currentWord.slice(0, text.length - 1);
          setText(nextText);

          if (nextText === "") {
            setPhase("typing");
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      phase === "typing"
        ? typingSpeed
        : phase === "deleting"
          ? deletingSpeed
          : delay,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    phase,
    currentWord,
    words.length,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  const formattedText = useMemo(() => {
    const firstSpaceIndex = text.indexOf(" ");

    if (firstSpaceIndex === -1) {
      return {
        firstPart: text,
        secondPart: "",
      };
    }

    return {
      firstPart: text.slice(0, firstSpaceIndex + 1),
      secondPart: text.slice(firstSpaceIndex + 1),
    };
  }, [text]);

  return (
    <div className="inline-flex items-center font-display font-semibold text-[3rem] leading-[3.4rem] tracking-tight">
      <span className="text-text-primary">
        {formattedText.firstPart}
        <span className="text-brand-primary">{formattedText.secondPart}</span>
      </span>

      <motion.span
        className="text-text-primary"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </div>
  );
}
