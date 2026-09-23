"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: [0.7, 1], y: [18, 0] }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
