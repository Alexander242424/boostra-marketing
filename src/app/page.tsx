import BrandSections from "@/components/BrandSections";
import HeroSections from "@/components/HeroSections";
import InfoCard from "@/components/InfoCard";
import TextBlock from "@/components/TextBlock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col px-4 md:px-[121px]">
      <HeroSections />
      <BrandSections />
      <TextBlock />
      <div className="flex flex-col items-center md:mt-[130px]">
        <InfoCard
          title={["Boost", "Conversions"]}
          description={
            "Fix what's costing you money. Get a detailed CRO & UX analysis to unlock more conversions — instantly."
          }
          btnText={"Improve Conversions"}
          videoSrc={"/video/011MG_141_animation_1.webm"}
        />
        <InfoCard
          title={["Boost", "Usability"]}
          description={
            "Fix what's costing you money. Get a detailed CRO & UX analysis to unlock more conversions — instantly."
          }
          btnText={"Improve Usability"}
          videoSrc={"/video/011MG_141_animation_1.webm"}
        />
        <InfoCard
          title={["Boost", "Accessibility"]}
          description={
            "Fix what's costing you money. Get a detailed CRO & UX analysis to unlock more conversions — instantly."
          }
          btnText={"Improve Accessibility"}
          videoSrc={"/video/011MG_141_animation_1.webm"}
        />
      </div>
    </div>
  );
}
