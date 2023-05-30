import React, { useEffect, useState, useContext } from "react";
import Layout from "../../layouts/layout";
import DatePicker from "../../components/datePicker";
import { useForm } from "react-hook-form";
import FirstLastName from "./components/firstLastName";
import PhoneNumber from "./components/PhoneNumber";
import "./UserDetails.css";
import { axiosInstance } from "../../constants/axios.instance";
import {
  firstNameValidations,
  lastNameValidations,
  usernameValidations,
  countryCodeValidations,
  genderValidations,
  roleValidations,
  phoneNumberValidations,
  DOBValidations,
} from "./Validations";
import { UserInfoContext } from "../../constants/providers";
const UserDetails = () => {
  const [userInfo] = useContext(UserInfoContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      countryCode: "",
      phoneNumber: "",
      gender: "",
      role: "",
      DOB: "",
    },
  });

  const [success, setSuccess] = useState();
  const onSubmitHandler = (data) => {
    data.userId = userInfo?.userId;

    axiosInstance
      .post("/api/add/userinfo", data)
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        if (error.response.data) {
          for (const [key, value] of Object.entries(error.response.data))
            setError(key, { type: "server", message: value });
          setSuccess(false);
        }
      });
  };

  useEffect(() => {
    console.log("success");
  }, [success]);
  return (
    <Layout>
      <div className="main_container">
        <h2 className="formHeading">Enter Your Details</h2>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="w-[90%] m-auto  sm:w-[400px] md:w-[500px]"
        >
          <FirstLastName
            firstNameRestProps={{
              ...register("firstName", firstNameValidations),
            }}
            lastNameRestProps={{ ...register("lastName", lastNameValidations) }}
            errors={errors}
          />

          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", usernameValidations)}
              type="text"
              id="username"
            />
            <p>{errors.username?.message}</p>
          </div>
          <PhoneNumber
            countryCodeRestProps={{
              ...register("countryCode", countryCodeValidations),
            }}
            phoneNumberRestProps={{
              ...register("phoneNumber", phoneNumberValidations),
            }}
            errors={errors}
          />
          <div className="input-container">
            <label htmlFor="gender">Gender</label>

            <select {...register("gender", genderValidations)}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="femle">Female</option>
            </select>
            <p>{errors.gender?.message}</p>
          </div>

          <div className="input-container">
            <label htmlFor="role">Role</label>

            <select {...register("role", roleValidations)}>
              <option value="">Select...</option>
              <option value="fullstackDev">Full Stack Developer</option>
              <option value="backendDev">Backend Developer</option>
              <option value="frontendDev">Frontend Developer</option>
            </select>
            <p>{errors.role?.message}</p>
          </div>

          <div className="input-container">
            <label htmlFor="DOB">Date of Birth</label>

            <DatePicker control={control} rules={DOBValidations} />
            <p className="text-[red] text-[13px] self-end">
              {errors.DOB?.message}
            </p>
          </div>
          <button
            type="submit"
            className="w-3/5 min-w-[200px] bg-blue text-white rounded-full text-[16px] sm:text-[17px] py-2 sm:py-3 mt-7 justify-center flex mx-auto sm:mt-9 xl:text-lg"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UserDetails;
