import Image from "next/image";
import React from "react";
import dropdown from "../../public/assets/icons/dropdownIcon.svg";

const TopmostHeader = () => {
  return (
    <div className="flex justify-center bg-black text-white px-28 py-4">
      <div className="relative w-full">
        <div className="flex gap-5 justify-center text-center text-sm items-center">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="underline">ShopNow</p>
        </div>

        <div className="absolute flex right-0 top-0 ">
          <p>English</p>
          <span>
            <Image src={dropdown} alt="dropdown" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopmostHeader;
