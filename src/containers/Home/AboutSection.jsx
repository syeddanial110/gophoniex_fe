"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import aboutImg from "../../assets/Images/scroll1.png";
import AboutSectionCard from "./ProductsCards";
import logo from "../../assets/Images/logo.webp";
import UITypography from "@/components/UITypography/UITypography";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/store/actions/products";
import { apiGet, apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { useRouter } from "next/navigation";
import { pathLocations } from "@/utils/navigation";
import UISkeleton from "@/components/UISkeleton/UISkeleton";
import { getHomePageContent } from "@/store/actions/home";

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
  const router = useRouter();

  const homePageCarouselData = useSelector(
    (state) => state?.GetHomePageContentReducer?.res,
  );

  console.log("homePageCarouselData", homePageCarouselData);
  const [isLoading, setIsLoading] = useState(true);

  const [latestClasses, setLatestClasses] = useState([]);

  useEffect(() => {
    dispatch(getHomePageContent());
    setIsLoading(false);
  }, []);

  console.log("latestClasses", latestClasses);

  return (
    <section className="w-[80%] mx-auto py-8">
      <div className="flex flex-col items-center mb-4">
        <UITypography variant="h2" text={"Latest Classes"} />
      </div>
      {isLoading ? (
        <UISkeleton />
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {homePageCarouselData?.res?.data?.latestSellings?.length > 0 &&
            homePageCarouselData?.res?.data?.latestSellings?.map(
              (card, idx) => (
                <AboutSectionCard
                  key={idx}
                  image={card.image}
                  logo={logo}
                  description={card.shortDesc}
                  btnText={"View More"}
                  title={card.productName}
                  btnOnclick={() => {
                    router.push(`${pathLocations.program}/${card.id}`);
                  }}
                />
              ),
            )}
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
      )}
    </section>
  );
};

export default AboutSection;
