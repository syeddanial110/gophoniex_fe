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

import {
  Navigation_Menu,
  pathLocations,
  WEB_URL,
} from "../../../utils/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/store/actions/category";
import { getAllSubCategories } from "@/store/actions/subCategory";
import Image from "next/image";
import placeholderImg from "../../../assets/Images/placeholderImg.webp";
import { apiGet } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

const DesktopNavigationMenu = () => {
  const pathname = usePathname();

  const [navigationMenu, setNavigationMenu] = useState([]);

  const [headerMenu, setHeaderMenu] = useState([]);

  const dispatch = useDispatch();

  const categoriesData = useSelector(
    (state) => state?.GetAllCategoriesReducer?.res,
  );

  useEffect(() => {
    dispatch(getAllCategories());
    // dispatch(getAllSubCategories());
  }, []);

  useEffect(() => {
    if (categoriesData?.res?.data) {
      // Take only first 6 categories
      const limitedCategories = categoriesData.res.data.slice(0, 6);

      const organizedData = limitedCategories.map((category) => {
        // Find all subcategories for this category

        // Transform to required format
        return {
          categoryId: category.id,
          categoryName: category.name,
          categoryUrl: category.slug,
          image: category.image,
        };
      });

      setNavigationMenu(organizedData);
    }
  }, [categoriesData?.res?.data]);

  useEffect(() => {
    apiGet(
      `${ApiEndpoints.menu.headerMenu}`,
      (res) => {
        console.log("res", res);
        setHeaderMenu(res?.data || []);
      },
      (err) => {
        console.log("err", err);
      },
    );
  }, []);

  console.log("headerMenu", headerMenu);
  console.log("navigationMenu", navigationMenu);

  return (
    <div className="flex justify-center">
      {headerMenu?.map((item, index) => {
        if (item?.id !== "programs" && item?.children?.length == 0) {
          return (
            <NavigationMenu className="px-1">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href={
                      item?.id == "home" ? item.url : `/user/content${item.url}`
                    }
                    className={`${cn(navigationMenuTriggerStyle())} font-normal ${
                      pathname == item.url
                        ? "bg-main text-white hover:bg-dark hover:text-white"
                        : "bg-[#EBF0F4] text-black"
                    } !rounded-full`}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        }
        if (item?.id == "programs") {
          return (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`font-normal rounded-full ${
                      pathname == pathLocations.categories
                        ? "bg-main text-white"
                        : "bg-[#EBF0F4] text-black"
                    }`}
                  >
                    <Link href={pathLocations.categories}>Programs</Link>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 gap-8 p-6 min-w-[60vw]">
                      {(() => {
                        // Limit to 12 items max
                        const limited = navigationMenu.slice(0, 12);

                        // Split into chunks of 4
                        const columns = [];
                        for (let i = 0; i < limited.length; i += 4) {
                          columns.push(limited.slice(i, i + 4));
                        }

                        return columns.map((col, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-3">
                            {col.map((item, i) => (
                              <Link
                                key={i}
                                href={`${WEB_URL}${pathLocations.categories}/${item.categoryUrl}`}
                                className="text-sm hover:underline"
                              >
                                {item.categoryName}
                              </Link>
                            ))}
                          </div>
                        ));
                      })()}
                    </div>

                    {/* View More button if > 12 */}
                    {navigationMenu.length > 12 && (
                      <div className="flex mt-6 justify-center">
                        <Link
                          href={pathLocations.categories}
                          className="py-2 px-4 bg-main text-white rounded-md hover:bg-dark transition"
                        >
                          View More Programs
                        </Link>
                      </div>
                    )}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        }
        if (item?.children?.length > 0) {
          return (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`font-normal rounded-full ${
                      pathname == pathLocations.categories
                        ? "bg-main text-white"
                        : "bg-[#EBF0F4] text-black"
                    }`}
                  >
                    <Link href={item?.url}>{item.title}</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <div className="min-w-[15vw] py-4 px-3">
                      <div className="">
                        {item?.children.map((elm, i) => {
                          return (
                            <>
                              <div key={i} className="flex flex-col gap-5">
                                <Link
                                  href={`${WEB_URL}/user/content${elm.url}`}
                                  className="text-md"
                                >
                                  {elm?.title}
                                </Link>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </NavigationMenuContent>
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
