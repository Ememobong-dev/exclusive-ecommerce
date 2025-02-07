import React from "react";
import logoWhite from "../../public/assets/images/logoWhite.svg";
import qrCode from "../../public/assets/images/qrCode.svg";
import googlePlay from "../../public/assets/images/google-play.png";
import appStore from "../../public/assets/images/apple.png";
import sendIcon from "../../public/assets/icons/sendIcon.svg";
import copyIcon from "../../public/assets/icons/copyIcon.svg";
import Image from "next/image";
import InputIconGroup from "./InputIconGroup";
import DownloadAppWrapper from "./DownloadAppWrapper";

const Footer = () => {
  return (
    <div className="bg-black relative text-white flex flex-col items-center p-28">
      <div className="flex justify-between w-full h-full items-start">
        <div className="flex justify-center gap-y-5 flex-col">
          <span className="cursor-pointer">
            <Image src={logoWhite} alt="brand logo" />
          </span>
          <span>
            <p>Subscribe</p>
          </span>
          <span>
            <p>Get 10% off your first order</p>
          </span>
          <InputIconGroup
            bgColor="black"
            placeholder="Enter your email"
            icon={sendIcon}
          />
        </div>

        <div className="flex justify-center gap-y-5 flex-col">
          <span>
            <p className="text-2xl">Support</p>
          </span>
          <span>
            <p className="w-[75%]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          </span>
          <span>
            <p>exclusive@gmail.com</p>
          </span>
          <span>
            <p>+88015-88888-9999</p>
          </span>
        </div>

        <div className="flex justify-center gap-y-5 flex-col">
          <span>
            <p className="text-2xl">Acount</p>
          </span>
          <span>
            <p> My Account </p>
          </span>
          <span>
            <p> Login / Register </p>
          </span>
          <span>
            <p>Cart</p>
          </span>
          <span>
            <p>Wishlist</p>
          </span>
          <span>
            <p>Shop</p>
          </span>
        </div>
        <div className="flex justify-center gap-y-5 flex-col">
          <span>
            <p className="text-2xl">Quick Link</p>
          </span>
          <span>
            <p>Privacy Policy</p>
          </span>
          <span>
            <p>Terms Of Use</p>
          </span>
          <span>
            <p>FAQ</p>
          </span>
          <span>
            <p>Contact</p>
          </span>
        </div>
        <div className="flex justify-center gap-y-5 flex-col">
          <span>
            <p className="text-2xl">Download App</p>
          </span>
          <span>
            <p>Save $3 with App New User Only</p>
          </span>
          <div className="flex h-full gap-3 justify-between">
            <div className="cursor-pointer">
              <Image src={qrCode} className="" alt="qrCode" />
            </div>
            <div className="flex gap-1 flex-col justify-center">
              <DownloadAppWrapper
                appIcon={googlePlay}
                appName="Google Play"
                topTitle="Get it on"
              />
              <DownloadAppWrapper
                appIcon={appStore}
                appName="Google Play"
                topTitle="Download on the"
              />
            </div>

            <p></p>
          </div>
          <span>
            <p></p>
          </span>
        </div>
      </div>
      <div className="flex border-t-2 border-white/40  text-white/40 absolute bottom-0 w-full py-5 justify-center gap-4">
        <span>
            <Image src={copyIcon} alt="copy"/>
        </span>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
