"use client";

import UITextField from "@/components/InputField/UITextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/utils/schema";
import UIButton from "@/components/UIButton/UIButton";

const ChangePasswordForm = () => {
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "", // Add this if your schema requires it
    },
  });
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    // Add logic to handle password change
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleChangePassword)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="email" // Changed from username to email to match defaultValues
          render={({ field }) => (
            <FormItem>
              <UITextField field={field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <UITextField type="password" field={field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <UIButton
          type="contained"
          title="Submit"
          btnType="submit"
          icon={false}
        />
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
