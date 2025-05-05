import React from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import DesktopNavigationMenu from "./NavigationMenu/NavigationMenu";
import Image from "next/image";
import logo from "../../assets/Images/logo.webp";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-container">
        <div>
          {" "}
          <Search />
        </div>

        <div>
          <Image src={logo} alt="logo" height={80} width="100%" />
        </div>
        <div className="flex gap-x-3">
          <User strokeWidth="1px" />
          <ShoppingBag strokeWidth="1px" />
        </div>
      </div>
      <div>
        <DesktopNavigationMenu />
      </div>
    </>
  );
};

export default Header;
