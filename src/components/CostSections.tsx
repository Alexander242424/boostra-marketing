import React from "react";
import CostCard from "./CostCard";
import CostImage1 from "@/assets/costmoney/1-min.png";
import CostImage2 from "@/assets/costmoney/2-min.png";
import CostImage3 from "@/assets/costmoney/3-min.png";
import { AnimateOnScrollGroup, AnimateOnScrollItem } from "./AnimateOnScroll";

export default function CostSections() {
  const cards = [
    {
      icon: CostImage1,
      title: "Increase revenue with the same traffic",
      description:
        "Boostra helps you increase your conversion rate and unlock hidden revenue opportunities without spending more on advertising.",
    },
    {
      icon: CostImage2,
      title: "Increase customer retention and engagement",
      description:
        "Fix website friction points, reduce bounce rates, and keep visitors engaged until they become paying customers.",
    },
    {
      icon: CostImage3,
      title: "Get proven conversion and revenue growth",
      description:
        "On average, businesses achieve a +10-12% lift in conversions and measurable revenue growth using Boostra analysis.",
    },
  ];

  return (
    <AnimateOnScrollGroup className="flex flex-col w-full h-full gap-8 md:gap-12 items-center my-[48px] md:my-[64px]" staggerDelay={0.1}>
      <div className="flex flex-col items-center text-center gap-3 md:gap-5">
        <AnimateOnScrollItem index={0} animation="fadeInUp" duration="fast">
          <div className="max-w-[800px]">
            <h2 className="matter-h3-reg">
              Find what&apos;s costing you <span className="text-gradient-blue"> conversions and revenue </span>
            </h2>
          </div>
        </AnimateOnScrollItem>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 md:gap-6 w-full">
        {cards.map((card, index) => (
          <AnimateOnScrollItem key={index} index={index + 2} className="flex-1">
            <CostCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </AnimateOnScrollItem>
        ))}
      </div>
    </AnimateOnScrollGroup>
  );
}
