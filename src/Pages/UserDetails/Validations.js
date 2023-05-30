export const firstNameValidations = {
  minLength: { value: 2, message: "First name must be at least 2 characters" },
  required: { value: true, message: "First name is required" },
};
export const lastNameValidations = {
  minLength: { value: 2, message: "Last name must be at least 2 characters" },
  required: { value: true, message: "Last name is required" },
};
export const usernameValidations = {
  minLength: { value: 2, message: "Username must be at least 2 characters" },
  required: { value: true, message: "Username is required" },
};
export const countryCodeValidations = {
  required: { value: true, message: "Country Code is required" },
};
export const genderValidations = {
  required: { value: true, message: "Gender is required" },
};
export const roleValidations = {
  required: { value: true, message: "Role is required" },
};
export const phoneNumberValidations = {
  required: { value: true, message: "Phone Number is required" },
};
export const DOBValidations = {
    required: { value: true, message: "Date of Birth is required" },
  };
