import React from "react";
import GlobalStandartsIcon from "@/assets/standartsIcon.svg";
import { AnimateOnScrollGroup, AnimateOnScrollItem } from "./AnimateOnScroll";
import { LandingTexts } from "@/config/landing-texts";

interface EnterpriseGradeProps {
  texts: LandingTexts['enterpriseGrade'];
}

export default function EnterpriseGrade({ texts }: EnterpriseGradeProps) {
  return (
    <AnimateOnScrollGroup
      className="flex flex-col w-full h-full gap-8 md:gap-10 lg:gap-12 items-center mt-[48px] md:my-[64px] lg:mt-[88px] lg:mb-[120px]"
      staggerDelay={0.1}
    >
      <div className="flex flex-col items-center text-center gap-3 md:gap-4 lg:gap-6 max-w-[652px]">
        <AnimateOnScrollItem index={0} animation="fadeInUp" duration="fast">
          <h2 className="matter-h3-reg">{texts.title}</h2>
          <h2 className="matter-h3-reg text-gradient-blue">
            {texts.subtitle}
          </h2>
        </AnimateOnScrollItem>
        <AnimateOnScrollItem index={1} animation="fadeInUp" duration="fast">
          <p className="matter-p2-reg text-text-tertiary">
            {texts.description}
          </p>
        </AnimateOnScrollItem>
        <AnimateOnScrollItem index={2} animation="fadeInUp" duration="fast">
          <GlobalStandartsIcon />
        </AnimateOnScrollItem>
      </div>
      <AnimateOnScrollItem
        index={3}
        animation="fadeInUp"
        duration="fast"
        className="flex flex-col md:flex-row gap-4 md:gap-6"
      >
        {texts.cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-bg-white-10 rounded-[24px] gap-8 md:gap-[48px] p-5 lg:p-6 md:max-w-[407px]"
          >
            <div className="flex flex-col gap-2 md:gap-3 md:text-center lg:text-left">
              <h6 className="matter-p1-reg">{card.title}</h6>
              <p className="matter-p4-reg text-text-tertiary">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </AnimateOnScrollItem>
    </AnimateOnScrollGroup>
  );
}
