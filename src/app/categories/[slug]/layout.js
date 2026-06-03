import { BASEURL } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

async function getCategoryMetadata(slug) {
  try {
    const response = await fetch(
      `${BASEURL}${ApiEndpoints.categories.base}${ApiEndpoints.categories.getBySlug}${slug}`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) throw new Error("Failed to fetch metadata");
    return response.json();
  } catch (error) {
    console.error("Error fetching category metadata:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = await getCategoryMetadata(slug);
  const item = metadata?.data || {};
  const title = item[0]?.metaTitle || item[0]?.metaTitle || slug;
  const description = item[0]?.metaDescription || item[0]?.metaDescription || "";
  return { title, description };
}

export default function CategorySlugLayout({ children }) {
  return children;
}
