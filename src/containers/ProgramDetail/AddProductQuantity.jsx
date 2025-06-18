"use client";
import UITextField from "@/components/InputField/UITextField";
import UIButton from "@/components/UIButton/UIButton";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react"; // Import the Plus icon from lucide-react

const AddProductQuantity = ({
  quantity,
  handleQuantityDecrement,
  handleQuantityIncrement,
}) => {
  return (
    <div className="flex">
      <UIButton
        type="contained"
        icon={true}
        btnIcon={<Minus />}
        btnOnclick={handleQuantityDecrement}
      />
      <UITextField isForm={false} value={quantity} />
      <UIButton
        type="contained"
        icon={true}
        btnIcon={<Plus />}
        btnOnclick={handleQuantityIncrement}
      />
    </div>
  );
};

export default AddProductQuantity;
