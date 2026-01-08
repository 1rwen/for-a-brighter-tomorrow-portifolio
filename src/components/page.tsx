import React from "react";
import { motion } from "motion/react";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="will-change-opacity"
    >
      {children}
    </motion.main>
  );
}
