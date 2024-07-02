/* eslint-disable react-refresh/only-export-components */

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

interface StripeContextType {
  stripe: Stripe | null;
  loading: boolean;
}

const StripeContext = createContext<StripeContextType>({
  stripe: null,
  loading: true,
});

export const useStripeContext = () => useContext(StripeContext);

interface StripeProviderProps {
    children: ReactNode
}

export const StripeProvider: React.FC<StripeProviderProps> = ({ children }) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [loading, setLoading] = useState(true);

  const initializeStripe = async () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);
    const stripeInstance = await stripePromise;
    setStripe(stripeInstance);
    setLoading(false);
  };

  useEffect(() => {
    initializeStripe();
  }, []);

  return (
    <StripeContext.Provider value={{ stripe, loading }}>
      {loading ? <div><DatasIsaLoading /></div> : children}
    </StripeContext.Provider>
  );
};
