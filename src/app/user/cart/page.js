"use client";
import { apiDelete, apiGet } from "@/apis/ApiRequest";
import UITypography from "@/components/UITypography/UITypography";
import AddToCardCard from "@/containers/AddToCart/AddToCardCard";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import React, { useEffect } from "react";

const Cart = () => {
  const getCart = () => {
    apiGet(
      `${ApiEndpoints.addToCart.base}${ApiEndpoints.addToCart.get}`,
      (res) => {
        console.log("res", res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };
  useEffect(() => {
    getCart();
  }, []);

  const handleDeleteCartItem = (id) => {
    alert("delete");
    // apiDelete(
    //   `${ApiEndpoints.addToCart.base}${ApiEndpoints.addToCart.delete}/${id}`,
    //   (res) => {
    //     console.log("res", res);
    //   },
    //   (err) => {
    //     console.log("err", err);
    //   }
    // );
  };
  return (
    <div className="p-container my-20 flex flex-col gap-8">
      <div>
        <UITypography variant="h1" text="Your Cart" />
        <div className="border-1 border-gray-300"></div>
      </div>
      <div className="border-1 border-gray-300 rounded-full px-20 py-10">
        <AddToCardCard handleDeleteCartItem={handleDeleteCartItem} />
      </div>
    </div>
  );
};

export default Cart;
