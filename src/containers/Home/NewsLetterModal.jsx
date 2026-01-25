"use client";
import UIModal from "@/components/UIModal/UIModal";
import React, { useEffect, useState } from "react";
import UINewsletterModal from "./UINewsletterModal";
import UITextField from "@/components/InputField/UITextField";
import UIButton from "@/components/UIButton/UIButton";
import Image from "next/image";
import subsImg from "../../assets/Images/videoPoster.jpg";
import { apiGet, apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";

const NewsLetterModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleOnChange = (e) => {
    console.log("e.target.value", e.target.value);
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    const dataObj = {
      email: email,
    };
    apiPost(
      `${ApiEndpoints.newsletter.base}${ApiEndpoints.newsletter.subscribe}`,
      dataObj,
      (res) => {
        console.log("res", res);
        if (res?.success) {
          toast.success(res?.message);
          localStorage.setItem("newsletterSubscribed", "true");
          setModalOpen(false);
        }
      },
      (err) => {
        console.log("err", err);
      },
    );
  };

  useEffect(() => {
    if (localStorage.getItem("newsletterSubscribed") == "true") {
      return;
    } else {
      setTimeout(() => {
        setModalOpen(true);
      }, 4000);
    }
  }, []);

  return (
    <>
      <UINewsletterModal
        open={modalOpen}
        onOpenChange={handleModalOpen}
        modalBtnText="Add Collection"
        btnClassName="bg-main text-white px-7 py-2 rounded-2xl hover:cursor-pointer"
        modalHeaderTitle="Get Subscribed to our Newsletter"
      >
        <div className="flex gap-2">
          <UITextField
            isForm={false}
            placeholder="Email here..."
            onChange={handleOnChange}
          />
          <UIButton
            type="contained"
            icon={false}
            title="Subscribe"
            btnOnclick={handleSubscribe}
          />
        </div>
      </UINewsletterModal>
    </>
  );
};

export default NewsLetterModal;
