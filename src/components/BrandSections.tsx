import React from "react";
import Image from "next/image";
import SplitText from "./SplitText";

export default function BrandSections() {
  const logos = [
    { name: "Anthropic", src: "/brands_logo/Anthropic.svg" },
    { name: "Asana", src: "/brands_logo/Asana.svg" },
    { name: "Asos", src: "/brands_logo/Asos.svg" },
    { name: "Buffer", src: "/brands_logo/Buffer.svg" },
    { name: "Dropbox", src: "/brands_logo/Dropbox.svg" },
    { name: "Gymshark", src: "/brands_logo/Gymshark.svg" },
    { name: "HubSpot", src: "/brands_logo/HubSpot.svg" },
    { name: "Intercom", src: "/brands_logo/Intercom.svg" },
    { name: "Okta", src: "/brands_logo/Okta.svg" },
    { name: "Ramp", src: "/brands_logo/Ramp.svg" },
    { name: "Vanta", src: "/brands_logo/Vanta.svg" },
    { name: "Verkada", src: "/brands_logo/Verkada.svg" },
  ];
  return (
    <div className="flex flex-col py-[64px] md:pt-[130px] md:pb-[65px] gap-4 md:gap-[34px]">
      <SplitText className="matter-p2-med self-center">
        Join over <span className="text-gradient-blue">5000</span> businesses
        using Boostra
      </SplitText>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[109px] h-[64px] md:w-[192px] md:h-[88px]"
          >
            <Image src={logo.src} alt={logo.name} width={120} height={40} />
          </div>
        ))}
      </div>
    </div>
  );
}
