import React from "react";

interface CostCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CostCard({ icon, title, description }: CostCardProps) {
  return (
    <div className="flex flex-col bg-bg-white-10 rounded-[24px] gap-8 md:gap-[48px] p-8 md:min-w-[407px] h-full">
      <div className="flex flex-col gap-3">
        <h6 className="matter-h6-reg">{title}</h6>
        <p className="matter-p3-reg text-text-tertiary">{description}</p>
      </div>
      <div className="flex items-center justify-center mt-auto">{icon}</div>
    </div>
  );
}
