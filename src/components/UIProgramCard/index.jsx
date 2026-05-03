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
    <Card>
      <CardHeader>
        {/* <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription> */}
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
      <CardContent>
        {/* <UITypography text={text} className="text-center capitalize" /> */}
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </CardContent>
      <CardFooter className="flex justify-center">
        {/* <UIButton
          type="contained"
          title={btnText}
          className="bg-main"
          icon={false}
          btnOnclick={btnOnclick}
        /> */}
        <Link
          href={href}
          className="bg-main btn rounded-full py-3 px-6 text-white"
        >
          {btnText}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UIProgramCard;
