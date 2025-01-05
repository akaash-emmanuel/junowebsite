import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const ralewayStyle = { fontFamily: "'Raleway', sans-serif" };
  const zenDotsStyle = { fontFamily: "'Zen Dots', cursive" }; 
  const baseColor = "#FFFFFF"; 
  const hoverColor = "#009990"; 

  const linkStyle = {
    ...ralewayStyle,
    textDecoration: "none",
    fontSize: "0.875rem", 
    fontWeight: "400",
    color: baseColor,
    transition: "color 0.3s ease",
    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)", 
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem",
        background: "black", 
        position: "sticky",
        top: 0,
        zIndex: 10, 
        backdropFilter: "blur(10px)", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)", 
      }}
    >
      {/* Juno Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
        {/* Juno Logo */}
        <img
          src={logo} 
          alt="Juno Logo"
          style={{
            width: "20px", 
            height: "auto", 
          }}
        />
        {/* Juno Text */}
        <Link
          to="/"
          style={{
            ...zenDotsStyle,
            textDecoration: "none",
            fontWeight: "700", 
            fontSize: "1.1rem", 
            color: baseColor,
            transition: "color 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)", 
          }}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = baseColor)}
        >
          JUNO
        </Link>
      </div>

      {/* Top Right Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Link
          to="/about"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = baseColor)}
        >
          About Us
        </Link>
        <Link
          to="/customer-service"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = baseColor)}
        >
          Customer Service
        </Link>

        {/* Sign In Button */}
        <Link
          to="/signin"
          style={{
            ...linkStyle,
            padding: "0.25rem 0.75rem", 
            border: "1px solid #FFFFFF",
            borderRadius: "5px",
            backgroundColor: "transparent",
            fontWeight: "500",
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#009990")}
          onMouseLeave={(e) => (e.target.style.color = baseColor)}
        >
          Sign In
        </Link>

        {/* Shopping Cart Icon */}
        <Link
          to="/shopping-cart"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = baseColor)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20" 
            height="20" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Link>

        {/* Favorites Icon */}
        <Link
          to="/favorites"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = baseColor)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20" 
            height="20" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
