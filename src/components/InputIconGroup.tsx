import React from "react";
import Image from "next/image";

const InputIconGroup = ({
  bgColor,
  icon,
  placeholder,
}: {
  bgColor: string;
  icon: string;
  placeholder?: string;
}) => {
  return (
    <div className={`flex items-center py-2 px-5 rounded-md bg-[${bgColor}] gap-5`}>
      <input
        placeholder={placeholder}
        className="w-full outline-none  focus:outline-none bg-transparent"
        type="text"
      />
      <span className="cursor-pointer">
        <Image src={icon} alt="search_icon" />
      </span>
    </div>
  );
};

export default InputIconGroup;
