"use client";

import Header from "@/components/Header";

import { ReactNode, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import createEmotionCache from "@/utils/createEmotionCache";
import theme from "../theme/theme"

import "../styles/main.css";

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEnhancedEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div style={{ visibility: "hidden" }}>{children}</div>;

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
