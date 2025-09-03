// components/CheckoutForm.jsx
"use client";
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { cardOptions } from "./stripeStyle";
import { BASEURL } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { getToken } from "@/apis/Auth";
import { toast } from "sonner";
import { pathLocations } from "@/utils/navigation";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ plan }) => {
  const token = getToken();
  const router = useRouter();

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
    console.log("methodId", methodId);

    const res = await fetch(
      `${BASEURL}${ApiEndpoints.order.base}${ApiEndpoints.order.placeOrder}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      }
    );

    const data = await res.json();
    toast.success(data?.message);
    if (data.success) {
      console.log("data", data);
      router.push(pathLocations.orders);
      console.log("Payment successful!");
    } else {
      console.error("Payment failed:", data.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <CardElement
        options={cardOptions}
        className="p-4 border rounded-md shadow-sm"
      />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-main btn rounded-full py-3 px-6 text-white mt-4"
      >
        {loading ? "Processing…" : `Pay for ${plan}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
