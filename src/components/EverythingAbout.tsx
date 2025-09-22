"use client";
import Image from "next/image";
import VarizoneSvg from "@/assets/verizon.svg";
import PersonasImage from "@/assets/Conversion ready,Usability,Above the fold/Personas.webp";
import { useIsTablet } from "@/hooks/useIsTablet";
import { LandingTexts } from "@/config/landing-texts";

interface EverythingAboutProps {
  texts: LandingTexts['everythingAbout'];
}

export default function EverythingAbout({ texts }: EverythingAboutProps) {
  const isTablet = useIsTablet();
  return (
    <div className="flex flex-col py-[64px] lg:flex-row lg:pt-16 lg:pb-20 lg:gap-6">
      <div className="flex flex-col w-full mx-auto lg:mx-0">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-4 w-full">
          <h5 className="matter-h5-reg text-center lg:text-left">
            {texts.title}
          </h5>
          <p className="matter-p3-reg text-center lg:text-left">
            {texts.description}
          </p>
        </div>
        {!isTablet && (
          <div className="flex flex-col lg:gap-[27px] lg:pl-6 border-l-[1px] border-[#494949] mt-auto lg:mb-[84px]">
            <p className="matter-p4-reg text-text-tertiary">
              {texts.testimonial}
            </p>
            <VarizoneSvg />
          </div>
        )}
      </div>
      <div className="w-full h-auto lg:max-w-[724px] pt-[64px] md:pt-[54px] lg:pt-0">
        <Image src={PersonasImage} alt="Personas" />
      </div>
      {isTablet && (
        <div className="flex flex-col gap-3 items-center pt-[48px]">
          <p className="matter-p4-reg text-text-tertiary text-center">
            {texts.testimonial}
          </p>
            <VarizoneSvg />
        </div>
      )}
    </div>
  );
}
