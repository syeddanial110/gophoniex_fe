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

export const registerSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  hear: yup.string(),
  liability: yup.string().required("Release of Liability is required"),
  photoRelease: yup.string().required("Photo Release is required"),
  terms: yup.string().required("Phoenix Sports, Inc Terms & Conditions is required"),
});

export const addChildSchema = yup.object({
  name: yup.string().required("Name is required"),
  allergies: yup.string().required("Allergies is required"),
  age: yup.string().required("Age is required"),
});
export const changePasswordSchema = yup.object({
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
