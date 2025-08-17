"use client"
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UITypography from "../UITypography/UITypography";
import UIButton from "../UIButton/UIButton";

const UIPopover = ({ btnTrigger, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>{btnTrigger}</PopoverTrigger>
      <PopoverContent>
       {children}
      </PopoverContent>
    </Popover>
  );
};

export default UIPopover;
