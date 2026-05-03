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
      <Card className="group hover:cursor-pointer border border-gray-200 rounded-[20px] transition-shadow duration-300 shadow-none hover:shadow-lg hover:shadow-gray-300/50">
        <CardHeader>
          {/* <div className="min-h-[280px] w-full relative"> */}
          {/* Main Image */}
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
          {/* Hover Image */}
          {/* <Image
              src={hoverImg}
              alt="Card hover image"
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            /> */}
          {/* </div> */}
        </CardHeader>
        <CardContent>
          {/* <UITypography variant="h5" text={title} className="text-center" />
          <p className="text-center">{description}</p> */}
          <div dangerouslySetInnerHTML={{ __html: title }} className="text-center" />
          <UITypography variant="p" text={seatsOpen} className='text-center mt-2' />
        </CardContent>
        {/* <CardFooter className="flex justify-center">
          <p className="text-center">{slots}</p>
        </CardFooter> */}
      </Card>
    </Link>
  );
};

export default UIProductCard;
