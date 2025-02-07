"use client";

import apiCalls from "@/apiCalls";
import { Breadcrumb, Col, Row, Spin } from "antd";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProductDataType } from "@/interface";
import Image from "next/image";
import RatingSystem from "@/components/RatingSystem";
import minusIcon from "../../../../public/assets/icons/minusIcon.svg";
import plusIcon from "../../../../public/assets/icons/plusIcon.svg";
import Button from "@/components/Button";
import heartIcon from "../../../../public/assets/icons/heartIcon.svg";
import deliveryIcon from "../../../../public/assets/icons/lightDeliveryIcon.svg";
import returnDelivery from "../../../../public/assets/icons/returnDelivery.svg";
import SectionIntroTitle from "@/components/SectionIntroTitle";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import moment from "moment";

const Page = () => {
  const { productSlug } = useParams();
  const [loading, setLoading] = useState(false);
  const [singleProductData, setSingleProductData] = useState<ProductDataType>(
    {}
  );
  const [noOfProduct, setNoOfProduct] = useState(1);
  const [productData, setProductData] = useState<ProductDataType[]>([]);
    const [addedToCart, setAddedToCart] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const router = useRouter()

  

  const decreaseProductNo = () => {
    setNoOfProduct((prev) => (prev - 1 <= 0 ? 1 : prev - 1));
  };

  const increaseProductNo = () => {
    setNoOfProduct((prev) => prev + 1);
  };

  const getSingleProductData = async () => {
    try {
      setLoading(true);
      const response = await apiCalls(`/products/ ${productSlug} `);
      setSingleProductData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getProductsFn = async () => {
    try {
      setLoading(true);
      const response = await apiCalls.get("/products");
      setProductData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    const cartData = {
      userId: user.sub,
      data: moment(),
      products: [
        {
          productId: productSlug,
          quantity: 1,
        },
      ],
    };
    try {
      await apiCalls.post("/carts", cartData);
      router.push("/cart");
      setAddedToCart(true);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  useEffect(() => {
    getSingleProductData();
    getProductsFn();
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="px-28">
        <Breadcrumb
          items={[
            {
              title: "Account",
            },
            {
              title: <a href=""> {singleProductData.category} </a>,
            },
            {
              title: singleProductData.title,
            },
          ]}
          className="py-20"
        />
        <div>
          <Row gutter={32}>
            <Col xs={3}>
              <div className="flex flex-col gap-5">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center border bg-white  hover:bg-red-secondary-two/75 cursor-pointer  w-[150px] h-[150px] "
                  >
                    {singleProductData?.image && (
                      <Image
                        width={100}
                        height={100}
                        src={singleProductData?.image}
                        alt="product img"
                      />
                    )}
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={11}>
              {singleProductData?.image && (
                <span className=" cursor-pointer gap-y-3 w-full h-[100px]">
                  <Image
                    fill
                    className="object-contain"
                    src={singleProductData?.image}
                    alt="product img"
                  />
                </span>
              )}
            </Col>
            <Col xs={10}>
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">
                  {" "}
                  {singleProductData?.title}{" "}
                </h3>
                <span className="flex gap-3">
                  <RatingSystem rate={singleProductData?.rating?.rate ?? 0} />
                  <p> ( {`${singleProductData?.rating?.count} Reviews`} )</p>
                  <p> | </p>
                  <p className="  text-green ">In Stock</p>
                </span>
                <span>
                  <p className="text-3xl">
                    {" "}
                    ${singleProductData?.price?.toFixed(2)}{" "}
                  </p>
                </span>
                <span>
                  <p className="text-xl"> {singleProductData.description} </p>
                </span>
                <div className="flex justify-between items-center">
                  <div className="flex border border-color300/40 ">
                    <button
                      onClick={decreaseProductNo}
                      className="bg-white border-r -2 p-2"
                    >
                      {" "}
                      <Image src={minusIcon} alt="minus" />{" "}
                    </button>
                    <span className="px-6 text-xl  bg-white flex items-center justify-center">
                      <p> {noOfProduct} </p>
                    </span>
                    <button
                      onClick={increaseProductNo}
                      className="bg-red-secondary-two p-2"
                    >
                      {" "}
                      <Image src={plusIcon} alt="plus" />{" "}
                    </button>
                  </div>
                  <Button handleOnClick={handleAddToCart} width="w-[55%]" variant="red">
                    {
                        addedToCart ? "Added to cart" : "Buy Now"
                    }
                  </Button>
                  <span className=" bg-white border border-black rounded-sm  cursor-pointer p-1">
                    <Image src={heartIcon} alt="product_img" />
                  </span>
                </div>
                <div className="border border-color300/50 bg-white rounded-lg mt-10 p-5 ">
                  <div className="flex items-center gap-3">
                    <span>
                      <Image src={deliveryIcon} alt="" />
                    </span>
                    <span className="flex flex-col">
                      <p>Free Delivery</p>
                      <p className="underline">
                        Enter your postal code for Delivery Availability
                      </p>
                    </span>
                  </div>
                  <hr className="my-5 border-color300/30" />

                  <div className="flex items-center gap-3">
                    <span>
                      <Image src={returnDelivery} alt="" />
                    </span>
                    <span className="flex flex-col">
                      <p>Return Delivery</p>
                      <p>Free 30 Days Delivery Returns. Details</p>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/*Best Selling PRODUCTS */}
        <section className="my-28">
          <SectionIntroTitle sectionTitle="Related item" />
          <div className="flex gap-3 justify-between w-full">
            {productData.slice(3, 7).map((product) => (
              <ProductCard
                key={product.id}
                productImg={product.image}
                productName={product.title}
                productPrice={product.price}
                ratings={product.rating.rate}
                rateCount={product.rating.count}
                productId={product.id}
                flashSale
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </Spin>
  );
};

export default Page;
