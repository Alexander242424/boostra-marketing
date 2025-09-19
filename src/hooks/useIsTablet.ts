"use client";

import { useState, useEffect } from "react";

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи window існує (клієнтська сторона)
    if (typeof window === "undefined") return;

    const checkIsTablet = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    checkIsTablet();
    window.addEventListener("resize", checkIsTablet);

    return () => window.removeEventListener("resize", checkIsTablet);
  }, []);

  return isTablet;
}
