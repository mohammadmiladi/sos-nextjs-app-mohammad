"use client";

import React, { useState } from 'react';
import Image from "next/image";

import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from "next/navigation";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import MenuIcon from '@mui/icons-material/Menu';

const cacheRtl = createCache({
    key: "mui-rtl",
    stylisPlugins: [rtlPlugin],
});

const navItems = ["صفحه اصلی", "todo list", "مراکز خدمات درمانی", "شعبه‌های ما", "سوال‌‌های متداول"];

const AppBarStyle = {
    backgroundColor: "white",
    color: "black",
    boxShadow: 4,
    padding: "8px 16px",
}

export default function Header() {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <CacheProvider value={cacheRtl}>
            <CssBaseline />
            <AppBar position="static" sx={AppBarStyle}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {isMobile ? (
                        <>
                            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Image src="/SOS.png" alt="Logo" width={isMobile ? 130 : 200} height={isMobile ? 26 : 40} />
                            </Box>
                            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                                <List>
                                    {navItems.map((item, index) => (
                                        <ListItem key={index} onClick={() => router.push(`/${item}`)}>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Image src="/SOS.png" alt="Logo" width={200} height={40} />
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                {navItems.map((item, index) => (
                                    <Button key={index} color="primary" onClick={() => router.push(`/${item}`)}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </>
                    )}

                    <Button size={isMobile ? "small" : "large"} variant="contained" color="primary" onClick={() => router.push("/login")}>
                        ورود و فعال سازی
                    </Button>
                </Toolbar>
            </AppBar>
        </CacheProvider>
    );
}
