import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import ImageCarousel from "@/components/UICarousel/ImageCarousel";
import React from "react";
import { useSelector } from "react-redux";

const GalleryImages = () => {
  const productDataReducer = useSelector((state) => state?.ProductDataReducer);
  return (
    <div>
      <ProductCarousel productGalleryImages={productDataReducer?.res?.data?.galleryImages} />
    </div>
  );
};

export default GalleryImages;
