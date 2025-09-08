"use client";
import React from "react";
import { Input } from "./ui/input";
import GlobeIcon from "@/assets/globus.svg";
import CreditCardIcon from "@/assets/credit-card.svg";
import SplitText from "./SplitText";
import FadeInUp from "./FadeInUp";

export default function HeroSections() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 pb-10 pt-8 md:pt-[48px]">
      <div className="w-full flex flex-col max-w-[632px] gap-8 md:gap-12">
        <div className="flex flex-col gap-4 md:gap-8">
          <FadeInUp delay={0.1}>
          <h1 className="matter-h1-reg text-center md:text-left">
            Meet your <span className="text-gradient-blue">AI Conversion</span>{" "}
            & Revenue engine.
          </h1>
          </FadeInUp>
          <FadeInUp delay={0.3}>
          <h1 className="matter-p1-reg text-text-tertiary text-center md:text-left md:max-w-[495px]">
            Find what&apos;s broken, fix usability & conversions, boost revenue
            — in minutes, not weeks.
          </h1>
          </FadeInUp>
        </div>
        <FadeInUp delay={0.6} className="flex flex-col gap-5 md:gap-4 items-center md:items-stretch md:max-w-[592px]">
          <Input
            className=""
            placeholder="Page URL..."
            iconLeft={<GlobeIcon />}
            btnText="Boost Page"
            onBtnClick={() => console.log("Analyze clicked")}
          />
          <div className="flex matter-s1-reg text-text-tertiary items-center gap-[5px] md:pl-6">
            <CreditCardIcon />
            <p>No credit card required</p>
          </div>
        </FadeInUp>
      </div>
      <div className="w-full h-full flex flex-col md:max-w-[536px] md:max-h-[528px] self-center border-[0.5px] border-[#FFFFFF0D] rounded-[40px] overflow-hidden bg-[#FFFFFF05]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          webkit-playsinline="true"
        >
          <source src="/video/02MG_141_2_v1.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
