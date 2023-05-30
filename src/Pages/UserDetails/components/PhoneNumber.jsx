import React from "react";

const PhoneNumber = ({
  countryCodeRestProps,
  phoneNumberRestProps,
  errors,
}) => {
  return (
    <div className="flex gap-0.5 justify-between flex-col">
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col w-[18%] gap-2 mb-2 sm:mb-4 ">
          <div className="flex justify-between items-center">
            <label
              htmlFor="countryCode"
              className="xs:text-[18px] sm:text-[20px]"
            >
              Code
            </label>
          </div>
          <select className="flex-grow" {...countryCodeRestProps}>
            <option value="" disabled>
              Select...
            </option>
            <option value="+92">+92</option>
            <option value="+91">+91</option>
          </select>
        </div>

        <div className="flex flex-col w-[78%] gap-2 mb-2 sm:mb-4 ">
          <div className="flex justify-between items-center">
            <label
              htmlFor="phoneNumber"
              className="xs:text-[18px] sm:text-[20px]"
            >
              Phone Number
            </label>
          </div>
          <input
            {...phoneNumberRestProps}
            type="text"
            id="phoneNumber"
            className="drop-shadow-2xl text-[16px] sm:text-[18px] px-2 py-2 rounded-[4px]"
          />
        </div>
      </div>
      <p className="text-[red] text-[13px] self-end">
        {errors.phoneNumber?.message
          ? errors.phoneNumber?.message
          : errors.countryCode?.message}
        
      </p>
    </div>
  );
};

export default PhoneNumber;
