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
          ? 'url("/Backgrounds boostra/mobile/Background hero-min.jpg")'
          : 'url("/Backgrounds boostra/desktop/Background Hero-min.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
