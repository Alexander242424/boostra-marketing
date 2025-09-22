"use client";
import React from "react";
import GoalIcon from "@/assets/Goals.svg";
import Image from "next/image";
import ConversionReadyImage from "@/assets/Conversion ready,Usability,Above the fold/Conversion ready.webp";
import { useIsMobile } from "@/hooks/useIsMobile";
import { LandingTexts } from "@/config/landing-texts";

interface ConversionReadyProps {
  texts: LandingTexts['conversionReady'];
}

export default function ConversionReady({ texts }: ConversionReadyProps) {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[120px] pt-[96px] pb-[44px] md:pt-[89px] lg:pt-[89px] md:pb-[88px] lg:pb-0">
      <div className="flex flex-col md:gap-[48px] lg:gap-[55px] lg:pt-[73px] lg:pb-[67px]">
        <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
          <h2 className="matter-h3-reg" dangerouslySetInnerHTML={{ __html: texts.title }} />
          <p className="matter-p3-reg text-text-tertiary">
            {texts.subtitle}
          </p>
        </div>
        {!isMobile && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Cards list */}
          {texts.cards.map((card, index) => (
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
        )}
      </div>
      <div className="flex flex-col justify-center w-full h-auto pt-[62px] lg:max-w-[570px] md:pt-[48px] lg:pt-0">
        <Image src={ConversionReadyImage} alt="Conversion Ready" />
      </div>
      {isMobile && (
        <div className="grid grid-cols-2 gap-4 pt-[38px]">
          {/* Cards list */}
          {texts.cards.map((card, index) => (
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
        )}
    </div>
  );
}
