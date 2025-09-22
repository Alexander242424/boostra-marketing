"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import для lottie-react з відключенням SSR
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
});

interface LottiePlayerProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottiePlayer({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  return (
    <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded" />}>
      <Lottie
        className={className}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
      />
    </Suspense>
  );
}
