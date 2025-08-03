// components/CheckoutForm.jsx
"use client";
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { cardOptions } from "./stripeStyle";

const CheckoutForm = ({ plan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const methodId = paymentMethod.id;
    console.log('methodId', methodId)

    const res = await fetch("/api/handle-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ methodId, plan }),
    });

    const data = await res.json();
    if (data.success) {
      console.log("Payment successful!");
    } else {
      console.error("Payment failed:", data.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <CardElement options={cardOptions} className="p-4 border rounded-md shadow-sm" />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing…" : `Pay for ${plan}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
