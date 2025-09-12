"use client";
import React, { memo, useMemo, createContext, useContext } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

interface FadeInUpGroupContextType {
  inView: boolean;
  delay: number;
}

const FadeInUpGroupContext = createContext<FadeInUpGroupContextType>({
  inView: false,
  delay: 0,
});

interface FadeInUpGroupProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  staggerDelay?: number;
}

export const FadeInUpGroup = memo(function FadeInUpGroup({
  children,
  className = "",
  threshold = 0.3,
  staggerDelay = 0.1,
}: FadeInUpGroupProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "50px 0px",
  });

  const contextValue = useMemo(() => ({
    inView,
    delay: staggerDelay,
  }), [inView, staggerDelay]);

  return (
    <FadeInUpGroupContext.Provider value={contextValue}>
      <motion.div
        ref={ref}
        className={className}
        style={{ willChange: inView ? "auto" : "transform, opacity" }}
      >
        {children}
      </motion.div>
    </FadeInUpGroupContext.Provider>
  );
});

interface FadeInUpItemProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
  index?: number;
}

export const FadeInUpItem = memo(function FadeInUpItem({
  children,
  className = "",
  duration = 0.6,
  yOffset = 15,
  index = 0,
}: FadeInUpItemProps) {
  const { inView, delay } = useContext(FadeInUpGroupContext);

  const initialValues = useMemo(() => ({ opacity: 0, y: yOffset }), [yOffset]);
  const animateValues = useMemo(() => 
    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }, 
    [inView, yOffset]
  );
  const transitionValues = useMemo(() => ({
    duration,
    delay: delay * index,
    ease: "easeInOut" as const,
  }), [duration, delay, index]);

  return (
    <motion.div
      initial={initialValues}
      animate={animateValues}
      transition={transitionValues}
      className={className}
      style={{ willChange: inView ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
});
