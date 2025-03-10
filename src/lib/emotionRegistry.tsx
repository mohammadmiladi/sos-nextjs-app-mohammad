"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./emotionCache";
import { ReactNode } from "react";

export default function EmotionRegistry({ children }: { children: ReactNode }) {
    const cache = createEmotionCache();

    return <CacheProvider value={cache}>{children}</CacheProvider>;
}
