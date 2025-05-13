import React from "react";
import { Button } from "../ui/button";
import "./styles.css";

const UIButton = ({ type, title, className, btnType }) => {
  return (
    <>
      {type == "contained" ? (
        <Button
          type={btnType}
          className={`bg-main btn rounded-full py-5 px-6 ${className}`}
        >
          {title}
        </Button>
      ) : (
        <Button
          className={`bg-transparent border-b-1 border-black text-black hover:bg-transparent ${className}`}
          type={btnType}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default UIButton;
