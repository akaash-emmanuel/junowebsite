{/*holder code */}

import React from 'react';

const Payment = () => {
  const pageStyles = {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyles = {
    fontSize: '2rem',
    color: '#333',
  };

  const paragraphStyles = {
    fontSize: '1.2rem',
    color: '#666',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Payment</h1>
      <p style={paragraphStyles}>Enter your payment details below to complete your purchase.</p>
    </div>
  );
};

export default Payment;
