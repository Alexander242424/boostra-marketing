"use client";

import { useUrlValidation } from "@/hooks/useUrlValidation";
import { Input } from "./ui/input";
import GlobeIcon from "@/assets/globus.svg";
import ArrowRight from "@/assets/arrow right.svg";
import { useState, useEffect } from "react";

export default function FloatingInput() {
  const [url, setUrl] = useState("");
  const { isValidUrl } = useUrlValidation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBoostPage = () => {
    if (url.trim()) {
      const baseUrl = process.env.NEXT_PUBLIC_BOOSTRA_URL || "";

      let userUrl = url.trim();
      if (!userUrl.startsWith("http://") && !userUrl.startsWith("https://")) {
        userUrl = "https://" + userUrl;
      }

      const targetUrl = `${baseUrl}/url-loader?url=${userUrl}`;

      window.location.href = targetUrl;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      {isScrolled && (
        <div>
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
