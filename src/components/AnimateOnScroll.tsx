"use client";
import React, { memo, useMemo, createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimateOnScrollContextType {
  inView: boolean;
  delay: number;
}

const AnimateOnScrollContext = createContext<AnimateOnScrollContextType>({
  inView: false,
  delay: 0,
});

// Check for reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

interface AnimateOnScrollGroupProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  staggerDelay?: number;
}

export const AnimateOnScrollGroup = memo(function AnimateOnScrollGroup({
  children,
  className = "",
  threshold = 0.3,
  staggerDelay = 0.1,
}: AnimateOnScrollGroupProps) {
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
    <AnimateOnScrollContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={className}
      >
        {children}
      </div>
    </AnimateOnScrollContext.Provider>
  );
});

interface AnimateOnScrollItemProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  duration?: string;
  delay?: number;
  index?: number;
}

export const AnimateOnScrollItem = memo(function AnimateOnScrollItem({
  children,
  className = "",
  animation = "fadeInUp",
  duration = "fast",
  delay = 0,
  index = 0,
}: AnimateOnScrollItemProps) {
  const { inView, delay: staggerDelay } = useContext(AnimateOnScrollContext);
  const prefersReducedMotion = useReducedMotion();

  const animationClasses = useMemo(() => {
    if (!inView) {
      return "opacity-0 translate-y-4";
    }
    
    if (prefersReducedMotion) {
      return "opacity-100 translate-y-0";
    }
    
    const delayClass = delay > 0 ? `delay-${Math.round(delay * 1000)}` : 
                      index > 0 ? `delay-${Math.round(index * staggerDelay * 1000)}` : "";
    
    return `animate-${animation} duration-${duration} ${delayClass}`;
  }, [inView, animation, duration, delay, index, staggerDelay, prefersReducedMotion]);

  return (
    <div
      className={`transition-all ease-out ${animationClasses} ${className}`}
      style={{
        willChange: inView && !prefersReducedMotion ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </div>
  );
});

// Простий компонент для окремих елементів
interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  animation?: string;
  duration?: string;
  delay?: number;
}

export const AnimateOnScroll = memo(function AnimateOnScroll({
  children,
  className = "",
  threshold = 0.5,
  animation = "fadeInUp",
  duration = "fast",
  delay = 0,
}: AnimateOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "50px 0px",
  });
  const prefersReducedMotion = useReducedMotion();

  const animationClasses = useMemo(() => {
    if (!inView) {
      return "opacity-0 translate-y-4";
    }
    
    if (prefersReducedMotion) {
      return "opacity-100 translate-y-0";
    }
    
    const delayClass = delay > 0 ? `delay-${Math.round(delay * 1000)}` : "";
    
    return `animate-${animation} duration-${duration} ${delayClass}`;
  }, [inView, animation, duration, delay, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${animationClasses} ${className}`}
      style={{
        willChange: inView && !prefersReducedMotion ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </div>
  );
});
