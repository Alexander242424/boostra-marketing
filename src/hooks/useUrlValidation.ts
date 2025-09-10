"use client";

import { useCallback } from "react";

export const useUrlValidation = () => {
  const isValidUrl = useCallback((string: string) => {
    if (!string || string.trim() === "") return false;

    const trimmedUrl = string.trim();

    const urlPattern =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;

    if (!urlPattern.test(trimmedUrl)) return false;

    try {
      let testUrl = trimmedUrl;
      if (!testUrl.startsWith("http://") && !testUrl.startsWith("https://")) {
        testUrl = "https://" + testUrl;
      }

      const url = new URL(testUrl);

      if (!url.hostname || url.hostname.length < 3) return false;

      if (!url.hostname.includes(".")) return false;

      const parts = url.hostname.split(".");
      if (parts.length < 2 || parts[parts.length - 1].length < 2) return false;

      if (
        url.hostname.includes("..") ||
        url.hostname.startsWith(".") ||
        url.hostname.endsWith(".")
      ) {
        return false;
      }

      return true;
    } catch (_) {
      return false;
    }
  }, []);

  return { isValidUrl };
};
