"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import rtlPlugin from "stylis-plugin-rtl";

import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    IconButton,
    Toolbar,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
    key: "mui-rtl",
    stylisPlugins: [rtlPlugin],
});

const navItems = [
    { name: "صفحه اصلی", routePath: "/" },
    { name: "todo list", routePath: "/todo-list" },
    { name: "مراکز خدمات درمانی", routePath: "/health-centers" },
    { name: "شعبه‌های ما", routePath: "/branches" },
    { name: "سوال‌‌های متداول", routePath: "/faq" }
];

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
                <Toolbar sx={{ justifyContent: "space-between", padding: "0 !important" }}>
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
                                        <ListItem key={index} onClick={() => router.push(item.routePath)}>
                                            <ListItemText primary={item.name} />
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
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1, padding: "0 32px" }}>
                                {navItems.map((item, index) => (
                                    <Button key={index} color="primary" onClick={() => router.push(item.routePath)}>
                                        {item.name}
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
