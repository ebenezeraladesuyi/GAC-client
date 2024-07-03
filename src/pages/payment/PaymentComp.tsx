// import React from 'react'

import PayAccount from "./PayAccount"
import PaymentForm from "./PaystackPaymentForm"

const PaymentComp = () => {
  return (
    <div className="w-full min-h-[80vh] flex item-center justify-center bg-pay-bg bg-cover bg-center pb-[40px]">
        <div className="w-[90%] flex flex-col item gap-5">
            <PayAccount />

            <PaymentForm />
        </div>
    </div>
  )
}

export default PaymentComp