"use client";

import { type Config } from "mixpanel-browser";
import { useMemo, type ProviderProps } from "react";

import { initMixpanel } from "@/lib/mixpanel";
import { mixpanelContext as Context, type MixpanelContext } from "./context";

const defaultConfig: Partial<Config> = {
  autocapture: false,
};

export interface MixpanelProviderProps
  extends Omit<ProviderProps<MixpanelContext>, "value"> {
  config?: Partial<Config>;
}

export function MixpanelProvider({ children, config }: MixpanelProviderProps) {
  const context = useMemo(
    () =>
      typeof window !== "undefined"
        ? initMixpanel(config ?? defaultConfig)
        : undefined,
    [config]
  );

  return <Context value={context}>{children}</Context>;
}
