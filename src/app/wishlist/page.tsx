"use client";

import apiCalls from "@/apiCalls";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SectionIntroTitle from "@/components/SectionIntroTitle";
import { ProductDataType } from "@/interface";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getProductsFn();
  }, []);

  return (
    <>
      <div className="p-28">
        <div className="flex mb-10 justify-between items-center">
          <span>
            <p>Wishlist (4)</p>
          </span>
          <Button variant="white">Move All To Bag</Button>
        </div>
        <div className="flex gap-3 justify-between w-full">
          {productData.slice(3, 8).map((product) => (
            <ProductCard
              key={product.id}
              productImg={product.image}
              productName={product.title}
              productPrice={product.price}
              productId={product.id}
              showWishlistCartButton
              wishList
              iconDelete
            />
          ))}
        </div>
        <section className="my-28">
          <div className="flex items-center justify-between mb-16 my-5">
            <SectionIntroTitle sectionTitle="Just For You" />
            <Button variant="white">View all</Button>
          </div>
          <div className="flex items-center justify-between w-full">
            {productData.slice(3, 8).map((product) => (
              <ProductCard
                key={product.id}
                productImg={product.image}
                productName={product.title}
                productPrice={product.price}
                ratings={product.rating.rate}
                rateCount={product.rating.count}
                productId={product.id}
                showWishlistCartButton
                wishList
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
