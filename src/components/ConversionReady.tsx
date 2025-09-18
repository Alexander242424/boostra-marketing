"use client";
import React from "react";
import GoalIcon from "@/assets/Goals.svg";
import Image from "next/image";
import ConversionReadyImage from "@/assets/Conversion ready,Usability,Above the fold/Conversion ready.webp";
// import { AnimateOnScrollGroup, AnimateOnScrollItem } from "./AnimateOnScroll";
const cards = [
  {
    title: "Clarity in messaging",
    description:
      "Cleaner layout that improves readability and trust",
  },
  {
    title: "Missing sections",
    description:
      "Complete page structure that answers user needs",
  },
  {
    title: "Content hierarchy",
    description:
      "Logical flow that increases engagement and clarity",
  },
  {
    title: "CTA optimization",
    description:
      "Complete page structure that answers user needs",
  },
  {
    title: "Visual aspects",
    description:
      "Consistent design that keeps visitors focused",
  },
  {
    title: "Text context",
    description:
      "Simplified copy that boosts user confidence",
  },
];

export default function ConversionReady() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[100px] lg:pt-[105px]">
      <div className="flex flex-col lg:gap-[55px]">
        <div className="flex flex-col lg:gap-6">
          <h3 className="matter-h3-reg">
            Make every page{" "}
            <span className="text-gradient-blue"> Conversion-ready</span>
          </h3>
          <p className="matter-p3-reg text-text-tertiary">
            Increase revenue growth by uncovering hidden funnel leaks and
            lorem...
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Cards list */}
          {cards.map((card, index) => (
            <div className="flex gap-2" key={index}>
              <GoalIcon className="min-w-[23px]" />
              <div className="flex flex-col gap-1">
                <p className="matter-p4-reg">{card.title}</p>
                <p className="matter-s1-reg text-text-tertiary">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-auto max-w-[657px]">
        <Image src={ConversionReadyImage} alt="Conversion Ready" />
      </div>
    </div>
  );
}
