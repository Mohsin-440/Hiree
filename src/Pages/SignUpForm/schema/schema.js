import * as Yup from "yup";

export const schema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirmed password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
