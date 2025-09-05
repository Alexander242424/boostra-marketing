"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import BigLogo from "@/assets/big-logo.svg";
import { useNearestParentScrollListener } from "@/hooks/use-nearest-parent-scroll-listener";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentHash, setCurrentHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  useNearestParentScrollListener(headerRef, setIsScrolled);

  useEffect(() => {
    // Встановлюємо поточний hash
    setCurrentHash(window.location.hash);

    // Слухаємо зміни hash
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    const groups = document.querySelectorAll(".group");

    groups.forEach((group) => {
      const handleMouseEnter = () => {
        group.classList.add("has-hovered");
      };

      group.addEventListener("mouseenter", handleMouseEnter);

      // Cleanup
      return () => {
        group.removeEventListener("mouseenter", handleMouseEnter);
      };
    });

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex bg-transparent min-h-[66px] md:min-h-[72px] sticky top-0 z-50 items-center"
      style={
        isScrolled
          ? {
              backdropFilter: "blur(160px)",
              WebkitBackdropFilter: "blur(160px)",
            }
          : undefined
      }
    >
      <div className="flex w-full h-full flex-row px-4 md:px-[121px] justify-between ">
        <div className="flex items-center header-logo cursor-pointer">
          <BigLogo />
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-4 lg:space-x-8 font-matter">
            <Link
              href="/#solutions"
              className={`relative group header-text ${
                pathname === "/" && currentHash === "#solutions"
                  ? "header-text-active"
                  : ""
              }`}
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
            </Link>
            <Link
              href="/#how-it-works"
              className={`relative group header-text ${
                pathname === "/" && currentHash === "#how-it-works"
                  ? "header-text-active"
                  : ""
              }`}
            >
              How it works
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
            </Link>
            <Link
              href="/#case-studies"
              className={`relative group header-text ${
                pathname === "/" && currentHash === "#case-studies"
                  ? "header-text-active"
                  : ""
              }`}
            >
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
            </Link>
            <Link
              href="/#pricing"
              className={`relative group header-text ${
                pathname === "/" && currentHash === "#pricing"
                  ? "header-text-active"
                  : ""
              }`}
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
            </Link>
          </nav>
        </div>
        <Button variant={"secondary"}>Login</Button>
      </div>
    </header>
  );
}
