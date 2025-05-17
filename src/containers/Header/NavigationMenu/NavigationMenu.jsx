"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Navigation_Menu } from "../../../utils/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const DesktopNavigationMenu = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="flex justify-center">
      {Navigation_Menu.map((item, i) => {
        if (item?.subMenu) {
          return (
            <NavigationMenu key={i}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-normal bg-[#EBF0F4] text-black rounded-full">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <div className="w-[250px] h-[100px]"></div>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        } else {
          return (
            <NavigationMenu key={i} className="px-1">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={`${cn(
                      navigationMenuTriggerStyle()
                    )} font-normal`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        }
      })}
    </div>
  );
};

export default DesktopNavigationMenu;
