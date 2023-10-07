import React from 'react';

const PaymentSuccessPage = ({ name }) => {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you {name} for your payment.</p>
      <p>We have received your payment and processed it successfully.</p>
    
    </div>
  );
};

export default PaymentSuccessPage;
