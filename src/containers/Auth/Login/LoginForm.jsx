"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import UITextField from "@/components/InputField/UITextField";
import { loginSchema } from "@/utils/schema";
import { pathLocations } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";
import { setToken, setUserId } from "@/apis/Auth";
import { useDispatch } from "react-redux";
import { signin } from "@/store/actions/AUTH";
import UILoader from "@/components/UILoader/UILoader";

const LoginForm = () => {
  const router = useRouter();
  const disptach = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(data, e) {
    setIsLoading(true);
    e.preventDefault();

    const dataObj = {
      email: data.email,
      password: data.password,
    };
    apiPost(
      `${ApiEndpoints.auth.base}${ApiEndpoints.auth.login}`,
      dataObj,
      (res) => {
        toast.success(res?.message);
        setIsLoading(false);
        if (res?.success) {
          disptach(signin({ data: res?.data }));
          router.push(pathLocations.home);
          setToken(res?.data?.token);
          setUserId(res?.data?.user?.id);
        }
      },
      (err) => {
        toast.error(err?.message);
        setIsLoading(false);
        console.log("err", err);
      }
    );
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        {isLoading ? (
          <UILoader />
        ) : (
          <Button type="submit" loading>
            Login
          </Button>
        )}
      </form>
    </Form>
  );
};

export default LoginForm;
