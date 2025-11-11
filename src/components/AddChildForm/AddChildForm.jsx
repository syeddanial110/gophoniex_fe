"use client";

import React, { useState } from "react";
import AddChildFormContainer from "@/containers/Child/AddChildFormContainer";
import UIModal from "../UIModal/UIModal";

const AddChildForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <UIModal
        open={modalOpen}
        onOpenChange={handleModalOpen}
        modalHeaderTitle="Add Child"
        modalBtnText="Add Child"
        btnClassName="bg-main text-white px-7 py-2 rounded-2xl hover:cursor-pointer"
      >
        <AddChildFormContainer setIsAddChild={setModalOpen} />
      </UIModal>
    </>
  );
};

export default AddChildForm;
