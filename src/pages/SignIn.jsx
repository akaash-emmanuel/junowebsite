import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'; 

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return; 
    } else {
      setError("");
    }

    console.log("Email:", email, "Password:", password);
    navigate("/"); 
  };

  const pageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Bebas Neue, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    backgroundImage:
      'linear-gradient(90deg, rgba(255, 251, 251, 0.1) 1px, transparent 1px), ' +
      'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
    backgroundSize: '100px 100px', 
    backgroundPosition: '0 0, 0 0', 
    zIndex: -1,
  };

  return (
    <div style={pageStyles}>
      {/* Logo Image */}
      <div
        style={{
          position: "absolute",
          top: "130px",
          zIndex: 3,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "150px",
            width: "auto",
          }}
        />
      </div>

      {/* Sign In Form */}
      <div
        style={{
          position: "absolute",
          top: "46%",
          transform: "translateY(-50%)",
          color: "white",
          fontFamily: '"Raleway", sans-serif',
          zIndex: 2,
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontFamily: '"Raleway", sans-serif' }}>
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "8px",
                width: "50%", 
                fontSize: "1rem",
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                color: "white",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px", position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "8px",
                width: "50%", 
                fontSize: "1rem",
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                color: "white",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "25%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye-off"
                >
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </svg>
              )}
            </div>
          </div>

          {/* Error message display */}
          {error && (
            <div style={{ color: "red", marginBottom: "15px", fontSize: "0.9rem" }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            style={{
              padding: "3px 10px", 
              fontSize: "1rem",
              fontFamily: '"Bebas Neue", sans-serif',
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid white",
              borderRadius: "5px",
              textTransform: "uppercase",
              letterSpacing: '2px',
              cursor: "pointer",
              transition: "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
              marginTop: "20px",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
