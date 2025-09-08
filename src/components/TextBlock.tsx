"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const [ref, inView, entry] = useInView({
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  });

  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    if (entry) {
      const intersectionRatio = entry.intersectionRatio;
      const words = text.split(" ");
      // Анімація починається швидше - вже на 10% видимості
      const adjustedRatio = Math.max(0, (intersectionRatio - 0.1) / 0.9);
      // Використовуємо Math.ceil замість Math.floor для кращого покриття
      const maxVisibleWords = Math.ceil(adjustedRatio * words.length);
      console.log(`Intersection: ${intersectionRatio.toFixed(3)}, Adjusted: ${adjustedRatio.toFixed(3)}, Visible: ${maxVisibleWords}/${words.length}`);
      setVisibleWords(maxVisibleWords);
    }
  }, [entry, text]);

  const words = text.split(" ");

  return (
    <div ref={ref} className={className} style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
      {words.map((word, index) => {
        // Плавний перехід opacity залежно від позиції скролу
        const intersectionRatio = entry?.intersectionRatio || 0;
        const adjustedRatio = Math.max(0, (intersectionRatio - 0.1) / 0.9);
        const exactVisibleWords = adjustedRatio * words.length;
        
        // Для останнього слова робимо особливий розрахунок
        let opacity = 1;
        let yOffset = 0;
        
        // Для всіх слів: плавна поява залежно від скролу
        // Розширюємо зону переходу для кожного слова
        const transitionZone = 2; // Зона переходу в 2 слова
        const wordStart = index;
        const wordEnd = index + transitionZone;
        const rawProgress = (exactVisibleWords - wordStart) / (wordEnd - wordStart);
        const wordProgress = Math.max(0, Math.min(1, rawProgress));
        opacity = wordProgress;
        yOffset = (1 - opacity) * 20;
        
        // Логуємо для останнього слова
        if (index === words.length - 1) {
          console.log(`Last word (${word}): exactVisibleWords=${exactVisibleWords.toFixed(2)}, wordStart=${wordStart}, wordEnd=${wordEnd}, rawProgress=${rawProgress.toFixed(2)}, wordProgress=${wordProgress.toFixed(2)}, opacity=${opacity.toFixed(2)}`);
        }
        
        return (
          <motion.span
            key={index}
            style={{ display: "inline" }}
            animate={{
              opacity: opacity,
              y: yOffset,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            {word}
            {index < words.length - 1 && " "}
          </motion.span>
        );
      })}
    </div>
  );
}

export default function TextBlock() {
  const text = "Boostra grows your revenue and improving business metrics by combining advanced Conversion and UX analysis and offering effective solutions.";

  return (
    <div className="flex py-[128px] md:pt-[130px] md:pb-[65px] justify-center">
      <AnimatedText 
        text={text}
        className="matter-h4-reg max-w-[877px] text-center text-gradient-blue-block"
      />
    </div>
  );
}
