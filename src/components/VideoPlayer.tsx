"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import для @vidstack/react з відключенням SSR
const MediaPlayer = dynamic(
  () => import("@vidstack/react").then((mod) => mod.MediaPlayer),
  { 
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
  }
);

const MediaProvider = dynamic(
  () => import("@vidstack/react").then((mod) => mod.MediaProvider),
  { ssr: false }
);

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  onError?: () => void;
}

export default function VideoPlayer({
  src,
  poster,
  className = "",
  onError,
  controls = false,
  loop = true,
  muted = true,
  autoPlay = true,
}: VideoPlayerProps) {

  // Detect iOS Safari
  const isIOSSafari = () => {
    if (typeof window === "undefined") return false;
    const userAgent = window.navigator.userAgent;
    return (
      /iPad|iPhone|iPod/.test(userAgent) &&
      /Safari/.test(userAgent) &&
      !/Chrome/.test(userAgent)
    );
  };

  // Safari on iOS has restrictions: autoplay only works with muted videos
  const isIOS = isIOSSafari();

  // Handle iOS Safari restrictions
  const shouldMute = muted || (isIOS && autoPlay); // Force mute only if autoplay is requested on iOS
  const shouldAutoPlay = autoPlay; // Keep autoplay as requested, but it won't work on iOS without user interaction
  const shouldShowControls = controls; // Respect the controls prop - don't force show on iOS

  return (
    <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded" />}>
      <MediaPlayer
        className={`w-full h-full ${className}`}
        title="Video Player"
        // aspectRatio="16 / 9"
        controls={shouldShowControls}
        src={src}
        poster={poster}
        preload="auto"
        autoPlay={shouldAutoPlay}
        muted={shouldMute}
        loop={loop}
        onError={onError}
        playsInline={isIOS} // Required for iOS
      >
        <MediaProvider className="w-full h-full video-player-provider" />
      </MediaPlayer>
    </Suspense>
  );
}
