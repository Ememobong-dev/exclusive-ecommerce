import React from "react";
import Image from "next/image";

const ServiceItem = ({
  imgSrc,
  topHeader,
  text,
}: {
  imgSrc : string;
  topHeader: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-y-3 items-center">
      <div className="flex rounded-full w-20 h-20 items-center bg-color300/30  flex-col text-black justify-center">
        <span className="cursor-pointer rounded-full w-14 h-14 flex justify-center items-center bg-black">
          <Image src={imgSrc} alt="delivery" />
        </span>
      </div>
      <span>
        <p>{topHeader}</p>
      </span>
      <span>
        <p> {text}</p>
      </span> 
    </div>
  );
};

export default ServiceItem;
