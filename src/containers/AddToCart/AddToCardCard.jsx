import UITypography from "@/components/UITypography/UITypography";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import cartImg from "../../assets/Images/scroll1.png";
import { apiDelete } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

const AddToCardCard = ({ handleDeleteCartItem }) => {
  return (
    <div className="flex">
      <div className="w-[90%] flex gap-4 items-center">
        <div>
          <Image src={cartImg} alt="cartImg" height={50} />
        </div>
        <div>
          <UITypography variant="h4" text="Summer Camp" />
          <UITypography
            variant="p"
            text="lorem ipsum lorem ipsum lorem ipsum"
          />
        </div>
      </div>
      <div className="w-[10%] flex flex-col items-end justify-start ">
        <div onClick={handleDeleteCartItem} className="hover:cursor-pointer">
          <X />
        </div>
      </div>
    </div>
  );
};

export default AddToCardCard;
