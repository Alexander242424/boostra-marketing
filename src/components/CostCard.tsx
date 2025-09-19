import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CostCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function CostCard({ icon, title, description }: CostCardProps) {
  return (
    <div className="flex flex-col bg-bg-white-10 rounded-[24px] gap-6 md:gap-8 p-6 md:p-5 lg:p-8 h-full">
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-3">
        <h6 className="matter-h6-reg">{title}</h6>
        <p className="matter-p3-reg text-text-tertiary">{description}</p>
      </div>
      <div className="flex items-center justify-center mt-auto">
        <Image 
          src={icon} 
          alt={title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  );
}
