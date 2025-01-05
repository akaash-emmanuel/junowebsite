import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { HyperText } from "../components/hyper-text"; 

const Home = () => {
  const [imageHeight, setImageHeight] = useState(600); 
  const [textOffset, setTextOffset] = useState(0); 
  const [isLoaded, setIsLoaded] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    setTextOffset(imageHeight + 20); 

    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout); 
  }, [imageHeight]);

  const fadeInStyles = (delay = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const handleExploreClick = () => {
    navigate("/options");
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 60px)", 
        backgroundColor: "black", 
        overflow: "hidden", 
        margin: 0,
        padding: 0,
      }}
    >
      {/* Logo Image in Top Left */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "180px",
          zIndex: 3,
          ...fadeInStyles(0.1), 
        }}
      >
        <img
          src="src/assets/logo.png"
          alt="Logo"
          style={{
            height: "300px",
            width: "auto",
          }}
        />
      </div>

      {/* SVG Icon at the top */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "70%",
          transform: "translateX(-50%)",
          zIndex: 3,
          ...fadeInStyles(0.2), 
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-dollar-sign"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      </div>

      {/* Image */}
      <img
        src="src/assets/home.png"
        alt="Home"
        style={{
          right: "50px",
          position: "absolute",
          bottom: "-40px",
          height: `${imageHeight}px`,
          width: "auto",
          objectFit: "contain",
          zIndex: 1,
          ...fadeInStyles(0.3), 
        }}
      />

      {/* Text: JUNO */}
      <div
        style={{
          position: "absolute",
          bottom: "2px",
          left: "50%",
          transform: `translateX(-50%) scaleX(2.3) scaleY(1.5) ${isLoaded ? "" : "translateY(20px)"}`,
          color: "white",
          fontSize: "10rem",
          fontFamily: '"Zen Dots", sans-serif',
          textAlign: "center",
          zIndex: 2,
          lineHeight: "1",
          opacity: isLoaded ? 0.2 : 0,
          textShadow:
            "0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.7)",
          transition: `opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s`, 
        }}
      >
        <HyperText>JUNO</HyperText>
      </div>

      {/* Text: MAKE THE DESIGN SPEAK FOR ITSELF */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "40px",
          bottom: `${textOffset}px`,
          color: "white",
          fontSize: "7rem",
          fontFamily: '"Bebas Neue", sans-serif',
          textAlign: "right",
          zIndex: 0,
          lineHeight: "0.74",
          ...fadeInStyles(0.5),
        }}
      >
        <div>MAKE</div>
        <div>
          THE{" "}
          <span
            style={{
              color: "red", 
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.8s ease 0.5s", 
            }}
          >
            DESIGN
          </span>
        </div>
        <div>SPEAK</div>
        <div>FOR ITSELF</div>
      </div>

      {/* Company description */}
      <div
        style={{
          position: "absolute",
          right: "90px",
          top: "66%",
          transform: "translateY(-50%) scaleX(1.3)",
          color: "white",
          fontSize: "0.6rem",
          fontFamily: '"Geo", sans-serif',
          textAlign: "right",
          zIndex: 2,
          lineHeight: "1.5",
          maxWidth: "300px",
          opacity: 0.8,
          ...fadeInStyles(0.6), 
        }}
      >
        We are Juno, a new wave of innovation in fashion, driven by creativity and
        engineered for you. Born from the vision of two engineers, we aim to reshape
        the world of clothing with designs you choose, customize, and wear at prices
        that make style accessible to all. As we take our first steps, our mission
        is simple: bring the power of design to your wardrobe, your way.
      </div>

      {/* Explore Button */}
      <div
        style={{
          position: "absolute",
          bottom: "250px",
          left: "180px",
          zIndex: 3,
          ...fadeInStyles(0.7),
        }}
      >
        <button
          style={{
            padding: "8px 30px",
            fontSize: "1.2rem",
            fontFamily: '"Bebas Neue", sans-serif',
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.01)", 
            border: "2px solid white",
            borderRadius: "5px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.color = "white";
          }}
          onClick={handleExploreClick}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Home;
