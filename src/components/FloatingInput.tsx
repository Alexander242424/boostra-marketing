"use client";

import { useUrlValidation } from "@/hooks/useUrlValidation";
import { Input } from "./ui/input";
import GlobeIcon from "@/assets/globus.svg";
import ArrowRight from "@/assets/arrow right.svg";
import { useState, useEffect } from "react";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";
import {
  useTrackEvent,
  useTrackFirstValueChangeEffect,
} from "@/hooks/telemetry";

export default function FloatingInput() {
  const [url, setUrl] = useState("");
  const { isValidUrl } = useUrlValidation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
      {isScrolled && (
        <div className="flex w-full justify-center">
          <Input
            className="cursor-pointer"
            placeholder="Page URL..."
            iconLeft={<GlobeIcon />}
            btnText="→"
            value={url}
            onChange={handleUrlChange}
            onBtnClick={handleBoostPage}
            isError={url.trim() !== "" && !isValidUrl(url)}
            isDisabled={url.trim() !== "" && !isValidUrl(url)}
          />
        </div>
      )}
    </div>
  );
}
