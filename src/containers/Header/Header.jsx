import React from "react";
import { Search, User, ShoppingBag, History, LogOut } from "lucide-react";
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
import UISearchInput from "@/components/InputField/UISearchInput";
import { getToken } from "@/apis/Auth";
import UserIcon from "./UserIcon";
import UIPopover from "@/components/UIPopover/UIPopover";
import UITypography from "@/components/UITypography/UITypography";
import PopoverData from "./PopoverData";

const Header = () => {
  return (
    <>
      <div className="sm:block hidden">
        <div className="flex justify-between items-center p-container">
          <div className="flex gap-x-4 items-center">
            <Link href={pathLocations.home}>
              <Image src={logo} alt="logo" height={80} width="100%" />
            </Link>

            <div>
              <DesktopNavigationMenu />
            </div>
          </div>

          <div className="flex gap-x-3 items-center">
            <div>
              <UISearchInput />
            </div>
            {/* <UserIcon /> */}
            <UIPopover btnTrigger={<User />}>
              <PopoverData />
            </UIPopover>

            <Link href={pathLocations.cart}>
              <ShoppingBag strokeWidth="1px" />
            </Link>
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
