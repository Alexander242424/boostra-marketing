"use client";
import { Button } from "./ui/button";
import GlobalStandartsIcon from "@/assets/standartsIcon.svg";
import BigLogo from "@/assets/big-logo.svg";
import CreditCardIcon from "@/assets/credit-card.svg";
import XTwitterIcon from "@/assets/X(twitter)Icon.svg";
import InstagramIcon from "@/assets/instagramIcon.svg";
import LogoMain from "@/assets/logo-main";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import FadeInUp from "./FadeInUp";
import { useTrackEvent } from "@/hooks/telemetry";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";

export default function Footer() {
  const isMobile = useIsMobile();
  const trackEvent = useTrackEvent();
  const buildPortalUrl = useBuildPortalUrl();

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
    <div className="lex flex-col relative">
      <div
        className="absolute md:-top-[210px] left-1/2 transform -translate-x-1/2 w-screen h-[400px] md:h-[730px] -z-[1]"
        style={{
          backgroundImage: isMobile
            ? 'url("/boostra-updated/Mobile Gradient Background 04.webp")'
            : 'url("/boostra-updated/1.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="flex w-full h-full flex-col px-4 lg:px-[121px] max-w-[1512px] mx-auto">
        <div className="flex flex-col items-center gap-8 my-[96px] md:mt-[89px] md:mb-[146px]">
          <div className="flex flex-col items-center text-center gap-3 md:gap-5 max-w-[800px]">
            <FadeInUp>
              <h2 className="matter-h2-reg">Unlock Conversions. Today.</h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="matter-p2-reg text-text-tertiary">
                Guaranteed or it&apos;s free
              </p>
            </FadeInUp>
          </div>
          <FadeInUp delay={0.4}>
            <div className="flex flex-col max-w-[740px] gap-5 md:gap-3">
              <Button
                className="max-w-fit"
                size={"lg"}
                onClick={() => {
                  trackEvent(`Get Started Clicked`, undefined, () => {
                    window.location.href = buildPortalUrl({
                      pathname: "/register",
                    });
                  });
                }}
              >
                Get Started
              </Button>
              <div className="flex matter-s1-reg text-text-tertiary items-center gap-[5px]">
                <CreditCardIcon />
                <p>No credit card required</p>
              </div>
            </div>
          </FadeInUp>
        </div>
        <footer className="flex flex-col relative">
          <div className="absolute top-0 border-t-[1px] border-line-white-16 left-1/2 transform -translate-x-1/2 w-screen z-0" />
          <div className="flex flex-col md:flex-row mt-8 md:mt-[48px] justify-between">
            <div className="flex flex-col items-center md:items-start">
              <div className="fle flex-col gap-3">
                <div className="flex w-full justify-center md:justify-start">
                  <BigLogo />
                </div>
                <p className="matter-p3-reg text-text-tertiary">
                  © Boostra 2025. All rights reserved
                </p>
              </div>
              <div className="flex items-center gap-6 mt-5">
                <a
                  href="https://x.com/getboostra?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XTwitterIcon />
                </a>
                <a
                  href="https://www.instagram.com/get_boostra?igsh=MTRqZnE4enNla2kwZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </div>
              <GlobalStandartsIcon className="mt-8 md:mt-6 md:-ml-[6px]" />
            </div>

            <div className="flex justify-between w-full max-w-[354px] mt-8 md:mt-0">
              <div className="flex flex-col gap-4">
                <p className="matter-p3-med">Product</p>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="relative group matter-p4-reg max-w-fit text-left"
                >
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </button>
                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="relative group matter-p4-reg max-w-fit text-left"
                >
                  Case Studies
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="relative group matter-p4-reg max-w-fit text-left"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="relative group matter-p4-reg max-w-fit text-left"
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="relative group matter-p4-reg max-w-fit text-left"
                >
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </button>
              </div>
              <div className="flex flex-col gap-4 min-w-[155px] md:min-w-fit">
                <p className="matter-p3-med">Company</p>
                <Link
                  href="/terms_of_services"
                  className="relative group matter-p4-reg max-w-fit"
                >
                  Terms of Use
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </Link>
                <Link
                  href="/privacy_policy"
                  className="relative group matter-p4-reg max-w-fit"
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </Link>
                <Link
                  href="/"
                  className="relative group matter-p4-reg max-w-fit"
                >
                  Cookies Policy
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </Link>
              </div>
            </div>
          </div>
          <LogoMain />
        </footer>
      </div>
    </div>
  );
}
