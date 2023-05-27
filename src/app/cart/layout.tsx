
import React from "react";
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