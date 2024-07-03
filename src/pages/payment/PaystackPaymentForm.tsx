/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {PaystackButton} from 'react-paystack';
import paystack from "../../assets/images/pay/paystack.png";

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0); // State to hold amount

  const publicKey = 'pk_test_7f3cb532748c765aa2743120604a27ebbfe8a74e'; // Replace with your Paystack public key

  const handlePaymentSuccess = (response: any) => {
    console.log(response); // Handle successful payment (e.g., show thank you message)
  };

  const handlePaymentClose = () => {
    console.log('Payment closed'); // Handle when user closes payment form
  };

  const componentProps = {
    email: 'user@example.com', // User's email (optional)
    amount: amount * 100, // Amount in kobo (1 Naira = 100 kobo)
    publicKey: publicKey,
    text: 'Pay Now',
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(parseFloat(value)); // Update amount based on user input
  };

  return (
    <div className="w-full flex justify-center items-center">
        <div className='w-[90%] md:w-[60%] lg:w-[50%] pb-6 rounded-md bg-white shadow-md p-4  flex flex-col items-center  gap-3'>
            <div className='w-[130px]'>
                <img src={paystack} alt="" />
            </div>
            
            <label htmlFor="amountInput" className=''>Enter Amount (NGN)</label>
            <input
                type="number"
                id="amountInput"
                value={amount}
                onChange={handleChange}
                min="1"
                step="0.01"
                className='w-full h-[40px] border-[1px] border-gray-200 rounded-md px-[10px]'
                required
            />
            <PaystackButton className='w-full bg-[#23a1db] text-white' {...componentProps} />
        </div>
    </div>
  );
};

export default PaymentForm;
