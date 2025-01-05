import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 


import Home from './pages/Home';
import Options from './pages/Options';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import CustomerService from './pages/CustomerService';
import Payment from './pages/Payment';

const App = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden", 
        boxSizing: "border-box",
      }}
    >
      <Router>
        <Layout> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/options" element={<Options />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
