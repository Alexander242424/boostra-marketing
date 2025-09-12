import React from "react";
import RevenueCard from "./RevenueCard";
import { Button } from "./ui/button";
import AvatarIcon from "@/assets/Verizon Team.svg";
import { AnimateOnScrollGroup, AnimateOnScrollItem } from "./AnimateOnScroll";
import SearchIcon from "@/assets/opportunuties/Heart-Rate-Search--Streamline-Core-Neon.svg";
import BrowserIcon from "@/assets/opportunuties/Browser-Delete--Streamline-Core-Neon.svg";
import PazzeleIcon from "@/assets/opportunuties/Module-Puzzle-3--Streamline-Core-Neon.svg";
import { useTrackEvent } from "@/hooks/telemetry";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";

export default function RevenueOpportunities() {
  const trackEvent = useTrackEvent();
  const buildPortalUrl = useBuildPortalUrl();

  const cards = [
    {
      icon: <SearchIcon />,
      number: "01",
      title: "Deep business & page analysis",
      description:
        "Comprehensive review of your website structure, purpose, user personas and key metrics to uncover hidden conversion blockers and lost revenue opportunities.",
    },
    {
      icon: <BrowserIcon />,
      number: "02",
      title: "Identify critical conversion issues",
      description:
        "Pinpoint usability problems, friction points, and design flaws that increase bounce rates and stop visitors from becoming customers.",
    },
    {
      icon: <PazzeleIcon />,
      number: "03",
      title: "Get validated proven solutions",
      description:
        "Receive prioritized, ready-to-implement fixes backed by data. On average, businesses achieve a +10-12% lift in conversions with Boostra insights.",
    },
  ];

  return (
    <AnimateOnScrollGroup className="flex flex-col w-full h-full gap-8 md:gap-12 items-center mb-[96px] md:mb-[160px]" staggerDelay={0.1}>
      <div className="flex flex-col items-center text-center gap-3 md:gap-5">
        <AnimateOnScrollItem index={0} animation="animate__fadeInUp" duration="animate__slow">
          <p className="matter-p2-med text-gradient-blue">
            Revenue-based Benefits
          </p>
        </AnimateOnScrollItem>
        <AnimateOnScrollItem index={1} animation="animate__fadeInUp" duration="animate__slow">
          <h2 className="matter-h2-reg max-w-[700px]">
            Boost your conversions in 3 simple steps
          </h2>
        </AnimateOnScrollItem>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 md:gap-8 w-full">
        {cards.map((card, index) => (
          <AnimateOnScrollItem key={index} index={index + 2} className="flex-1">
            <RevenueCard
              icon={card.icon}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          </AnimateOnScrollItem>
        ))}
      </div>
      <AnimateOnScrollItem index={5} animation="animate__fadeInUp" duration="animate__slow">
        <Button
          className="max-w-fit"
          size="lg"
          onClick={() => {
            trackEvent(`Get Started Clicked`, undefined, () => {
              window.location.href = buildPortalUrl({
                pathname: "/register",
              });
            });
          }}
        >
          Get Started for Free
        </Button>
      </AnimateOnScrollItem>
      <AnimateOnScrollItem index={6} animation="animate__fadeInUp" duration="animate__slow" className="flex flex-col max-w-[253px] gap-[20px] ">
        <p className="matter-p1-reg text-center">
          "Minutes of analysis saved us months of spend"
        </p>
        <div className="flex items-center justify-center gap-3">
          <AvatarIcon />
          <p className="matter-p4-med">Verizon Team</p>
        </div>
      </AnimateOnScrollItem>
    </AnimateOnScrollGroup>
  );
}
