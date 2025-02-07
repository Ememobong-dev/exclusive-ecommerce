import React from "react";
import Image from "next/image";

export const LabelInput = ({
  labelTitle,
  labelFor,
}: {
  labelTitle: string;
  labelFor: string;
}) => {
  return (
    <div className="py-3">
      <label  htmlFor={labelFor}>
        {labelTitle}
      </label>
    </div>
  );
};

const InputIconGroup = ({
  bgColor,
  icon,
  placeholder,
}: {
  bgColor: string;
  icon?: string;
  placeholder?: string;
}) => {
  return (
    <div
      className={`flex items-center py-2 px-5 border rounded-md ${
        bgColor === "black"
          ? "bg-black"
          : bgColor === "white"
          ? "bg-white border"
          : "bg-[#F5F5F5]"
      } gap-5`}
    >
      <input
        placeholder={placeholder}
        className="w-full outline-none  focus:outline-none bg-transparent"
        type="text"
      />
      {icon && (
        <span className="cursor-pointer">
          <Image src={icon} alt="search_icon" />
        </span>
      )}
    </div>
  );
};

export default InputIconGroup;
