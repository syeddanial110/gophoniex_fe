// import BannerCarousel from "@/components/UICarousel/BannerCarousel";
// import ClientStats from "@/containers/Home/ClientStats";
// import AboutSection from "@/containers/Home/AboutSection";
// import SectionAnimation from "@/containers/Home/SectionAnimation";
// import CallToAction from "@/containers/Home/CallToAction";
// import VideoSection from "@/containers/Home/VideoSection";
// import Footer from "@/containers/Footer/Footer";
// import { ApiEndpoints } from "@/utils/ApiEndpoints";
// import { BASEURL } from "@/apis/ApiRequest";
// import Header from "@/containers/Header/Header";
// import NewsLetterModal from "@/containers/Home/NewsLetterModal";
// import MasonaryCardsLayout from "@/containers/Home/MasonaryCardsLayout";
// import TopCollectionCarousel from "@/containers/Home/TopCollectionCarousel";

// // Fetch metadata from API
// async function getMetadata() {
//   try {
//     const response = await fetch(
//       `${BASEURL}${ApiEndpoints.homePageContent.get}`,
//       {
//         // Add cache options if needed
//         next: { revalidate: 3600 }, // Revalidate every hour
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch metadata");
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Error fetching metadata:", error);
//     // Return default metadata as fallback
//     return {
//       title: "Default Home Title",
//       description: "Default home description",
//     };
//   }
// }

// // Generate metadata
// export async function generateMetadata() {
//   const metadata = await getMetadata();
//   console.log("metadata", metadata);
//   return {
//     title: metadata?.data?.metaTitle,
//     description: metadata?.data?.metaDescription,
//     // You can add more meta tags here
//     // openGraph: {
//     //   title: metadata.title,
//     //   description: metadata.description,
//     //   // Add other OG tags as needed
//     // },
//     // twitter: {
//     //   title: metadata.title,
//     //   description: metadata.description,
//     //   // Add other Twitter card tags as needed
//     // },
//   };
// }

// export default function Home() {
//   return (
//     <>
//     <Header />
//       <div className="flex flex-col items-center h3 pt-5 gap-2">
//         <NewsLetterModal />
//         {/* <MasonaryCardsLayout /> */}
//         <TopCollectionCarousel />
//         {/* <BannerCarousel />
//         <ClientStats />*/}
//         <AboutSection />
//         {/* <SectionAnimation /> */}
//         <CallToAction />
//         <VideoSection />
//       </div>
//       <Footer />
//     </>
//   );
// }

"use client";
import TypeSection from "@/components/TypeSection/TypeSection";
import UITypography from "@/components/UITypography/UITypography";
import UIProgramCard from "@/components/UIProgramCard";
import UIProductCard from "@/components/UIProductsCard";
import UISpinner from "@/components/UISpinner/UISpinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/store/actions/category";
import { getAllProducts } from "@/store/actions/products";
import { pathLocations, WEB_URL } from "@/utils/navigation";
import { ImageBaseUrl } from "@/apis/ApiRequest";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();

  // Get categories from Redux store
  const categoriesReducer = useSelector(
    (state) => state?.GetAllCategoriesReducer?.res,
  );

  // Get products from Redux store
  const productsReducer = useSelector(
    (state) => state?.GetAllProductsReducer?.res,
  );

  const isLoadingCategories = useSelector(
    (state) => state?.GetAllCategoriesReducer?.type === "loading",
  );

  const isLoadingProducts = useSelector(
    (state) => state?.GetAllProductsReducer?.type === "loading",
  );

  // Fetch categories and products on component mount
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div>
        {/* Header Section */}
        <div className="px-4 sm:px-8 lg:px-20 py-8 lg:py-14">
          <UITypography
            variant="h1"
            text="Welcome to Phoenix Sports"
            className="text-center md:text-left"
          />
          <hr />
        </div>

        {/* Comparison Section */}
        <TypeSection />

        {/* Categories Section */}
        <div className="px-4 sm:px-8 lg:px-20 py-8 lg:py-14">
          <UITypography
            variant="h2"
            text="Our Programs"
            className="mb-6 lg:mb-8"
          />
          {isLoadingCategories ? (
            <div className="flex justify-center items-center h-64">
              <UISpinner />
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {categoriesReducer?.res?.data &&
              categoriesReducer?.res?.data?.length > 0 ? (
                categoriesReducer?.res?.data?.map((card, idx) => (
                  <UIProgramCard
                    key={idx}
                    text={card.name}
                    card_img={`${ImageBaseUrl}${card.image}`}
                    btnText="View Classes"
                    href={`${WEB_URL}${pathLocations.categories}/${card.slug}`}
                  />
                ))
              ) : (
                <UITypography variant="h3" text="No Categories Found" />
              )}
            </div>
          )}
        </div>

        {/* Products Section */}
        <div className="px-4 sm:px-8 lg:px-20 py-8 lg:py-14 bg-gray-50">
          <UITypography
            variant="h2"
            text="All Classes"
            className="mb-6 lg:mb-8"
          />
          {isLoadingProducts ? (
            <div className="flex justify-center items-center h-64">
              <UISpinner />
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {productsReducer?.res?.data?.data &&
              productsReducer?.res.data?.data?.length > 0 ? (
                productsReducer?.res?.data?.data?.map((card, idx) => (
                  <UIProductCard
                    key={idx}
                    title={card?.cardName}
                    mainImg={
                      card?.image == null ? "" : `${ImageBaseUrl}${card?.image}`
                    }
                    href={`${WEB_URL}${pathLocations.program}/${card?.id}`}
                  />
                ))
              ) : (
                <UITypography variant="h3" text="No Products Found" />
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
