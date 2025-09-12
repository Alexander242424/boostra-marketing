"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useState, useEffect } from "react";
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
import AvatarIcon from "@/assets/Tripadvisor Team.svg";
import { useTrackEvent } from "@/hooks/telemetry";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";

// Types for API data
interface Price {
  price_id: string;
  price: number;
  credits: number;
}

interface Plan {
  name: string;
  description: string;
  prices: Price[];
}

interface SubscriptionsData {
  monthly: Plan[];
  yearly: Plan[];
}

// Request function
const request = async (endpoint: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return null;
  }

  try {
    const response = await fetch(`${apiUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
};

export default function PlansSections() {
  const trackEvent = useTrackEvent();
  const buildPortalUrl = useBuildPortalUrl();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<string>("Monthly");
  const [subscriptionsData, setSubscriptionsData] =
    useState<SubscriptionsData | null>(null);
  const [selectedPriceIndex, setSelectedPriceIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const tabs = ["Monthly", "Yearly"];

  // API call effect
  useEffect(() => {
    const fetchSubscriptions = async () => {
      const data = await request(`/api/payment/subscriptions`);
      console.log("Subscriptions data:", data);
      if (data) {
        setSubscriptionsData(data);
        setIsLoading(false);
        // Set default to first element (largest) in reversed order
        const monthlyPrices = data.monthly?.[0]?.prices || [];
        if (monthlyPrices.length > 0) {
          setSelectedPriceIndex(monthlyPrices.length - 1);
        }
      }
    };

    fetchSubscriptions();
  }, []);

  // Get current plan data based on active tab
  const currentPlan =
    subscriptionsData?.[
      activeTab.toLowerCase() as keyof SubscriptionsData
    ]?.[0];
  const currentPrices = currentPlan?.prices || [];
  const selectedPrice = currentPrices[selectedPriceIndex];

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Set to first element (largest) in reversed order when changing tabs
    const newPlan = subscriptionsData?.[tab.toLowerCase() as keyof SubscriptionsData]?.[0];
    const newPrices = newPlan?.prices || [];
    if (newPrices.length > 0) {
      setSelectedPriceIndex(newPrices.length - 1);
    }
  };

  // Handle price selection
  const handlePriceChange = (value: string) => {
    const index = parseInt(value);
    // Since we're displaying prices in reverse order, we need to convert the index
    const actualIndex = currentPrices.length - 1 - index;
    setSelectedPriceIndex(actualIndex);
  };

  if (isLoading) {
    return (
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[96px] md:py-[160px] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[96px] md:py-[160px]"
      style={{
        backgroundImage: isMobile
          ? 'url("/Backgrounds boostra/mobile/Background Pricing-min.jpg")'
          : 'url("/Backgrounds boostra/desktop/Gradient Pricing-min.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto px-4">
        <FadeInUp className="flex flex-col items-center text-center gap-3 md:gap-5 mb-[48px]">
          <p className="matter-p2-med text-gradient-blue">Pricing</p>
          <h2 className="matter-h2-reg max-w-[752px]">
            Proven conversion lifts — for less than a coffee
          </h2>
        </FadeInUp>
        {/* Tabs with plans */}
        <FadeInUp className="flex max-w-fit mx-auto bg-bg-white-12 border border-bg-white-12 p-2 rounded-[30px] matter-p4-reg mb-[40px] gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
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
          <div className="flex flex-col w-full md:max-w-[280px]">
            <h6 className="matter-h6-reg">
              {currentPlan?.name || "All in One"}
            </h6>
            <div className="flex pt-6 md:pt-[15px] items-end">
              <h1 className="matter-h4-reg">
                $
                {selectedPrice
                  ? selectedPrice.price.toFixed(
                      selectedPrice.price % 1 === 0 ? 0 : 2
                    )
                  : "Nan"}
              </h1>
              <p className="matter-p2-reg pl-2 pb-1 text-text-tertiary">
                {activeTab === "Monthly" ? "/ monthly" : "/ yearly"}
              </p>
            </div>
            <div className="flex flex-col gap-[20px] pt-6 md:pt-8">
              {/* Dropdown with features */}
              <Select
                value={(currentPrices.length - 1 - selectedPriceIndex).toString()}
                onValueChange={handlePriceChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select plan" />
                </SelectTrigger>
                <SelectContent>
                  {currentPrices.slice().reverse().map((price, index) => (
                    <SelectItem key={price.price_id} value={index.toString()}>
                      {price.credits} analysis{price.credits > 1 ? "es" : ""} /{" "}
                      {activeTab === "Monthly" ? "mo" : "year"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                size="lg"
                onClick={() => {
                  trackEvent(`Get Started for Free Clicked`, undefined, () => {
                    window.location.href = buildPortalUrl({
                      pathname: "/register",
                    });
                  });
                }}
              >
                Get Started for Free
              </Button>
            </div>
            <p className="matter-s1-med pt-3 text-center">
              Cancel any time.{" "}
              <span className="matter-s1-reg">No questions asked!</span>
            </p>
          </div>
          <div className="border-l border-bg-white-6" />
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="matter-p2-reg">You will get:</p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Conversion solutions</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Usability solutions</p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">
                  Accessibility Usability Improvements
                </p>
              </div>
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Above-the-fold analysis</p>
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
              <div className="flex gap-3">
                <CheckIcon />
                <p className="matter-p4-reg">Sharable results with your team</p>
              </div>
            </div>
          </div>
        </FadeInUp>
        <FadeInUp className="flex flex-col mx-auto max-w-[253px] gap-[18px] pt-8 md:pt-12">
          <p className="matter-p1-reg text-center">
          “Getboostra cut costs and lifted sales instantly”
          </p>
          <div className="flex items-center justify-center gap-3">
            <AvatarIcon />
            <p className="matter-p4-med">Tripadvisor Team</p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
