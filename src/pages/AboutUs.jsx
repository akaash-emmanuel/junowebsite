import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100); 
    return () => clearTimeout(timeout); 
  }, []);

  const pageStyles = {
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

  const imageStyles = {
    position: 'absolute',
    top: '200px',
    left: '230px',
    transform: 'translateX(-50%)',
    width: '400px',
    height: '500px',
    zIndex: -1,
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 1s ease-in-out 1s', 
  };

  const textContainerStyles = {
    position: 'absolute',
    top: '580px',
    right: '-220px',
    transform: 'translate(-50%, -50%)',
    textAlign: 'left',
    zIndex: 1,
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 1s ease-in-out 0.3s', 
  };

  const aboutJunoStyles = {
    position: 'absolute',
    top: '400px',
    right: '380px',
    transform: 'translateX(-50%)',
    fontFamily: 'Zen Dots, sans-serif',
    fontSize: '0.6rem',
    color: '#ffffff',
    letterSpacing: '0px',
    zIndex: 2,
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 1s ease-in-out 0.3s', 
  };

  const headingStyles = {
    fontSize: '4.8rem',
    color: '#ffffff',
    lineHeight: '0.8',
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 1s ease-in-out 0.4s',
  };

  const paragraphStyles = {
    fontSize: '4.8rem',
    color: '#808080',
    lineHeight: '0.5',
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 1s ease-in-out 0.6s',
  };

  const additionalTextStyles = {
    position: 'absolute',
    top: '320px',
    left: '850px',
    transform: 'translateX(-50%)',
    width: '35%', 
    textAlign: 'right',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.5rem', 
    color: '#ffffff',
    lineHeight: '1.6',
    letterSpacing: '0px',
    zIndex: 1,
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 1s ease-in-out 0.2s', 
  };

  return (
    <div style={pageStyles}>
      <img src="/src/assets/about.jpg" alt="About Juno" style={imageStyles} />
      <div style={aboutJunoStyles}>
        <h2>About Juno</h2>
      </div>
      <div style={textContainerStyles}>
        <h1 style={headingStyles}>
          WE ARE A CREATIVE <br />
          <span style={headingStyles}>POWERHOUSE</span> WHERE
          <br />
          <span style={paragraphStyles}>YOUR IMAGINATION </span>
          <br />
          <span style={paragraphStyles}>BECOMES YOUR STYLE</span>
        </h1>
      </div>
      <div style={additionalTextStyles}>
        We are two students driven to redefine fashion by offering high-quality, 
        affordable clothing that allows you to easily customize your style. 
        With a diverse range of designs and endless options, our mission is to 
        continuously evolve and provide a personalized experience that makes fashion 
        more accessible to everyone, no matter their budget.
      </div>
    </div>
  );
};

export default AboutUs;
