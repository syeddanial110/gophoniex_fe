import { BASEURL } from "@/apis/ApiRequest";
import BlogContainer from "@/containers/Blogs/BlogContainer";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

const Page = () => {
  return (
    <main>
      <BlogContainer />
    </main>
  );
};

async function getMetadata(slug) {
  try {
    const response = await fetch(
      `${BASEURL}${ApiEndpoints.blogs.base}${ApiEndpoints.blogs.get}/${slug}`,
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

// export async function generateMetadata(props) {
//   const { params } = await props; // ✅ await props
//   const slug = params?.slug;
//   const res = await fetch(
//     `${ApiEndpoints.blogs.base}${ApiEndpoints.blogs.get}/${slug}`,
//     { cache: "no-store" }
//   );
//   const json = await res.json();
//   const data = json?.data?.data || json?.data || json || {};
//   const title = data?.metaTitle || "Blog";
//   const description = data?.metaDesc || "";
//   return {
//     title,
//     description,
//     // openGraph: {
//     //   title,
//     //   description,
//     // //   images: data?.featuredImage ? [data.featuredImage] : undefined,
//     // },
//   };
// }


export default Page