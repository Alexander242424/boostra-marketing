import React from "react";
import GlobalStandartsIcon from "@/assets/standartsIcon.svg";
import FadeInUp from "./FadeInUp";

export default function EnterpriseGrade() {
  const cards = [
    {
      title: "Your data stays yours",
      description:
        "Your website data is only used to make an analysis and provide effective solutions. We never sell or share it with third parties.",
    },
    {
      title: "Data encryption",
      description:
        "We use standard encryption practices to keep your information safe during processing. All reports remain private and visible only to you.",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-12 items-center mt-[96px] md:mt-[160px] mb-[96px] md:mb-[160px]">
      <div className="flex flex-col items-center text-center gap-3 md:gap-6 max-w-[634px]">
        <FadeInUp>
          <h4 className="matter-h4-reg">Enterprise-grade</h4>
          <h4 className="matter-h4-reg">security & privacy</h4>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="matter-p2-reg text-text-tertiary">
            Boostra is built with privacy by default. We collect only
            what&apos;s required for your analysis and keep all reports fully
            secure and accessible only to you.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <GlobalStandartsIcon />
        </FadeInUp>
      </div>
      <FadeInUp className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-bg-white-10 rounded-[24px] gap-8 md:gap-[48px] p-8 max-w-[407px]"
          >
            <div className="flex flex-col gap-3">
              <h6 className="matter-p1-reg">{card.title}</h6>
              <p className="matter-p4-reg text-text-tertiary">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </FadeInUp>
    </div>
  );
}
