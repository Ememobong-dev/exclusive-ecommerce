"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/images/logo.svg";
import searchIcon from "../../public/assets/icons/searchIcon.svg";
import wishlistIcon from "../../public/assets/icons/wishlist.svg";
import cartIcon from "../../public/assets/icons/cartIcon.svg";
import InputIconGroup from "./InputIconGroup";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Sign Up",
      link: "/sign-up",
    },
  ];

  return (
    <div className="bg-white  border-b py-8 px-28">
      <div className="flex  justify-between items-center">
        <span className="cursor-pointer">
          <Image src={logo} alt="brand logo" />
        </span>
        <div className="flex gap-10 items-center">
          {navLinks.map((nav, index) => (
            <Link href={nav.link} key={index}>
              <span
                className={` ${
                  nav.link === pathname
                    ? "text-red-secondary-two font-bold"
                    : ""
                }  `}
              >
                {nav.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <InputIconGroup
            bgColor=""
            placeholder="What are you looking for?"
            icon={searchIcon}
          />
          <Link href="/wishlist">
            <span className="cursor-pointer">
              <Image src={wishlistIcon} alt="wishlist" />
            </span>
          </Link>
          <Link href={'/cart'}>
          <span>
            <Image src={cartIcon} alt="cartIcon" />
          </span>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
