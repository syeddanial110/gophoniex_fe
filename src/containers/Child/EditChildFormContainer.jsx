"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import UITextField from "@/components/InputField/UITextField";
import { addChildSchema } from "@/utils/schema";

import { useRouter } from "next/navigation";
import UIFileInput from "@/components/InputField/UIFileInput";
import { apiDelete, apiPost, apiPut } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";
import UISelect from "@/components/InputField/UISelect";
import { SelectItem } from "@/components/ui/select";
import { useSelector } from "react-redux";
import UITooltip from "@/components/UITooltip/UITooltip";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import { pathLocations } from "@/utils/navigation";

const EditChildFormContainer = ({ setIsEditChild }) => {
  const router = useRouter();

  const selectedChild = useSelector(
    (state) => state?.EditChildrenDataReducer?.data
  );

  console.log("selectedChild", selectedChild);

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
  const [gender, setGender] = useState(selectedChild?.data.gender || "");
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

    apiPut(
      `${ApiEndpoints.children.base}${ApiEndpoints.children.update}/${selectedChild?.data?.id}`,
      formData,
      (res) => {
        console.log("res", res);
        toast.success(res?.message);
        setIsEditChild(false);
      },
      (err) => {
        console.log("err", err);
        toast.error(err?.message);
      },
      { "Content-Type": "multipart/form-data" }
    );
  }

  

  const handleGenderChange = (value) => {
    setGender(value);
  };

  useEffect(() => {
    if (selectedChild?.data) {
      form.reset({
        name: selectedChild?.data.name || "",
        age: selectedChild?.data.age || "",
        allergies: selectedChild?.data.allergies || "",
      });
      setGender(selectedChild?.data.gender);
      setChildImage(selectedChild?.data.image);
    }
  }, [selectedChild?.data]);

  console.log("gender", gender);

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
        {childImage !== "" && childImage !== null && (
          <UITooltip>
            <TooltipTrigger>
              <Image
                src={`${childImage != null ? childImage : ""}`}
                alt={childImage}
                width={40}
                height={40}
              />
            </TooltipTrigger>
            <TooltipContent>
              <div className="">
                <Image
                  src={`${childImage}`}
                  alt={childImage}
                  width={100}
                  height={100}
                />
              </div>
            </TooltipContent>
          </UITooltip>
        )}
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
          value={gender}
          // defaultValue={gender}
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
