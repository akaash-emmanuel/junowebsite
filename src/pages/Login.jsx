//holder code
import React from 'react';

const Login = () => {
  const pageStyles = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const inputStyles = {
    padding: '10px',
    margin: '10px',
    fontSize: '1rem',
    width: '80%',
    maxWidth: '400px',
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  };

  return (
    <div style={pageStyles}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" style={inputStyles} />
        <input type="password" placeholder="Password" style={inputStyles} />
        <button style={buttonStyles}>Login</button>
      </form>
    </div>
  );
};

export default Login;
