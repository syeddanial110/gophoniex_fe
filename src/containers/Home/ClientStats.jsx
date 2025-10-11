"use client";
import { apiGet } from "@/apis/ApiRequest";
import UITypography from "@/components/UITypography/UITypography";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import React, { useEffect, useState } from "react";

const ClientStats = () => {
  const stats = [
    {
      value: (
        <>
          100<span className="text-main">K+</span>
        </>
      ),
      label: "Lorem Ipsum",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      value: (
        <>
          1280<span className="text-main">+</span>
        </>
      ),
      label: "Lorem Ipsum",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      value: (
        <>
          92<span className="text-main">%</span>
        </>
      ),
      label: "Lorem Ipsum",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  const [meta, setMeta] = useState({
    metaTitle: "",
    metaDescription: "",
  });
  const [statsData, setStatsData] = useState({
    statsMainHeading: "",
    statsMainDescription: "",
    stats: [],
  });

  useEffect(() => {
    apiGet(
      `${ApiEndpoints.homePageContent.get}`,
      (res) => {
        console.log("res", res);
        setStatsData({
          statsMainHeading: res?.data?.home?.statsMainHeading,
          statsMainDescription: res?.data?.home?.statsMainDescription,
          stats: res?.data?.home?.stats,
        });
      },
      (err) => {
        console.log("err", err);
      }
    );
  }, []);

  console.log("statsData", statsData);
  console.log("meta", meta);

  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-4">
        <UITypography variant="h2" text={statsData.statsMainHeading} />
        <UITypography
          text={statsData.statsMainDescription}
          className="w-[50%]"
        />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {statsData?.stats?.length > 0 &&
            statsData?.stats.map((stat, idx) => (
              <div key={idx}>
                <UITypography
                  variant="h4"
                  text={stat.heading}
                  className="!font-[700] !text-[40px]"
                />
                <UITypography text={stat.subHeading} className="mb-3" />
                <UITypography text={stat.description} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ClientStats;
