import UIButton from "@/components/UIButton/UIButton";
import React, { useEffect, useState } from "react";
import AddChildFormContainer from "../Child/AddChildFormContainer";
import UISelect from "@/components/InputField/UISelect";
import { useDispatch, useSelector } from "react-redux";
import { getAllChildren } from "@/store/actions/children";
import { SelectItem } from "@/components/ui/select";
import { productData } from "@/store/actions/products";
import { get } from "react-hook-form";
import { getToken } from "@/apis/Auth";
import UITypography from "@/components/UITypography/UITypography";
import Link from "next/link";
import { pathLocations } from "@/utils/navigation";

const AddOrSelectChild = ({
  handleModalOpen,
  selectedIndex,
  setChildDetail,
  setProductOptionSelected,
  value,
}) => {
  const dispatch = useDispatch();

  const allChildrenReducer = useSelector(
    (state) => state?.GetAllChildrenReducer
  );

  const [isAddChild, setIsAddChild] = useState(false);

  const handleChangeAddChild = () => {
    setIsAddChild(!isAddChild);
  };

  const handleChangeChild = (value) => {
    const selectedChild = allChildrenReducer?.res?.data?.find(
      (child) => child.id === value
    );

    // Update the correct index in childDetail
    setProductOptionSelected((prev) => {
      const updated = [...prev];
      updated[selectedIndex] = {
        ...updated[selectedIndex],
        childId: selectedChild?.id || "",
        childName: selectedChild?.name || "",
        // productOptionName: updated[selectedIndex].productOptionName,
        price: updated[selectedIndex].price,
        paymentType: updated[selectedIndex].paymentType,
        intervalCount: updated[selectedIndex].intervalCount,
        paymentInterval: updated[selectedIndex].paymentInterval,
      };
      return updated;
    });
  };

  const token = getToken();
  useEffect(() => {
    if (token) {
      dispatch(getAllChildren());
    }
  }, []);

  return (
    <>
      {token ? (
        <>
          {isAddChild ? (
            <AddChildFormContainer setIsAddChild={setIsAddChild} />
          ) : (
            <>
              <UISelect
                isLabel={true}
                labelName="Select Child"
                onValueChange={handleChangeChild}
                value={value}
                // value={productDataReducer?.res?.id || ""}
              >
                {allChildrenReducer?.res?.data?.length > 0 ? (
                  allChildrenReducer?.res?.data?.map((child) => (
                    <SelectItem key={child.id} value={child?.id}>
                      {child?.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="No" disabled>
                    No children available
                  </SelectItem>
                )}
              </UISelect>
            </>
          )}
          <div className="flex justify-center mt-4 gap-4">
            {!isAddChild && (
              <UIButton
                type="contained"
                icon={false}
                title={"Save"}
                btnOnclick={() => handleModalOpen()}
              />
            )}
            <UIButton
              type="contained"
              icon={false}
              title={isAddChild ? "Cancel" : "Add Child"}
              btnOnclick={handleChangeAddChild}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col  gap-4">
          <UITypography
            variant={"h6"}
            text={"Please log in to add or select a child"}
          />
          <div>
            <Link
              href={pathLocations.login}
              className="bg-main px-4 py-3 text-white rounded"
            >
              Login/Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AddOrSelectChild;
