"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useState } from "react";
import { Button } from "./ui/button";
import CheckIcon from "@/assets/check.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import FadeInUp from "./FadeInUp";
import AvatarIcon from "@/assets/Ellipse 29.svg";

export default function PlansSections() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<string>("Monthly");
  const tabs = ["Monthly", "Yearly"];

  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[96px] md:py-[160px]"
      style={{
        backgroundImage: isMobile
          ? 'url("/boostra-updated/Mobile Gradient Background 03.webp")'
          : 'url("/boostra-updated/Gradient Background 03.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto px-4">
        <FadeInUp className="flex flex-col items-center text-center gap-3 md:gap-5 mb-[48px]">
          <p className="matter-p2-med text-gradient-blue">Pricing</p>
          <h2 className="matter-h2-reg max-w-[752px]">
            Analysis-based plans to match your growth
          </h2>
        </FadeInUp>
        {/* Tabs with plans */}
        <FadeInUp className="flex max-w-fit mx-auto bg-bg-white-12 border border-bg-white-12 p-2 rounded-[30px] matter-p4-reg mb-[40px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex rounded-[30px] px-[12px] py-[8px] transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-bg-white-12 text-white"
                  : "hover:text-white hover:bg-bg-white-6"
              }`}
            >
              <p>{tab}</p>
              {tab === "Yearly" && (
                <div className="w-full h-full min-w-[75px] min-h-[24px] items-center justify-center flex bg-[#02BF46] rounded-[100px] ml-2.5">
                  <p className="matter-s2-med text-center">Save 20%</p>
                </div>
              )}
            </button>
          ))}
        </FadeInUp>
        <FadeInUp className="flex flex-col mx-auto border border-[#1C42FF] md:flex-row p-6 md:pt-8 md:py-8 md:pb-6 bg-bg-white-6 rounded-[24px] gap-6 md:gap-8 max-w-[838px] shadow-[0px_0px_0px_5px_#3586FF3D]">
          <div className="flex flex-col w-full md:max-w-[274px]">
            <h6 className="matter-h6-reg">All in One</h6>
            <div className="flex pt-6 md:pt-[15px] items-end">
              <h1 className="matter-h1-reg">$9</h1>
              <p className="matter-p2-reg text-text-tertiary">$29 / monthly</p>
            </div>
            <div className="flex flex-col gap-[20px] pt-6 md:pt-8">
              {/* Dropdown with features */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="1 report / mo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">5 report / mo</SelectItem>
                  <SelectItem value="dark">6 report / mo</SelectItem>
                  <SelectItem value="system">10 report / mo</SelectItem>
                </SelectContent>
              </Select>
              <Button size="lg">Get Started for Free</Button>
            </div>
            <p className="matter-s1-med pt-3 text-center">
              Cancel any time.{" "}
              <span className="text-text-tertiary">No questions asked!</span>
            </p>
          </div>
          <div className="border-l border-bg-white-6" />
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="matter-p2-reg">You will get:</p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Access to all features</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Fixed Usability</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Fixed Accessibility</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Fixed Above-the-fold</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Psychological Factors Analysis</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Page performance Analysis</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">User Persona Insights</p>
              </div>
            </div>
          </div>
        </FadeInUp>
        <FadeInUp className="flex flex-col mx-auto max-w-[253px] gap-[18px] pt-8 md:pt-12">
          <p className="matter-p4-reg text-center">
            “We increased our revenue to $10,000 with Boostra”
          </p>
          <div className="flex items-center justify-center">
            <AvatarIcon />
            <div className="flex flex-col ml-3">
              <p className="matter-s1-med">Morgan Sowden</p>
              <p className="matter-s2-med text-text-tertiary">
                CEO, Journalist.net
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
