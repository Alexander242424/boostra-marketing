import Image from "next/image";
import VarizoneSvg from "@/assets/verizon.svg";
import PersonasImage from "@/assets/Conversion ready,Usability,Above the fold/Personas.webp";

export default function EverythingAbout() {
  return (
    <div className="flex flex-col lg:flex-row lg:pt-16 lg:gap-6">
      <div className="flex flex-col max-w-[516px]">
        <div className="flex flex-col lg:gap-4 w-full lg:max-w-[408px]">
          <h6 className="matter-h6-reg">
            Get to know everything about your users
          </h6>
          <p className="matter-p3-reg">
            Turn persona insights into action. See motivations, pain points, and
            behaviors — then use them to design journeys that convert faster.
          </p>
        </div>
        <div className="flex flex-col lg:gap-[27px] lg:pl-6 border-l-[1px] border-[#494949] mt-auto lg:mb-[84px]">
          <p className="matter-p4-reg text-text-tertiary">
            When we looked at our Cycle insights recently, we noticed that we
            had completed twice the amount of issues than we had initially
            planned at the start of the cycle. It felt good.
          </p>
          <VarizoneSvg />
        </div>
      </div>
      <div className="w-full h-auto max-w-[724px]">
        <Image src={PersonasImage} alt="Personas" />
      </div>
    </div>
  );
}
