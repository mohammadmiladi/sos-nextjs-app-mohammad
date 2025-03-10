"use client";

import Image from "next/image";

import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { CssBaseline } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const theme = createTheme({
    direction: "rtl",
});

const cacheRtl = createCache({
    key: "mui-rtl",
    stylisPlugins: [rtlPlugin],
});

const navItems = ["صفحه اصلی", "todo list", "مراکز خدمات درمانی", "شعبه‌های ما", "سوال‌‌های متداول"];

export default function Header() {
    const router = useRouter();

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" sx={{
                    backgroundColor: "white",
                    color: "black",
                    boxShadow: 4,
                    padding: "8px 16px",
                }}>
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Image src="/SOS.png" alt="Logo" width={200} height={40} />
                        </Box>

                        <Box sx={{ display: "flex", gap: 3 }}>
                            {navItems.map((item, index) => (
                                <Button key={index} sx={{ color: "#1158A7" }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>

                        <Button variant="contained" size="large" onClick={() => router.push("/login")}>
                            ورود و فعال سازی
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </CacheProvider>
    );
}
