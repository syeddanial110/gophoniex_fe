"use client";
import React, { useEffect, useState } from "react";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";
import { apiGet } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { getUserId } from "@/apis/Auth";

const Orders = () => {
  const [userOrders, setUserOrders] = useState([]);

  const userId = getUserId();

  const handleCancelOrder = (orderId) => {
    // Implement your cancellation logic here
    console.log("Cancelling order:", orderId);
  };

  const getAllOrders = () => {
    apiGet(
      `${ApiEndpoints.order.base}${ApiEndpoints.order.getAllOrders}/${userId}`,
      (res) => {
        console.log("res", res);
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

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <UITypography
          variant="h1"
          text="My Orders"
          className="text-3xl font-bold mb-8"
        />

        <div className="grid grid-cols-1 gap-6">
          {userOrders.map((order, ind) => (
            <div
              key={ind}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: order?.items[0]?.product?.productName,
                    }}
                  />

                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {/* {new Date(order?.startDate)?.toLocaleDateString()} -
                      {new Date(order?.endDate)?.toLocaleDateString()} */}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{order?.timing}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-bold text-gray-900">
                    ${order?.price.toLocaleString()}
                  </span>
                  <span
                    className={`mt-2 px-3 py-1 rounded-full text-sm ${
                      order?.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order?.status.charAt(0).toUpperCase() +
                      order?.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-700 mb-2">
                  Enrolled Children:
                </h4>
                <div className="flex gap-4">
                  {order?.children.map((child, idx) => (
                    <div key={idx} className="bg-gray-50 px-4 py-2 rounded-lg">
                      <div className="font-medium">{child?.name}</div>
                      <div className="text-sm text-gray-500">
                        Age: {child?.age}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {order?.status === "active" && (
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-amber-600">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">
                      Cancellation is available up to 24 hours before the start
                      date
                    </span>
                  </div>
                  <UIButton
                    type="outlined"
                    icon={false}
                    title="Cancel Order"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    btnOnclick={() => handleCancelOrder(order.id)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {userOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No orders found</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
