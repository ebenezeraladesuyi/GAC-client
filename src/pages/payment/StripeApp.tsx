// src/pages/payment/StripeApp.tsx

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useStripeContext } from './StripeContext';
import PaymentForm from './PaymentForm';

const StripeApp: React.FC = () => {
  const { stripe } = useStripeContext();

  if (!stripe) {
    // Handle case where Stripe context is not ready
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Elements stripe={stripe}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default StripeApp;
