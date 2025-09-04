"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
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
  }, []);

  return (
    <header className="flex bg-transparent min-h-[66px] md:min-h-[72px] sticky top-0 z-50 items-center">
      <div className="flex w-full h-full flex-row px-4 md:px-[121px] justify-between ">
        <div className="flex items-center header-logo">Logo</div>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-4 lg:space-x-8 hoves-p2-reg">
            <Link
              href="/#solutions"
              className={`relative group header-text ${
                pathname === "/" && window.location.hash === "#solutions"
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
                pathname === "/" && window.location.hash === "#how-it-works"
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
                pathname === "/" && window.location.hash === "#case-studies"
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
                pathname === "/" && window.location.hash === "#pricing"
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
