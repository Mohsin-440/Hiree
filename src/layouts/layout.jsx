import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="h-10 xs:h-[60px] md:h-20 w-full bg-white"></header>
      {children}
    </>
  );
};

export default Layout;
