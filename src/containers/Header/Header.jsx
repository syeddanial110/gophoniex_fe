import React from "react";
import { User } from "lucide-react";
import DesktopNavigationMenu from "./NavigationMenu/NavigationMenu";
import Image from "next/image";
import logo from "../../assets/Images/logo3.svg";
import { SideNavigation } from "./SideNavigation/SideNavigation";
import Link from "next/link";
import { pathLocations } from "@/utils/navigation";
import UIPopover from "@/components/UIPopover/UIPopover";
import PopoverData from "./PopoverData";

const Header = () => {
  return (
    <>
      {/* Desktop — lg (1024px) and above */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-center p-container">
          <div className="flex gap-x-4 items-center">
            <div className="min-w-[100px]">
              <Link href={pathLocations.home}>
                <Image src={logo} alt="logo" height={80} width={250} />
              </Link>
            </div>
            <DesktopNavigationMenu />
          </div>

          <div className="flex gap-x-3 items-center">
            <UIPopover
              btnTrigger={
                <div className="border-1 p-2 rounded-full cursor-pointer">
                  <User strokeWidth="1px" />
                </div>
              }
            >
              <PopoverData />
            </UIPopover>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet — below lg */}
      <div className="block lg:hidden">
        <div className="flex justify-between items-center px-4 py-2">
          <Link href={pathLocations.home}>
            <Image src={logo} alt="logo" height={65} width={130} />
          </Link>

          <div className="flex items-center gap-2">
            <UIPopover
              btnTrigger={
                <div className="border p-2 rounded-full cursor-pointer">
                  <User strokeWidth="1px" className="w-5 h-5" />
                </div>
              }
            >
              <PopoverData />
            </UIPopover>
            <SideNavigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
