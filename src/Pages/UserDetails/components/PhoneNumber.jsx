
const PhoneNumber = ({
  countryCodeRestProps,
  phoneNumberRestProps,
  errors,
}) => {
  return (
    <div className="flex gap-0.5 justify-between flex-col w-full">
      <div className="flex gap-2 justify-between overflow-x-hidden">
        <div className="flex flex-col w-[18%] gap-2 mb-2 sm:mb-4 ">
          <div className="flex justify-between items-center">
            <label
              htmlFor="countryCode"
              className="xs:text-[18px] sm:text-[20px]"
            >
              Code
            </label>
          </div>
          <select className="flex-grow bg-white text-[16px] sm:text-[18px] px-2 py-2  border-[#707070] border-[0.5px] rounded-[4px] md:rounded-lg focus:border-blue active:border-blue outline-none"
            {...countryCodeRestProps}>
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
            className="text-[16px] sm:text-[18px] px-2 py-2 border-[#707070] border-[0.5px] rounded-[4px] md:rounded-lg outline-none  focus:border-blue"
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
