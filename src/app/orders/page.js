"use client";
import React, { useEffect, useState } from "react";
import { Calendar, Clock, AlertCircle, Baby } from "lucide-react";
import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";
import { apiGet, apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { getUserId } from "@/apis/Auth";
import { formatDate } from "@/utils/utils";
import UIModal from "@/components/UIModal/UIModal";
import { toast } from "sonner";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

const Orders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [modalOrderId, setModalOrderId] = useState(null);

  const handleModal = (orderId = null) => {
    setModalOrderId(orderId);
  };

  const userId = getUserId();

  const handleCancelOrder = (orderId) => {
    // Implement your cancellation logic here
    console.log("Cancelling order:", orderId);
    apiPost(
      `${ApiEndpoints.order.base}${ApiEndpoints.order.cancelRecurringPayment}`,
      { orderId },
      (res) => {
        console.log("res cancel order", res);
        // Refresh orders after cancellation
        toast.success(res?.message);
        getAllOrders();
      },
      (err) => {
        console.log("err", err);
      },
    );
  };

  const getAllOrders = () => {
    apiGet(
      `${ApiEndpoints.order.base}${ApiEndpoints.order.getAllOrders}/${userId}`,
      (res) => {
        console.log("res user order", res);
        setUserOrders(res?.data);
      },
      (err) => {
        console.log("err", err);
      },
    );
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  console.log("userOrders", userOrders);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-4 sm:py-1 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <UITypography
            variant="h1"
            text="My Orders"
            className="font-bold mb-6 lg:mb-8"
          />

          <div className="grid grid-cols-1 gap-6">
            {userOrders?.length > 0 &&
              userOrders?.map((order, ind) => (
                <div
                  key={ind}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            order?.items?.length > 0 &&
                            order?.items[0]?.productName,
                        }}
                        className="mt-4 sm:mt-6 prose max-w-none [&>h1]:text-2xl sm:[&>h1]:text-[46px] [&>h1]:font-bold [&>h2]:text-xl sm:[&>h2]:text-[38px] [&>h2]:font-semibold [&>h3]:text-lg sm:[&>h3]:text-[32px] [&>h3]:font-semibold [&>h4]:text-base sm:[&>h4]:text-[28px] [&>h4]:font-semibold [&>h5]:text-sm sm:[&>h5]:text-[24px] [&>h5]:font-semibold [&>h6]:text-xs sm:[&>h6]:text-[22px] [&>h6]:font-semibold [&>p]:font-bold"
                      />

                      <div className="flex items-center gap-2 text-gray-500 mt-2">
                        <Baby className="w-4 h-4" />
                        <span>
                          <UITypography variant="p" text={order?.childName} />
                        </span>
                      </div>
                      {order?.items?.length > 0 &&
                        order?.items[0]?.children?.length > 0 &&
                        order?.items[0]?.children[0]?.options?.map(
                          (opt, idx) => {
                            return (
                              <div key={idx}>
                                <UITypography
                                  variant="p"
                                  text={opt?.optionTitle}
                                />
                                <UITypography
                                  variant="p"
                                  text={`$${opt?.price}`}
                                />
                                {opt?.jerseyName != null && (
                                  <>
                                    <UITypography
                                      variant="p"
                                      text={`Jersey Name: ${opt?.jerseyName}`}
                                    />
                                    <UITypography
                                      variant="p"
                                      text={`Jersey Number: ${opt?.jerseySize}`}
                                    />
                                  </>
                                )}
                              </div>
                            );
                          },
                        )}
                      {order?.items?.length > 0 &&
                        order?.items[0]?.payment != null &&
                        typeof order?.items[0]?.payment == "object" && (
                          <>
                            <UITypography variant="h5" text="Payment Details" />
                            <UITypography
                              variant="p"
                              text={`The Payment will be charged every ${
                                order?.items?.length > 0 &&
                                order?.items[0]?.payment?.intervalGap
                              }`}
                              className="!text-sm sm:!text-[18px]"
                            />
                            <UITypography
                              variant="p"
                              text={`The Payment will be charged ${
                                order?.items?.length > 0 &&
                                order?.items[0]?.payment?.intervalCount
                              } times`}
                              className="!text-sm sm:!text-[18px]"
                            />
                            <UITypography
                              variant="p"
                              text={`Last Payment Charged ${
                                order?.items?.length > 0 &&
                                formatDate(
                                  order?.items[0]?.payment?.lastPaymentDate,
                                )
                              }`}
                              className="!text-sm sm:!text-[18px]"
                            />
                            <UITypography
                              variant="p"
                              text={`Next Payment will be Charged ${
                                order?.items?.length > 0 &&
                                formatDate(
                                  order?.items[0]?.payment?.nextPaymentDate,
                                )
                              }`}
                              className="!text-sm sm:!text-[18px]"
                            />
                          </>
                        )}
                      <div className="flex items-center gap-2 text-gray-500 mt-1"></div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-0">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">
                        ${order?.totalAmount?.toLocaleString()}
                      </span>
                      <span
                        className={`mt-2 px-3 py-1 rounded-full text-sm ${
                          order?.status === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order?.status.charAt(0).toUpperCase() +
                          order?.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  {order?.status === "paid" && (
                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-start sm:items-center text-amber-600">
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-xs sm:text-sm">
                          You can cancel recurring payments at any time.
                        </span>
                      </div>
                      <UIModal
                        open={modalOrderId === order?.orderId}
                        onOpenChange={(open) =>
                          handleModal(open ? order?.orderId : null)
                        }
                        modalBtnText="Cancel Subscription"
                        modalHeaderTitle="Cancel Order"
                        btnClassName="bg-main text-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl hover:cursor-pointer whitespace-nowrap"
                      >
                        <div className="space-y-4">
                          <UITypography
                            variant="p"
                            text="Are you sure you want to cancel your order?"
                            className="text-center"
                          />
                          <div className="flex justify-end gap-3">
                            <button
                              onClick={() => handleModal(null)}
                              className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
                            >
                              Keep Order
                            </button>
                            <button
                              onClick={() => {
                                handleCancelOrder(order?.orderId);
                                handleModal(null);
                              }}
                              className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                            >
                              Cancel Order
                            </button>
                          </div>
                        </div>
                      </UIModal>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {userOrders?.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No orders found</div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
