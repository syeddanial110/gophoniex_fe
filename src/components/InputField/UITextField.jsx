"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const UITextField = ({
  name,
  type,
  label,
  value,
  control,
  variant,
  errorMessage,
  handleChange,
  isOtp,
  otp,
  onChange,
  ...rest
}) => {
  const { control: fallbackControl } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  return (
    <>
      <Controller
        name={name}
        control={control == null ? fallbackControl : control}
        render={({ field }) => {
          return (
            <>
              <Input
                type={
                  type === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : "text"
                }
                
                {...field}
              />
            </>
          );
        }}
      />
    </>
  );
};

export default UITextField;
