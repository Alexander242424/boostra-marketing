"use client";

import BrandSections from "@/components/BrandSections";
import CarouselSection from "@/components/CarouselSection";
import ConversionReady from "@/components/ConversionReady";
import CostSections from "@/components/CostSections";
import EnterpriseGrade from "@/components/EnterpriseGrade";
import EverythingAbout from "@/components/EverythingAbout";
import FloatingInput from "@/components/FloatingInput";
import HeroSections from "@/components/HeroSections";
import MarketingCardsSections from "@/components/MarketingCardsSections";
import PlansSections from "@/components/PlansSections";
import QuestionsSection from "@/components/QuestionsSection";
import TextBlock from "@/components/TextBlock";
import { useTrackPageViewEffect } from "@/hooks/telemetry";
import { landing2Texts } from "@/config/landing-texts";

export default function Landing2Page() {
  useTrackPageViewEffect("Landing 2");

  return (
    <>
      <div className="w-full h-full flex flex-col px-4 md:px-10 max-w-[1320px] mx-auto not-md:overflow-hidden">
        <HeroSections texts={landing2Texts.hero} />
        <BrandSections texts={landing2Texts.brand} />
        <div id="solution">
          <TextBlock texts={landing2Texts.textBlock} />
        </div>

        <div id="how-it-works">
          <ConversionReady texts={landing2Texts.conversionReady} />
        </div>
        <MarketingCardsSections texts={landing2Texts.marketingCards} />
        <EverythingAbout texts={landing2Texts.everythingAbout} />
        <div id="case-studies">
          <CarouselSection />
        </div>
        <CostSections />
        <div id="pricing">
          <PlansSections />
        </div>
        <div id="faq">
          <QuestionsSection texts={landing2Texts.questions} />
        </div>
        <EnterpriseGrade texts={landing2Texts.enterpriseGrade} />
      </div>
      <FloatingInput />
    </>
  );
}
