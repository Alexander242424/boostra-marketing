import React from "react";
import GlobalStandartsIcon from "@/assets/standartsIcon.svg";

export default function EnterpriseGrade() {
  const cards = [
    {
      title: "Your data stays yours",
      description:
        "Your data is only accessible to your AI agent and is never used to train models.",
    },
    {
      title: "Data encryption",
      description:
        "All data is encrypted at rest and in transit. We use industry-standard encryption algorithms.",
    },
    {
      title: "Secure integrations",
      description:
        "We use verified variables to ensure users can access only their own data in your systems.",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-12 items-center mt-[96px] md:mt-[160px] mb-[96px] md:mb-[160px]">
      <div className="flex flex-col items-center text-center gap-3 md:gap-6 max-w-[634px]">
        <div>
          <h4 className="matter-h4-reg">Enterprise-grade</h4>
          <h4 className="matter-h4-reg">security & privacy</h4>
        </div>
        <p className="matter-p2-reg text-text-tertiary">
          We take security and compliance seriously. Chatbase is SOC 2 Type II
          and GDPR compliant, trusted by thousands of businesses to build secure
          and compliant AI Agents.
        </p>
        <GlobalStandartsIcon />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-bg-white-10 rounded-[24px] gap-8 md:gap-[48px] p-8"
          >
            <div className="flex flex-col gap-3">
              <h6 className="matter-p1-reg">{card.title}</h6>
              <p className="matter-p4-reg text-text-tertiary">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
