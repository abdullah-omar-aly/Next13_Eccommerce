'use client'

import dynamic from "next/dynamic";
import { noSSR } from "next/dynamic";
import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
//@ts-ignore
import NoSSR from 'react-no-ssr';
// import DashboarSidebarMenu from "@/components/DashboarSidebar";

const DashboarSidebarMenu = dynamic(() => import('@/components/DashboarSidebarMenu'))
export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const drawerWidth = 200

    return (
        <section className="flex bg-gray-100">

        
                {/* for small screen devices */}
                {/* <Drawer className={`sm:block md:hidden w-72 bg-white`} open={open} onClose={closeDrawer} >
                    <button onClick={closeDrawer} className="md:hidden">close</button>
                    <DashboarSidebarMenu />
                </Drawer> */}
                {/* for large screen devices */}
                {/* <aside className={`h-screen w-72 hidden md:block md:shrink-0 bg-white`}>
                    <DashboarSidebarMenu />
                </aside> */}

                {/* <main className={`grow p-3 `}>
                    <Button className="md:hidden" onClick={openDrawer}>Open Drawer</Button>
                    {children}
                </main> */}
                {children}
        </section>
    );
}