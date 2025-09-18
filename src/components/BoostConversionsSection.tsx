import Image from "next/image";
import { Button } from "./ui/button";
import BoostConversionsImage from "@/assets/Conversion ready,Usability,Above the fold/Boost conversions.png";

export default function BoostConversionsSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[132px] lg:pt-[88px] lg:pb-[176px]">
      <div className="flex flex-col lg:gap-10">
        <div className="flex flex-col lg:gap-6 max-w-[516px]">
          <h3 className="matter-h3-reg">
            Boost Conversions <br />
            <span className="text-gradient-blue">in 3 simple steps</span>
          </h3>
          <p className="matter-p3-reg text-text-tertiary">
            Increase revenue growth by uncovering hidden funnel leaks and
            lorem...
          </p>
        </div>
        <Button className="max-w-fit" size={"lg"}>Get Started for Free</Button>
      </div>
      <div className="w-full h-auto max-w-[624px]">
        <Image src={BoostConversionsImage} alt="Boost Conversions" />
      </div>
    </div>
  );
}
