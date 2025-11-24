"use client";
import { getToken, removeToken, removeUserId } from "@/apis/Auth";
import UITypography from "@/components/UITypography/UITypography";
import { pathLocations } from "@/utils/navigation";
import { History, LogOut, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const PopoverData = () => {
  const token = getToken();

  const popoverData = [
    {
      icon: <User />,
      text: "Profile",
      link: pathLocations.profile,
    },
    {
      icon: <History />,
      text: "Orders",
      link: pathLocations.orders,
    },
    {
      icon: <LogOut />,
      text: "Logout",
      link: pathLocations.login,
    },
  ];
  return (
    <>
      {token ? (
        <>
          {popoverData.map((item, ind) => {
            return (
              <Link
                href={item.link}
                key={ind}
                onClick={() => {
                  if (item.text == "Logout") {
                    removeToken();
                    removeUserId();
                  }
                }}
              >
                <div className="flex gap-4 mt-2">
                  <div>{item?.icon}</div>
                  <UITypography variant="p" text={item.text} />
                </div>
              </Link>
            );
          })}
        </>
      ) : (
        <Link href={pathLocations.login}>
          <div className="flex gap-4 mt-2">
            <LogOut />
            <UITypography variant="p" text={"Login/Register"} />
          </div>
        </Link>
      )}
    </>
  );
};

export default PopoverData;
