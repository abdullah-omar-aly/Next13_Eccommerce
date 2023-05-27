'use client'

import { HiUsers } from 'react-icons/hi'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaShoppingBag } from 'react-icons/fa'
import { RiGalleryFill } from 'react-icons/ri'
import { usePathname } from 'next/navigation';

import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import Link from 'next/link';

const navLinks = [
    {
        href: "/dashboard/products",
        name: "Products",
        icon: <FaShoppingBag className="h-5 w-5" />
    },
    {
        href: "/dashboard/orders",
        name: "Orders",
        icon: <TbTruckDelivery className="h-5 w-5" />
    },
    {
        href: "/dashboard/customers",
        name: "Customers",
        icon: <HiUsers className="h-5 w-5" />
    },
    {
        href: "/dashboard/content",
        name: "Content",
        icon: <RiGalleryFill className="h-5 w-5" />
    },
]

function DashboarSidebarMenu() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className="w-full">
            <List>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            className={isActive ? ' bg-gray-100 rounded-md' : ''}
                            href={link.href}
                            key={link.name}
                        >
                            <ListItem className=''>
                                <ListItemPrefix>
                                    {link.icon}
                                </ListItemPrefix>
                                {link.name}
                            </ListItem>
                        </Link>
                    );
                })}


            </List>
        </div>
    )
}

export default DashboarSidebarMenu