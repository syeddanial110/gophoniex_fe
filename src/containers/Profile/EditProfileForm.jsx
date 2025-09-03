"use client";

import React, { useState } from "react";
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
import UIFileInput from "@/components/InputField/UIFileInput";

// Create validation schema for profile editing
const editProfileSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email"),
});

const EditProfileForm = ({ userData, setIsEdit, fetchUserProfile }) => {
  console.log("userData", userData);

  const [profileImage, setProfileImage] = useState("");

  const form = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      email: userData?.email || "",
    },
  });

  const handleFileInput = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("image", profileImage);

    apiPut(
      `${ApiEndpoints.auth.base}${ApiEndpoints.auth.update}`,
      formData,
      (res) => {
        if (res?.success) {
          toast.success("Profile updated successfully");
          fetchUserProfile();
          setIsEdit(false);
        }
      },
      (err) => {
        toast.error(err?.message || "Failed to update profile");
        console.error("Error updating profile:", err);
      },
      { "Content-Type": "multipart/form-data" }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <UITextField
                label="First Name"
                formLabel="Enter Your First Name"
                placeholder="Enter your first name"
                field={field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <UITextField
                label="Last Name"
                formLabel="Enter Your Last Name"
                placeholder="Enter your last name"
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

        <UIFileInput
          labelName="Profile Picture"
          name="profileImage"
          onChange={handleFileInput}
        />

        <Button type="submit" className="w-full bg-main hover:bg-main/90">
          Update Profile
        </Button>
      </form>
    </Form>
  );
};

export default EditProfileForm;
