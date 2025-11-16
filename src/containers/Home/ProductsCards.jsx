import React from "react";
import Image from "next/image";
import UIButton from "@/components/UIButton/UIButton";
import { Plus } from "lucide-react";

const ProductsCard = ({
  image,
  logo,
  btnText,
  title = "Lorem Ipsum",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  handleAddToCart,
  btnOnclick,
}) => {
  return (
    <div className="bg-white rounded-xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] p-4 relative">
      {/* Top Section */}
      <div>
        <Image
          src={image}
          alt="Play Pass"
          //   className="object-cover"
          style={{ height: "550px", width: "100%", objectFit: "contain" }}
          width={300}
          height={500}
          sizes="(max-width: 768px) 100vw, 600px"
        />
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
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
    </div>
  );
};

export default ProductsCard;
