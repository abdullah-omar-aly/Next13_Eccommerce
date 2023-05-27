'use client'

import React from "react";

//@ts-ignore
import AppNavbar from "@/components/Navbar";

export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {


    return (
        <div>
            <AppNavbar />
            {children}
        </div>
    );
}