"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";

export default function HeaderBackground() {
  const isMobile = useIsMobile();
  return (
    <div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-screen h-screen z-0"
      // style={{
      //   backgroundImage: isMobile
      //     ? 'url("/boostra-updated/Mobile Gradient Background 01.webp")'
      //     : 'url("/boostra-updated/jpeg-optimizer_Frame 2147229936.jpg")',
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
    />
  );
}
