import Image from "next/image";
import React, { ReactNode } from "react";

const Button = ({
  children,
  variant,
  icon,
  imgSrc,
  isLoading,
  width,
  handleOnClick,
}: {
  children: ReactNode;
  variant: string;
  icon?: boolean;
  isLoading?: boolean;
  imgSrc?: string;
  width?: string;
  handleOnClick?: () => void;
}) => {
  return (
    <button
      className={`flex hover:opacity-65 py-3 px-8  justify-center rounded-sm 
        ${width}
        ${
        variant === "red"
          ? "bg-red-secondary-two text-white"
          : variant === "white"
          ? "bg-white text-black border border-color300/30"
          : ""
      } ${icon && "gap-5 items-center"} `}
       onClick={handleOnClick}
       disabled={isLoading}
       
    >
      {icon && (
        <span>
          <Image src={imgSrc} alt="image" />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
