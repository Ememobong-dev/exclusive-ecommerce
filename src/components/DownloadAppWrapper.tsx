import Image, { StaticImageData } from "next/image";
import React from "react";

const DownloadAppWrapper = ({
  appIcon,
  topTitle,
  appName,
}: {
  appIcon: StaticImageData;
  topTitle: string;
  appName: string;
}) => {
  return (
    <div className="border cursor-pointer rounded-lg flex gap-2 px-3 items-center">
      <span>
        <Image src={appIcon} width={28} height={28} alt="app icon" />
      </span>
      <div className="flex justify-center flex-col">
        <p className="text-sm"> {topTitle} </p>
        <p className="text-sm"> {appName} </p>
      </div>
    </div>
  );
};

export default DownloadAppWrapper;
