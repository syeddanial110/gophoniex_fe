import React from "react";
import Image from "next/image";
import UIButton from "@/components/UIButton/UIButton";
import { Plus } from "lucide-react";
import UITypography from "@/components/UITypography/UITypography";

const ProductsCard = ({
  image,
  logo,
  btnText,
  title = "Lorem Ipsum",
  shortDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  handleAddToCart,
  btnOnclick,
  seatsOpen
}) => {
  return (
    <div className="bg-white rounded-xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] p-4 relative">
      {/* Top Section */}
      <div>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
          <Image
            src={image}
            alt="Play Pass"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            style={{ objectFit: "contain", height: "100%" }}
          />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          {logo && <Image src={logo} alt="logo" width={24} height={24} />}
          <span className="text-xs text-[#FF9900] font-semibold">
            Phoenix Sports
          </span>
        </div>
        <UIButton
          type="contained"
          title={btnText}
          icon={false}
          btnOnclick={btnOnclick}
        />
      </div>
      <div className="mt-4">
        <div dangerouslySetInnerHTML={{ __html: title }} className="text-[16px]" />
        <UITypography variant="p" text={shortDesc} />
        <UITypography variant="p" text={seatsOpen} />
      </div>
    </div>
  );
};

export default ProductsCard;
