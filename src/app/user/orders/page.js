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
      }
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
      }
    );
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  console.log("userOrders", userOrders);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <UITypography
          variant="h1"
          text="My Orders"
          className="text-3xl font-bold mb-8"
        />

        <div className="grid grid-cols-1 gap-6">
          {userOrders?.length > 0 &&
            userOrders?.map((order, ind) => (
              <div
                key={ind}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          order?.items?.length > 0 &&
                          order?.items[0]?.productName,
                      }}
                      className="mt-6 prose max-w-none [&>h1]:text-[46px] [&>h1]:font-bold [&>h2]:text-[38px] [&>h2]:font-semibold [&>h3]:text-[32px] [&>h3]:font-semibold [&>h4]:text-[28px] [&>h4]:font-semibold [&>h5]:text-[24px] [&>h5]:font-semibold [&>h6]:text-[22px] [&>h6]:font-semibold [&>p]-[20px] [&>p]:font-bold"
                    />

                    <div className="flex items-center gap-2 text-gray-500 mt-2">
                      <Baby className="w-4 h-4" />
                      <span>
                        <UITypography variant="p" text={order?.childName} />
                      </span>
                    </div>
                    {order?.items?.length > 0 &&
                      order?.items[0]?.children?.length > 0 &&
                      order?.items[0]?.children[0]?.options?.map((opt, idx) => {
                        return (
                          <div key={idx}>
                            <UITypography variant="p" text={opt?.optionTitle} />
                            <UITypography variant="p" text={`$${opt?.price}`} />
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
                      })}
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
                            className="!text-[18px]"
                          />
                          <UITypography
                            variant="p"
                            text={`The Payment will be charged ${
                              order?.items?.length > 0 &&
                              order?.items[0]?.payment?.intervalCount
                            } times`}
                            className="!text-[18px]"
                          />
                          <UITypography
                            variant="p"
                            text={`Last Payment Charged ${
                              order?.items?.length > 0 &&
                              formatDate(
                                order?.items[0]?.payment?.lastPaymentDate
                              )
                            }`}
                            className="!text-[18px]"
                          />
                          <UITypography
                            variant="p"
                            text={`Next Payment will be Charged ${
                              order?.items?.length > 0 &&
                              formatDate(
                                order?.items[0]?.payment?.nextPaymentDate
                              )
                            }`}
                            className="!text-[18px]"
                          />
                        </>
                      )}
                    <div className="flex items-center gap-2 text-gray-500 mt-1"></div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold text-gray-900">
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
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center text-amber-600">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm">
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
                      btnClassName="bg-main text-white px-7 py-2 rounded-2xl hover:cursor-pointer"
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
  );
};

export default Orders;
