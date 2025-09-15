"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import BoostingConvertionBgDesktop from "@/assets/background/boostingConvertionDesk.svg";
import BoostingConvertionBgMobile from "@/assets/background/boostingConvertionMob.svg";

export default function BoostingConvertion() {
  const isMobile = useIsMobile();
  return (
    <div className="relative flex flex-col items-center justify-center gap-5 lg:gap-6 border-b border-line-white-16">
      {/* Background Image */}
      <div className="absolute -top-[60px] lg:-top-[100px] left-0 w-full h-full inset-0 flex items-center justify-center pointer-events-none">
        {isMobile ? (
          <BoostingConvertionBgMobile className="w-full h-auto" />
        ) : (
          <BoostingConvertionBgDesktop className="w-full h-auto" />
        )}
      </div>

      {/* Content */}
      {isMobile ? (
        <div className="relative flex flex-col gap-5 z-10 text-center pb-[60px] px-[38px]">
          <h6 className="matter-h6-reg">
            On average, Boostra customers see a
          </h6>
          <h4 className="matter-h4-reg text-gradient-blue">
            20% increase in conversions
          </h4>
        </div>
      ) : (
        <div className="relative flex flex-col gap-6 z-10 text-center py-[180px]">
          <h6 className="matter-h6-reg">
            On average, Boostra customers see an instant
          </h6>
          <h1 className="matter-h1-reg text-gradient-blue">
            20% boost in conversions
          </h1>
        </div>
      )}
    </div>
  );
}
