"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import heartIcon from "../../public/assets/icons/heartIcon.svg";
import eyeIcon from "../../public/assets/icons/eyeIcon.svg";
import RatingSystem from "./RatingSystem";
import Tags from "./Tags";

const ProductCard = ({
  productImg,
  productName,
  productPrice,
  ratings,
  rateCount,
  flashSale,
}: {
  productImg: StaticImageData;
  productName: string;
  productPrice: number;
  ratings: number;
  rateCount: number;
  flashSale?: boolean;
}) => {
  const [showCartButton, setShowCartButton] = useState(false);

  const handleHoverEffect = () => {
    setShowCartButton(true);
  };

  return (
    <div>
      <div
        onMouseEnter={handleHoverEffect}
        onMouseLeave={() => setShowCartButton(false)}
        className="flex relative cursor-pointer justify-center rounded-sm  bg-white w-[250px] h-[250px] items-center"
      >
        <span>
          <Image src={productImg} width={100} height={100} alt="product_img" />
        </span>
        <div className="flex flex-col gap-3 absolute right-3 top-3">
          <span className=" bg-white rounded-full p-1">
            <Image src={heartIcon} alt="product_img" />
          </span>
          <span className=" bg-white rounded-full p-1">
            <Image src={eyeIcon} alt="product_img" />
          </span>
        </div>
        {flashSale && (
          <div className="absolute left-3 top-3">
            <Tags text={"-30%"} />
          </div>
        )}

        <div
          className={` ${
            showCartButton ? "flex" : "hidden"
          } flex-col gap-3 w-full absolute z-50 bottom-0`}
        >
          <button className="bg-black text-white w-full py-2">
            Add to cart
          </button>
        </div>
      </div>

      <div className="flex mt-3 flex-col gap-1">
        <p className="">
          {" "}
          {productName.length < 20
            ? productName
            : productName.slice(0, 20) + "..."}{" "}
        </p>
        <span className="flex flex-wrap gap-3">
          {flashSale && (
            <p className="text-red-secondary-two font-bold">
              {" "}
              ${(productPrice - productPrice * 0.3).toFixed(2)}{" "}
            </p>
          )}

          
          <p className={` line-through ${flashSale ? "line-through text-black/50" : "text-red-secondary-two font-bold"} `}>
            {" "}
            ${productPrice.toFixed(2)}{" "}
          </p>
          <span className="flex gap-3">
          <RatingSystem rate={ratings} />
          <p className="text-black/50 font-semibold">({rateCount}) </p>
        </span>
        </span>
       
      </div>
    </div>
  );
};

export default ProductCard;
