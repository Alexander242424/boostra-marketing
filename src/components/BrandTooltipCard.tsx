import Avatar from "@/assets/image.svg";
import BrandIcon from "@/assets/paydesk-logo-main-transperent-bg-full 1.svg";
import { useTrackEvent } from "@/hooks/telemetry";
import { useBuildPortalUrl } from "@/hooks/use-build-portal-url";
import { Button } from "./ui/button";

export default function BrandTooltipCard() {
  const trackEvent = useTrackEvent();
  const buildPortalUrl = useBuildPortalUrl();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <Avatar />
        <Button
          className="max-h-[40px] max-w-fit mt-auto"
          onClick={() => {
            trackEvent(`Get Started Clicked`, undefined, () => {
              window.location.href = buildPortalUrl({
                pathname: "/register",
              });
            });
          }}
        >
          Get Started
        </Button>
      </div>
      <BrandIcon />
      <p className="matter-p2-reg">
        “Clay has substantially automated and simplified our research process,
        which previously require manual work from external contractors.”
      </p>
      <div className="border-b-[1px] border-bg-white-12 max-h-[1px]" />

      <div className="flex flex-col gap-2">
        <p className="matter-p1-med">Morgan Sowden</p>
        <p className="matter-p1-med text-text-tertiary">CEO, Journalist.net</p>
      </div>
    </div>
  );
}
