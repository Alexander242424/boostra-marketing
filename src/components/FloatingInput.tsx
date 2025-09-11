"use client";

import { useUrlValidation } from "@/hooks/useUrlValidation";
import GlobeIcon from "@/assets/globus-small.svg";
import ArrowRight from "@/assets/arrow right.svg";
import { useState, useEffect } from "react";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";
import {
  useTrackEvent,
  useTrackFirstValueChangeEffect,
} from "@/hooks/telemetry";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function FloatingInput() {
  const [url, setUrl] = useState("");
  const { isValidUrl } = useUrlValidation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const buildPortalUrl = useBuildPortalUrl();
  const trackEvent = useTrackEvent();

  useTrackFirstValueChangeEffect(
    "URL Input Started",
    { "Is Floating Input": true },
    [url]
  );

  useEffect(() => {
    // Перевіряємо, чи window існує (клієнтська сторона)
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBoostPage = () => {
    if (isSubmitting) return;
    if (isValidUrl(url)) {
      const finalUrl = url.trim();
      setIsSubmitting(true);
      trackEvent(`Icon Button Clicked`, { url: finalUrl }, () => {
        if (typeof window !== "undefined") {
          window.location.href = buildPortalUrl({
            pathname: "/url-loader",
            searchParams: { url: finalUrl },
          });
        }
        setIsSubmitting(false);
      });
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full">
      {isScrolled && (
        <div className="flex w-full justify-center animate-in slide-in-from-bottom-4 duration-500">
          <div className={cn(
            "relative flex w-full items-center h-[56px] transition-all duration-300 ease-in-out",
            isFocused ? "max-w-[458px]" : "max-w-[341px]",
          )}>
            <div
              className={cn(
                "relative shadow-[0px_0px_0px_6px_#FFFFFF08] flex items-center w-full h-full bg-bg-white-10 border rounded-[59px] py-[16.5px] px-5 transition-all duration-200 backdrop-blur-[98.9px]",
                url.trim() !== "" && !isValidUrl(url)
                  ? "border-red-500 hover:border-red-500 focus-within:border-red-500"
                  : "border-line-white-16 hover:border-line-white-24 focus-within:border-brand-blue focus-within:bg-bg-white-12 focus-within:hover:border-brand-blue"
              )}
            >
              <div className="flex items-center justify-center mr-3 text-text-secondary">
                <GlobeIcon />
              </div>
              <input
                type="text"
                className={cn(
                  "flex-1 h-full bg-transparent text-text-primary placeholder:text-text-tertiary matter-p4-reg outline-none border-none focus:outline-none not-sm:text-[16px]!",
                  "pr-32"
                )}
                placeholder="Page URL..."
                value={url}
                onChange={handleUrlChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <div className="absolute right-2">
                <Button
                  size={'icon'}
                  onClick={handleBoostPage}
                  disabled={url.trim() !== "" && !isValidUrl(url)}
                >
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
