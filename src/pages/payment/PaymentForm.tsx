/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/PaymentForm.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useStripeContext } from './StripeContext';
import { url } from '../../utils/Api';

const PaymentForm: React.FC = () => {
  const { stripe } = useStripeContext();
  const stripeInstance = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !stripeInstance) return;

    setLoading(true);
    try {
        const clientSecretResponse = await axios.post(`${url}/payment/create-payment-intent`, {
        amount: 1000, // Amount in smallest currency unit (e.g., cents)
        currency: 'ngn', // Currency
        });

        const clientSecret = clientSecretResponse.data.clientSecret;

        if (typeof clientSecret !== 'string') {
            throw new Error('Failed to retrieve client secret');
        }

        const cardElement = elements.getElement(CardElement);

        if (cardElement) {
        const result = await stripeInstance.confirmCardPayment(clientSecret, {
            payment_method: {
            card: cardElement,
            },
        });

        if (result.error) {
            console.error(result.error.message);
            setPaymentError(result.error.message ?? 'Unknown error occurred');
        } else {
            console.log('Payment successful:', result.paymentIntent);
            // Handle success scenario (e.g., show success message)
        }
        }
    } catch (error : any) {
        console.error('error processing payment:', error.message);
        setPaymentError(error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full h-[80vh] bg-gray-300'>
      <CardElement options={{}} />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {paymentError && <div>{paymentError}</div>}
    </form>
  );
};

export default PaymentForm;
