"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

export default function FadeInUp({
  children,
  className = "",
  threshold = 0.5,
  duration = 0.8,
  delay = 0,
  yOffset = 80,
}: FadeInUpProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
