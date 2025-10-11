"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import UITypography from "@/components/UITypography/UITypography";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination"; // shadcn pagination component
import Image from "next/image";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // pagination
  const PER_PAGE = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    apiGet(
      `${ApiEndpoints.blogs.base}${ApiEndpoints.blogs.get}`,
      (res) => {
        console.log("res", res);
        // expecting array in res?.data or res?.res - adapt if backend differs
        setBlogs(res?.data?.data);
        setLoading(false);
      },
      (err) => {
        console.error("Failed fetching blogs", err);
        setLoading(false);
      }
    );
  }, []);

  const total = blogs.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const startIdx = (page - 1) * PER_PAGE;
  const visibleBlogs = blogs.slice(startIdx, startIdx + PER_PAGE);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <UITypography variant="h1" text="BLOGS" className="uppercase" />
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleBlogs.map((blog, idx) => {
              const image = blog?.featuredImage || blog?.featuredImage;
              const title = blog?.title || blog?.heading || "Untitled";
              const date = blog?.publishedAt || blog?.date || "";
              const excerpt =
                blog?.excerpt ||
                blog?.description ||
                (typeof blog?.content === "string"
                  ? blog.content.replace(/<[^>]+>/g, "").slice(0, 220)
                  : "");

              return (
                <article
                  key={blog.id || `${idx}-${title}`}
                  className="bg-white rounded-md shadow-sm overflow-hidden"
                >
                  <Link href={`/user/blogs/${blog.slug || blog.id || ""}`}>
                    <div className="block">
                      <div className="h-44 w-full overflow-hidden">
                        <Image
                          src={image}
                          alt={title}
                          className="w-full h-full object-cover"
                          width={400}
                          height={600}
                        />
                      </div>
                      <div className="p-6">
                        <UITypography
                          variant="h3"
                          text={title}
                          className="mb-2 text-lg font-semibold text-slate-800"
                        />
                        <div className="text-sm text-slate-400 mb-4">
                          {date && (
                            <span className="mr-3">
                              {new Date(date).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          )}
                          <span>/// No Comments</span>
                        </div>

                        <p className="text-slate-600 mb-4">{excerpt}</p>

                        <div className="flex items-center">
                          <Button
                            variant="link"
                            className="text-emerald-600 p-0"
                            asChild
                          >
                            <Link
                              href={`/user/blogs/${blog.slug || blog.id || ""}`}
                            >
                              Read More »
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          {/* pagination */}
          <div className="mt-10 flex items-center justify-center">
            {/* using shadcn Pagination component - adjust props if your implementation differs */}
            <Pagination
              total={total}
              page={page}
              perPage={PER_PAGE}
              onPageChange={(p) => setPage(p)}
              className="inline-flex"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BlogsPage;
