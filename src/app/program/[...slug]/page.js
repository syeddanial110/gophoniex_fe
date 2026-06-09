import { BASEURL } from "@/apis/ApiRequest";
import GalleryImages from "@/containers/ProgramDetail/GalleryImages";
import ProductDetail from "@/containers/ProgramDetail/ProductDetail";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

async function getMetadata(slug) {
  try {
    const response = await fetch(
      `${BASEURL}${ApiEndpoints.products.base}${ApiEndpoints.products.getProductBySlug}/${slug}`,
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
  const { slug } = await params;
  const metadata = await getMetadata(slug);
  console.log("metadata", metadata);
  // safe extraction with fallbacks
  const data = metadata?.data || metadata || {};
  const item = data?.data || data?.product || data?.home || {};
  const title = data?.metaTitle || data?.metaTitle || data?.metaTitle || "Class";
  const description = data?.metaDescription || data?.metaDescription || data?.metaDescription || "";
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
    <>
      <Header />
      <div className="flex flex-col lg:flex-row my-8 lg:my-20 gap-6 lg:gap-5 px-4 sm:px-8 lg:px-0 lg:justify-around">
        <div className="w-full lg:w-[40%]">
          <GalleryImages />
        </div>
        <div className="w-full lg:w-[50%]">
          <ProductDetail />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProgramById;
