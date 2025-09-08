import React from "react";
import RevenueCard from "./RevenueCard";
import { Button } from "./ui/button";
import AvatarIcon from "@/assets/Ellipse 29.svg";
import SplitText from "./SplitText";
import FadeInUp from "./FadeInUp";

export default function RevenueOpportunities() {
  const cards = [
    {
      icon: <div className="w-8 h-8 bg-blue-500 rounded-full" />, // Replace with actual icon
      number: "01",
      title: "Business & page analyzis",
      description:
        "Reviewing your page, purpose, and metrics to align insights with your goals.",
    },
    {
      icon: <div className="w-8 h-8 bg-green-500 rounded-full" />, // Replace with actual icon
      number: "02",
      title: "Identifying critical issues",
      description:
        "Reviewing your page, purpose, and metrics to align insights with your goals.",
    },
    {
      icon: <div className="w-8 h-8 bg-purple-500 rounded-full" />, // Replace with actual icon
      number: "03",
      title: "Get validated solutions",
      description:
        "Reviewing your page, purpose, and metrics to align insights with your goals.",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-12 items-center mb-[96px] md:mb-[160px]">
      <div className="flex flex-col items-center text-center gap-3 md:gap-5">
        <SplitText className="matter-p2-med text-gradient-blue">
          Revenue-based Benefits
        </SplitText>
        <SplitText
          className="matter-h2-reg max-w-[800px]"
          spacingWords="mx-1.5"
        >
          Find revenue opportunities in 3 steps
        </SplitText>
      </div>
      <FadeInUp className="flex flex-col lg:flex-row gap-6 md:gap-8">
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
      <FadeInUp>
        <Button className="max-w-fit" size="lg">
          Get Started
        </Button>
      </FadeInUp>
      <FadeInUp className="flex flex-col max-w-[253px] gap-[18px] ">
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
