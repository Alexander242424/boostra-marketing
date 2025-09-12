"use client";
import React, { memo, useMemo } from "react";
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

const FadeInUp = memo(function FadeInUp({
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
    rootMargin: "50px 0px", // Start animation earlier
  });

  // Memoize animation values to prevent unnecessary recalculations
  const initialValues = useMemo(() => ({ opacity: 0, y: yOffset }), [yOffset]);
  const animateValues = useMemo(() => 
    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }, 
    [inView, yOffset]
  );
  const transitionValues = useMemo(() => ({
    duration,
    delay,
    ease: "easeInOut" as const,
  }), [duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={initialValues}
      animate={animateValues}
      transition={transitionValues}
      className={className}
      // Optimize rendering
      style={{ willChange: inView ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
});

export default FadeInUp;
