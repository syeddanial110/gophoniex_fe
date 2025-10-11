import BlogContainer from "@/containers/Blogs/BlogContainer";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

export default async function Page({ params }) {
  const res = await fetch(
    `${ApiEndpoints.blogs.base}${ApiEndpoints.blogs.get}/${params.slug}`,
    { cache: "no-store" }
  );
  const json = await res.json();
  const blogData = json?.data?.data || json?.data || json || null;

  return (
    <main>
      {/* Hero / featured image */}
      <BlogContainer blogData={blogData} />
    </main>
  );
}

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${ApiEndpoints.blogs.base}${ApiEndpoints.blogs.get}/${params.slug}`,
    { cache: "no-store" }
  );
  const json = await res.json();
  const data = json?.data?.data || json?.data || json || {};
  const title = data?.metaTitle || "Blog";
  const description =
    data?.metaDesc || "";
  return {
    title,
    description,
    // openGraph: {
    //   title,
    //   description,
    // //   images: data?.featuredImage ? [data.featuredImage] : undefined,
    // },
  };
}
