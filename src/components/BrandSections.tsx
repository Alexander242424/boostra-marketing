import React from "react";
import Image from "next/image";
import FadeInUp from "./FadeInUp";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import BrandTooltipCard from "./BrandTooltipCard";

export default function BrandSections() {
  const logos = [
    { name: "asos_logo", src: "/brands_logo/asos_logo.svg" },
    { name: "buffer_logo", src: "/brands_logo/buffer_logo.svg" },
    {
      name: "claude_logo",
      src: "/brands_logo/claude_logo.svg",
      btnText: "Case Study",
    },
    { name: "deliveroo_logo", src: "/brands_logo/deliveroo_logo.svg" },
    { name: "dropbox_logo", src: "/brands_logo/dropbox_logo.svg" },
    {
      name: "forbes_logo",
      src: "/brands_logo/forbes_logo.svg",
      btnText: "Case Study",
    },
    { name: "gs_logo", src: "/brands_logo/gs_logo.svg" },
    { name: "nespresso_logo", src: "/brands_logo/nespresso_logo.svg" },
    {
      name: "okta_logo",
      src: "/brands_logo/okta_logo.svg",
      btnText: "Case Study",
    },
    { name: "ramp_logo", src: "/brands_logo/ramp_logo.svg" },
    { name: "schneider_electric", src: "/brands_logo/schneider_electric.svg" },
    { name: "zara_logo", src: "/brands_logo/zara_logo.svg" },
  ];
  return (
    <FadeInUp className="flex flex-col py-[64px] md:pt-[130px] md:pb-[65px] gap-4 md:gap-[34px]">
      <FadeInUp className="self-center">
        <p className="matter-p2-med self-center">
          Join over <span className="text-gradient-blue">5000</span> businesses
          using Boostra
        </p>
      </FadeInUp>
      <div className="flex flex-wrap gap-4 justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[109px] h-[64px] md:w-[192px] md:h-[88px] relative"
          >
            <Image src={logo.src} alt={logo.name} width={120} height={40} />
            {logo.btnText && (
              <div className="absolute -bottom-4 right-0 text-[#3B95FE] cursor-pointer bg-bg-white-12 rounded-[100px] w-full h-full flex items-center justify-center max-w-[57.410255432128906px] max-h-[16px] md:max-w-[81px] md:max-h-[25px]">
                <Tooltip>
                  <TooltipTrigger>
                    <p className="matter-s2-med">{logo.btnText}</p>
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={10}
                    className="border-[1px] border-bg-white-12 bg-bg-white-12 text-white backdrop-blur-[80px] shadow-[0px_4px_4px_0px_#00000040] p-8 rounded-[16px] max-w-[410px] ml-[330px]"
                  >
                    <BrandTooltipCard />
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>
        ))}
      </div>
    </FadeInUp>
  );
}
