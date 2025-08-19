// import { BASEURL } from "@/apis/ApiRequest";
// import { ApiEndpoints } from "@/utils/ApiEndpoints";
// import React from "react";
// import { cookies } from "next/headers";

// async function getContent(slug) {
//   const cookieStore = cookies();
//   const token = cookieStore.get("userToken")?.value;
//   console.log('token', token)
//   // Replace with your actual API endpoint
//   const res = await fetch(
//     `${BASEURL}${ApiEndpoints.menu.base}${ApiEndpoints.menu.getBySlug}/${slug}`,
//     {
//       cache: "no-store",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   console.log("res content////////", res);
//   if (!res.ok) return null;
//   return res.json();
// }

// const Content = async ({ params }) => {
//   const { slug } = params;
//   console.log("slug", slug);
//   const data = await getContent(slug);

//   if (!data) {
//     return <div>Content not found</div>;
//   }

//   return (
//     <div className="prose max-w-none mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
//       <div dangerouslySetInnerHTML={{ __html: data.content }} />
//     </div>
//   );
// };

// export default Content;
// "use client"
import { BASEURL } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import UITypography from "@/components/UITypography/UITypography";
import { cookies } from "next/headers";
import { Metadata } from "next";
import { getToken } from "@/apis/Auth";

// Metadata generation function
export async function generateMetadata({ params: { slug } }) {
  console.log("slug", slug);
  const data = await getContent(slug);
  console.log("data", data);

  return {
    title: data?.data?.metaTitle || data?.data?.name || "Content Page",
    description: data?.data?.metaDescription || "",
    openGraph: {
      title: data?.data?.metaTitle || data?.data?.name || "Content Page",
      description: data?.data?.metaDescription || "",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data?.data?.metaTitle || data?.data?.name || "Content Page",
      description: data?.data?.metaDescription || "",
    },
  };
}

async function getContent(slug) {
  const token = getToken();

  try {
    const res = await fetch(
      `${BASEURL}${ApiEndpoints.menu.base}${ApiEndpoints.menu.getBySlug}/${slug}`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaXNBZG1pbiI6MCwiaWF0IjoxNzU1NjQwODQwLCJleHAiOjE3NTU3MjcyNDB9.nPA_IP2NeMgH8Qoq5ZKs5c8P_r_hDW7Y5hew_UXBeFI`,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}

// Loading state
export const loading = () => {
  return (
    <div className="p-20">
      <UITypography variant="p" text="Loading content..." />
    </div>
  );
};

// Error state
export const error = () => {
  return (
    <div className="p-20">
      <UITypography
        variant="p"
        text="There was an error loading the content. Please try again later."
      />
    </div>
  );
};

const Content = async ({ params }) => {
  const pageContent = await getContent(params.slug);

  if (!pageContent) {
    return (
      <div className="p-20">
        <UITypography variant="p" text="No Content Available Right Now" />
      </div>
    );
  }

  return (
    <article className="p-20">
      <header className="mb-8">
        <UITypography
          variant="h1"
          text={pageContent.name}
          className="uppercase text-3xl font-bold mb-4"
        />
        {pageContent.metaDescription && (
          <UITypography
            variant="p"
            text={pageContent.metaDescription}
            className="text-gray-600"
          />
        )}
      </header>
      {pageContent?.content !== null && (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: pageContent?.content }}
        />
      )}
    </article>
  );
};

export default Content;
