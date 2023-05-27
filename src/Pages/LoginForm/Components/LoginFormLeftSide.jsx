import React from "react";
import { Link } from "react-router-dom";
import HireeLogo from "/assets/logo.svg";
import { useFormik } from "formik";
import { loginFormSchema } from "../schemas/LoginFormSchema";
import axios from "axios";

const initialValues = { email: "", password: "" };

function LoginFormLeftSide() {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginFormSchema,
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };
      axios
        .post("http://localhost:4000/api/login", userData)
        .then(function (res) {
          console.log(res);
          alert("Successfully signed up!");
        })
        .catch(function (res) {
          console.log(res);
        });
        console.log(values);
    },
  });

  console.log(errors);
  return (
    <>
      <div className="flex flex-col items-center w-full min-h-[calc(100vh_-_60px)] bg-gray pb-8 pt-5 xs:pt-8 sm:pt-28 lg:rounded-l-[37px] lg:w-1/2 lg:p-12">
        <div className="flex flex-col items-center gap-3">
          <Link to="/" className="w-[165px] xl:w-[198px]" target="_Hiree">
            <img className="w-full" alt="logo" src={HireeLogo} />
          </Link>
          <p className="text-blue text-[13px] xs:text-[15px] xl:text-lg">
            Streamline your HR processes with Hiree!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[calc(100%_-_40px)] flex flex-col items-center mt-7 max-w-[400px]"
        >
          <div className="flex flex-col w-full gap-2 mb-2 sm:mb-10">
            <label htmlFor="email" className="xs:text-[18px] sm:text-[20px]">
              Email
            </label>
            <input
              type="text"
              id="email"
              onChange={handleChange}
              value={values.email}
              className="drop-shadow-2xl text-[16px] sm:text-[18px] px-2 py-2 rounded-[4px]"
              placeholder="abc@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="xs:text-[18px] sm:text-[20px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              className="drop-shadow-2xl text-[16px]  sm:text-[18px] px-2 py-2 rounded-[4px]"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue text-white rounded-full text-[16px] sm:text-[17px] py-1 sm:py-3 mt-7 sm:mt-9 xl:text-lg"
          >
            Login
          </button>

          <div className="flex flex-col items-center justify-between w-full gap-6 xs:gap-10 mt-7 xs:mt-16">
            <div className="flex items-center w-full gap-3  justify-betweem text-[12px] xs:text-[14px] sm:text-[16px]">
              <span className="flex items-center w-full justify between gap-1">
                <input type="checkbox" className="w-3 h-3" name="" id="" />
                <p className="">Remember me</p>
              </span>
              <span className="text-blue whitespace-nowrap ">
                Forgot Password?
              </span>
            </div>

            <span className="text-[12px] xs:text-[14px] sm:text-[16px]">
              Don't have an account yet?{" "}
              <Link to="/" className="text-blue no-underline">
                Join Hiree
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginFormLeftSide;
