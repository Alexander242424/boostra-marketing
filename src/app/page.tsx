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
import { landing1Texts } from "@/config/landing-texts";

export default function RootPage() {
  useTrackPageViewEffect("Landing Root");

  return (
    <>
      <div className="w-full h-full flex flex-col px-4 md:px-10 max-w-[1320px] mx-auto not-md:overflow-hidden">
        <HeroSections texts={landing1Texts.hero} />
        <BrandSections texts={landing1Texts.brand} />
        <div id="solution">
          <TextBlock texts={landing1Texts.textBlock} />
        </div>

        <div id="how-it-works">
          <ConversionReady texts={landing1Texts.conversionReady} />
        </div>
        <MarketingCardsSections texts={landing1Texts.marketingCards} />
        <EverythingAbout texts={landing1Texts.everythingAbout} />
        <div id="case-studies">
          <CarouselSection />
        </div>
        <CostSections />
        <div id="pricing">
          <PlansSections />
        </div>
        <div id="faq">
          <QuestionsSection texts={landing1Texts.questions} />
        </div>
        <EnterpriseGrade texts={landing1Texts.enterpriseGrade} />
      </div>
      <FloatingInput />
    </>
  );
}
