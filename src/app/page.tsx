import HeroSections from "@/components/HeroSections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col px-4 md:px-[121px]">
      <HeroSections />
    </div>
  );
}
