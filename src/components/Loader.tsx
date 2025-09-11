"use client";

import { useEffect, useState } from "react";
import BigLogo from "@/assets/big-logo.svg";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressValue = 0;
    let isCompleted = false;

    const progressInterval = setInterval(() => {
      if (isCompleted) return;
      
      progressValue += Math.random() * 8 + 2; // 2-10% за раз

      if (progressValue >= 100) {
        isCompleted = true;
        setProgress(100);
        clearInterval(progressInterval);
        
        // Просто затримка перед зникненням
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } else {
        setProgress(progressValue);
      }
    }, 150);

    // Максимальний час показу лоадера (3 секунди)
    const maxLoadTime = setTimeout(() => {
      if (!isCompleted) {
        isCompleted = true;
        setProgress(100);
        clearInterval(progressInterval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(maxLoadTime);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8 max-w-md mx-auto px-4">
        {/* Логотип з анімацією */}
        <div className="relative">
          <div className="animate-pulse">
            <BigLogo className="text-white" />
          </div>
          {/* Світіння навколо логотипу */}
          <div className="absolute inset-0 bg-white/10 rounded-lg blur-xl animate-pulse"></div>
        </div>
        
        {/* Прогрес бар */}
        <div className="w-full max-w-xs">
          <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full progress-bar rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-white/60 matter-s1-reg text-center mt-2">
            {Math.round(Math.min(progress, 100))}%
          </p>
        </div>
      </div>
    </div>
  );
}
