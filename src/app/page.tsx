"use client";

import BrandSections from "@/components/BrandSections";
import CarouselSection from "@/components/CarouselSection";
import CopilotSections from "@/components/CopilotSections";
import CostSections from "@/components/CostSections";
import EnterpriseGrade from "@/components/EnterpriseGrade";
import FloatingInput from "@/components/FloatingInput";
import HeroSections from "@/components/HeroSections";
import InfoCard from "@/components/InfoCard";
import PlansSections from "@/components/PlansSections";
import QuestionsSection from "@/components/QuestionsSection";
import RevenueOpportunities from "@/components/RevenueOpportunities";
import TextBlock from "@/components/TextBlock";
import { useTrackPageViewEffect } from "@/hooks/telemetry";

export default function RootPage() {
  useTrackPageViewEffect("Landing Root");

  return (
    <>
      <div className="w-full h-full flex flex-col px-4 lg:px-[121px] max-w-[1512px] mx-auto">
        <HeroSections />
        {/* <BrandSections /> */}
        <TextBlock />
        <div
          id="solutions"
          className="flex flex-col items-center md:mt-[130px]"
        >
          <InfoCard
            title={["Boost", "Conversions"]}
            description={
              "Increase revenue growth by uncovering hidden funnel leaks and converting more visitors into customers. Make every page conversion-ready."
            }
            btnText={"Improve Conversions"}
            videoSrc={"/video/011MG_141_animation_1.webm"}
          />
          <InfoCard
            title={["Boost", "Usability"]}
            description={
              "Don&apos;t let users leave by confused interface. Identify friction points and turn them into smooth, intuitive experiences"
            }
            btnText={"Improve Usability"}
            videoSrc={"/video/011MG_141_animation_1.webm"}
          />
          <InfoCard
            title={["Boost", "Accessibility"]}
            description={
              "Accessibility gaps cost customers and compliance. Detect barriers and make your site usable for every visitor"
            }
            btnText={"Improve Accessibility"}
            videoSrc={"/video/011MG_141_animation_1.webm"}
          />
        </div>
        <div id="how-it-works">
          <CarouselSection />
        </div>
        <div id="case-studies">
          <RevenueOpportunities />
        </div>
        <CopilotSections />
        <CostSections />
        <div id="pricing">
          <PlansSections />
        </div>
        <div id="faq">
          <QuestionsSection />
        </div>
        <EnterpriseGrade />
      </div>
      <FloatingInput />
    </>
  );
}
