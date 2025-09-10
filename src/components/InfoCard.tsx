"use client";
import React from "react";
import { Button } from "./ui/button";
import FadeInUp from "./FadeInUp";
import VideoPlayer from "./VideoPlayer";

interface InfoCardProps {
  title: [string, string];
  description: string;
  btnText: string;
  videoSrc: string;
}

export default function InfoCard({
  title,
  description,
  btnText,
  videoSrc,
}: InfoCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[788px] gap-8 md:gap-[48px] items-center mt-[64px] mb-[48px] md:mb-[160px] md:mt-0">
      <div className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="flex flex-col gap-3 md:gap-6">
          <FadeInUp>
            <h3 className="matter-h3-reg text-center">
              {title[0]} <span className="text-gradient-blue">{title[1]} </span>
            </h3>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="matter-p1-reg text-text-tertiary text-center">
              {description}
            </p>
          </FadeInUp>
        </div>
        <FadeInUp delay={0.4}>
          <Button
            className="max-w-fit"
            size="lg"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_BOOSTRA_URL}/register`;
            }}
          >
            {btnText}
          </Button>
        </FadeInUp>
      </div>
      <FadeInUp>
        {videoSrc && (
          <div className="w-[343px] h-[353px] md:w-[788px] md:h-[512px] object-cover rounded-[22px] md:rounded-[24px] bg-bg-white-6">
            {/* <VideoPlayer
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay={true}
              muted={true}
              loop={true}
              controls={false}
            /> */}
          </div>
        )}
      </FadeInUp>
    </div>
  );
}
