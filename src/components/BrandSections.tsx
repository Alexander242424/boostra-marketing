import React from "react";
import Image from "next/image";
import FadeInUp from "./FadeInUp";

export default function BrandSections() {
  const logos = [
    { name: "Anthropic", src: "/brands_logo/Anthropic.svg" },
    { name: "Asana", src: "/brands_logo/Asana.svg" },
    { name: "Asos", src: "/brands_logo/Asos.svg", btnText: "Case Study" },
    { name: "Buffer", src: "/brands_logo/Buffer.svg" },
    { name: "Dropbox", src: "/brands_logo/Dropbox.svg" },
    { name: "Gymshark", src: "/brands_logo/Gymshark.svg", btnText: "Case Study" },
    { name: "HubSpot", src: "/brands_logo/HubSpot.svg" },
    { name: "Intercom", src: "/brands_logo/Intercom.svg" },
    { name: "Okta", src: "/brands_logo/Okta.svg", btnText: "Case Study" },
    { name: "Ramp", src: "/brands_logo/Ramp.svg" },
    { name: "Vanta", src: "/brands_logo/Vanta.svg" },
    { name: "Verkada", src: "/brands_logo/Verkada.svg" },
  ];
  return (
    <FadeInUp className="flex flex-col py-[64px] md:pt-[130px] md:pb-[65px] gap-4 md:gap-[34px]">
      <FadeInUp className="self-center">
        <p className="matter-p2-med self-center">
          Join over <span className="text-gradient-blue">5000</span> businesses
          using Boostra
        </p>
      </FadeInUp>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[109px] h-[64px] md:w-[192px] md:h-[88px] relative"
          >
            <Image src={logo.src} alt={logo.name} width={120} height={40} />
            {logo.btnText && (
              <div className="absolute -bottom-4 right-0 text-[#3B95FE] cursor-pointer bg-bg-white-12 rounded-[100px] w-full h-full flex items-center justify-center max-w-[57.410255432128906px] max-h-[16px] md:max-w-[81px] md:max-h-[25px]">
                <p className="matter-s2-med">{logo.btnText}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </FadeInUp>
  );
}
