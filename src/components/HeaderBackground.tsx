"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";

export default function HeaderBackground() {
  const isMobile = useIsMobile();
  return (
    <div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-screen h-screen z-0"
      style={{
        backgroundImage: isMobile
          ? 'url("/BG/375/BG-01.jpg")'
          : 'url("/BG/1512/01.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
