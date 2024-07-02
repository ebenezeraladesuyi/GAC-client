// src/App.tsx

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { StripeProvider, useStripeContext } from './pages/payment/StripeContext';
import PaymentForm from './pages/payment/PaymentForm';
// import { StripeProvider, useStripeContext } from './StripeContext';
// import PaymentForm from './PaymentForm';

const App: React.FC = () => {
  return (
    <StripeProvider>
      <div className="App">
        <Elements stripe={useStripeContext().stripe!}>
          <PaymentForm />
        </Elements>
      </div>
    </StripeProvider>
  );
};

export default App;
