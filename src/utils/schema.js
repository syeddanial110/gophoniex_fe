import * as yup from "yup";

export const contactFormSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const addChildSchema = yup.object({
  name: yup.string().required("Name is required"),
  allergies: yup.string().required("Allergies is required"),
  age: yup.string().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  select: yup.string().required("Gender is required"),
});
