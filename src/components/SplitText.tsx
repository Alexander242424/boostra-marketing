"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  children: React.ReactNode;
  className?: string;
  spacingWords?: string;
}

export default function SplitText({
  children,
  className,
  spacingWords = "mx-0.5",
}: SplitTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const splitTextIntoWords = (text: string) => {
    return text.split(" ");
  };

  const processChildren = (children: React.ReactNode): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    let wordIndex = 0;

    React.Children.forEach(children, (child) => {
      if (typeof child === "string") {
        const words = splitTextIntoWords(child);
        words.forEach((word, index) => {
          result.push(
            <motion.span
              key={`word-${wordIndex + index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: (wordIndex + index) * 0.1,
                ease: "easeOut",
              }}
              className={cn("inline-block", spacingWords)}
            >
              {word}
            </motion.span>
          );
        });
        wordIndex += words.length;
      } else if (React.isValidElement(child)) {
        // Для span елементів - розбиваємо текст всередині на слова і застосовуємо клас до кожного слова
        const childProps = child.props as {
          children?: React.ReactNode;
          className?: string;
        };

        if (typeof childProps.children === "string") {
          const words = splitTextIntoWords(childProps.children);
          words.forEach((word, index) => {
            result.push(
              <motion.span
                key={`word-${wordIndex + index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.1,
                  delay: (wordIndex + index) * 0.1,
                  ease: "easeOut",
                }}
                className={`inline-block ${childProps.className || ""}`}
              >
                {word}
              </motion.span>
            );
          });
          wordIndex += words.length;
        } else {
          // Якщо children не строка, обробляємо рекурсивно
          const processedChild = processChildren(childProps.children);
          result.push(
            React.cloneElement(
              child as React.ReactElement<{
                children?: React.ReactNode;
                className?: string;
              }>,
              {
                key: `span-${wordIndex}`,
                children: processedChild,
              }
            )
          );
        }
      } else {
        result.push(child);
      }
    });

    return result;
  };

  return (
    <div ref={ref} className={className}>
      {processChildren(children)}
    </div>
  );
}
