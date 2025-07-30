"use client";
import { apiGet } from "@/apis/ApiRequest";
import GalleryImages from "@/containers/ProgramDetail/GalleryImages";
import ProductDetail from "@/containers/ProgramDetail/ProductDetail";
import { productData } from "@/store/actions/products";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProgramById = () => {
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
    <div className="flex my-20 gap-5 justify-around">
      <div className="w-[40%]">
        <GalleryImages />
      </div>
      <div className="w-[50%]">
        <ProductDetail />
      </div>
    </div>
  );
};

export default ProgramById;
