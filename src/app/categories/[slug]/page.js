"use client";
import { apiGet, ImageBaseUrl } from "@/apis/ApiRequest";
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
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

const CollectionById = () => {
  // Removed async
  const { slug } = useParams();
  const [productByCategory, setProductByCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  const categoriesData = useSelector(
    (state) => state?.GetAllCategoriesReducer?.res,
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
          setCategoryName(res?.categories[0]?.name);
        }
        setFilterLoading(false);
      },
      (err) => {
        console.error("Error fetching filtered products:", err);
        setFilterLoading(false);
      },
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
      },
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
    <>
      <Header />
      <div className="mb-12">
        <UITypography
          variant="h5"
          text={`Classes in ${categoryName}`}
          className="text-center mt-6 mb-2 capitalize px-2 sm:px-0"
        />
        <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-6 px-4 sm:px-0">
          <a
            href={WEB_URL}
            className="hover:text-black transition-colors whitespace-nowrap"
          >
            Home
          </a>
          <span>/</span>
          <a
            href={pathLocations.categories}
            className="hover:text-black transition-colors whitespace-nowrap"
          >
            Programs
          </a>
          <span>/</span>
          <span className="text-black capitalize truncate max-w-[140px] sm:max-w-xs">
            {categoryName}
          </span>
        </nav>

        <div className="px-4 sm:px-8 lg:px-10">
          {/* Filter Dropdown */}
          <div className="mb-6">
            <Popover open={openFilter} onOpenChange={setOpenFilter}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  Filter Programs ({selectedCategories.length})
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <UITypography
                    variant="h4"
                    text="Filter Programs"
                    className="mb-4"
                  />
                  {filterLoading ? (
                    <div className="flex justify-center items-center h-32">
                      <UISpinner />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
                      {collections?.map((item, idx) => (
                        <UICheckbox
                          key={idx}
                          label={item.name}
                          onChange={() => handleFilterClasses(item)}
                          checkboxId={`filter-${item.id}`}
                          labelId={`filter-label-${item.id}`}
                          checked={selectedCategories.includes(item.id)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64 w-full">
              <UISpinner />
            </div>
          ) : (
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-4">
                {productByCategory?.length > 0 ? (
                  productByCategory?.map((card, idx) => (
                    <UIProductCard
                      key={idx}
                      title={card?.cardName}
                      mainImg={
                        card?.image == null
                          ? ""
                          : `${ImageBaseUrl}${card.image}`
                      }
                      // hoverImg={card.hoverImage}
                      // description={card.description}
                      slots={`${card?.seats}`}
                      seatsOpen={`Available Slots: ${card?.seatsOpen}`}
                      href={`${WEB_URL}${pathLocations.program}/${card.slug}`}
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
      <Footer />
    </>
  );
};

export default CollectionById;
