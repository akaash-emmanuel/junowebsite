// holder code

import React from 'react';

const Home = () => {
  return (
    <div 
      style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '80vh',  
        padding: '20px',
        color: 'white',  
        background: 'url("your-background-image-url.jpg") no-repeat center center/cover', 
        overflow: 'hidden',  
        position: 'relative', 
      }}
    >
      <img
        src="src/assets/home.png" 
        alt="Home"
        style={{
          position: 'absolute', 
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)', 
          width: 'auto',
          height: '200px', 
        }}
      />
    </div>
  );
};

export default Home;
