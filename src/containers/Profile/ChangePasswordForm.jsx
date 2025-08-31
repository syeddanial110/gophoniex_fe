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
import { changePasswordSchema, loginSchema } from "@/utils/schema";
import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";

const ChangePasswordForm = () => {
  const form = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleChangePassword = (e) => {
    e.preventDefault();
    // if (form.getValues("password") !== form.getValues("confirmPassword")) {
    //   form.setError("confirmPassword", {
    //     type: "manual",
    //     message: "New password and confirm password do not match.",
    //   });
    //   return;
    // }
    // Add logic to handle password change
  };

  return (
    <div className="min-h-[80vh] p-4">
      <UITypography variant="h5" text="Change Password" className="mb-4" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleChangePassword)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="password" // Changed from username to email to match defaultValues
            render={({ field }) => (
              <FormItem>
                <UITextField
                  field={field}
                  formLabel="New Password"
                  type='password'
                  isForm={true}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <UITextField
                  type="password"
                  field={field}
                  isForm={true}
                  formLabel="Confirm Password"
                />
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
    </div>
  );
};

export default ChangePasswordForm;
