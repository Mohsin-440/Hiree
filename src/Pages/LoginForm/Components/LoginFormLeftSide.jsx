import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HireeLogo from "../../../assets/logo.svg";
import { useFormik } from "formik";
import { loginFormSchema } from "../schemas/LoginFormSchema";
import axios from "axios";
import { UserInfoContext } from "../../../constants/providers";
import { setLocalStorage } from "../../../helpers/localStorage/localStorage";

const initialValues = { email: "", password: "" };

function LoginFormLeftSide() {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-gray pb-8 pt-5 xs:pt-8 sm:pt-28 lg:rounded-l-[37px] lg:w-1/2 lg:p-12">
        <div className="flex flex-col items-center gap-3">
          <Link to="/" className="w-[165px] xl:w-[198px]" target="_Hiree">
            <img className="w-full" alt="logo" src={HireeLogo} />
          </Link>

          <p className="text-blue text-[13px] xs:text-[15px] xl:text-lg">
            Streamline your HR processes with Hiree!
          </p>
        </div>
        <LoginForm />
        <div className="flex flex-col items-center justify-between w-full gap-6 xs:gap-16 mt-7 xs:mt-16 max-w-[400px]">
          <div className="flex items-center w-full gap-3  justify-betweem text-[12px] xs:text-[14px] sm:text-[16px] px-3">
            <span className="flex items-center w-full justify between gap-1">
              <input type="checkbox" className="w-3 h-3" name="" id="" />
              <p className="">Remember me</p>
            </span>
            <span className="text-blue whitespace-nowrap cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <span className="text-[12px] xs:text-[14px] sm:text-[16px]">
            Don&apos;t have an account yet?{" "}
            <Link to="/signup" className="text-blue no-underline">
              Join Hiree
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

function LoginForm() {
  const [, setUserInfo] = useContext(UserInfoContext);
  const navigate = useNavigate()
  const [success, setSucceess] = useState()
  const [errs, setErrs] = useState({});
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginFormSchema,
    onSubmit: submitForm,
  });

  function submitForm(values) {
    axios
      .post("http://localhost:4000/api/login", values, { withCredentials: true })
      .then(function (res) {
        setLocalStorage("userInfo", res.data);

        setUserInfo(res?.data);
        setErrs({ Invalid: undefined });
        setSucceess(true)
      })
      .catch(function (res) {
        setSucceess(false)
        if (res?.response?.status !== 500) {
          setErrs({ Invalid: res?.response?.data?.message });
        }
      });
  }

  useEffect(() => {
    if (success)
      navigate("/")
  }, [success, navigate])

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[calc(100%_-_40px)] flex flex-col items-center mt-7 max-w-[400px]"
    >
      <p className="text-[red] text-[14px]">{errs?.Invalid} </p>
      <div className="flex flex-col w-full gap-2 mb-2 sm:mb-10">
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="xs:text-[18px] sm:text-[20px]">
            Email
          </label>
          <p className="text-[red] text-[13px]">{errors.email}</p>
        </div>
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
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="xs:text-[18px] sm:text-[20px]">
            Password
          </label>
          <p className="text-[red] text-[13px]">{errors.password}</p>
        </div>
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
        className="w-full xl:text-lg  min-w-[200px] bg-blue font-semibold text-white rounded-full text-[16px] sm:text-[17px] py-2 sm:py-3 mt-7 justify-center flex mx-auto sm:mt-9 hover:bg-transparent hover:text-blue hover:border-2 hover:border-blue hover:shadow-lg hover:-translate-y-1 hover:translate-x-[2px] transition-transform active:translate-y-1 active:-translate-x-[2px]"
      >
        Login
      </button>
    </form>
  );
}
export default LoginFormLeftSide;
