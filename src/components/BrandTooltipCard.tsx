import Avatar from "@/assets/image.svg";
import BrandIcon from "@/assets/paydesk-logo-main-transperent-bg-full 1.svg";
import { Button } from "./ui/button";

export default function BrandTooltipCard() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center gap-5">
        <Avatar />
        <div className="flex flex-col gap-[6px]">
          <p className="matter-p1-med">Morgan Sowden</p>
          <p className="matter-p4-reg text-text-tertiary">
            CEO, Journalist.net
          </p>
        </div>
      </div>
      <p className="matter-p2-reg">
        “Clay has substantially automated and simplified our research process,
        which previously require manual work from external contractors.”
      </p>
      <div className="border-b-[1px] border-bg-white-12 max-h-[1px]" />
      <div className="flex justify-between items-center mt-1">
        <BrandIcon />
        <Button className="max-h-[40px] max-w-fit mt-auto">Get Started</Button>
      </div>
    </div>
  );
}
