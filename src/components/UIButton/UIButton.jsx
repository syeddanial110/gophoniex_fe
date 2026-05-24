import React from "react";
import { Button } from "../ui/button";
import "./styles.css";

const UIButton = ({
  type,
  title,
  className,
  btnType,
  icon,
  btnIcon,
  btnOnclick,
  ...props
}) => {
  return (
    <>
      {type == "contained" && icon == false ? (
        <Button
          type={btnType}
          className={`bg-main btn rounded-full py-2 px-4 text-sm sm:py-4 sm:px-5 lg:py-5 lg:px-6 lg:text-base ${className}`}
          onClick={btnOnclick}
          {...props}
        >
          {title}
        </Button>
      ) : type == "outlined" ? (
        <Button
          className={`bg-transparent border-b-1 border-black text-black hover:bg-transparent text-sm lg:text-base ${className}`}
          type={btnType}
          onClick={btnOnclick}
          {...props}
        >
          {title}
        </Button>
      ) : type == "contained" && icon == true ? (
        <Button variant="contained" size="icon" onClick={btnOnclick} {...props}>
          {btnIcon}
          {title}
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={btnOnclick} {...props}>
          <btnIcon strokeColor="black" /> {title}
        </Button>
      )}
    </>
  );
};

export default UIButton;
