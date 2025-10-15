import { BASEURL } from "@/apis/ApiRequest";
import GalleryImages from "@/containers/ProgramDetail/GalleryImages";
import ProductDetail from "@/containers/ProgramDetail/ProductDetail";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

async function getMetadata(slug) {
  try {
    const response = await fetch(
      `${BASEURL}${ApiEndpoints.products.base}${ApiEndpoints.products.getById}/${slug}`,
      {
        // Add cache options if needed
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch metadata");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching metadata:", error);
    // Return default metadata as fallback
    return {
      title: "Default Home Title",
      description: "Default home description",
    };
  }
}

// Generate metadata
export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const metadata = await getMetadata(slug);
  console.log("metadata", metadata);
  // safe extraction with fallbacks
  const data = metadata?.data || metadata || {};
  const item = data?.data || data?.product || data?.home || {};
  const title = item?.metaTitle || item?.title || item?.productName || "Program";
  const description = item?.metaDescription || item?.metaDesc || item?.shortDesc || "";
  return {
    title,
    description,
    // You can add more meta tags here
    // openGraph: {
    //   title: metadata.title,
    //   description: metadata.description,
    //   // Add other OG tags as needed
    // },
    // twitter: {
    //   title: metadata.title,
    //   description: metadata.description,
    //   // Add other Twitter card tags as needed
    // },
  };
}

const ProgramById = () => {
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
