import mixpanel, { Config } from "mixpanel-browser";

export function initMixpanel(config: Partial<Config>) {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  if (token) {
    return mixpanel.init(token, config, "app-mixpanel-browser");
  }
}
