"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../../utils/stripe";
import CheckoutForm from "@/containers/Checkout/CheckoutForm";
import { useSelector } from "react-redux";
import UITypography from "@/components/UITypography/UITypography";

const Checkout = () => {
  const productCheckout = useSelector(
    (state) => state?.SelectProductCheckoutReducer?.res
  );
  console.log("productCheckout//////////", productCheckout);
  return (
    <>
      <Elements stripe={stripePromise}>
        <div className="min-h-[80vh] bg-gray-100 flex  justify-center gap-4 py-10">
          <div className="w-[40%] p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Details</h1>

            <div className="flex flex-col gap-5">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    productCheckout?.data?.checkoutData?.selectedProductDetail
                      ?.productName,
                }}
              />
              <div>
                <UITypography variant="h5" text="Child Detials" />
                {productCheckout?.data?.checkoutData?.productOptionSelected &&
                  productCheckout?.data?.checkoutData?.productOptionSelected
                    ?.length > 0 &&
                  productCheckout?.data?.checkoutData?.productOptionSelected?.map(
                    (item) => {
                      return (
                        <>
                          <UITypography
                            variant="p"
                            className="!text-[18px]"
                            text={item?.childName}
                          />
                          <UITypography
                            variant="p"
                            className="!text-[18px]"
                            text={item?.productOptionName}
                          />
                          <UITypography
                            variant="p"
                            className="!text-[18px]"
                            text={`$${item?.price}`}
                          />
                        </>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
          <div className="w-[40%] p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <CheckoutForm plan="basic-monthly" />
          </div>
        </div>
      </Elements>
    </>
  );
};

export default Checkout;
