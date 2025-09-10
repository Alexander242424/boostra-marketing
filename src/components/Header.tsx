"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import BigLogo from "@/assets/big-logo.svg";
import { useNearestParentScrollListener } from "@/hooks/use-nearest-parent-scroll-listener";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentHash, setCurrentHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useNearestParentScrollListener(headerRef, setIsScrolled);
  const buildPortalUrl = useBuildPortalUrl();

  useEffect(() => {
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    const handleScroll = () => {
      const sections = [
        "solutions",
        "how-it-works",
        "case-studies",
        "pricing",
        "faq",
      ];
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 66 : 72;
      const scrollPosition = window.scrollY + headerHeight + 50;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    const groups = document.querySelectorAll(".group");

    groups.forEach((group) => {
      const handleMouseEnter = () => {
        group.classList.add("has-hovered");
      };

      group.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        group.removeEventListener("mouseenter", handleMouseEnter);
      };
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 66 : 72;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
      <div className="flex w-full h-full flex-row px-4 lg:px-[121px] justify-between max-w-[1512px] mx-auto">
        <Link href="/" className="flex items-center header-logo cursor-pointer">
          <BigLogo />
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-4 lg:space-x-8 font-matter">
            <button
              onClick={() => scrollToSection("solutions")}
              className={`relative group header-text ${
                pathname === "/" && activeSection === "solutions"
                  ? "header-text-active"
                  : ""
              }`}
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={`relative group header-text ${
                pathname === "/" && activeSection === "how-it-works"
                  ? "header-text-active"
                  : ""
              }`}
            >
              How it works
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className={`relative group header-text ${
                pathname === "/" && activeSection === "case-studies"
                  ? "header-text-active"
                  : ""
              }`}
            >
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`relative group header-text ${
                pathname === "/" && activeSection === "pricing"
                  ? "header-text-active"
                  : ""
              }`}
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
            </button>
          </nav>
        </div>
        <Button
          variant={"secondary"}
          onClick={() => {
            window.location.href = buildPortalUrl({ pathname: "/login" });
          }}
        >
          Login
        </Button>
      </div>
    </header>
  );
}
