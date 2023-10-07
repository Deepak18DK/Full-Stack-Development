import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './page2.css'

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [upiId, setUpiId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handlePayment = () => {
    const validationErrors = {};

    
    if (name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    }
    if (upiId.trim() === '') {
      validationErrors.upiId = 'UPI ID is required';
    }

    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    
    console.log('Performing payment with the following details:');
    console.log('Name : ', name);
    console.log('Email : ', email);
    console.log('UPI ID : ', upiId);

    
    setName('');
    setEmail('');
    setUpiId('');
    setPassword('');
    navigate('/page3');
  };

  return (
    <div className="payment">
      <h1>Payment Page</h1>
      <form>
        <div className="name">
          <label htmlFor="name">Name :</label>
          
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          
          {errors.name && <span className="error">{errors.name}</span>}

        </div>
        <div className="email">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="upi">
          <label htmlFor="upiId">UPI ID :</label>
          <input
            type="text"
            id="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Enter UPI ID"
          />
          {errors.upiId && <span className="error">{errors.upiId}</span>}
        </div>
        <div className="password">
          <label htmlFor="password">   Password :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
