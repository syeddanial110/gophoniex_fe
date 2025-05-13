import React from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import DesktopNavigationMenu from "./NavigationMenu/NavigationMenu";
import Image from "next/image";
import logo from "../../assets/Images/logo.webp";
import { SideNavigation } from "./SideNavigation/SideNavigation";
import Link from "next/link";
import { pathLocations } from "@/utils/navigation";

const Header = () => {
  return (
    <>
      <div className="sm:block hidden">
        <div className="flex justify-between items-center p-container">
          <div>
            {" "}
            <Search />
          </div>

          <div>
            <Image src={logo} alt="logo" height={80} width="100%" />
          </div>
          <div className="flex gap-x-3">
            <Link href={pathLocations.profile}>
              <User strokeWidth="1px" />
            </Link>
            <ShoppingBag strokeWidth="1px" />
          </div>
        </div>
        <div>
          <DesktopNavigationMenu />
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
