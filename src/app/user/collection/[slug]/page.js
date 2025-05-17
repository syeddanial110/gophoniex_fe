import UITextField from "@/components/InputField/UITextField";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import AddProductQuantity from "@/containers/ProductDetail/AddProductQuantity";
import { dummyData } from "@/utils/dummyData";
import React from "react";

const CollectionById = async ({ params }) => {
  const { slug } = params; // Access the slug from params

  // Decode the URL-encoded slug
  const decodedSlug = decodeURIComponent(slug);

  // Fetch data based on the decoded slug
  const collection = dummyData.find(
    (item) => item.slug.toLowerCase() == decodedSlug.toLowerCase()
  );

  if (!collection) {
    console.log("Collection not found for slug:", decodedSlug);
    return <div>Collection not found</div>;
  }

  return (
    <div>
      <h1>Collection: {collection.name}</h1>
      <p>Description: {collection.description || "No description available"}</p>
      <ProductCarousel />

      <div className="grid grid-cols-4">
       <AddProductQuantity />
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const params = dummyData.map((collection) => ({
    slug: collection.slug,
  }));
  console.log("Generated static params:", params);
  return params;
}

export default CollectionById;
