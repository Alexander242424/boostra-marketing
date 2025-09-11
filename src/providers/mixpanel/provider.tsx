"use client";

import { type Config } from "mixpanel-browser";
import { useEffect, useMemo, type ProviderProps } from "react";

import { initMixpanel } from "@/lib/mixpanel";
import { mixpanelContext as Context, type MixpanelContext } from "./context";
import { useRouter } from "next/navigation";

const defaultConfig: Partial<Config> = {
  autocapture: false,
};

export interface MixpanelProviderProps
  extends Omit<ProviderProps<MixpanelContext>, "value"> {
  config?: Partial<Config>;
}

export function MixpanelProvider({ children, config }: MixpanelProviderProps) {
  const router = useRouter();
  const context = useMemo(
    () =>
      typeof window !== "undefined"
        ? initMixpanel(config ?? defaultConfig)
        : undefined,
    [config]
  );

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    let rewriteUrl = false;
    const keys = Array.from(currentUrl.searchParams.keys());
    for (const key of keys) {
      if (key.startsWith("utm_")) {
        rewriteUrl = true;
        currentUrl.searchParams.delete(key);
      }
    }
    if (rewriteUrl) {
      router.replace(currentUrl.pathname + currentUrl.search);
    }
  }, [router]);

  return <Context value={context}>{children}</Context>;
}
