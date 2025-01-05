import React, { useEffect, useState } from "react";

const Options = () => {
  const [animate, setAnimate] = useState(false);
  const [cardsData, setCardsData] = useState([]); 
  useEffect(() => {
    const timeoutId = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "30px 30px 80px 30px",
    backgroundColor: "white",
    overflowY: "scroll",
    height: "100vh",
    boxSizing: "border-box",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    rowGap: "80px",
    width: "100%",
    justifyContent: "center",
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };

  const cardStyle = {
    width: "calc(25% - 16px)",
    aspectRatio: "3 / 4",
    backgroundColor: "#e0e0e0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transform: "scale(1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const headingStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "5rem",
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };

  const buttonStyle = {
    padding: "8px 30px",
    fontSize: "1.2rem",
    fontFamily: '"Bebas Neue", sans-serif',
    color: "black",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "10px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const buttonsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "black";
    e.currentTarget.style.color = "white";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.color = "black";
  };

  const handleCardMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  };

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "white";
    return () => {
      document.querySelector("body").style.backgroundColor = "";
    };
  }, []);

  const handleButtonClick = (category) => {

    let newCards = [];
    switch (category) {
      case "Tshirts":
        newCards = Array.from({ length: 9 }).map((_, index) => ({
          id: index,
          type: "Tshirt",
        }));
        break;
      case "Oversized Tshirts":
        newCards = Array.from({ length: 9 }).map((_, index) => ({
          id: index,
          type: "Oversized Tshirt",
        }));
        break;
      case "Polo Tshirts":
        newCards = Array.from({ length: 9 }).map((_, index) => ({
          id: index,
          type: "Polo Tshirt",
        }));
        break;
      case "Hoodies":
        newCards = Array.from({ length: 9 }).map((_, index) => ({
          id: index,
          type: "Hoodie",
        }));
        break;
      case "Varsity Jackets":
        newCards = Array.from({ length: 9 }).map((_, index) => ({
          id: index,
          type: "Varsity Jacket",
        }));
        break;
      case "Sweatshirts":
        newCards = Array.from({ length: 9 }).map((_, index) => ({
          id: index,
          type: "Sweatshirt",
        }));
        break;
      default:
        break;
    }
    setCardsData(newCards); 
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>WHAT WE OFFER</h1>

      {/* Buttons Section */}
      <div style={buttonsContainerStyle}>
        {[
          "Tshirts",
          "Oversized Tshirts",
          "Polo Tshirts",
          "Hoodies",
          "Varsity Jackets",
          "Sweatshirts",
        ].map((label, index) => (
          <button
            key={index}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleButtonClick(label)} 
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div style={cardsContainerStyle}>
        {cardsData.map((card) => (
          <div
            key={card.id}
            style={cardStyle}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            {card.type} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
