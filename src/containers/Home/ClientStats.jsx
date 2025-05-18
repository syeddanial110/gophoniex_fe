import UITypography from "@/components/UITypography/UITypography";
import React from "react";

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
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-4">
        <UITypography variant="h2" text="Lorem Ipsum is simply" />
        <UITypography
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          className="w-[50%]"
        />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <UITypography
                variant="h4"
                text={stat.value}
                className="!font-[700] !text-[40px]"
              />
              <UITypography text={stat.label} className="mb-3" />
              <UITypography text={stat.desc} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientStats;
