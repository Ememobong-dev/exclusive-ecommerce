import React from "react";
import IconExtraLayer from "./IconExtraLayer";

const ServiceItem = ({
  imgSrc,
  topHeader,
  text,
}: {
  imgSrc: string;
  topHeader: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-y-3 items-center">
      <IconExtraLayer imageSource={imgSrc} />
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
