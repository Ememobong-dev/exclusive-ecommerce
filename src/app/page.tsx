import ArrowScroll from "@/components/ArrowScroll";
import Button from "@/components/Button";
import CategoryBox from "@/components/CategoryBox";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionIntroTitle from "@/components/SectionIntroTitle";
import ServicesContent from "@/components/ServicesContent";
import Tags from "@/components/Tags";
import TopmostHeader from "@/components/TopmostHeader";
import phoneCat from "../../public/assets/icons/phoneCat.svg";
import Image from "next/image";
import IconExtraLayer from "@/components/IconExtraLayer";
import deliveryIcon from "../../public/assets/icons/deliveryIcon.svg";
import productImg from "../../public/assets/images/product1.svg";
import Sidebar from "@/components/Sidebar";
import IconCircleBacground from "@/components/IconCircleBacground";
import ProductCard from "@/components/ProductCard";
import AuthInput from "@/components/AuthInput";

export default function Home() {
  return (
    <div className="px-14">
      <TopmostHeader />
      <Navbar />
      <Sidebar />
      <section className="flex flex-col gap-8">
        <SectionIntroTitle sectionTitle="Today's" />
      </section>

      <Button text="View All Products" classProps="bg-[purple]" />
      <div className="my-5"></div>
      <Tags text="-40%" />
      <div className="my-5"></div>
      <ServicesContent />

      <div className="my-5"></div>
      <ArrowScroll />
      <div className="my-5"></div>

      <ProductCard
        productImg={productImg}
        productName={'Breed Dry Dog Food'}
        productPrice={100}
        ratings={35}
      />
      <div className="my-5"></div>

      <div className="flex gap-10">
        <CategoryBox>
          <span>
            <Image src={phoneCat} alt="" />
          </span>
          <span>
            <p>Phones</p>
          </span>
        </CategoryBox>
        <CategoryBox>
          <IconExtraLayer imageSource={deliveryIcon} />
          <span>
            <p>10.3k</p>
          </span>
          <span>
            <p>Sallers active our site</p>
          </span>
        </CategoryBox>
        <CategoryBox>
          <span>
            <Image src={phoneCat} alt="" />
          </span>
          <span>
            <p>Phones</p>
          </span>
        </CategoryBox>
        <CategoryBox>
          <span>
            <Image src={phoneCat} alt="" />
          </span>
          <span>
            <p>Phones</p>
          </span>
        </CategoryBox>
        <CategoryBox>
          <span>
            <Image src={phoneCat} alt="" />
          </span>
          <span>
            <p>Phones</p>
          </span>
        </CategoryBox>
      </div>
      <div className="my-5"></div>
      <IconCircleBacground icon={deliveryIcon} />
      <div className="my-5"></div>

      <AuthInput placeholder="Name" />

      <div className="my-5"></div>
      <Footer />
    </div>
  );
}
