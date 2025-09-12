import React from "react";

interface RevenueCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

export default function RevenueCard({
  icon,
  number,
  title,
  description,
}: RevenueCardProps) {
  return (
    <div className="flex flex-col bg-bg-white-10 rounded-[24px] gap-8 md:gap-[48px] p-8 h-full">
      <div className="flex justify-between">
        {icon} <p className="text-text-tertiary matter-h6-reg">{number}</p>
      </div>
      <div className="flex flex-col gap-3">
        <h6 className="matter-h6-reg">{title}</h6>
        <p className="matter-p3-reg text-text-tertiary">{description}</p>
      </div>
    </div>
  );
}
