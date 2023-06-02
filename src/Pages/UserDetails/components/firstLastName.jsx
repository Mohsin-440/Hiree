import React from "react";

const FirstLastName = ({ firstNameRestProps, lastNameRestProps, errors }) => {
  return (
    <div className="flex gap-2 justify-between w-full flex-col md:flex-row">
      <div className="name-input-containers">
        <label htmlFor="firstName" className="xs:text-[18px] sm:text-[20px]">
          First Name
        </label>

        <input
          {...firstNameRestProps}
          type="text"
          id="firstName"
          className="text-[16px] sm:text-[18px] px-2 py-2 rounded-[4px]"
        />
        <p className="text-[red] text-[13px] self-end">
          {errors?.firstName?.message}
        </p>
      </div>
      <div className="name-input-containers">
        <label htmlFor="lastName" className="xs:text-[18px] sm:text-[20px]">
          Last Name
        </label>

        <input
          {...lastNameRestProps}
          type="text"
          id="lastName"
          className="text-[16px] sm:text-[18px] px-2 py-2 rounded-[4px]"
        />
        <p className="text-[red] text-[13px]">{errors.lastName?.message}</p>
      </div>
    </div>
  );
};
export default FirstLastName;
