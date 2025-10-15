"use client"
import { apiGet } from "@/apis/ApiRequest";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import ImageCarousel from "@/components/UICarousel/ImageCarousel";
import { productData } from "@/store/actions/products";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GalleryImages = () => {
  const productDataReducer = useSelector((state) => state?.ProductDataReducer);

   const params = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductById = () => {
      setLoading(true);
      apiGet(
        `${ApiEndpoints.products.base}${ApiEndpoints.products.getById}/${params.slug}`,
        (res) => {
          if (res?.success) {
            dispatch(productData(res.data));
          }
          setLoading(false);
        },
        (err) => {
          console.error("Error fetching products:", err);
          setLoading(false);
        }
      );
    };

    if (params.slug) {
      fetchProductById();
    }
  }, [params.slug]);

  return (
    <div>
      <ProductCarousel productGalleryImages={productDataReducer?.res?.galleryImages} />
    </div>
  );
};

export default GalleryImages;
