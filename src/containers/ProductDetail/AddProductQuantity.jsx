"use client";
import UITextField from "@/components/InputField/UITextField";
import UIButton from "@/components/UIButton/UIButton";
import React, { useState } from "react";
import { Plus } from "lucide-react"; // Import the Plus icon from lucide-react

const AddProductQuantity = () => {
  const [quantity, setQuantity] = useState(0);
  const handleQuantityChange = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex">
      <UIButton
        type="contained"
        icon={true}
        btnIcon={<Plus />}
        btnOnclick={handleQuantityChange}
      />
      <UITextField isForm={false} value={quantity} />
    </div>
  );
};

export default AddProductQuantity;
