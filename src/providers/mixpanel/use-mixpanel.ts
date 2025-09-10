import { useContext } from "react";

import { mixpanelContext, type MixpanelContext } from "./context";

export const useMixpanel = (): MixpanelContext => useContext(mixpanelContext);
