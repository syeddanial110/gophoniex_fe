"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const checkoutProductData = useSelector(
    (state) => state.SelectProductCheckoutReducer?.res
  );
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const total_Price =
      checkoutProductData?.data?.checkoutData?.productOptionSelected?.reduce(
        (sum, item) => sum + (parseInt(item.price) || 0),
        0
      );
    console.log("total_Price", total_Price);
    setTotalPrice(total_Price);
  }, [checkoutProductData?.data]);

  console.log("checkoutProductData", checkoutProductData);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-main mb-6 text-center">
          Checkout
        </h1>
        {checkoutProductData ? (
          <>
            <div className="mb-6">
              <div
                className="mt-6 font-bold text-2xl"
                dangerouslySetInnerHTML={{
                  __html:
                    checkoutProductData.data?.checkoutData
                      ?.selectedProductDetail?.productName,
                }}
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Product :</span>
                <span className="font-medium">
                  {checkoutProductData.productId}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Total Price:</span>
                <span className="text-xl font-bold text-green-600">
                  ${totalPrice}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Children & Options</h3>
              <div className="space-y-4">
                {checkoutProductData?.data?.checkoutData?.classDetail?.map(
                  (child, idx) => (
                    <div
                      key={idx}
                      className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between bg-gray-50"
                    >
                      <div>
                        <div className="font-medium text-main">
                          Child {idx + 1}: {child.childName}
                        </div>
                        <div className="text-gray-500 text-sm">
                          ID: {child.childId}
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <div className="font-semibold">
                          {child.productOptionName}
                        </div>
                        <div className="text-main font-bold">
                          Rs. {child.productOptionPrice}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <button className="w-full mt-8 py-3 bg-main text-white font-bold rounded-xl hover:bg-main/90 transition">
              Confirm & Pay
            </button>
          </>
        ) : (
          <div className="text-center text-gray-500 py-12">
            No checkout data found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
