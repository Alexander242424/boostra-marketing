"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";

export default function HeaderBackground() {
  const isMobile = useIsMobile();
  return (
    <div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-screen h-[70dvh] z-0"
      style={{
        backgroundImage: isMobile 
        ? 'url("/Gradients/Mobile/Mobile Gradient Background  04.webp")'
        : 'url("/Gradients/Desktop/Gradient Background  01.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
