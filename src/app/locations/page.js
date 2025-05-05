import UITypography from "@/components/UITypography/UITypography";
import React from "react";

const Locations = () => {
  return (
    <div className="p-container flex justify-center my-20">
      <div className="w-[80%] md:w-[50%] grid  gap-3">
        <UITypography variant="h3" text="Locations" />
        <UITypography text="You can find Phoenix Sports youth sports camps at the following locations:" />
        <div className="flex gap-2">
          <UITypography text="Holiday Park, Carlsbad " className="tex-main" />
          <UITypography text=" (click to view sports)" />
        </div>
        <UITypography text="1055 Chestnut Ave, Carlsbad, CA 92008" />
        <div className="flex gap-2">
          <UITypography
            text="Laguna Riviera Park, Carlsbad"
            className="tex-main"
          />
          <UITypography text="(click to view sports)" />
        </div>
        <UITypography text="Kelly Dr, Carlsbad, CA 92008" />
        <div className="flex gap-2">
          <UITypography
            text="Encinitas Community Park, Encinitas"
            className="tex-main"
          />
          <UITypography text="(click to view sports)" />
        </div>
        <UITypography text="425 Santa Fe Dr, Encinitas, CA 92024" />
      </div>
    </div>
  );
};

export default Locations;
