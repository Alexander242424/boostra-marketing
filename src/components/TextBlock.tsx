import { useIsMobile } from "@/hooks/useIsMobile";
import { AnimateOnScrollGroup, AnimateOnScrollItem } from "./AnimateOnScroll";
import { LandingTexts } from "@/config/landing-texts";

interface TextBlockProps {
  texts: LandingTexts['textBlock'];
}

export default function TextBlock({ texts }: TextBlockProps) {
  const isMobile = useIsMobile();
  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      style={{
        backgroundImage: isMobile
          ? 'url("/BG/Mobile/BG-02-min.jpg")'
          : 'url("/BG/Desktop/BG-02-min.jpg")',
        backgroundSize: isMobile ? "cover" : "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <AnimateOnScrollGroup
        className="flex flex-col gap-[64px] lg:gap-[106px] pt-[48px] pb-[96px] md:py-[128px] lg:pt-[176px] lg:pb-[248px] mx-auto"
        staggerDelay={0.3}
      >
        <AnimateOnScrollItem
          index={1}
          className="flex justify-center"
          animation="fadeInUp"
          duration="fast"
        >
          <h4 className="matter-h4-reg px-4 md:px-10 text-center text-gradient-blue-block lg:max-w-[860px]">
            {texts.mainTitle}
          </h4>
        </AnimateOnScrollItem>
        <AnimateOnScrollItem
          index={2}
          className="relative flex flex-col px-4 md:px-10 items-center justify-center gap-5 lg:gap-6"
          animation="fadeInUp"
          duration="fast"
        >
          <div className="relative flex flex-col gap-4 lg:gap-[33px] text-center">
            {!isMobile ? (
              <p className="matter-p1-med">
                {texts.averageText}
              </p>
            ) : (
              <p className="matter-p1-med">
                {texts.averageText.replace(' see an instant', ' <br /> see an instant')}
              </p>
            )}
            <h2 className="matter-h2-reg text-gradient-blue">
              {texts.boostText}
            </h2>
          </div>
        </AnimateOnScrollItem>
      </AnimateOnScrollGroup>
    </div>
  );
}
