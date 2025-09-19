import { useIsMobile } from "@/hooks/useIsMobile";
import { AnimateOnScroll } from "./AnimateOnScroll";

export default function TextBlock() {
  const isMobile = useIsMobile();
  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      style={{
        backgroundImage: isMobile
          ? 'url("/BG/Mobile/BG-02-min.jpg")'
          : 'url("/BG/Desktop/BG-02-min.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <AnimateOnScroll
        className="flex py-[128px] lg:pt-[176px] lg:pb-[86px] justify-center"
        animation="fadeInUp"
        duration="fast"
      >
        <p className="matter-h4-reg xl:max-w-[877px] text-center text-gradient-blue-block">
          Boostra is like having a Seniour UX & CRO expert who spots issues,
          learns user behavior, and delivers instant solutions to boost
          conversions
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll
        className="relative flex flex-col items-center justify-center gap-5 lg:gap-6 border-b-[1px] border-bg-white-6 lg:pb-[240px]"
        animation="fadeInUp"
        duration="fast"
      >
        <div className="relative flex flex-col gap-5 z-10 text-center pb-[60px] px-[38px]">
          <h6 className="matter-h6-reg">On average, Boostra customers see a</h6>
          <h4 className="matter-h4-reg text-gradient-blue">
            35-47% boost in conversions
          </h4>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
