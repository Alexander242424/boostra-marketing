import { useDeviceId } from "@/hooks/telemetry";
import { useMixpanel } from "@/providers/mixpanel";
import { useCallback } from "react";

export type PortalPathname = "/register" | "/login" | "/url-loader";

export function useBuildPortalUrl() {
  const mixpanel = useMixpanel();
  const deviceId = useDeviceId();

  return useCallback(
    ({
      pathname,
      searchParams,
    }: {
      pathname?: PortalPathname;
      searchParams?: URLSearchParams | Record<string, string>;
    }) => {
      const baseUrl = process.env.NEXT_PUBLIC_BOOSTRA_URL || "";

      const portalUrl = new URL(`${baseUrl}${pathname}`);
      if (searchParams) {
        if (searchParams instanceof URLSearchParams) {
          searchParams.forEach((value, key) => {
            portalUrl.searchParams.set(key, value);
          });
        } else {
          Object.entries(searchParams).forEach(([key, value]) => {
            portalUrl.searchParams.set(key, value);
          });
        }
      }
      if (deviceId) {
        portalUrl.searchParams.set("device", deviceId);
      }

      if (mixpanel) {
        const utmCampaign = mixpanel.get_property("utm_campaign");
        if (utmCampaign) {
          portalUrl.searchParams.set("utm_campaign", String(utmCampaign));
        }
      }

      return portalUrl.toString();
    },
    [mixpanel, deviceId]
  );
}
