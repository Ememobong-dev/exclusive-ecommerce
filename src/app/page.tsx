"use client";

import Sidebar from "@/components/Sidebar";
import hero_iphone from "../../public/assets/images/hero_iphone.png";
import appleLogo from "../../public/assets/images/appleLogo.png";
import arrowRightWhite from "../../public/assets/icons/arrowRightWhite.svg";
import phoneCat from "../../public/assets/icons/phoneCat.svg";
import jewelry from "../../public/assets/icons/Jewelry.png";
import Suit from "../../public/assets/icons/Suit.png";
import WomenFashion from "../../public/assets/icons/WomenFashion.png";
import Image from "next/image";
import SectionIntroTitle from "@/components/SectionIntroTitle";
import SectionTitle from "@/components/SectionTitle";
import ArrowScroll from "@/components/ArrowScroll";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import CategoryBox from "@/components/CategoryBox";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";
import NewArrivals from "@/components/NewArrivals";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ShopNowText from "@/components/ShopNowText";
import TimerCountDown from "@/components/TimerCountDown";
import { Spin } from "antd";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  const getProductsFn = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getAllCategories = async () => {
    try {
      setLoading(true);
      const categories = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(categories.data);
      console.log(categories.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsFn();
    getAllCategories();
  }, []);

  return (
    <>
      <div className="px-28">
        <div className="flex gap-10">
          <Sidebar />
          <div className="relative mt-10 bg-black text-white w-full flex">
            <div className="p-12 flex flex-col gap-6">
              <div className="flex items-center gap-8">
                <span>
                  <Image src={appleLogo} alt="arrow right" />
                </span>
                <span>
                  <p>Iphone 14 Series</p>
                </span>
              </div>
              <h3 className="text-6xl w-[65%]  ">Up to 10% off Voucher</h3>
              <ShopNowText icon={arrowRightWhite} />
            </div>
            <span>
              <Image
                src={hero_iphone}
                className="w-full h-full"
                alt="hero img"
              />
            </span>
            <div className="absolute bottom-3 w-full ">
              <div className="flex justify-center gap-4">
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-red-secondary-two"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
              </div>
            </div>
          </div>
        </div>

        <Spin spinning={loading}>
          <section className="my-28">
            <SectionIntroTitle sectionTitle="Today's" />
            <div className="flex items-center  justify-between my-5">
              <div className="flex  items-center gap-20">
                <SectionTitle text="Flash sales" />
                <TimerCountDown targetDate={"2025-02-10T00:00:00Z"} />
              </div>
              <ArrowScroll scrollRef={scrollRef}/>
            </div>
            <div ref={scrollRef} className="overflow-x-scroll no-scrollbar flex gap-10 w-full">
              {productData.map((product) => (
                <ProductCard
                  key={product.id}
                  productImg={product.image}
                  productName={product.title}
                  productPrice={product.price}
                  ratings={product.rating.count}
                />
              ))}
            </div>
            <div className="my-10 flex justify-center">
              <Button variant="red">
                <p>View all products</p>
              </Button>
            </div>
          </section>
          {/* Category */}
          <section className="my-28">
            <SectionIntroTitle sectionTitle="Categories" />
            <div className="flex items-center  justify-between my-5">
              <div className="flex  items-center gap-20">
                <SectionTitle text="Browse by category" />
              </div>
            </div>
            <div className="flex gap-8 justify-between w-full">
              {categories.map((cat, index) => (
                <CategoryBox key={index}>
                  <span>
                    <Image src={cat === "electronics" ? phoneCat : cat === "jewelery" ? jewelry : cat === "men's clothing" ? Suit : WomenFashion } alt="phone" width={48} height={48} className="" />
                  </span>
                  <p>{cat}</p>
                </CategoryBox>
              ))}
            </div>
          </section>

          {/*Best Selling PRODUCTS */}
          <section className="my-28">
            <SectionIntroTitle sectionTitle="This Month" />
            <div className="flex items-center  justify-between my-5">
              <div className="flex  items-center gap-20">
                <SectionTitle text="Best selling products" />
              </div>
              <Button variant="red">View all</Button>
            </div>
            <div className="flex gap-3 justify-between w-full">
              {productData.slice(3, 7).map((product) => (
                <ProductCard
                  key={product.id}
                  productImg={product.image}
                  productName={product.title}
                  productPrice={product.price}
                  ratings={product.rating.rate}
                />
              ))}
            </div>
          </section>

          {/* BANNER */}
          <div className="relative mt-10 bg-black text-white w-full flex">
            <div className="p-12 flex flex-col gap-6">
              <div className="flex items-center gap-8">
                <span>
                  <Image src={appleLogo} alt="arrow right" />
                </span>
                <span>
                  <p>Iphone 14 Series</p>
                </span>
              </div>
              <h3 className="text-6xl w-[65%]  ">Up to 10% off Voucher</h3>
              <div className="flex items-center gap-3">
                <span className=" border-b ">
                  <p>Show Now</p>
                </span>
                <span>
                  <Image src={arrowRightWhite} alt="arrow right" />
                </span>
              </div>
            </div>
            <span>
              <Image
                src={hero_iphone}
                className="w-full h-full"
                alt="hero img"
              />
            </span>
            <div className="absolute bottom-3 w-full ">
              <div className="flex justify-center gap-4">
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-red-secondary-two"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
                <span className="cursor-pointer w-4 h-4 rounded-full p-2 bg-white/50"></span>
              </div>
            </div>
          </div>
          {/* PRODUCTS */}
          <section className="my-28">
            <SectionIntroTitle sectionTitle="Our Products" />
            <div className="flex items-center  justify-between my-5">
              <div className="flex  items-center gap-20">
                <SectionTitle text="Explore our products" />
              </div>
              <ArrowScroll />
            </div>
            <div className="overflow-x-scroll no-scrollbar grid grid-cols-4 justify-between w-full">
              {productData.map((product) => (
                <ProductCard
                  key={product.id}
                  productImg={product.image}
                  productName={product.title}
                  productPrice={product.price}
                  ratings={product.rating.rate}
                />
              ))}
            </div>
            <div className="my-10 flex justify-center">
              <Button variant="red">
                <p>View all products</p>
              </Button>
            </div>
          </section>
          {/* New Arrival */}
          <section className="my-28">
            <SectionIntroTitle sectionTitle="Featured" />
            <div className="flex items-center  justify-between my-5">
              <div className="flex  items-center gap-20">
                <SectionTitle text="New Arrival" />
              </div>
            </div>
            <NewArrivals />
          </section>
          <section className="pb-28">
            <ServicesContent />
          </section>
        </Spin>
      </div>
      <Footer />
    </>
  );
}
