import React from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children, className = "" }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const defaultPadding = isHome ? "" : "pt-20 px-4";

  return (
    <div className={`w-full max-w-screen-2xl py-4 md:px-12 px-3 ${defaultPadding} ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
