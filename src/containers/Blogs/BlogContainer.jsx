"use client";
import React, { useEffect, useState } from "react";
import UITypography from "@/components/UITypography/UITypography";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { apiGet } from "@/apis/ApiRequest";
import { useParams } from "next/navigation";

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogContainer() {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    if (!params?.slug) return;
    setLoading(true);
    apiGet(
      `${ApiEndpoints.blogs.base}${ApiEndpoints.blogs.get}/${params.slug}`,
      (res) => {
        console.log("res", res);
        const data = res?.data?.data || res?.data || res?.res || null;
        setBlogData(data);
        setLoading(false);
      },
      (err) => {
        console.error("Failed fetching blog", err);
        setLoading(false);
      }
    );
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <UITypography variant="h5" text="Loading..." />
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <UITypography variant="h5" text="Blog not found" />
      </div>
    );
  }

  const title =
    blogData.title || blogData.blogTitle || blogData.metaTitle || "Untitled";
  const image = blogData.featuredImage || blogData.feautredImage || "";
  const date = blogData.createdAt || blogData.publishedAt || blogData.updatedAt;
  const contentHtml =
    blogData.content || blogData.description || blogData.metaDescription || "";

  return (
    <>
      <div
        className="w-full h-[70vh] md:h-[100vh] bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage: image ? `url('${image}')` : undefined,
          // backgroundColor: image ? undefined : "#f3f4f6",
        }}
      >
        <div className="h-[70vh] md:h-[100vh] bg-black/40 w-full absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <UITypography
            variant="h1"
            text={title}
            className="text-white font-bold text-2xl md:text-4xl leading-tight max-w-4xl mx-auto"
          />
        </div>
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-6 text-sm text-gray-500">
          {date && <span className="mr-3">{formatDate(date)}</span>}
          {blogData.isActive !== undefined && (
            <span>{blogData.isActive ? "Active" : "Inactive"}</span>
          )}
        </div>

        {/* {blogData.metaTitle && (
          <UITypography
            variant="h3"
            text={blogData.metaTitle}
            className="mb-4 text-xl md:text-2xl font-semibold"
          />
        )}

        {blogData.metaDescription && (
          <p className="text-gray-600 mb-8">{blogData.metaDescription}</p>
        )} */}

        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </section>
    </>
  );
}
