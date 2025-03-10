"use client";

import { ReactNode, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import createEmotionCache from "@/utils/createEmotionCache";
import localFont from 'next/font/local';

import "../styles/main.css";

const IRANSansXV = localFont({
    src: '../../public/fonts/IRANSansXV.woff2',
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: `${IRANSansXV.style.fontFamily}, "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    direction: "rtl",
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#d32f2f",
        },
    },


});

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
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
