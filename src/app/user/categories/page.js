"use client";
import React, { useEffect, useState } from "react";
import categoriesBanner from "../../../assets/Images/categories-banner.jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/store/actions/category";
import UIProgramCard from "@/components/UIProgramCard";
import { useRouter } from "next/navigation";
import { pathLocations, WEB_URL } from "@/utils/navigation";
import UITypography from "@/components/UITypography/UITypography";
import UISkeleton from "@/components/UISkeleton/UISkeleton";
import UISpinner from "@/components/UISpinner/UISpinner";

const Categories = () => {
  const categoriesReducer = useSelector(
    (state) => state?.GetAllCategoriesReducer?.res
  );
  const router = useRouter();
  const dispatch = useDispatch();
  console.log("categoriesReducer", categoriesReducer);

  const handleAddToCart = (id, paymentType, price) => {
    const dataObj = {
      productId: id,
      paymentType: paymentType,
      price: price,
    };
    // apiPost(
    //   `${ApiEndpoints.addToCart.base}${ApiEndpoints.addToCart.create}`,
    //   dataObj,
    //   (res) => {
    //     console.log("res", res);
    //   },
    //   (err) => {
    //     console.log("err", err);
    //   }
    // );
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <>
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <Image
          src={categoriesBanner}
          alt="Categories Banner"
          fill
          className="object-cover brightness-50"
          priority
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold z-10">Programs</h1>
        </div>
      </div>

      <h2 className="text-black text-4xl text-center font-[500] mt-10">
        Explore Our Collections
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-20 py-14">
        {categoriesReducer?.res?.data.length > 0 ? (
          categoriesReducer?.res?.data?.map((card, idx) => (
            <UIProgramCard
              text={card.name}
              card_img={card.image}
              // card_img={`${ImageBaseUrl}${card.image}`}
              btnText="View Classes"
              href={`${WEB_URL}${pathLocations.categories}/${card.slug}`}
            />
          ))
        ) : (
          <div>
            <UITypography variant="h3" text="No Categories Found" />
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
