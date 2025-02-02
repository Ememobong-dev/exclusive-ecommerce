import Image from "next/image";
import React from "react";
import logo from "../../public/assets/images/logo.svg";
import searchIcon from "../../public/assets/icons/searchIcon.svg";
import wishlistIcon from "../../public/assets/icons/wishlist.svg";
import cartIcon from "../../public/assets/icons/cartIcon.svg";
import InputIconGroup from "./InputIconGroup";

const Navbar = () => {
  return (
    <div className="bg-white border-b py-8 px-28">
      <div className="flex  justify-between items-center">
        <span className="cursor-pointer">
          <Image src={logo} alt="brand logo" />
        </span>
        <div className="flex gap-10 items-center">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Contact</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Sign Up</span>
        </div>
        <div className="flex gap-5 items-center">
          <InputIconGroup bgColor="#F5F5F5" placeholder="What are you looking for?" icon={searchIcon} />
          <span className="cursor-pointer">
            <Image src={wishlistIcon} alt="wishlist" />
          </span>
          <span>
            <Image src={cartIcon} alt="cartIcon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
