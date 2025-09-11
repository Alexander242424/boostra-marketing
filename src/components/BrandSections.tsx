"use client";
import React, { useState } from "react";
import FadeInUp from "./FadeInUp";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import BrandTooltipCard from "./BrandTooltipCard";
import { useIsMobile } from "@/hooks/useIsMobile";

// Import logo components
import NespressoDesktop from "@/assets/logo boostra/desktop/nespresso.svg";
import NespressoMobile from "@/assets/logo boostra/mobile/nespresso.svg";
import ClaudeDesktop from "@/assets/logo boostra/desktop/claude.svg";
import ClaudeMobile from "@/assets/logo boostra/mobile/claude.svg";
import ZaraDesktop from "@/assets/logo boostra/desktop/zara.svg";
import ZaraMobile from "@/assets/logo boostra/mobile/zara.svg";
import GymsharkDesktop from "@/assets/logo boostra/desktop/gymshark.svg";
import GymsharkMobile from "@/assets/logo boostra/mobile/gymshark.svg";
import AsosDesktop from "@/assets/logo boostra/desktop/asos.svg";
import AsosMobile from "@/assets/logo boostra/mobile/asos.svg";
import ForbesDesktop from "@/assets/logo boostra/desktop/forbes.svg";
import ForbesMobile from "@/assets/logo boostra/mobile/forbes.svg";
import OktaDesktop from "@/assets/logo boostra/desktop/okta.svg";
import OktaMobile from "@/assets/logo boostra/mobile/okta.svg";
import DeliverooDesktop from "@/assets/logo boostra/desktop/deliveroo.svg";
import DeliverooMobile from "@/assets/logo boostra/mobile/deliveroo.svg";
import BufferDesktop from "@/assets/logo boostra/desktop/buffer.svg";
import BufferMobile from "@/assets/logo boostra/mobile/buffer.svg";
import DropboxDesktop from "@/assets/logo boostra/desktop/dropbox.svg";
import DropboxMobile from "@/assets/logo boostra/mobile/dropbox.svg";
import SchneiderDesktop from "@/assets/logo boostra/desktop/shneider.svg";
import SchneiderMobile from "@/assets/logo boostra/mobile/shneider.svg";
import RampDesktop from "@/assets/logo boostra/desktop/ramp.svg";
import RampMobile from "@/assets/logo boostra/mobile/ramp.svg";

export default function BrandSections() {
  const isMobile = useIsMobile();
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);

  const logos = [
    {
      name: "nespresso_logo",
      src: <NespressoDesktop />,
      srcMobile: <NespressoMobile />,
      btnText: "Case Study",
    },
    {
      name: "claude_logo",
      src: <ClaudeDesktop />,
      srcMobile: <ClaudeMobile />,
    },
    {
      name: "zara_logo",
      src: <ZaraDesktop />,
      srcMobile: <ZaraMobile />,
      btnText: "Case Study",
    },
    {
      name: "gs_logo",
      src: <GymsharkDesktop />,
      srcMobile: <GymsharkMobile />,
      btnText: "Case Study",
    },
    { 
      name: "asos_logo", 
      src: <AsosDesktop />,
      srcMobile: <AsosMobile />,
    },
    {
      name: "forbes_logo",
      src: <ForbesDesktop />,
      srcMobile: <ForbesMobile />,
      btnText: "Case Study",
    },
    {
      name: "okta_logo",
      src: <OktaDesktop />,
      srcMobile: <OktaMobile />,
    },
    {
      name: "deliveroo_logo",
      src: <DeliverooDesktop />,
      srcMobile: <DeliverooMobile />,
      btnText: "Case Study",
    },
    { 
      name: "buffer_logo", 
      src: <BufferDesktop />,
      srcMobile: <BufferMobile />,
    },
    { 
      name: "dropbox_logo", 
      src: <DropboxDesktop />,
      srcMobile: <DropboxMobile />,
    },
    {
      name: "schneider_electric",
      src: <SchneiderDesktop />,
      srcMobile: <SchneiderMobile />,
      btnText: "Case Study",
    },
    { 
      name: "ramp_logo", 
      src: <RampDesktop />,
      srcMobile: <RampMobile />,
    },
  ];

  const handleTooltipClick = (index: number) => {
    setOpenTooltip(openTooltip === index ? null : index);
  };

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
            {isMobile && logo.srcMobile ? logo.srcMobile : logo.src}
            {logo.btnText && !isMobile && (
              <div 
                className="absolute -bottom-10 right-0 text-[#3B95FE] cursor-pointer bg-bg-white-12 rounded-[100px] w-full h-full flex items-center justify-center max-w-[57.410255432128906px] max-h-[16px] md:max-w-[81px] md:max-h-[25px] tooltip-btn"
                onClick={() => handleTooltipClick(index)}
              >
                <Tooltip 
                  open={openTooltip === index} 
                  onOpenChange={(open) => !open && setOpenTooltip(null)}
                  delayDuration={0}
                  disableHoverableContent={false}
                >
                  <TooltipTrigger asChild>
                    <p className="matter-s2-med">{logo.btnText}</p>
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={10}
                    className="border-[1px] border-bg-white-12 bg-bg-white-12 text-white backdrop-blur-[80px] shadow-[0px_4px_4px_0px_#00000040] p-8 rounded-[16px] max-w-[410px] ml-[330px]"
                    onPointerDownOutside={(e) => e.preventDefault()}
                    onEscapeKeyDown={() => setOpenTooltip(null)}
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
