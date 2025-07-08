"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import UITextField from "@/components/InputField/UITextField";
import { addChildSchema } from "@/utils/schema";

import { useRouter } from "next/navigation";
import UIFileInput from "@/components/InputField/UIFileInput";
import { apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";
import UISelect from "@/components/InputField/UISelect";
import { SelectItem } from "@/components/ui/select";

const EditChildFormContainer = () => {
  const router = useRouter();

  const genderArr = [
    {
      title: "Male",
      value: "male",
    },
    {
      title: "Female",
      value: "female",
    },
    {
      title: "Non Specific",
      value: "non-specific",
    },
  ];

  const [childImage, setChildImage] = useState("");
  const [gender, setGender] = useState("");
  const form = useForm({
    resolver: yupResolver(addChildSchema),
    defaultValues: {
      name: "",
      age: "",
      allergies: "",
    },
  });

  const handleFileInput = (e) => {
    setChildImage(e.target.files[0]);
  };

  function onSubmit(data) {

    const dataObj = {
      name: data.name,
      age: data.age,
      gender: gender,
      allergies: data.allergies,
      image: childImage,
    };
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("gender", gender);
    formData.append("allergies", data.allergies);
    formData.append("image", childImage);

    // apiPost(
    //   `${ApiEndpoints.auth.base}${ApiEndpoints.auth.register}`,
    //   formData,
    //   (res) => {
    //     console.log("res", res);
    //     toast.success(res?.message);
    //     if (res?.success) router.push(pathLocations.login);
    //   },
    //   (err) => {
    //     console.log("err", err);
    //     toast.error(err?.message);
    //   },
    //   { "Content-Type": "multipart/form-data" }
    // );
    // router.push(pathLocations.home);
  }

  const handleGenderChange = (value) => {
    setGender(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Enter Your Child Name"
                placeholder="Full Child Name"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Enter Your Child's age"
                placeholder="Child Age"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <UIFileInput
          labelName="Child Picture"
          name="childImage"
          onChange={handleFileInput}
        />
        <FormField
          control={form.control}
          name="allergies"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Any Allergies?"
                placeholder="eg: peanuts"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <UISelect
          isLabel={true}
          labelName="Select Gender"
          name="gender"
          placeholder={"Male, Female, non-specific"}
          onValueChange={handleGenderChange}
        >
          {genderArr.map((item, ind) => {
            return (
              <SelectItem key={ind} value={item?.value}>
                {item?.title}
              </SelectItem>
            );
          })}
        </UISelect>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EditChildFormContainer;
