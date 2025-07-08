"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import aboutImg from "../../assets/Images/scroll1.png";
import AboutSectionCard from "./ProductsCards";
import logo from "../../assets/Images/logo.webp";
import UITypography from "@/components/UITypography/UITypography";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/store/actions/products";
import { apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

const aboutCards = [
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
  {
    img: aboutImg,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    btn: "Learn More",
  },
];

const AboutSection = () => {
  const dispatch = useDispatch();
  const productReducer = useSelector(
    (state) => state?.GetAllProductsReducer?.res
  );

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
    dispatch(getAllProducts({ page: 1 }));
  }, []);

  return (
    <section className="w-[70%] mx-auto py-8">
      <div className="flex flex-col items-center">
        <UITypography variant="h2" text="About Phoenix Sports" />
        <UITypography
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.`}
          className="text-center text-gray-500 mb-8 w-[60%]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {productReducer?.res?.data?.data.map((card, idx) => (
          <AboutSectionCard
            key={idx}
            image={aboutImg}
            logo={logo}
            description={card.desc}
            btnText={"Get it now"}
            title={card.title}
            handleAddToCart={() =>
              handleAddToCart(card.id, card.paymentType, card.price)
            }
          />
        ))}
        {/* <div className="flex flex-col gap-8">
        </div>
        <div className="flex flex-col gap-8 mt-24">
          {aboutCards.map((card, idx) => (
            <AboutSectionCard
              key={idx}
              image={card.img}
              logo={logo}
              description={card.desc}
              btnText={"Get it now"}
              title={card.title}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
