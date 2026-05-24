import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import UIButton from "../UIButton/UIButton";
import UITypography from "../UITypography/UITypography";
import Link from "next/link";

const UIProgramCard = ({ text, card_img, btnText, href }) => {
  return (
    <Card className="py-3 sm:py-6 gap-3 sm:gap-6">
      <CardHeader className="px-3 sm:px-6">
        <div style={{ width: "100%", overflow: "hidden", borderRadius: "16px" }}>
          <Image
            src={card_img}
            alt="card image"
            width={800}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </CardHeader>
      <CardContent className="px-3 sm:px-6">
        <div dangerouslySetInnerHTML={{ __html: text }} className="text-xs sm:text-sm" />
      </CardContent>
      <CardFooter className="flex justify-center px-3 pb-3 sm:px-6 sm:pb-6">
        <Link
          href={href}
          className="bg-main btn rounded-full py-2 px-4 text-sm sm:py-3 sm:px-5 sm:text-sm text-white"
        >
          {btnText}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UIProgramCard;
