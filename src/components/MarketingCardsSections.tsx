"use client";
import Image from "next/image";
import UsabilityImage from "@/assets/Conversion ready,Usability,Above the fold/Usability.webp";
import AbovethefoldImage from "@/assets/Conversion ready,Usability,Above the fold/Above the fold.webp";
import AccessibilityImage from "@/assets/Conversion ready,Usability,Above the fold/Accessibility.webp";
import SpeedLoadImage from "@/assets/Conversion ready,Usability,Above the fold/Speed Load.webp";
import { LandingTexts } from "@/config/landing-texts";

interface MarketingCardsSectionsProps {
  texts: LandingTexts['marketingCards'];
}

export default function MarketingCardsSections({ texts }: MarketingCardsSectionsProps) {
  const marketingCards = [
    {
      title: texts[0].title,
      description: texts[0].description,
      image: UsabilityImage,
      alt: texts[0].title,
    },
    {
      title: texts[1].title,
      description: texts[1].description,
      image: AbovethefoldImage,
      alt: texts[1].title,
    },
    {
      title: texts[2].title,
      description: texts[2].description,
      image: AccessibilityImage,
      alt: texts[2].title,
    },
    {
      title: texts[3].title,
      description: texts[3].description,
      image: SpeedLoadImage,
      alt: texts[3].title,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:border-t-[1px] lg:border-b-[1px] border-[#242424] lg:mt-[53px]">
      {/* Cards */}
      {marketingCards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col items-center lg:items-start lg:max-w-none py-12 md:py-[64px] lg:gap-[48px] lg:p-16 border-t-[1px] border-[#242424] lg:border-0 ${
            index % 2 === 0
              ? "lg:pl-0 lg:border-r-[1px] border-[#242424]"
              : "lg:pr-0"
          } ${index > 1 ? "lg:border-t-[1px] border-[#242424]" : ""}`}
        >
          <div className="flex flex-col gap-6 md:gap-[48px] max-w-[610px] mx-auto">
            <div className="flex flex-col gap-3 md:gap-4 lg:max-w-[516px]">
              <h5 className="matter-h5-reg text-center lg:text-left">
                {card.title}
              </h5>
              <p className="matter-p3-reg text-text-tertiary text-center lg:text-left">
                {card.description}
              </p>
            </div>
            <div className="w-full h-auto lg:max-w-[560px]">
              <Image src={card.image} alt={card.alt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
