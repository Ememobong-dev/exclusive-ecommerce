"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import heartIcon from "../../public/assets/icons/heartIcon.svg";
import eyeIcon from "../../public/assets/icons/eyeIcon.svg";
import cartWhiteIcon from "../../public/assets/icons/cartWhiteIcon.svg";
import deleteIcon from "../../public/assets/icons/deleteIcon.svg";
import RatingSystem from "./RatingSystem";
import Tags from "./Tags";
import { useRouter } from "next/navigation";
import apiCalls from "@/apiCalls";
import moment from "moment";

const ProductCard = ({
  productId,
  productImg,
  productName,
  productPrice,
  ratings,
  rateCount,
  flashSale,
  showWishlistCartButton,
  wishList,
  iconDelete,
}: {
  productId: number;
  productImg: StaticImageData;
  productName: string;
  productPrice: number;
  ratings?: number;
  rateCount?: number;
  flashSale?: boolean;
  showWishlistCartButton?: boolean;
  wishList?: boolean;
  iconDelete?: boolean;
}) => {
  const [showCartButton, setShowCartButton] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const router = useRouter();

  const handleHoverEffect = () => {
    setShowCartButton(true);
  };

  const handleViewSingleProduct = (id: number) => {
    router.push(`products/${id}`);
  };

  const handleAddToCart = async () => {
    const cartData = {
      userId: user.sub,
      data: moment(),
      products: [
        {
          productId: productId,
          quantity: 1,
        },
      ],
    };
    try {
      await apiCalls.post("/carts", cartData);
      setAddedToCart(true);
    } catch (err) {
      console.log(err);
    } finally {
    }
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
        <div className="absolute right-3 top-3">
          {wishList ? (
            <div className="flex flex-col gap-3">
              <span className=" bg-secondaryBlue rounded-full  cursor-pointer p-1">
                <Image src={ iconDelete ? deleteIcon :  eyeIcon} alt="product_img" />
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <span className=" bg-secondaryBlue rounded-full  cursor-pointer p-1">
                <Image src={heartIcon} alt="product_img" />
              </span>
              <span
                className="bg-secondaryBlue rounded-full cursor-pointer p-1"
                onClick={() => handleViewSingleProduct(productId)}
              >
                <Image src={eyeIcon} alt="product_img" />
              </span>
            </div>
          )}
        </div>

        {flashSale && (
          <div className="absolute left-3 top-3">
            <Tags text={"-30%"} />
          </div>
        )}

        <div
          className={` ${
            showCartButton
              ? "flex"
              : addedToCart
              ? "flex"
              : showWishlistCartButton
              ? "flex"
              : "hidden"
          } flex-col gap-3 w-full absolute z-50 bottom-0`}
        >
          <button
            onClick={handleAddToCart}
            className={` w-full flex justify-center gap-3 py-2  ${
              addedToCart
                ? "bg-red-secondary-two text-white"
                : "bg-black text-white"
            } `}
          >
            {showWishlistCartButton && (
              <span>
                <Image src={cartWhiteIcon} alt="cart icon" />
              </span>
            )}
            <p>{addedToCart ? "Added to Cart" : "Add to Cart"}</p>
          </button>
        </div>
      </div>

      <div className="flex mt-3 flex-col gap-1">
        <p className="font-bold text-lg">
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

          <p
            className={` ${
              flashSale
                ? "line-through text-black/50"
                : "text-red-secondary-two font-bold"
            } `}
          >
            {" "}
            ${productPrice.toFixed(2)}{" "}
          </p>
          {ratings && (
            <span className="flex gap-3">
              <RatingSystem rate={ratings} />
              <p className="text-black/50 font-semibold">({rateCount}) </p>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
