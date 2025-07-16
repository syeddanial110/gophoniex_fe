"use client";
import { apiGet } from "@/apis/ApiRequest";
import UIProductCard from "@/components/UIProductsCard";
import UITypography from "@/components/UITypography/UITypography";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { pathLocations, WEB_URL } from "@/utils/navigation";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CollectionById = () => {
  // Removed async
  const { slug } = useParams();
  const [subCategoryByCategory, setSubCategoryByCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      apiGet(
        `${ApiEndpoints.subCategory.base}${ApiEndpoints.subCategory.getByCategorySlug}/${slug}`,
        (res) => {
          if (res?.success) {
            console.log("res", res);
            setSubCategoryByCategory(res?.data);
          }
          setLoading(false);
        },
        (err) => {
          console.error("Error fetching products:", err);
          setLoading(false);
        }
      );
    };

    if (slug) {
      fetchProducts();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UITypography
        variant="h3"
        text={`Products in category: ${slug}`}
        className="text-center my-8"
      />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-20 py-14">
        {subCategoryByCategory?.length > 0 ? (
          subCategoryByCategory?.map((card, idx) => (
            <UIProductCard
              key={idx}
              title={card.name}
              mainImg={card.image == null ? "" : card.image}
              hoverImg={card.hoverImage}
              // description={card.description}
              slots={card.seats}
              href={`${WEB_URL}${pathLocations.subCategories}/${card.slug}`}
            />
          ))
        ) : (
          <div>
            <UITypography variant="h3" text="No Products Found" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionById;
