import React from "react";
import Image from "next/image";
import arrowLeft from "../../public/assets/icons/arrowLeft.svg";
import arrowRight from "../../public/assets/icons/arrowRight.svg";




const ArrowScroll = () => {
  return (
    <div className="flex gap-3">
      <span className="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-secondaryBlue">
        <Image src={arrowLeft} alt="delivery" />
      </span>
      <span className="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-secondaryBlue">
        <Image src={arrowRight} alt="delivery" />
      </span>
    </div>
  );
};

export default ArrowScroll;
