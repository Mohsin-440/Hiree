// eslint-disable-next-line react/prop-types
const Layout = ({ children, className }) => {
  return (
    <>
      <header className={`h-10 xs:h-[60px] md:h-20 w-full bg-white ${className}`}></header>
      {children}
    </>
  );
};

export default Layout;
