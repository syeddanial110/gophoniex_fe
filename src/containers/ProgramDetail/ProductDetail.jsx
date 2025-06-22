import UISelect from "@/components/InputField/UISelect";
import UITypography from "@/components/UITypography/UITypography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectItem } from "@/components/ui/select";
import UIModal from "@/components/UIModal/UIModal";
import AddOrSelectChild from "./AddOrSelectChild";
import AddProductQuantity from "./AddProductQuantity";

const ProductDetail = () => {
  const productDataReducer = useSelector(
    (state) => state?.ProductDataReducer?.res
  );

  const [quantity, setQuantity] = useState(1);
  const [modalCountArr, setmodalCountArr] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleChangeProductOption = (value) => {
    console.log("value", value);
  };

  useEffect(() => {
    setmodalCountArr(quantity === 0 ? [1] : Array(quantity).fill(1));
  }, [quantity]);

  console.log("productDataReducer", productDataReducer);
  return (
    <>
      <div className="flex flex-col gap-3">
        <UITypography
          variant="h3"
          text={productDataReducer?.data?.productName}
        />

        <div>
          <UITypography variant="h6" text="Add Another Child" />
          <div className="w-[60%]">
            <AddProductQuantity
              quantity={quantity}
              handleQuantityDecrement={handleQuantityDecrement}
              handleQuantityIncrement={handleQuantityIncrement}
            />
          </div>
          {modalCountArr.map((_, index) => (
            <div className="flex flex-col gap-4 mt-4" key={index}>
              <hr />
              <div className="w-[60%]">
                <UISelect
                  isLabel={true}
                  labelName={`Drop Menu: Choose Your Pass Child ${index + 1}`}
                  onValueChange={handleChangeProductOption}
                >
                  {productDataReducer?.data?.productOptions?.length > 0 ? (
                    productDataReducer?.data?.productOptions?.map((item, i) => {
                      return (
                        <SelectItem key={i} value={item?.id}>
                          {item?.title} - {item.price}
                        </SelectItem>
                      );
                    })
                  ) : (
                    <SelectItem value="default">Default Option</SelectItem>
                  )}
                </UISelect>
              </div>
              <div className="flex flex-col gap-8 justify-start items-start">
                <UIModal
                  open={modalOpen}
                  onOpenChange={handleModalOpen}
                  modalHeaderTitle={`Select Or Add Child ${index + 1}`}
                  modalBtnText={`Select Child ${index + 1}`}
                  btnClassName="bg-main text-white px-7 py-2 rounded-2xl hover:cursor-pointer mb-2"
                >
                  <AddOrSelectChild
                    handleModalOpen={handleModalOpen}
                    childIndex={index}
                  />
                </UIModal>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-4'>
        <UITypography
          variant="h5"
          text={`${productDataReducer?.data?.locationAddress}: ${productDataReducer?.data?.startTime} - ${productDataReducer?.data?.endTime}`}
        />
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: productDataReducer?.data?.description,
          }}
        />
      </div>
    </>
  );
};

export default ProductDetail;
