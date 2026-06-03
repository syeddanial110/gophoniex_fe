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
import { apiGet, ImageBaseUrl } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();

  const [topSellingData, setTopSellingData] = React.useState([]);

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

  useEffect(() => {
    apiGet(
      `${ApiEndpoints.homePageContent.get}`,
      (res) => {
        const data = res?.data?.topSelling;
        if (data?.length > 0) {
          setTopSellingData(data);
        }
      },
      (err) => {
        console.log("err", err);
      },
    );
  }, []);

  return (
    <>
      <Header />
      <div>
      {/* Header Section */}
      <div className="px-4 sm:px-8 lg:px-20 py-10 lg:py-14">
        <UITypography variant="h1" text="ALL WE OFFER" />
        <hr />
      </div>

         {/* Comparison Section */}
      <TypeSection />

      {/* Top Selling Sections */}
      {topSellingData?.length > 0 && topSellingData?.map((section, sIdx) => (
        <div key={sIdx} className="px-4 sm:px-8 lg:px-20 py-10 lg:py-14">
          {section.section1Heading && (
            <div
              dangerouslySetInnerHTML={{ __html: section.section1Heading }}
              className="mb-8"
            />
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {section.topSelling?.map((item, iIdx) =>
              item.type === "collection" ? (
                <UIProgramCard
                  key={iIdx}
                  text={item.name}
                  card_img={`${ImageBaseUrl}${item.image}`}
                  btnText="View Classes"
                  href={`${WEB_URL}${pathLocations.categories}/${item.slug}`}
                />
              ) : item.type === "class" ? (
                <UIProductCard
                  key={iIdx}
                  title={item.cardName}
                  mainImg={`${ImageBaseUrl}${item.image}`}
                  href={`${WEB_URL}${pathLocations.categories}/program/${item.id}`}
                />
              ) : null
            )}
          </div>
        </div>
      ))}

      {/* Categories Section */}
      {/* <div className="px-4 sm:px-8 lg:px-20 py-10 lg:py-14">
        <UITypography variant="h2" text="Our Programs" className="mb-8" />
        {isLoadingCategories ? (
          <div className="flex justify-center items-center h-64">
            <UISpinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      </div> */}

      {/* Products Section */}
      {/* <div className="px-4 sm:px-8 lg:px-20 py-10 lg:py-14 bg-gray-50">
        <UITypography variant="h2" text="All Classes" className="mb-8" />
        {isLoadingProducts ? (
          <div className="flex justify-center items-center h-64">
            <UISpinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {productsReducer?.res?.data?.data &&
            productsReducer?.res.data?.data?.length > 0 ? (
              productsReducer?.res?.data?.data?.map((card, idx) => (
                <UIProductCard
                  key={idx}
                  title={card?.cardName}
                  mainImg={card?.image == null ? "" : `${ImageBaseUrl}${card?.image}`}
                  href={`${WEB_URL}${pathLocations.program}/${card?.id}`}
                />
              ))
            ) : (
              <UITypography variant="h3" text="No Products Found" />
            )}
          </div>
        )}
      </div> */}


    </div>
      <Footer />
    </>
  );
};

export default Home;
