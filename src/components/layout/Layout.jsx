import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div className={`w-full max-w-screen-2xl py-4 md:px-12 px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
