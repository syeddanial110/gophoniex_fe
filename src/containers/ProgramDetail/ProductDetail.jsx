"use client"
import UISelect from "@/components/InputField/UISelect";
import UITypography from "@/components/UITypography/UITypography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectItem } from "@/components/ui/select";
import UIModal from "@/components/UIModal/UIModal";
import AddOrSelectChild from "./AddOrSelectChild";
import AddProductQuantity from "./AddProductQuantity";
import UIButton from "@/components/UIButton/UIButton";
import { useRouter } from "next/navigation";
import { pathLocations } from "@/utils/navigation";
import { productData, selectProductCheckout } from "@/store/actions/products";
import { apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";
import Link from "next/link";
import { formatDate, formatTime } from "@/utils/utils";
import { MultiSelect } from "@/components/InputField/UIMultipleSelect";
import { X } from "lucide-react";

const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const productDataReducer = useSelector((state) => state?.ProductDataReducer);

  const [quantity, setQuantity] = useState(1);
  const [modalCountArr, setmodalCountArr] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState({
    productId: "",
    productName: "",
    paymentType: "",
  });
  const [productOptionSelected, setProductOptionSelected] = useState([
    {
      price: "",
      paymentType: "",
      intervalCount: "",
      paymentInterval: "",
      childId: "",
      childName: "",
      selectedOptions: [], // Initialize selectedOptions as an empty array
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState("");

  const handleModalOpen = (index) => {
    setModalOpen(!modalOpen);
    setSelectedIndex(index);
  };

  const handleQuantityIncrement = () => {
    setProductOptionSelected((prev) => [
      ...prev,
      {
        price: "",
        paymentType: "",
        intervalCount: "",
        paymentInterval: "",
        childId: "",
        childName: "",
        selectedOptions: [], // Initialize selectedOptions for new items
      },
    ]);
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrement = () => {
    setProductOptionSelected((prev) => prev.slice(0, -1));
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleChangeProductOption = (values, childIndex) => {
    // 'values' is now an array of selected product option IDs
    const selectedOptions = productDataReducer?.res?.productOptions?.filter(
      (option) => values.includes(option.id)
    );

    setProductOptionSelected((prev) => {
      const updated = [...prev];
      updated[childIndex] = {
        ...updated[childIndex],
        price: selectedOptions.reduce(
          (sum, option) => sum + parseFloat(option.price || 0),
          0
        ), // Sum
        selectedOptions: selectedOptions.map((option) => ({
          id: option?.id || "", // product option id
          productId: option?.productId || "",
          productOptionName: option?.title || "",
          price: option?.price || "",
          paymentType: option?.paymentType || "",
          intervalCount: option?.intervalCount || "",
          paymentInterval: option?.paymentInterval,
        })),
      };
      return updated;
    });
  };

  const handleRemoveChild = (index) => {
     setProductOptionSelected((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        childId: "",
        childName: "",
      };
      return updated;
    });
  };

  const handleProductAddToCart = () => {
    const dataObj = {
      checkoutData: {
        productOptionSelected: productOptionSelected,
        selectedProductDetail: selectedProductDetail,
      },
    };
    const children = dataObj.checkoutData.productOptionSelected.map(
      (option) => ({
        childId: option.childId,
        options: option.selectedOptions.map((selectedOption) => ({
          id: selectedOption.id,
          price: parseFloat(selectedOption.price),
          // currency: "USD" // Uncomment if needed
        })),
      })
    );


    apiPost(
      `${ApiEndpoints.addToCart.base}${ApiEndpoints.addToCart.create}`,
      {
        children: children,
        productId: dataObj.checkoutData.selectedProductDetail.productId,
        paymentType: dataObj.checkoutData.selectedProductDetail.paymentType,
      },
      (res) => {
        console.log("res", res);
        toast.success(res?.message);
        router.push(pathLocations.checkout);
        dispatch(selectProductCheckout(dataObj));
      },
      (err) => {
        console.log("err", err);
      }
    );

    console.log("children", children);
    console.log("dataObj", dataObj);
  };

  useEffect(() => {
    setProductOptionSelected((prev) => {
      return prev.map((item) => ({
        ...item,
        price: productDataReducer?.res?.price,
        paymentType: productDataReducer?.res?.paymentType || "",
        intervalCount: productDataReducer?.res?.intervalCount || "",
        paymentInterval: productDataReducer?.res?.paymentInterval,
      }));
    });
    setSelectedProductDetail({
      productId: productDataReducer?.res?.id || "",
      productName: productDataReducer?.res?.productName || "",
      paymentType: productDataReducer?.res?.paymentType || "",
    });
  }, [productDataReducer?.res]);

  console.log("productDataReducer", productDataReducer);
  console.log("productOptionSelected", productOptionSelected);

  useEffect(() => {
    setmodalCountArr(quantity === 0 ? [1] : Array(quantity).fill(1));
  }, [quantity]);

  console.log("productDataReducer", productDataReducer);
  console.log("modalCountArr", modalCountArr);
  console.log("selectedProductDetail", selectedProductDetail);

  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          dangerouslySetInnerHTML={{
            __html: productDataReducer?.res?.productName,
          }}
          className="text-[24px]"
        />

        <div>
          {modalCountArr.map((_, index) => {
            console.log("index", index);
            return (
              <div className="flex flex-col gap-4 mt-4" key={index}>
                <hr />
                <div className="w-[60%]">
                  <MultiSelect
                    options={
                      productDataReducer?.res?.productOptions?.length > 0
                        ? productDataReducer?.res?.productOptions.map(
                            (option) => ({
                              value: option.id,
                              label: `${option.title} - ${option.price}`,
                            })
                          )
                        : []
                    }
                    selected={
                      productOptionSelected[index]?.selectedOptions?.map(
                        (option) => option.id
                      ) || []
                    }
                    onChange={(values) =>
                      handleChangeProductOption(values, index)
                    }
                  />
                </div>
                <div className="flex flex-col gap-3 mb-4 justify-start items-start">
                  <UIModal
                    open={modalOpen}
                    onOpenChange={() => handleModalOpen(index)}
                    modalHeaderTitle={`Select Or Add Child ${index + 1}`}
                    modalBtnText={`Select Child ${index + 1}`}
                    btnClassName="bg-main text-white px-7 py-2 rounded-2xl hover:cursor-pointer mb-2"
                  >
                    <AddOrSelectChild
                      handleModalOpen={handleModalOpen}
                      childIndex={index}
                      selectedIndex={selectedIndex}
                      setProductOptionSelected={setProductOptionSelected}
                      value={productOptionSelected[index]?.childId || ""}
                      // defaultValue={productOptionSelected[index]?.childName || ""}
                    />
                  </UIModal>
                  {productOptionSelected[index]?.childName && (
                    <div className="flex gap-3 ">
                      <UITypography
                        variant="h6"
                        text={`Child ${index + 1} Name: ${
                          productOptionSelected[index].childName
                        }`}
                      />
                      <X className="cursor-pointer" onClick={() => handleRemoveChild(index)} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <hr />
          <UITypography
            variant="h6"
            text="Add Another Child"
            className="mt-4"
          />
          <div className="w-[60%]">
            <AddProductQuantity
              quantity={quantity}
              handleQuantityDecrement={handleQuantityDecrement}
              handleQuantityIncrement={handleQuantityIncrement}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <UIButton
          type="contained"
          icon={false}
          title="Add to Cart"
          btnOnclick={handleProductAddToCart}
        />
      </div>

      <div className="mt-4">
        <Link
          href={
            productDataReducer?.res?.locationMapLink
              ? productDataReducer?.res?.locationMapLink
              : "#"
          }
        >
          {productDataReducer?.res?.locationAddress}
        </Link>
        <UITypography
          variant="h6"
          text={`${formatDate(
            productDataReducer?.res?.startDate
          )} - ${formatDate(productDataReducer?.res?.endDate)}`}
        />
        <UITypography
          variant="h6"
          text={`${formatTime(
            productDataReducer?.res?.startTime
          )} - ${formatTime(productDataReducer?.res?.endTime)}`}
        />
        <UITypography
          variant="h6"
          text={`Age Group: ${productDataReducer?.res?.minAge} - ${productDataReducer?.res?.maxAge}`}
        />
        <UITypography
          variant="h6"
          text={`Slots Available: ${productDataReducer?.res?.seats}`}
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
                  <span className="font-semibold text-lg">$.54,400.00</span>
                </div>
                <div className="ml-8 text-base text-black">
                  1 Month: Does NOT hold next month’s roster spot.
                </div>
              </label>
            </div>
          </div>
        ) : null}

        <div
          className="mt-6 prose max-w-none [&>h1]:text-[46px] [&>h1]:font-bold [&>h2]:text-[38px] [&>h2]:font-semibold [&>h3]:text-[32px] [&>h3]:font-semibold [&>h4]:text-[28px] [&>h4]:font-semibold [&>h5]:text-[24px] [&>h5]:font-semibold [&>h6]:text-[22px] [&>h6]:font-semibold [&>p]:text-base"
          dangerouslySetInnerHTML={{
            __html: productDataReducer?.res?.description,
          }}
        />
      </div>
    </>
  );
};

export default ProductDetail;
