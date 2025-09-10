"use client";

import { useEffect, useRef } from "react";

export function useNearestParentScrollListener(
  elementRef: React.RefObject<HTMLElement | null>,
  callback: (isScrolled: boolean) => void
) {
  const isScrolledRef = useRef(false);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    // Перевіряємо, чи window існує (клієнтська сторона)
    if (typeof window === "undefined" || !elementRef.current) return;

    const scrollParent = findScrollableParent(elementRef.current);

    const handleScroll = () => {
      let isNowScrolled = false;

      if (scrollParent) {
        isNowScrolled = scrollParent.scrollTop > 0;
      } else {
        isNowScrolled = window.scrollY > 0;
      }

      if (isNowScrolled !== isScrolledRef.current) {
        isScrolledRef.current = isNowScrolled;
        callbackRef.current(isNowScrolled);
      }
    };

    if (scrollParent) {
      scrollParent.addEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    handleScroll();

    return () => {
      if (scrollParent) {
        scrollParent.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [elementRef]);
}

function findScrollableParent(el: HTMLElement | null) {
  while (el) {
    const style = getComputedStyle(el);
    if (style.overflow === "auto" || style.overflowY === "auto") {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
