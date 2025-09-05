import React from "react";
import RevenueCard from "./RevenueCard";
import { Button } from "./ui/button";
import AvatarIcon from "@/assets/Ellipse 29.svg";

export default function RevenueOpportunities() {
  const cards = [
    {
      icon: <div className="w-8 h-8 bg-blue-500 rounded-full" />, // Replace with actual icon
      number: "01",
      title: "Analyze Your Data",
      description:
        "Upload your customer data and let our AI analyze patterns and trends to identify potential revenue opportunities.",
    },
    {
      icon: <div className="w-8 h-8 bg-green-500 rounded-full" />, // Replace with actual icon
      number: "02",
      title: "Get Insights",
      description:
        "Receive detailed insights and recommendations on how to optimize your revenue streams and customer engagement.",
    },
    {
      icon: <div className="w-8 h-8 bg-purple-500 rounded-full" />, // Replace with actual icon
      number: "03",
      title: "Take Action",
      description:
        "Implement the suggested strategies and track your progress with real-time analytics and performance metrics.",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-12 items-center mb-[96px] md:mb-[160px]">
      <div className="flex flex-col items-center text-center gap-3 md:gap-5">
        <p className="matter-p2-med text-gradient-blue">
          Revenue-based Benefits
        </p>
        <h2 className="matter-h2-reg max-w-[800px]">
          Find revenue opportunities in 3 steps
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {cards.map((card, index) => (
          <RevenueCard
            key={index}
            icon={card.icon}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <Button className="max-w-fit" size="lg">
        Get Started
      </Button>
      <div className="flex flex-col max-w-[253px] gap-[18px] ">
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
      </div>
    </div>
  );
}
