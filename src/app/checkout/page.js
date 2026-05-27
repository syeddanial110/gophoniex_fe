"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../utils/stripe";
import CheckoutForm from "@/containers/Checkout/CheckoutForm";
import { useSelector } from "react-redux";
import UITypography from "@/components/UITypography/UITypography";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

const Checkout = () => {
  const productCheckout = useSelector(
    (state) => state?.SelectProductCheckoutReducer?.res,
  );

  const productOptions =
    productCheckout?.data?.checkoutData?.productOptionSelected;

  const calculateTotalPrice = () => {
    if (!productOptions) return 0;
    return productOptions.reduce(
      (total, item) => total + (parseFloat(item?.price) || 0),
      0,
    );
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <Header />
      <Elements stripe={stripePromise}>
        <div className="min-h-[80vh] bg-gray-100 flex flex-col lg:flex-row justify-center gap-4 px-4 sm:px-6 lg:px-0 py-6 lg:py-10">
          <div className="w-full lg:w-[40%] p-4 sm:p-6 lg:p-8 rounded-lg">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Details
            </h1>

            <div className="flex flex-col gap-5">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    productCheckout?.data?.checkoutData?.selectedProductDetail
                      ?.productName,
                }}
              />
              <div>
                <UITypography variant="h5" text="Child Details" />
                {productOptions &&
                  productOptions?.length > 0 &&
                  productOptions?.map((item, i) => {
                    return (
                      <div key={i} className="mb-4 p-4 border rounded-md">
                        <UITypography
                          variant="h6"
                          text={`Child ${i + 1}:`}
                          className="underline"
                        />
                        <UITypography
                          variant="p"
                          className="!text-sm sm:!text-base lg:!text-[18px]"
                          text={item?.childName}
                        />

                        {item?.selectedOptions?.length > 0 &&
                          item?.selectedOptions?.map((opt, idx) => (
                            <UITypography
                              key={idx}
                              variant="p"
                              className="!text-sm sm:!text-base lg:!text-[18px] ml-4"
                              text={`${opt?.productOptionName} - $${opt?.price}`}
                            />
                          ))}
                        <UITypography
                          variant="p"
                          className="!text-sm sm:!text-base lg:!text-[18px] font-semibold mt-2"
                          text={`Subtotal: $${item?.price}`}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] p-4 sm:p-6 lg:p-8 rounded-lg bg-white shadow-md">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Your Billing Details
            </h1>

            <div className="mb-6">
              <UITypography variant="h6" className="font-semibold">
                Order Summary
              </UITypography>
              <div>
                {productOptions &&
                  productOptions?.length > 0 &&
                  productOptions?.map((item, i) => {
                    return (
                      <div key={i} className="mb-4 p-4 border rounded-md">
                        <UITypography
                          variant="h6"
                          text={`Child ${i + 1}:`}
                          className="underline"
                        />
                        <UITypography
                          variant="p"
                          className="!text-sm sm:!text-base lg:!text-[18px]"
                          text={item?.childName}
                        />

                        {item?.selectedOptions?.length > 0 &&
                          item?.selectedOptions?.map((opt, idx) => (
                            <UITypography
                              key={idx}
                              variant="p"
                              className="!text-sm sm:!text-base lg:!text-[18px] ml-4"
                              text={`${opt?.productOptionName} - $${opt?.price}`}
                            />
                          ))}
                        <UITypography
                          variant="p"
                          className="!text-sm sm:!text-base lg:!text-[18px] font-semibold mt-2"
                          text={`Subtotal: $${item?.price}`}
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="flex justify-between py-2 border-b">
                <UITypography variant="p" text={"Subtotal:"} />
                <UITypography variant="p" text={`${totalPrice?.toFixed(2)}`} />
              </div>

              <div className="flex justify-between py-2">
                <UITypography
                  variant="h6"
                  text="Total:"
                  className="font-semibold"
                />

                <UITypography
                  variant="h6"
                  text={`${totalPrice.toFixed(2)}`}
                  className="font-semibold"
                />
              </div>
            </div>
            <CheckoutForm plan="basic-monthly" />
          </div>
        </div>
      </Elements>
      <Footer />
    </>
  );
};

export default Checkout;
