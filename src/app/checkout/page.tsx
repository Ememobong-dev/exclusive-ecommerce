import InputIconGroup, { LabelInput } from "@/components/InputIconGroup";
import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gameImg from "../../../public/assets/images/product_keyboard.png";
import banks from "../../../public/assets/images/banksImages.svg";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <div className="p-28 bg-white">
        <Breadcrumb
          items={[
            {
              title: "Account",
            },
            {
              title: <Link href="/">My Account </Link>,
            },
            {
              title: <Link href="/"> Product </Link>,
            },
            {
              title: <Link href="/"> View Cart </Link>,
            },
            {
              title: "Checkout",
            },
          ]}
          className="pb-20"
        />
        <div>
          <h3 className="text-3xl font-bold">Billing Details</h3>
          <Row className="my-10" gutter={44}>
            <Col xs={12}>
              <div className="flex flex-col gap-5">
                <div>
                  <LabelInput labelFor="" labelTitle="First Name" />
                  <InputIconGroup bgColor="" />
                </div>
                <div>
                  <LabelInput labelFor="" labelTitle="Street Address " />
                  <InputIconGroup bgColor="" />
                </div>
                <div>
                  <LabelInput
                    labelFor=""
                    labelTitle="Apartment, floor, etc, (optional) "
                  />
                  <InputIconGroup bgColor="" />
                </div>
                <div>
                  <LabelInput labelFor="" labelTitle="Town/City " />
                  <InputIconGroup bgColor="" />
                </div>
                <div>
                  <LabelInput labelFor="" labelTitle="Phone Number " />
                  <InputIconGroup bgColor="" />
                </div>
                <div>
                  <LabelInput labelFor="" labelTitle="Email address " />
                  <InputIconGroup bgColor="" />
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="accent-red-secondary-two w-6 h-6"
                  />
                  <p className="text-base">
                    Save this information for faster check-out next time
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="flex flex-col gap-8 px-28">
                <div className="flex justify-between">
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
                  <span> $580 </span>
                </div>
                <div className="flex justify-between">
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
                  <span> $580 </span>
                </div>
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
                {/* Payment Method */}
                <div className="flex items-center justify-between">
                  <span className="cursor-pointer flex items-center gap-3">
                    <input
                      type="radio"
                      className="w-5 h-5 accent-black"
                      name="bank"
                      id=""
                    />
                    <label htmlFor="bank">Bank</label>
                  </span>

                  <span>
                    <Image
                      className="object-contain"
                      src={banks}
                      alt="product img"
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="cursor-pointer flex items-center gap-3">
                    <input
                      type="radio"
                      className="w-5 h-5 accent-black"
                      name="bank"
                      id=""
                    />
                    <label htmlFor="bank">Cash on delivery</label>
                  </span>
                </div>
                <div className="flex gap-4 w-full">
                  <InputIconGroup placeholder="Coupon Code" bgColor="white" />
                  <Button variant="red">Apply Coupon</Button>
                </div>
                <Button variant="red">Place Order </Button>

              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
