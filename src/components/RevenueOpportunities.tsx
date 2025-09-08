import React from "react";
import RevenueCard from "./RevenueCard";
import { Button } from "./ui/button";
import AvatarIcon from "@/assets/Ellipse 29.svg";
import SplitText from "./SplitText";
import FadeInUp from "./FadeInUp";
import SearchIcon from "@/assets/opportunuties/Heart-Rate-Search--Streamline-Core-Neon.svg";
import BrowserIcon from "@/assets/opportunuties/Browser-Delete--Streamline-Core-Neon.svg";
import PazzeleIcon from "@/assets/opportunuties/Module-Puzzle-3--Streamline-Core-Neon.svg";

export default function RevenueOpportunities() {
  const cards = [
    {
      icon: <SearchIcon />,
      number: "01",
      title: "Business & page analyzis",
      description:
        "Reviewing your page, purpose, and metrics to align insights with your goals.",
    },
    {
      icon: <BrowserIcon/>,
      number: "02",
      title: "Identifying critical issues",
      description:
        "Reviewing your page, purpose, and metrics to align insights with your goals.",
    },
    {
      icon: <PazzeleIcon />,
      number: "03",
      title: "Get validated solutions",
      description:
        "Reviewing your page, purpose, and metrics to align insights with your goals.",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-12 items-center mb-[96px] md:mb-[160px]">
      <div className="flex flex-col items-center text-center gap-3 md:gap-5">
        <FadeInUp>
        <p className="matter-p2-med text-gradient-blue">
          Revenue-based Benefits
        </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
        <h2
          className="matter-h2-reg max-w-[800px]"
        >
          Find revenue opportunities in 3 steps
        </h2>
        </FadeInUp>
      </div>
      <FadeInUp delay={0.4} className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {cards.map((card, index) => (
          <RevenueCard
            key={index}
            icon={card.icon}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </FadeInUp>
      <FadeInUp delay={0.4}>
        <Button className="max-w-fit" size="lg">
          Get Started
        </Button>
      </FadeInUp>
      <FadeInUp delay={0.4} className="flex flex-col max-w-[253px] gap-[18px] ">
        <p className="matter-p4-reg text-center">
          “We increased our revenue to $10,000 with Boostra”
        </p>
        <div className="flex items-center justify-center">
          <AvatarIcon />
          <div className="flex flex-col ml-3">
            <p className="matter-s1-med">Morgan Sowden</p>
            <p className="matter-s2-med text-text-tertiary">
              CEO, Journalist.net
            </p>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
