"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../../utils/stripe";
import CheckoutForm from "@/containers/Checkout/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
          <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>
            <CheckoutForm plan="basic-monthly" />
          </div>
        </div>
      </Elements>
    </>
  );
};

export default Checkout;
