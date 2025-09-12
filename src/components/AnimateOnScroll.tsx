"use client";
import React, { memo, useMemo, createContext, useContext } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

interface AnimateOnScrollContextType {
  inView: boolean;
  delay: number;
}

const AnimateOnScrollContext = createContext<AnimateOnScrollContextType>({
  inView: false,
  delay: 0,
});

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
  animation = "animate__fadeInUp",
  duration = "animate__slow",
  delay = 0,
  index = 0,
}: AnimateOnScrollItemProps) {
  const { inView, delay: staggerDelay } = useContext(AnimateOnScrollContext);

  const animationClasses = useMemo(() => {
    if (!inView) {
      return "opacity-0 translate-y-8";
    }
    
    const delayClass = delay > 0 ? `animate__delay-${Math.round(delay * 1000)}ms` : 
                      index > 0 ? `animate__delay-${Math.round(index * staggerDelay * 1000)}ms` : "";
    
    return `animate__animated ${animation} ${duration} ${delayClass}`;
  }, [inView, animation, duration, delay, index, staggerDelay]);

  return (
    <div
      className={`${animationClasses} ${className}`}
      style={{
        willChange: inView ? "auto" : "transform, opacity",
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
  animation = "animate__fadeInUp",
  duration = "animate__slow",
  delay = 0,
}: AnimateOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "50px 0px",
  });

  const animationClasses = useMemo(() => {
    if (!inView) {
      return "opacity-0 translate-y-8";
    }
    
    const delayClass = delay > 0 ? `animate__delay-${Math.round(delay * 1000)}ms` : "";
    
    return `animate__animated ${animation} ${duration} ${delayClass}`;
  }, [inView, animation, duration, delay]);

  return (
    <div
      ref={ref}
      className={`${animationClasses} ${className}`}
      style={{
        willChange: inView ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
});
