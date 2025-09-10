"use client";

import { createContext } from "react";
import { type Mixpanel } from "mixpanel-browser";

export type MixpanelContext = Mixpanel | undefined;

export const mixpanelContext = createContext<MixpanelContext>(undefined);
