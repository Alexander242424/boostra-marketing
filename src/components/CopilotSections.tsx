"use client";
import React from "react";
import CopilotHeaderIcon from "@/assets/copilot.svg";
import StarsBg from "@/assets/background/stars-bg.svg";
import { Input } from "./ui/input";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function CopilotSections() {
  const isMobile = useIsMobile();
  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[96px] md:py-[160px]"
      style={{
        backgroundImage: isMobile
          ? 'url("/Backgrounds boostra/mobile/Background Copilot-min.jpg")'
          : 'url("/Backgrounds boostra/desktop/Background Copilot-min.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col gap-[48px] items-center justify-center h-[665px] lg:h-[859px]">
        <div className="flex flex-col max-w-[571px] gap-4 md:gap-6 items-center">
          <CopilotHeaderIcon />
          <h3 className="matter-h3-reg text-center">
            Meet Boostra <span className="text-gradient-blue">Copilot </span>
          </h3>
          <p className="matter-p1-reg text-center text-text-secondary">
            Interact as a human, huge knowlege base. <br /> Get answers to any
            questions.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full h-full max-w-[788px] max-h-[248px]">
          {/* Stars background behind input */}
          <div className="absolute top-0 lg:left-20 inset-0 z-0 w-full h-full">
            <StarsBg className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 w-full max-w-[520px]">
            <Input
              className="w-full"
              placeholder="Tell me why users don't buy?"
              btnText="Ask Boostra"
              onBtnClick={() => console.log("Analyze clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
