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
"use client";
import { apiGet } from "@/apis/ApiRequest";
import UITypography from "@/components/UITypography/UITypography";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Content = () => {
  const { slug } = useParams();
  const [pageContent, setPageContent] = useState(null);

  const getContent = () => {
    apiGet(
      `${ApiEndpoints.menu.base}${ApiEndpoints.menu.getBySlug}/${slug}`,
      (res) => {
        console.log("res///", res);
        setPageContent(res.data);
      },
      (err) => {}
    );
  };

  console.log("pageContent", pageContent);

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
     {pageContent && (
        <Head>
          <title>{pageContent.metaTitle || pageContent.name}</title>
          <meta name="description" content={pageContent.metaDescription || ""} />
        </Head>
      )}
      {pageContent !== null && pageContent?.content !== null ? (
        <div className="p-20">
          <UITypography variant="h1" text={pageContent.name} className='uppercase' />
          <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
        </div>
      ) : (
        <UITypography variant="p" text="No Content Available Right Now" />
      )}
    </>
  );
};

export default Content;
