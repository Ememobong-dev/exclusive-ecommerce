"use client";

import Image from "next/image";
import React, { useState } from "react";
import heartIcon from "../../public/assets/icons/heartIcon.svg";
import eyeIcon from "../../public/assets/icons/eyeIcon.svg";

const ProductCard = ({
  productImg,
  productName,
  productPrice,
  ratings,
}: {
  productImg: string;
  productName: string;
  productPrice: number;
  ratings: number;
}) => {
    const [showCartButton, setShowCartButton] = useState(false);



    const handleHoverEffect = () => {
        setShowCartButton(true)
    }


  return (
    <div>
      <div onMouseEnter={handleHoverEffect} onMouseLeave={() => setShowCartButton(false)} className="flex relative cursor-pointer justify-center rounded-sm  bg-secondaryBlue w-[250px] h-[250px] items-center">
        <span>
          <Image src={productImg} alt="product_img" />
        </span>
        <div className="flex flex-col gap-3 absolute right-3 top-3">
          <span className=" bg-white rounded-full p-1">
            <Image src={heartIcon} alt="product_img" />
          </span>
          <span className=" bg-white rounded-full p-1">
            <Image src={eyeIcon} alt="product_img" />
          </span>
        </div>
        <div className={` ${showCartButton ? "flex" : "hidden"} flex-col gap-3 w-full absolute z-50 bottom-0`}>
         <button className="bg-black text-white w-full py-2">Add to cart</button>
        </div>
      </div>

      <div className="flex mt-3 flex-col gap-1">
        <p>{productName}</p>
        <span className="flex  gap-5">
          <p> ${productPrice} </p>
          <p> {ratings} </p>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
