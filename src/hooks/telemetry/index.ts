import { useMixpanel } from "@/providers/mixpanel";
import { Callback, Mixpanel, type Dict } from "mixpanel-browser";
import { useCallback, useEffect, useRef } from "react";

export function useDeviceId() {
  const mixpanel = useMixpanel();
  return mixpanel?.get_property("$device_id");
}

export function useTrackEvent() {
  const mixpanel = useMixpanel();

  return useCallback(
    (...args: Parameters<Mixpanel["track"]>) => {
      if (mixpanel) {
        return mixpanel.track(...args);
      }

      const [, , optionsOrCallback, callback] = args;
      let userCallback: Callback | undefined = callback;
      if (typeof optionsOrCallback === "function") {
        userCallback = optionsOrCallback;
      }
      if (userCallback) {
        userCallback(1);
      }
    },
    [mixpanel]
  );
}

export function useTrackTimeEvent(event: string) {
  const mixpanel = useMixpanel();

  return [
    useCallback(() => {
      mixpanel?.time_event(event);
    }, [mixpanel, event]),

    useCallback(
      (properties?: Dict) => {
        mixpanel?.track(event, properties);
      },
      [mixpanel, event]
    ),
  ];
}

export function useTrackPageViewEffect(page: string, properties?: Dict) {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel?.track_pageview(
      {
        Page: page,
        ...properties,
      },
      { event_name: `${page} Page View`.trim() }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mixpanel]);
}

export function useTrackFirstValueChangeEffect<
  T extends (string | number | boolean)[]
>(event: string, properties: Dict = {}, fields: T) {
  const trackEvent = useTrackEvent();
  const eventTracked = useRef(false);

  useEffect(() => {
    if (!eventTracked.current && fields.some(Boolean)) {
      trackEvent(event, properties);
      eventTracked.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackEvent, event, properties, ...fields]);
}
