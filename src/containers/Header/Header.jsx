import React from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import DesktopNavigationMenu from "./NavigationMenu/NavigationMenu";
import Image from "next/image";
import logo from "../../assets/Images/logo.webp";
import { SideNavigation } from "./SideNavigation/SideNavigation";
import Link from "next/link";
import { pathLocations } from "@/utils/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const user = {
    isUser: false,
  };
  return (
    <>
      <div className="sm:block hidden">
        <div className="flex justify-between items-center p-container">
          <div className="flex gap-x-4 items-center">
            <Image src={logo} alt="logo" height={80} width="100%" />

            <div>
              <DesktopNavigationMenu />
            </div>
          </div>

          <div className="flex gap-x-3">
            {user.isUser ? (
              <Link href={pathLocations.profile}>
                <User strokeWidth="1px" />
              </Link>
            ) : (
              <Link href={pathLocations.login}>Login</Link>
            )}
            <ShoppingBag strokeWidth="1px" />
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="flex justify-between">
          <div>
            <Image src={logo} alt="logo" height={90} />
          </div>
          <div>
            <SideNavigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
