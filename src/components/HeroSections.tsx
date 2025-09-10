"use client";
import CreditCardIcon from "@/assets/credit-card.svg";
import HeroVideoAnimation from "@/assets/data.json";
import GlobeIcon from "@/assets/globus.svg";
import {
  useTrackEvent,
  useTrackFirstValueChangeEffect,
} from "@/hooks/telemetry";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";
import { useUrlValidation } from "@/hooks/useUrlValidation";
import Lottie from "lottie-react";
import { useState } from "react";
import FadeInUp from "./FadeInUp";
import { Input } from "./ui/input";

const buttonText = "Boost Page";

export default function HeroSections() {
  const [url, setUrl] = useState("");
  const { isValidUrl } = useUrlValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buildPortalUrl = useBuildPortalUrl();
  const trackEvent = useTrackEvent();

  useTrackFirstValueChangeEffect("URL Input Started", undefined, [url]);

  const handleBoostPage = () => {
    if (isSubmitting) return;
    if (isValidUrl(url)) {
      const finalUrl = url.trim();
      setIsSubmitting(true);
      trackEvent(`${buttonText} Clicked`, { url: finalUrl }, () => {
        window.location.href = buildPortalUrl({
          pathname: "/url-loader",
          searchParams: { url: finalUrl },
        });
        setIsSubmitting(false);
      });
    }
    // Якщо інпут пустий, нічого не робимо
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center gap-8 md:gap-12 pb-10 pt-8 md:pt-[72px]">
      <div className="w-full flex flex-col lg:max-w-[632px] gap-8 md:gap-12">
        <div className="flex flex-col gap-4 md:gap-8">
          <FadeInUp delay={0.1}>
            <h1 className="matter-h1-reg text-center md:text-left">
              Meet your{" "}
              <span className="text-gradient-blue">AI Conversion</span> &
              Revenue engine.
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <h1 className="matter-p1-reg text-text-tertiary text-center lg:text-left lg:max-w-[495px]">
              Find what&apos;s broken, fix usability & conversions, boost
              revenue — in minutes, not weeks.
            </h1>
          </FadeInUp>
        </div>
        <FadeInUp
          delay={0.6}
          className="flex flex-col gap-5 md:gap-4 items-center md:items-stretch lg:max-w-[592px]"
        >
          <div className="hover:scale-[1.02] transition-all duration-300">
            <Input
              className="cursor-pointer"
              placeholder="Page URL..."
              iconLeft={<GlobeIcon />}
              btnText={buttonText}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onBtnClick={handleBoostPage}
              isError={url.trim() !== "" && !isValidUrl(url)}
              isDisabled={url.trim() !== "" && !isValidUrl(url)}
            />
          </div>
          <div className="flex matter-s1-reg text-text-tertiary items-center gap-[5px] md:pl-6">
            <CreditCardIcon />
            <p>No credit card required</p>
          </div>
        </FadeInUp>
      </div>
      <div className="w-full h-full flex flex-col md:max-w-[536px] md:max-h-[528px] self-center border-[0.5px] border-[#FFFFFF0D] rounded-[40px] overflow-hidden bg-[#FFFFFF05]">
        <Lottie animationData={HeroVideoAnimation} loop={true} />
      </div>
    </div>
  );
}
