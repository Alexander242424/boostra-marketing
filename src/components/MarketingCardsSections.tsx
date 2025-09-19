import Image from "next/image";
import UsabilityImage from "@/assets/Conversion ready,Usability,Above the fold/Usability.webp";
import AbovethefoldImage from "@/assets/Conversion ready,Usability,Above the fold/Above the fold.webp";
import AccessibilityImage from "@/assets/Conversion ready,Usability,Above the fold/Accessibility.webp";
import SpeedLoadImage from "@/assets/Conversion ready,Usability,Above the fold/Speed Load.webp";

const marketingCards = [
  {
    title: "Get exceptional usability",
    description:
      "Simplify navigation and reduce friction, creating effortless user journeys that convert.",
    image: UsabilityImage,
    alt: "Get exceptional usability",
  },
  {
    title: "Above the fold optimization",
    description:
      "Capture attention immediately with strategic placement of key elements and messaging.",
    image: AbovethefoldImage,
    alt: "Above the fold optimization",
  },
  {
    title: "Accessibility compliance",
    description:
      "Ensure your site is accessible to all users, improving reach and user experience.",
    image: AccessibilityImage,
    alt: "Accessibility compliance",
  },
  {
    title: "Speed and performance",
    description:
      "Optimize loading times and performance to keep users engaged and reduce bounce rates.",
    image: SpeedLoadImage,
    alt: "Speed and performance",
  },
];

export default function MarketingCardsSections() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t-[1px] border-b-[1px] border-[#1A1A1A] lg:mt-[53px]">
      {/* Cards */}
       {marketingCards.map((card, index) => (
         <div key={index} className={`flex flex-col lg:gap-[48px] lg:p-16 ${index % 2 === 0 ? 'lg:pl-0 border-r-[1px] border-[#1A1A1A]' : 'lg:pr-0'} ${index > 1 ? 'border-t-[1px] border-[#1A1A1A]' : ''}`}>
           <div className="flex flex-col lg:gap-[48px]">
             <div className="flex flex-col lg:gap-4 max-w-[516px]">
               <h6 className="matter-h6-reg">{card.title}</h6>
               <p className="matter-p3-reg text-text-tertiary">
                 {card.description}
               </p>
             </div>
             <div className="w-full h-auto max-w-[560px]">
               <Image src={card.image} alt={card.alt} />
             </div>
           </div>
         </div>
       ))}
    </div>
  );
}
