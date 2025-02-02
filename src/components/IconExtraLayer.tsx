import React from "react";
import Image from "next/image";






const IconExtraLayer = ({imageSource} : {imageSource : string}) => {
  return (
    <div className="flex rounded-full w-20 h-20 items-center bg-color300/30  flex-col text-black justify-center">
      <span className="cursor-pointer rounded-full w-14 h-14 flex justify-center items-center bg-black">
        <Image src={imageSource} alt="delivery" />
      </span>
    </div>
  );
};

export default IconExtraLayer;
