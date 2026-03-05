import TypeSection from "@/components/TypeSection/TypeSection";
import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const AllWeOffer = () => {
  return (
    <div>
        <div className="px-20 py-14">
            <UITypography variant='h1' text='ALL WE OFFER' />
            <hr />
        </div>
      <TypeSection />
    </div>
  );
};

export default AllWeOffer;
