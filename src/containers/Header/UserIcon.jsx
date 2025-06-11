"use client"
import { getToken } from "@/apis/Auth";
import { pathLocations } from "@/utils/navigation";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const UserIcon = () => {
  const userData = useSelector((state) => state?.SignInReducer?.res?.data);
  console.log("userData", userData);
  const token = getToken()
  return (
    <>
      {token ? (
        <Link href={pathLocations.profile} className="flex items-center">
          <User strokeWidth="1px" />
        </Link>
      ) : (
        <Link href={pathLocations.login}>Login</Link>
      )}
    </>
  );
};

export default UserIcon;
