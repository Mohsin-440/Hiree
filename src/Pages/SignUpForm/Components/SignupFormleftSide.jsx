import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HireeLogo from "../../../assets/logo.svg";
import { useFormik } from "formik";
import { schema } from "../schema/schema";
import axios from "axios";
import { UserInfoContext } from "../../../constants/providers";

const initialValues = { email: "", password: "", confirmPassword: "" };

function SignupFormLeftSide() {
  return (
    <>
      <div className="flex flex-col items-center w-full  bg-gray pb-8 pt-5 xs:pt-8 sm:pt-28 lg:rounded-l-[37px] lg:w-1/2 lg:p-12">
        <div className="flex flex-col items-center gap-3">
          <Link to="/" className="w-[165px] xl:w-[198px]" target="_Hiree">
            <img className="w-full" alt="logo" src={HireeLogo} />
          </Link>

          <p className="text-blue text-[13px] xs:text-[15px] xl:text-lg">
            Streamline your HR processes with Hiree!
          </p>
        </div>
        <SignupForm />

        <div className="flex flex-col items-center justify-between w-full gap-6 xs:gap-10 mt-7 xs:mt-16 max-w-[400px]">
          <span className="text-[12px] xs:text-[14px] sm:text-[16px]">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-blue no-underline">
              Join Hiree
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

function SignupForm() {
  const [serverErr, setServerErr] = useState({});
  const navigate = useNavigate();
  const [success, setSucceess] = useState();
  const [, setUserInfo] = useContext(UserInfoContext);
  
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: submitForm,
  });

  function submitForm(values) {
    axios
      .post("http://localhost:4000/api/signup", values)
      .then(function (res) {
        setServerErr({ email: undefined });
        setUserInfo(res.data);
        setSucceess(true);
      })
      .catch(function (res) {
        setSucceess(false);
        if (res?.response?.status !== 500) {
          setServerErr({ ...res?.response?.data?.Error });
        }
      });
  }
  useEffect(() => {
    if (success) {
      navigate("/user/details")
    }
  }, [success, navigate]);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[calc(100%_-_40px)] flex flex-col items-center mt-7 max-w-[400px]"
    >
      <p className="text-[red] text-[14px]">{serverErr?.Invalid} </p>
      <div className="flex flex-col w-full gap-2 mb-2 sm:mb-6">
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="xs:text-[18px] sm:text-[20px]">
            Email
          </label>
          <p className="text-[red] text-[13px]">
            {serverErr.email ? serverErr.email : errors.email}
          </p>
        </div>
        <input
          type="text"
          id="email"
          onChange={(e) => {
            handleChange(e);
            setServerErr({ ...serverErr, email: undefined });
          }}
          value={values.email}
          className="drop-shadow-2xl text-[16px] sm:text-[18px] px-2 py-2 rounded-[4px]"
          placeholder="abc@gmail.com"
        />
      </div>

      <div className="flex flex-col gap-2 w-full mb-2 sm:mb-6">
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
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <label
            htmlFor="confirmPassword"
            className="xs:text-[18px] sm:text-[20px]"
          >
            Confirm Password
          </label>
          <p className="text-[red] text-[13px]">{errors.confirmPassword}</p>
        </div>
        <input
          type="password"
          id="confirmPassword"
          onChange={handleChange}
          value={values.confirmPassword}
          className="drop-shadow-2xl text-[16px]  sm:text-[18px] px-2 py-2 rounded-[4px]"
          placeholder="********"
        />
      </div>

      <button
        type="submit"
        className="w-full min-w-[200px] bg-blue font-semibold text-white rounded-full text-[16px] sm:text-[17px] py-2 sm:py-3 mt-7 justify-center flex mx-auto sm:mt-9 xl:text-lg hover:bg-transparent hover:text-blue border-2 hover:border-blue hover:shadow-lg hover:-translate-y-1 hover:translate-x-[2px] transition-transform active:translate-y-1 active:-translate-x-[2px]"
      >
        Sign up
      </button>
    </form>
  );
}
export default SignupFormLeftSide;
