import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-main w-full min-h-[40vh] grid grid-cols-2 content-center px-12">
      <div>
        <UITypography
          variant="h3"
          text="Subscribe To Our Newsletter"
          className="text-white"
        />
        <UITypography
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
          className="text-white"
        />
      </div>
      <div className="flex items-center justify-center">
        <UIButton
          icon={false}
          type="contained"
          title="Get Subscribe Now"
          className="!bg-white !text-main"
        />
      </div>
    </div>
  );
};

export default CallToAction;
