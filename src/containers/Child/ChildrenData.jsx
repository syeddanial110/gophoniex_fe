"use client";
import { apiDelete, apiGet } from "@/apis/ApiRequest";
import AddChildForm from "@/components/AddChildForm/AddChildForm";
import UIModal from "@/components/UIModal/UIModal";
import UITypography from "@/components/UITypography/UITypography";
import { editChildrenData, getAllChildren } from "@/store/actions/children";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { Pencil, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddChildFormContainer from "./AddChildFormContainer";
import EditChildFormContainer from "./EditChildFormContainer";
import { toast } from "sonner";

const ChildrenData = () => {
  const dispatch = useDispatch();
  const getAllChildrenData = useSelector(
    (state) => state?.GetAllChildrenReducer?.res
  );

  const [isEdit, setIsEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  console.log("getAllChildrenData", getAllChildrenData);

  const handleEditChild = (item) => {
    setIsEdit(true);
    handleModalOpen();
    dispatch(editChildrenData(item));
  };

  const handleDeleteChild = (id) => {
    apiDelete(
      `${ApiEndpoints.children.base}${ApiEndpoints.children.delete}/${id}`,
      (res) => {
        console.log("res", res);
        toast.success(res?.message);
        if (res?.success) {
          dispatch(getAllChildren());
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    dispatch(getAllChildren());
  }, []);

  return (
    <div className="min-h-[80vh] p-4">
      <div className="flex justify-end">
        <AddChildForm />
      </div>
      <div className="mt-5">
        {getAllChildrenData?.data?.length > 0 ? (
          <>
            <div className="flex flex-col gap-3">
              {getAllChildrenData?.data?.map((item, i) => {
                return (
                  <div className="flex justify-between border-1 border-#acacac p-3 rounded-2xl">
                    <div>
                      <UITypography variant="h6" text={item.name} />
                    </div>
                    <div className="flex gap-2">
                      <Pencil
                        onClick={() => {
                          handleEditChild(item);
                        }}
                        className="cursor-pointer"
                      />
                      <X
                        onClick={() => handleDeleteChild(item.id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <UITypography variant="h5" text="NO CHILDREN ADDED YET" />
        )}
      </div>
      {isEdit && (
        <UIModal
          modalHeaderTitle="Edit Child"
          open={modalOpen}
          //   modalBtnText="Add Child"
          onOpenChange={handleModalOpen}
          //   btnClassName=" text-white px-7 py-2 rounded-2xl hover:cursor-pointer"
        >
          <EditChildFormContainer setIsEditChild={setModalOpen} />
        </UIModal>
      )}
    </div>
  );
};

export default ChildrenData;
