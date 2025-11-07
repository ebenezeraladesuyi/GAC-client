/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paystack from "../../assets/images/pay/paystack.png";

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string;

  const handlePaymentSuccess = (response: any) => {
    console.log('Payment success:', response);
    setLoading(false);

    
    toast.success('Payment successful! 🎉', {
      position: 'top-center',
      autoClose: 3000,
    });

    // ✅ Refresh page after short delay
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
    setLoading(true);
    toast.info('Initializing payment...', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const componentProps = {
    email: 'user@example.com',
    amount: amount * 100,
    publicKey,
    text: loading ? 'Processing...' : 'Pay Now',
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
    onClick: handleBeforePayment,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(parseFloat(value));
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[50%] pb-6 rounded-md bg-white shadow-md p-4 flex flex-col items-center gap-3">
        <div className="w-[130px]">
          <img src={paystack} alt="Paystack Logo" />
        </div>

        <label htmlFor="amountInput" className="text-[#000000]">
          Enter Amount (NGN)
        </label>
        <input
          type="number"
          id="amountInput"
          value={amount}
          onChange={handleChange}
          min="1"
          step="0.01"
          className="w-full h-[40px] border border-gray-200 rounded-md px-[10px] bg-[#ffffff] text-[#000000]"
          required
          disabled={loading}
        />

        <PaystackButton
          className={`w-full h-[40px] rounded-md text-white font-medium transition-all duration-300 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#23a1db] hover:bg-[#1d8dc5]'
          }`}
          {...componentProps}
          // disabled={loading || amount <= 0}
        />
      </div>

      {/* ✅ Toast Container */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default PaymentForm;
