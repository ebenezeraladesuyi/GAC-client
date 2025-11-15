/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paystack from "../../assets/images/pay/paystack.png";

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<string>(''); // Changed to string to handle empty input
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

    // Validate amount
    const numericAmount = parseFloat(amount);
    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
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

  // Convert amount string to number for Paystack (amount in kobo)
  const getPaystackAmount = (): number => {
    const numericAmount = parseFloat(amount);
    return isNaN(numericAmount) ? 0 : numericAmount * 100;
  };

  const componentProps = {
    email: email,
    amount: getPaystackAmount(),
    publicKey,
    text: loading ? 'Processing...' : 'Pay Now',
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
    onClick: handleBeforePayment,
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    
    // Allow empty input, numbers, and decimal points
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const clearAmount = () => {
    setAmount('');
  };

  const numericAmount = parseFloat(amount);
  const isAmountValid = !isNaN(numericAmount) && numericAmount > 0;
  const isFormValid = email && isValidEmail(email) && isAmountValid;

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

        {/* Amount Input with Clear Button */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="amountInput" className="text-[#000000]">
              Enter Amount (NGN)
            </label>
            {amount && (
              <button
                type="button"
                onClick={clearAmount}
                className="text-sm text-red-500 hover:text-red-700 focus:outline-none"
                disabled={loading}
              >
                Clear
              </button>
            )}
          </div>
          <div className="relative">
            <input
              type="text" // Changed to text to allow empty input and better control
              id="amountInput"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0.00"
              className="w-full h-[40px] border border-gray-200 rounded-md px-[10px] bg-[#ffffff] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#23a1db] focus:border-transparent"
              required
              disabled={loading}
              inputMode="decimal" // Shows numeric keyboard on mobile with decimal point
            />
          </div>
          {amount && !isAmountValid && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid amount greater than 0</p>
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
        {email && isValidEmail(email) && isAmountValid && (
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