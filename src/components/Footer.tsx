import React from "react";
import logo from "../../public/assets/images/logo.svg";
import sendIcon from "../../public/assets/icons/sendIcon.svg";
import Image from "next/image";
import InputIconGroup from "./InputIconGroup";



const Footer = () => {
  return (
    <div className="bg-black flex items-center justify-center">
      <div className="flex items-center gap-8">
        <div className="flex items-center flex-col">
          <span className="cursor-pointer">
            <Image src={logo} alt="brand logo" />
          </span>
          <span>
            <p>Subscribe</p>
          </span>
          <span>
            <p>Get 10% off your first order</p>
          </span>
          <InputIconGroup bgColor="#000" placeholder="Enter your email" icon={sendIcon} />

        </div>
      </div>
    </div>
  );
};

export default Footer;
