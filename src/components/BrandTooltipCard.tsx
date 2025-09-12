
import { Button } from "./ui/button";

interface BrandTooltipCardProps {
  name: string;
  position: string;
  description: string;
  brandIcon: React.ReactNode;
  buttonText: string;
}

export default function BrandTooltipCard({
  name,
  position,
  description,
  brandIcon,
  buttonText,
}: BrandTooltipCardProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center min-w-14 min-h-14 rounded-full bg-white/20 text-white matter font-[400px] text-[22px]">
          {name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()}
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="matter-p1-med">Morgan Sowden</p>
          <p className="matter-p4-reg text-text-tertiary">
            {position}
          </p>
        </div>
      </div>
      <p className="matter-p2-reg">“{description}”</p>
      <div className="border-b-[1px] border-bg-white-12 max-h-[1px]" />
      <div className="flex justify-between items-center mt-1">
        {brandIcon}
        <Button className="max-h-[40px] max-w-fit mt-auto">{buttonText}</Button>
      </div>
    </div>
  );
}
