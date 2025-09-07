import React from "react";
import CostCard from "./CostCard";
import CostImage1 from "@/assets/costmoney/image 5.svg";
import CostImage2 from "@/assets/costmoney/image 6.svg";
import CostImage3 from "@/assets/costmoney/image 5-1.svg";
import SplitText from "./SplitText";
import FadeInUp from "./FadeInUp";

export default function CostSections() {
  const cards = [
    {
      icon: <CostImage1 />,
      title: "Deep analysis of your business & web page",
      description:
        "Boostra explore your niche best practices in usability and conversions can turn missed opportunities into growth.",
    },
    {
      icon: <CostImage2 />,
      title: "Deep analysis of your business & web page",
      description:
        "Boostra explore your niche best practices in usability and conversions can turn missed opportunities into growth.",
    },
    {
      icon: <CostImage3 />,
      title: "Deep analysis of your business & web page",
      description:
        "Boostra explore your niche best practices in usability and conversions can turn missed opportunities into growth.",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-12 items-center mt-[96px] md:mt-[160px] mb-[96px] md:mb-[160px]">
      <div className="flex flex-col items-center text-center gap-3 md:gap-5">
        <SplitText className="matter-p2-med text-gradient-blue">
          Revenue-based Benefits
        </SplitText>
        <div className="max-w-[800px]">
          <SplitText className="matter-h2-reg">Find what</SplitText>
          <SplitText className="matter-h2-reg">cost you money</SplitText>
        </div>
      </div>
      <FadeInUp className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {cards.map((card, index) => (
          <CostCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </FadeInUp>
    </div>
  );
}
