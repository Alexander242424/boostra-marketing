"use client";
import React from "react";
import { Input } from "./ui/input";
import GlobeIcon from "@/assets/globus.svg";
import CreditCardIcon from "@/assets/credit-card.svg";
import SplitText from "./SplitText";

export default function HeroSections() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-12 pb-10 pt-8 md:pt-[96px]">
      <div className="w-full flex flex-col justify-center max-w-[632px] gap-8 md:gap-12">
        <div className="flex flex-col gap-16 md:gap-8">
          <SplitText className="matter-h1-reg text-center md:text-left">
            Meet your <span className="text-gradient-blue">AI Conversion</span> & Revenue engine.
          </SplitText>
          <SplitText className="matter-p1-reg text-text-tertiary text-center md:text-left">
            Find what&apos;s broken, fix usability & conversions, boost revenue — in minutes, not weeks.
          </SplitText>
        </div>
        <div className="flex flex-col gap-5 md:gap-4">
          <Input
            placeholder="Page URL..."
            iconLeft={<GlobeIcon />}
            onBtnClick={() => console.log("Analyze clicked")}
          />
          <div className="flex matter-s1-reg text-text-tertiary items-center gap-[5px] md:pl-6">
            <CreditCardIcon />
            <p>No credit card required</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col self-center rounded-[40px] overflow-hidden bg-[#FFFFFF05]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          webkit-playsinline="true"
        >
          <source src="/video/011MG_141_animation_1.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
