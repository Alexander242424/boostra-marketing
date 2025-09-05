"use client";
import React from "react";
import { Button } from "./ui/button";
import SplitText from "./SplitText";

interface InfoCardProps {
  title: [string, string];
  description: string;
  btnText: string;
  btnOnClick?: () => void;
  videoSrc: string;
}

export default function InfoCard({
  title,
  description,
  btnText,
  btnOnClick,
  videoSrc,
}: InfoCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[788px] gap-8 md:gap-[48px] items-center mt-[64px] mb-[48px] md:mb-[160px] md:mt-0">
      <div className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="flex flex-col gap-3 md:gap-6">
          <SplitText className="matter-h3-reg text-center">
            {title[0]} <span className="text-gradient-blue">{title[1]} </span>
          </SplitText>
          <SplitText className="matter-p1-reg text-text-tertiary text-center">
            {description}
          </SplitText>
        </div>
        <Button className="max-w-fit" size="lg" onClick={btnOnClick}>
          {btnText}
        </Button>
      </div>
      {videoSrc && (
        <video
          className="w-[343px] h-[353px] md:w-[788px] md:h-[512px] object-cover rounded-[22px] md:rounded-[24px] bg-bg-white-6"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          webkit-playsinline="true"
        >
          <source src={videoSrc} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
