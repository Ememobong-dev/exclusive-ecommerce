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
    <div className="border flex items-center">
      <span>
        <Image src={appIcon} alt="app icon" />
      </span>
      <div className="flex justify-center flex-col">
        <p> {topTitle} </p>
        <p> {appName} </p>
      </div>
    </div>
  );
};

export default DownloadAppWrapper;
