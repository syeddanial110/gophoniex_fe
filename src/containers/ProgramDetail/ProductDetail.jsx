import UISelect from "@/components/InputField/UISelect";
import UITypography from "@/components/UITypography/UITypography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectItem } from "@/components/ui/select";
import UIModal from "@/components/UIModal/UIModal";
import AddOrSelectChild from "./AddOrSelectChild";
import AddProductQuantity from "./AddProductQuantity";

const ProductDetail = () => {
  const productDataReducer = useSelector((state) => state?.ProductDataReducer);

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

  return (
    <>
      <div className="flex flex-col gap-3">
        <UITypography
          variant="h3"
          text={productDataReducer?.res?.productName}
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
                  {productDataReducer?.res?.productOptions?.length > 0 ? (
                    productDataReducer?.res?.productOptions?.map((item, i) => {
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
      <div className="mt-4">
        <UITypography
          variant="h5"
          text={`${productDataReducer?.res?.locationAddress}: ${productDataReducer?.res?.startTime} - ${productDataReducer?.res?.endTime}`}
        />

        {productDataReducer?.res?.paymentType == "recurring" ||
        productDataReducer?.res?.paymentType == "both" ? (
          <div className="p-10 border border-grey-300 rounded-lg flex flex-col gap-6">
            {/* Radio Group for Payment Options */}
            <div className="flex flex-col gap-6">
              {/* Monthly Recurring Option */}
              <label className="flex flex-col gap-2 border rounded-xl p-6 cursor-pointer relative group hover:shadow-md transition-all">
                <input
                  type="radio"
                  name="paymentType"
                  value="recurring"
                  // checked={selectedPaymentType === "recurring"}
                  // onChange={() => setSelectedPaymentType("recurring")}
                  className="absolute left-4 top-6 accent-black w-5 h-5"
                />
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg ml-8">
                    Monthly Recurring
                  </span>
                  <span>
                    <span className="font-semibold text-lg">$.48,700.00</span>
                    <span className="line-through text-gray-400 ml-2">
                      $54,400.00
                    </span>
                  </span>
                </div>
                <div className="ml-8 text-base text-black">
                  PlayPass Lite Subscription
                </div>
                <div className="ml-8 text-sm text-gray-500">
                  Auto-renews on 1st of month
                </div>
              </label>

              {/* One Time Purchase Option */}
              <label className="flex flex-col gap-2 border rounded-xl p-6 cursor-pointer relative group hover:shadow-md transition-all">
                <input
                  type="radio"
                  name="paymentType"
                  value="oneTime"
                  // checked={selectedPaymentType === "oneTime"}
                  // onChange={() => setSelectedPaymentType("oneTime")}
                  className="absolute left-4 top-6 accent-black w-5 h-5"
                />
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg ml-8">
                    One Time Purchase
                  </span>
                  <span className="font-semibold text-lg">Rs.54,400.00</span>
                </div>
                <div className="ml-8 text-base text-black">
                  1 Month: Does NOT hold next month’s roster spot.
                </div>
              </label>
            </div>
          </div>
        ) : null}

        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: productDataReducer?.res?.description,
          }}
        />
      </div>
    </>
  );
};

export default ProductDetail;
