"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UITextField from "../InputField/UITextField";
import { addChildSchema } from "@/utils/schema";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { pathLocations } from "@/utils/navigation";
import UIButton from "../UIButton/UIButton";
import UIRadio from "../InputField/UIRadio";
import { useRouter } from "next/navigation";
import UISelect from "../InputField/UISelect";

const AddChildForm = () => {
  const router = useRouter();

  const form = useForm({
    resolver: yupResolver(addChildSchema),
    defaultValues: {
      name: "",
      allergies: "",
      age: "",
      gender: "",
    },
  });

  function onSubmit(data) {
    // Fixed typo in function name
    console.log("data", data);
    router.push(pathLocations.home);
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>Add Child</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add your child details</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name" // Changed from username to email to match defaultValues
                    render={({ field }) => (
                      <FormItem>
                        <UITextField field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="allergies"
                    render={({ field }) => (
                      <FormItem>
                        <UITextField field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <UITextField field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <UIRadio field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="select"
                    render={({ field }) => (
                      <FormItem>
                        <UISelect field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <UIButton btnType="submit" type="contained" title="Submit" icon={false} />
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddChildForm;
