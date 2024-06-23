import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { url } from '../../utils/Api'; // Adjust the import path as per your project structure

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);

console.log("dotenv", process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('USD');
  const [error, setError] = useState<string | null>(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError('Failed to load Stripe');
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError('Card element not found');
      return;
    }

    try {
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        throw new Error(error.message ?? 'Failed to create token');
      }

      const response = await fetch(`${url}/api/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          token: token?.id, // Send only the token ID to the server
        }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to process payment');
      }

      alert('Payment successful');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </label>
      <label>
        Currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} required>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies as needed */}
        </select>
      </label>
      <label>
        Card details:
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

const PaymentFormWrapper: React.FC = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentFormWrapper;
