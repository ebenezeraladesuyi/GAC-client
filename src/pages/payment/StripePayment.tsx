import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// import CheckoutForm from './CheckoutForm'; // Create this component next

const stripePromise = loadStripe('pk_test_51PT8SGP65U6cLwxedofXgqPRKQTZ3HcN5EPJraL5RgX54bfBeqsqsQmhFwZ4FOoF9ZxjYdG3fYhy4HphVSDW0kjP00BCIrOqIq'); // Replace with your actual Stripe public key

const StripePayment: React.FC = () => {
  return (
    <div className="w-full h-[90vh] bg-gray-400 flex flex-col justify-center items-center">
      <div className='w-full md:w-[50%] h-['>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default StripePayment;
