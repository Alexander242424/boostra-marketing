"use client";
import Image from "next/image";
import VarizoneSvg from "@/assets/verizon.svg";
import PersonasImage from "@/assets/Conversion ready,Usability,Above the fold/Personas.webp";
import { useIsTablet } from "@/hooks/useIsTablet";

export default function EverythingAbout() {
  const isTablet = useIsTablet();
  return (
    <div className="flex flex-col py-[64px] lg:flex-row lg:pt-16 lg:pb-20 lg:gap-6">
      <div className="flex flex-col w-full mx-auto lg:mx-0">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-4 w-full">
          <h4 className="matter-h4-reg text-center lg:text-left">
            Get to know everything about your users
          </h4>
          <p className="matter-p3-reg text-center lg:text-left">
            Turn persona insights into action. See motivations, pain points, and
            behaviors — then use them to design journeys that convert faster.
          </p>
        </div>
        {!isTablet && (
          <div className="flex flex-col lg:gap-[27px] lg:pl-6 border-l-[1px] border-[#494949] mt-auto lg:mb-[84px]">
            <p className="matter-p4-reg text-text-tertiary">
              When we looked at our Cycle insights recently, we noticed that we
              had completed twice the amount of issues than we had initially
              planned at the start of the cycle. It felt good.
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
            When we looked at our Cycle insights recently, we noticed that we
            had completed twice the amount of issues than we had initially
            planned at the start of the cycle. It felt good.
          </p>
            <VarizoneSvg />
        </div>
      )}
    </div>
  );
}
