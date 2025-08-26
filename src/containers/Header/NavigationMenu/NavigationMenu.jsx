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

const DesktopNavigationMenu = () => {
  const pathname = usePathname();

  const [navigationMenu, setNavigationMenu] = useState([]);

  const dispatch = useDispatch();

  const categoriesData = useSelector(
    (state) => state?.GetAllCategoriesReducer?.res
  );
  const subCategoriesData = useSelector(
    (state) => state?.GetAllSubCategoriesReducer?.res
  );

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSubCategories());
  }, []);

  useEffect(() => {
    if (categoriesData?.res?.data && subCategoriesData?.res?.data) {
      // Take only first 6 categories
      const limitedCategories = categoriesData.res.data.slice(0, 6);

      const organizedData = limitedCategories.map((category) => {
        // Find all subcategories for this category
        const categorySubcategories = subCategoriesData.res.data
          .filter((subCategory) => subCategory.categoryId === category.id)
          // Limit to 10 subcategories per category
          .slice(0, 10);

        // Transform to required format
        return {
          categoryId: category.id,
          categoryName: category.name,
          categoryUrl: category.slug,
          image: category.image,
          subCategories: categorySubcategories.map((sub) => ({
            subCategoryId: sub.id,
            subCategoryName: sub.name,
            subCategoryUrl: sub.slug,
          })),
        };
      });

      setNavigationMenu(organizedData);
    }
  }, [categoriesData?.res?.data, subCategoriesData?.res?.data]);

  return (
    <div className="flex justify-center">
      <NavigationMenu className="px-1">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href={pathLocations.home}
              className={`${cn(navigationMenuTriggerStyle())} font-normal ${
                pathname == "/"
                  ? "bg-main text-white hover:bg-dark hover:text-white"
                  : "bg-[#EBF0F4] text-black"
              } !rounded-full`}
            >
              Home
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="px-1">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href={pathLocations.about}
              className={`${cn(navigationMenuTriggerStyle())} font-normal ${
                pathname == "/"
                  ? "bg-main text-white hover:bg-dark hover:text-white"
                  : "bg-[#EBF0F4] text-black"
              } !rounded-full`}
            >
              About us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`font-normal rounded-full ${
                pathname == "/"
                  ? "bg-main text-white"
                  : "bg-[#EBF0F4] text-black"
              }`}
            >
              <Link href={pathLocations.categories}>Programs</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <div className="min-w-[15vw] py-4 px-3">
                <div className="">
                  {navigationMenu.map((item, i) => {
                    return (
                      <>
                        <div key={i} className="flex flex-col gap-5">
                          <Link
                            href={`${WEB_URL}${pathLocations.categories}/${item.categoryUrl}`}
                            className="text-md"
                          >
                            {item?.categoryName}
                          </Link>
                          {/* <hr /> */}
                          {/* {item?.subCategories?.length > 0 &&
                              item?.subCategories?.map((elm, ind) => {
                                return (
                                  <Link
                                    href={`${WEB_URL}${pathLocations.subCategories}/${elm.subCategoryUrl}`}
                                    key={ind}
                                  >
                                    {elm?.subCategoryName}
                                  </Link>
                                );
                              })} */}
                        </div>

                        {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                      </>
                    );
                  })}
                </div>
                <div className="flex mt-10 gap-4">
                  <Link
                    href={pathLocations.categories}
                    className="py-3 px-2 underline"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="px-1">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href={pathLocations.about}
              className={`${cn(navigationMenuTriggerStyle())} font-normal ${
                pathname == "/"
                  ? "bg-main text-white hover:bg-dark hover:text-white"
                  : "bg-[#EBF0F4] text-black"
              } !rounded-full`}
            >
              Blogs
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="px-1">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href={pathLocations.contact}
              className={`${cn(navigationMenuTriggerStyle())} font-normal ${
                pathname == "/"
                  ? "bg-main text-white hover:bg-dark hover:text-white"
                  : "bg-[#EBF0F4] text-black"
              } !rounded-full`}
            >
              Contact us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNavigationMenu;
