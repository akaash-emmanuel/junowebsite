import React from 'react';

const CustomerService = () => {
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
      <h1 style={headingStyles}>Customer Service</h1>
      <p style={paragraphStyles}>Need help? Our customer service team is here to assist you with any inquiries.</p>
    </div>
  );
};

export default CustomerService;
