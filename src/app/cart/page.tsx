"use client";

import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import Image from "next/image";
import gameImg from "../../../public/assets/images/product_keyboard.png";
import dropUpSmall from "../../../public/assets/icons/dropUpSmall.svg";
import dropdownSmall from "../../../public/assets/icons/dropdownSmall.svg";
import Button from "@/components/Button";
import InputIconGroup from "@/components/InputIconGroup";
import Footer from "@/components/Footer";

const Page = () => {

  return (
    <>
      <div className="px-28">
        <Breadcrumb
          items={[
            {
              title: <Link href="/"> Home </Link>,
            },
            {
              title: "Cart",
            },
          ]}
          className="py-20"
        />
        <div className="bg-white border shadow-md rounded-lg flex items-center justify-between p-8">
          <span className="min-w-[200px]">Product</span>
          <span className="min-w-[100px]">Price</span>
          <span className="min-w-[100px]">Quantity</span>
          <span className="min-w-[100px]">Subtotal</span>
        </div>
        <div className="flex flex-col gap-5 my-10">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white text-left border shadow-md rounded-lg flex items-center justify-between p-8"
            >
              <span className="min-w-[200px] cursor-pointer flex gap-3">
                <Image
                  className="object-contain"
                  src={gameImg}
                  alt="product img"
                  width={50}
                  height={50}
                />
                <p> LCD Keyboard</p>
              </span>

              <span className="min-w-[100px]"> $650 </span>
              <div className="bg-white min-w-[100px] flex justify-between px-3 py-2 items-center  border">
                01
                <span className="flex flex-col  gap-3 ">
                  <Image
                    className="object-contain"
                    src={dropUpSmall}
                    alt="product img"
                  />

                  <Image
                    className="object-contain"
                    src={dropdownSmall}
                    alt="product img"
                  />
                </span>
              </div>
              <span className="min-w-[100px]"> $200 </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Button variant="white">Return to shop</Button>
          <Button variant="white">Update Cart</Button>
        </div>
        <div className="flex my-10 justify-between items-start">
          <div className="flex gap-4">
            <InputIconGroup placeholder="Coupon Code" bgColor="white" />
            <Button variant="red">Apply Coupon</Button>
          </div>

          <div className="w-[30%] bg-white rounded-lg border border-color300/60 py-3 px-5 ">
            <div className="py-8">
              <h3 className="text-xl font-bold">Cart Total</h3>
              <div className="flex flex-col justify-center my-3 gap-3 divide-y-2 divide-color300/20 ">
                <span className="pt-2 flex justify-between">
                  <p>Subtotal:</p>
                  <p>$1750</p>
                </span>
                <span className="pt-2 flex justify-between">
                  <p>Shipping:</p>
                  <p>Free</p>
                </span>
                <span className="pt-2 flex justify-between">
                  <p>Total:</p>
                  <p>$1750</p>
                </span>
              </div>
              <div className="flex justify-center">
                <Button variant="red">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
