"use client";
import { useTrackEvent } from "@/hooks/telemetry";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";
import FadeInUp from "./FadeInUp";
import { Button } from "./ui/button";
import VideoPlayer from "./VideoPlayer";
import Lottie from "lottie-react";
import HeroVideoAnimation from "@/assets/data.json";

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
  const trackEvent = useTrackEvent();
  const buildPortalUrl = useBuildPortalUrl();

  return (
    <div className="flex flex-col w-full xl:max-w-[788px] gap-8 md:gap-[48px] items-center mt-[64px] mb-[48px] md:mb-[160px] md:mt-0">
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
              trackEvent(`${btnText} Clicked`, undefined, () => {
                window.location.href = buildPortalUrl({
                  pathname: "/register",
                });
              });
            }}
          >
            {btnText}
          </Button>
        </FadeInUp>
      </div>
      <FadeInUp>
        {videoSrc && (
          <div className=" xl:w-[788px] xl:h-[512px] object-cover rounded-[22px] md:rounded-[24px] bg-bg-white-6">
            {/* <VideoPlayer
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay={true}
              muted={true}
              loop={true}
              controls={false}
            /> */}
            <Lottie className="w-full h-full" animationData={HeroVideoAnimation} loop={true} />
          </div>
        )}
      </FadeInUp>
    </div>
  );
}
