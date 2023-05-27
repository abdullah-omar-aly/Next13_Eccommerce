
import React from "react";
import {
  Navbar,
  Typography,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  Bars2Icon,
  HomeIcon,
  ShoppingBagIcon,
  HeartIcon
} from "@heroicons/react/24/outline";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"


// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
    href: '/'
  },
  {
    label: "Cart",
    icon: ShoppingBagIcon,
    href: '/cart'
  },
  {
    label: "Wish List",
    icon: HeartIcon,
    href: '/wishlist'
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, href }, key) => (
        <Link href={href} key={label}>
          <Typography
            as="a"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </Typography>
        </Link>
      ))}
    </ul>
  );
}


export default function AppNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 my-2 px-4">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Ecommerce
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>

        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <div>
          <div className="gap-2 flex">
            <button className="border py-1 w-28 rounded-full" onClick={() => signIn()}>Sign in</button>
          </div>
          {/* <ProfileMenu /> */}

        </div>

      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}

