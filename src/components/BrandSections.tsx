"use client";
import React, { useState } from "react";
import { FadeInUpGroup, FadeInUpItem } from "./FadeInUpGroup";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import BrandTooltipCard from "./BrandTooltipCard";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTrackEvent } from "@/hooks/telemetry";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";

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

import GymsharkLogo from "@/assets/logo Case Studies/gymshark.svg";
import ZaraLogo from "@/assets/logo Case Studies/zara.svg";
import NespressoLogo from "@/assets/logo Case Studies/nespresso.svg";
import DeliverooLogo from "@/assets/logo Case Studies/deliveroo.svg";
import ForbesLogo from "@/assets/logo Case Studies/forbes.svg";
import SchneiderLogo from "@/assets/logo Case Studies/schneider.svg";

export default function BrandSections() {
  const isMobile = useIsMobile();
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);
  const trackEvent = useTrackEvent();
  const buildPortalUrl = useBuildPortalUrl();

  const logos = [
    {
      nameSrc: "nespresso_logo",
      src: <NespressoDesktop />,
      srcMobile: <NespressoMobile />,
      btnText: "Case Study",
      name: "Sophie Bernard",
      position: "Digital Marketing Manager, Nespresso",
      description:
        "Campaign pages performed much better after Boostra&apos;s audit. Leads increased by 23% and cost per acquisition dropped significantly.",
      brandIcon: <NespressoLogo />,
    },
    {
      nameSrc: "claude_logo",
      src: <ClaudeDesktop />,
      srcMobile: <ClaudeMobile />,
    },
    {
      nameSrc: "zara_logo",
      src: <ZaraDesktop />,
      srcMobile: <ZaraMobile />,
      btnText: "Case Study",
      name: "Michael Torres",
      position: "eCommerce Product Manager, Zara",
      description:
        "We used Boostra to refine mobile navigation. It reduced bounce rates by 11% and helped customers reach products faster, which boosted sales.",
      brandIcon: <ZaraLogo />,
    },
    {
      nameSrc: "gs_logo",
      src: <GymsharkDesktop />,
      srcMobile: <GymsharkMobile />,
      btnText: "Case Study",
      name: "Hannah Lewis",
      position: "Senior UX Designer, Gymshark",
      description:
        "Boostra pointed out checkout bottlenecks we had missed. After implementing fixes, our cart completion rate improved by 14% in just a few weeks.",
      brandIcon: <GymsharkLogo />,
    },
    {
      nameSrc: "asos_logo",
      src: <AsosDesktop />,
      srcMobile: <AsosMobile />,
    },
    {
      nameSrc: "forbes_logo",
      src: <ForbesDesktop />,
      srcMobile: <ForbesMobile />,
      btnText: "Case Study",
      name: "Rachel Wong",
      position: "Product Designer, Forbes",
      description:
        "Boostra showed us exactly what to fix in our subscription paywall. We saw a 12% uplift in sign-ups and reduced early churn",
      brandIcon: <ForbesLogo />,
    },
    {
      nameSrc: "okta_logo",
      src: <OktaDesktop />,
      srcMobile: <OktaMobile />,
    },
    {
      nameSrc: "deliveroo_logo",
      src: <DeliverooDesktop />,
      srcMobile: <DeliverooMobile />,
      btnText: "Case Study",
      name: "Tom Gallagher",
      position: "Growth Manager, Deliveroo",
      description:
        "Boostra gave us clarity on where customers abandoned the order flow. Checkout tweaks lifted conversions by 9% and average basket value went up.",
      brandIcon: <DeliverooLogo />,
    },
    {
      nameSrc: "buffer_logo",
      src: <BufferDesktop />,
      srcMobile: <BufferMobile />,
    },
    {
      nameSrc: "dropbox_logo",
      src: <DropboxDesktop />,
      srcMobile: <DropboxMobile />,
    },
    {
      nameSrc: "schneider_electric",
      src: <SchneiderDesktop />,
      srcMobile: <SchneiderMobile />,
      btnText: "Case Study",
      name: "Oliver Becker",
      position: "Web Experience Manager, Schneider Electric",
      description:
        "Boostra helped us streamline our lead generation forms. Completion rates jumped by 21%, and our sales team received better qualified leads.",
      brandIcon: <SchneiderLogo />,
    },
    {
      nameSrc: "ramp_logo",
      src: <RampDesktop />,
      srcMobile: <RampMobile />,
    },
  ];

  const handleTooltipClick = (index: number) => {
    setOpenTooltip(openTooltip === index ? null : index);
  };

  const handleGetStartedClick = () => {
    trackEvent(`Get Started for Free Clicked`, undefined, () => {
      window.location.href = buildPortalUrl({
        pathname: "/register",
      });
    });
  };

  return (
    <FadeInUpGroup className="flex flex-col py-[64px] md:pt-[130px] md:pb-[65px] gap-4 md:gap-[34px]" staggerDelay={0.05}>
      <FadeInUpItem index={0} className="self-center">
        <p className="matter-p2-med self-center">
          Join over <span className="text-gradient-blue">5000</span> businesses
          using Boostra
        </p>
      </FadeInUpItem>
      <FadeInUpItem index={1} className="flex flex-wrap gap-4 justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="block w-[100px] h-[45px] md:w-[192px] md:h-[88px] relative"
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <div className="[&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:object-contain">
                {isMobile && logo.srcMobile ? logo.srcMobile : logo.src}
              </div>
            </div>
            {logo.btnText && !isMobile && (
              <div
                className="absolute bottom-3 left-30 text-[#3B95FE] cursor-pointer bg-bg-white-12 rounded-[100px] w-full h-full flex items-center justify-center max-w-[57.410255432128906px] max-h-[16px] md:max-w-[81px] md:max-h-[25px] tooltip-btn"
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
                    <BrandTooltipCard
                      name={logo.name}
                      position={logo.position}
                      description={logo.description}
                      brandIcon={logo.brandIcon}
                      onGetStartedClick={handleGetStartedClick}
                    />
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>
        ))}
      </FadeInUpItem>
    </FadeInUpGroup>
  );
}
