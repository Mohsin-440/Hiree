import React from "react";
import LoginFormLeftSide from './Components/LoginFormLeftSide';
import LoginFormRightSide from './Components/LoginFormRightSide';
import "./index.css";

function LoginForm() {
  return (
    <>
      <header className="h-10 xs:h-[60px] md:h-20"></header>
      <div className=" lg:w-[90%] lg:mx-auto lg:shadow-[10px_10px_6px_rgba(0,0,0,0.16)] lg:rounded-[37px] flex lg:my-5 max-w-[1300px] min-w-[275px]">
        <LoginFormLeftSide/>
        <LoginFormRightSide/>
      </div>
    </>
  );
}

export default LoginForm;
