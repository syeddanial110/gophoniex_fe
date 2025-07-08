import UIButton from "@/components/UIButton/UIButton";
import React, { useEffect, useState } from "react";
import AddChildFormContainer from "../Child/AddChildFormContainer";
import UISelect from "@/components/InputField/UISelect";
import { useDispatch, useSelector } from "react-redux";
import { getAllChildren } from "@/store/actions/children";
import { SelectItem } from "@/components/ui/select";
import { productData } from "@/store/actions/products";

const AddOrSelectChild = ({ handleModalOpen }) => {
  const dispatch = useDispatch();

  const allChildrenReducer = useSelector(
    (state) => state?.GetAllChildrenReducer
  );

  const [isAddChild, setIsAddChild] = useState(false);

  const handleChangeAddChild = () => {
    setIsAddChild(!isAddChild);
  };

  const handleChangeChild = (value) => {
    dispatch(productData({ childName: value }));
  };

  useEffect(() => {
    dispatch(getAllChildren());
  }, []);


  return (
    <>
      {isAddChild ? (
        <AddChildFormContainer setIsAddChild={setIsAddChild} />
      ) : (
        <>
          <UISelect
            isLabel={true}
            labelName="Select Child"
            onValueChange={handleChangeChild}
          >
            {allChildrenReducer?.res?.data?.length > 0 ? (
              allChildrenReducer?.res?.data?.map((child) => (
                <SelectItem key={child.id} value={child?.name}>
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
  );
};

export default AddOrSelectChild;
