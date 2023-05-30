import React from "react";
import SignupFormLeftSide from "./Components/SignupFormleftSide";
import RightSide from "../LoginForm/Components/RightSide";
import "./index.css";

function SignupForm() {
  return (
    <>
      <header className="h-10 xs:h-[60px] md:h-20"></header>
      <div className="lg:w-[90%] lg:mx-auto lg:shadow-[10px_10px_6px_rgba(0,0,0,0.16)] lg:rounded-[37px] flex lg:my-5 max-w-[1300px] min-w-[275px]">
        <SignupFormLeftSide />
        <RightSide />
      </div>
    </>
  );
}

export default SignupForm;
