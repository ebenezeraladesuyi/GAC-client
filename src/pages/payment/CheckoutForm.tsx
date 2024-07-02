import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
      });

      if (error) {
        console.error('Error creating payment method:', error);
        setPaymentError(error.message ?? 'Unknown error occurred');
        setLoading(false);
        return;
      }

      console.log('Payment Method:', paymentMethod);
      // Handle successful payment method creation (e.g., send paymentMethod.id to server)
    } catch (error) {
      console.error('Error:', error);
      setPaymentError('Failed to process payment');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full h-[200px] flex flex-col justify-center items-end'>
      <CardElement options={{}} className='w-[50%] h-full flex flex-col' />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {paymentError && <div>{paymentError}</div>}
    </form>
  );
};

export default CheckoutForm;
