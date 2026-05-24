import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import UITypography from "../UITypography/UITypography";
import Link from "next/link";

const UIProductCard = ({
  mainImg,
  hoverImg,
  title,
  href,
  seatsOpen
}) => {
  return (
    <Link href={href}>
      <Card className="group hover:cursor-pointer border border-gray-200 rounded-[20px] transition-shadow duration-300 shadow-none hover:shadow-lg hover:shadow-gray-300/50 py-3 sm:py-6 gap-3 sm:gap-6">
        <CardHeader className="px-2 sm:px-6">
          <div style={{ width: "100%", overflow: "hidden", borderRadius: "16px" }}>
            <Image
              src={mainImg}
              alt="Card image"
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
              className="transition-opacity duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="px-2 pb-3 sm:px-6 sm:pb-6">
          <div dangerouslySetInnerHTML={{ __html: title }} className="text-center text-sm" />
          <UITypography variant="p" text={seatsOpen} className="text-center mt-1 sm:mt-2" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default UIProductCard;
