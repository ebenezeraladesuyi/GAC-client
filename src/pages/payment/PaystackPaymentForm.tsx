/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paystack from "../../assets/images/pay/paystack.png";

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string;

  const handlePaymentSuccess = (response: any) => {
    console.log('Payment success:', response);
    setLoading(false);

    toast.success('Payment successful! 🎉', {
      position: 'top-center',
      autoClose: 3000,
    });

    setTimeout(() => {
      window.location.reload();
    }, 3500);
  };

  const handlePaymentClose = () => {
    console.log('Payment closed');
    setLoading(false);
    toast.info('Payment process was closed.', {
      position: 'top-center',
      autoClose: 2500,
    });
  };

  const handleBeforePayment = () => {
    // Validate email before proceeding
    if (!email || !isValidEmail(email)) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    if (amount <= 0) {
      toast.error('Please enter a valid amount', {
        position: 'top-center',
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    setLoading(true);
    toast.info('Initializing payment...', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const componentProps = {
    email: email, // Use the email from state
    amount: amount * 100,
    publicKey,
    text: loading ? 'Processing...' : 'Pay Now',
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
    onClick: handleBeforePayment,
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(parseFloat(value) || 0);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const isFormValid = email && isValidEmail(email) && amount > 0;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[50%] pb-6 rounded-md bg-white shadow-md p-4 flex flex-col items-center gap-3">
        <div className="w-[130px]">
          <img src={paystack} alt="Paystack Logo" />
        </div>

        {/* Email Input */}
        <div className="w-full">
          <label htmlFor="emailInput" className="text-[#000000] block mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full h-[40px] border border-gray-200 rounded-md px-[10px] bg-[#ffffff] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#23a1db] focus:border-transparent"
            required
            disabled={loading}
          />
          {email && !isValidEmail(email) && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
          )}
        </div>

        {/* Amount Input */}
        <div className="w-full">
          <label htmlFor="amountInput" className="text-[#000000] block mb-2">
            Enter Amount (NGN)
          </label>
          <input
            type="number"
            id="amountInput"
            value={amount}
            onChange={handleAmountChange}
            min="1"
            step="0.01"
            placeholder="0.00"
            className="w-full h-[40px] border border-gray-200 rounded-md px-[10px] bg-[#ffffff] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#23a1db] focus:border-transparent"
            required
            disabled={loading}
          />
          {amount <= 0 && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid amount</p>
          )}
        </div>

        <PaystackButton
          className={`w-full h-[40px] rounded-md text-white font-medium transition-all duration-300 ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : isFormValid
                ? 'bg-[#23a1db] hover:bg-[#1d8dc5] cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed'
          }`}
          {...componentProps}
        />
        
        {/* Display confirmation */}
        {email && isValidEmail(email) && amount > 0 && (
          <div className="text-sm text-gray-600 mt-2 text-center">
            Payment confirmation will be sent to: <br />
            <span className="font-medium">{email}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;