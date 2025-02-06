"use client";

import apiCalls from "@/apiCalls";
import { Breadcrumb, Col, Row } from "antd";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProductDataType } from "@/interface";
import Image from "next/image";
import product_game from "../../../../public/assets/images/product_game.png";
import RatingSystem from "@/components/RatingSystem";










const Page = () => {
  const { productSlug } = useParams();
  const [productData, setProductData] = useState<ProductDataType>({});

  const singleProductData = async () => {
    try {
      const response = await apiCalls(`/products/ ${productSlug} `);
      setProductData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleProductData();
  }, []);

  return (
    <>
      <div className="px-28">
        <Breadcrumb
          items={[
            {
              title: "Account",
            },
            {
              title: <a href=""> {productData.category} </a>,
            },
            {
              title: productData.title,
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
                  <Image width={100} height={100} src={productData.image  || product_game} alt={productData.title || "image"} />
                </div>
              ))}
            </div>
             
            </Col>
            <Col xs={11}>
              <span
                className=" cursor-pointer gap-y-3 w-full h-[100px]"
              >
                <Image  fill className="object-contain" src={productData.image || product_game } alt={productData.title || "image"} />
              </span>
            </Col>
            <Col xs={10}>
            <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold"> {productData?.title} </h3>
                <span className="flex gap-3">
                    <RatingSystem rate={productData?.rating?.rate ?? 0} />
                    <p> ( {`${productData?.rating?.count} Reviews`} )</p>
                    <p> |  </p>
                    <p className="  text-green ">In Stock</p>
                </span>
                <span>
                    <p className="text-3xl"> ${productData?.price?.toFixed(2)} </p>
                </span>
                <span>
                    <p className="text-xl"> {productData.description} </p>
                </span>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <span>  </span>

                    </div>

                </div>
            </div>

            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Page;
