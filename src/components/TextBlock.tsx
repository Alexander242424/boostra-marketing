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
        backgroundSize: isMobile ? "cover" : "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex flex-col gap-[64px] lg:gap-[106px] pt-[48px] pb-[96px] md:py-[128px] lg:pt-[176px] lg:pb-[248px] lg:max-w-[1000px] mx-auto">
        <AnimateOnScroll
          className="flex justify-center"
          animation="fadeInUp"
          duration="fast"
        >
          <h5 className="matter-h5-reg px-4 md:px-10 text-center text-gradient-blue-block">
            Boostra is like having a UX & CRO Expert who spots issues,
            learnsuser behaviors, and delivers instant solutions to boost <br />
            revenue
          </h5>
        </AnimateOnScroll>
        <AnimateOnScroll
          className="relative flex flex-col px-4 md:px-10 items-center justify-center gap-5 lg:gap-6"
          animation="fadeInUp"
          duration="fast"
        >
          <div className="relative flex flex-col gap-4 lg:gap-[33px] text-center">
            {!isMobile ? (
              <p className="matter-p1-med">
                On average, Boostra customers see an instant
              </p>
            ) : (
              <p className="matter-p1-med">
                On average, Boostra customers <br /> see an instant
              </p>
            )}
            <h2 className="matter-h2-reg text-gradient-blue">
              35-47% boost in conversions
            </h2>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
