import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation(); 

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; 
    document.body.style.margin = "0"; 
    document.body.style.overflow = "hidden";

    if (location.pathname === "/options") {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.margin = "";
      document.body.style.overflow = "";
    };
  }, [location.pathname]); 

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Navbar /> {/* Navbar sits above the background */}
      <main style={{ position: "relative", zIndex: 1 }}>{children}</main> {/* Page content */}
    </div>
  );
};

export default Layout;
