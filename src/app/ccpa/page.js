import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const CCPA = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid gap-3">
        <div className="flex flex-col gap-3">
          <UITypography
            variant="h3"
            text="Do not sell my personal information"
          />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography
            variant="h5"
            text="Your rights under the California Consumer Privacy Act"
          />
          <UITypography text="The California Consumer Privacy Act (CCPA) provides you with rights regarding how your data or personal information is treated. Under the legislation, California residents can choose to opt out of the 'sale' of their personal information to third parties. Based on the CCPA definition, 'sale' refers to data collection for the purpose of creating advertising and other communications. Learn more about CCPA and your privacy rights." />
          <hr style={{ marginTop: "30px" }} />
        </div>

        <div className="flex flex-col gap-3">
          <UITypography variant="h5" text="How to opt out" />
          <UITypography text="By clicking on the link below, we will no longer collect or sell your personal information. This applies to both third-parties and the data we collect to help personalize your experience on our website or through other communications. For more information, view our privacy policy." />

          <button
            className="mt-4 px-6 py-2 bg-main text-white rounded hover:bg-blue-700 transition-colors w-fit"
          >
            Do Not Sell My Personal Information
          </button>

          <UITypography
            text="To be eligible to opt-out, you must be browsing from California."
            className="text-sm italic mt-2"
          />
          <hr style={{ marginTop: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default CCPA;
