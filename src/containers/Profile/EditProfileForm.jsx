"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import UITextField from "@/components/InputField/UITextField";
import { toast } from "sonner";
import { apiPut } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import * as yup from "yup";
import { useSelector } from "react-redux";

// Create validation schema for profile editing
const editProfileSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().nullable(),
  address: yup.string().nullable(),
});

const EditProfileForm = ({ initialData }) => {
  const userData = useSelector((state) => state?.SignInReducer);
  console.log("userData", userData);
  const form = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
      phone: initialData?.phone || "",
      address: initialData?.address || "",
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();

    apiPut(
      `${ApiEndpoints.user.base}${ApiEndpoints.user.update}`,
      data,
      (res) => {
        if (res?.success) {
          toast.success("Profile updated successfully");
        }
      },
      (err) => {
        toast.error(err?.message || "Failed to update profile");
        console.error("Error updating profile:", err);
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <UITextField
                label="Full Name"
                formLabel="Enter Your Full Name"
                placeholder="Enter your full name"
                field={field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <UITextField
                label="Email"
                formLabel="Your Email"
                placeholder="Enter your email"
                field={field}
                disabled
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <UITextField
                formLabel={"Phone Number"}
                label="Phone Number"
                placeholder="Enter your phone number"
                field={field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <UITextField
                label="Address"
                formLabel={"Enter Your Address"}
                placeholder="Enter your address"
                field={field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-main hover:bg-main/90">
          Update Profile
        </Button>
      </form>
    </Form>
  );
};

export default EditProfileForm;
