"use client";
import { apiGet } from "@/apis/ApiRequest";
import { getToken } from "@/apis/Auth";
import UICheckbox from "@/components/UICheckbox/UICheckbox";
import UIProductCard from "@/components/UIProductsCard";
import UISpinner from "@/components/UISpinner/UISpinner";
import UITypography from "@/components/UITypography/UITypography";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { pathLocations, WEB_URL } from "@/utils/navigation";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CollectionById = () => {
  // Removed async
  const { slug } = useParams();
  const [productByCategory, setProductByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoriesData = useSelector(
    (state) => state?.GetAllCategoriesReducer?.res
  );

  const handleFilterClasses = (item) => {
    setSelectedCategories((prev) => {
      const newSelected = prev.includes(item.id)
        ? prev.filter((id) => id !== item.id) // Remove if already selected
        : [...prev, item.id]; // Add if not selected

      // Make API call with updated selections
      fetchFilteredProducts(newSelected);
      return newSelected;
    });
  };

  const fetchFilteredProducts = (selectedIds) => {
    const ids = selectedIds.length > 0 ? selectedIds.join(",") : "";

    console.log("ids", ids);

    apiGet(
      `${ApiEndpoints.products.base}${ApiEndpoints.products.getProductByCategory}?ids=${ids}`,
      (res) => {
        if (res?.success) {
          console.log("res", res);
          setProductByCategory(res?.products);
        }
        setFilterLoading(false);
      },
      (err) => {
        console.error("Error fetching filtered products:", err);
        setFilterLoading(false);
      }
    );
  };

  const fetchProducts = () => {
    setLoading(true);
    apiGet(
      `${ApiEndpoints.products.base}${ApiEndpoints.products.getProductByQuery}?categorySlug=${slug}&page=1`,
      (res) => {
        if (res?.success) {
          setProductByCategory(res?.data?.data);
        }
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    if (slug) {
      fetchProducts();
    }
  }, [slug]);

  useEffect(() => {
    if (categoriesData && categoriesData?.res?.data.length > 0) {
      const allCategories = categoriesData.res.data;
      setCollections(allCategories);

      // Match slug to category
      const matched = allCategories.find((cat) => cat.slug === slug);
      if (matched) {
        setSelectedCategories([matched.id]);
        fetchFilteredProducts([matched.id]);
      }
    }
  }, [categoriesData, slug]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  console.log("productByCategory", productByCategory);
  console.log("categoriesData", categoriesData);
  console.log("collections", collections);

  return (
    <div>
      <UITypography
        variant="h3"
        text={`Classes in ${slug}`}
        className="text-center my-8 capitalize"
      />

      <div className="flex gap-4 px-10">
        <div className="w-[25%]">
          <UITypography variant="h4" text={`Filter Collections`} />
          <div>
            {filterLoading ? (
              <div className="flex justify-center items-center h-64">
                <UISpinner />
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {collections?.map((item, idx) => (
                  <UICheckbox
                    key={idx}
                    label={item.name}
                    onChange={() => handleFilterClasses(item)}
                    checkboxId={`${item.id}`}
                    labelId={`${item.id}`}
                    checked={selectedCategories.includes(item.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64 w-full">
            <UISpinner />
          </div>
        ) : (
          <div className="w-[75%]">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-20 py-14">
              {productByCategory?.length > 0 ? (
                productByCategory?.map((card, idx) => (
                  <UIProductCard
                    key={idx}
                    title={card.cardName}
                    mainImg={card.image == null ? "" : card.image}
                    // hoverImg={card.hoverImage}
                    // description={card.description}
                    slots={card.seats}
                    href={`${WEB_URL}${pathLocations.program}/${card.id}`}
                  />
                ))
              ) : (
                <div>
                  <UITypography variant="h3" text="No Products Found" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionById;
