import Sidebar from "@/components/Sidebar";
import hero_iphone from "../../public/assets/images/hero_iphone.png";
import appleLogo from "../../public/assets/images/appleLogo.png";
import productGame from "../../public/assets/images/product_game.png";
import product_chair from "../../public/assets/images/product_chair.png";
import product_keyboard from "../../public/assets/images/product_keyboard.png";
import arrowRightWhite from "../../public/assets/icons/arrowRightWhite.svg";
import phoneCat from "../../public/assets/icons/phoneCat.svg";
import wristwatchIcon from "../../public/assets/icons/wristwatchIcon.svg";
import computerIcon from "../../public/assets/icons/computerIcon.svg";
import Image from "next/image";
import SectionIntroTitle from "@/components/SectionIntroTitle";
import SectionTitle from "@/components/SectionTitle";
import ArrowScroll from "@/components/ArrowScroll";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import CategoryBox from "@/components/CategoryBox";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";
import { Col, Row } from "antd";

export default function Home() {
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
        </div>
        <section className="my-28">
          <SectionIntroTitle sectionTitle="Today's" />
          <div className="flex items-center  justify-between my-5">
            <div className="flex  items-center gap-20">
              <SectionTitle text="Flash sales" />
              <span className="text-4xl tracking-wider">3: 19: 56</span>
            </div>
            <ArrowScroll />
          </div>
          <div className="overflow-x-scroll no-scrollbar flex gap-10 w-full">
            <ProductCard
              productImg={productGame}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_keyboard}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_chair}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={productGame}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_keyboard}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_chair}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={productGame}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_keyboard}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_chair}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={productGame}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_keyboard}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
            <ProductCard
              productImg={product_chair}
              productName="HAVIT HV-G92 Gamepad"
              productPrice={120}
              ratings={88}
            />
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
            <ArrowScroll />
          </div>
          <div className="overflow-x-scroll no-scrollbar flex gap-8 w-full">
            <CategoryBox>
              <span>
                <Image src={phoneCat} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={computerIcon} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={wristwatchIcon} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={phoneCat} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={computerIcon} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={wristwatchIcon} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={phoneCat} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={computerIcon} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
            <CategoryBox>
              <span>
                <Image src={wristwatchIcon} alt="phone" className="w-full" />
              </span>
              <p>Phones</p>
            </CategoryBox>
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
          <div className="flex justify-between">
            <div className="PS5_img"></div>
            <div className="flex  w-1/2 flex-col">
                <div className="women_collection"></div>
                <div className="flex gap-10 justify-between">
                  <div className="speaker_img"></div>
                  <div className="perfume_img"></div>
                </div>
              </div>
          </div>
          {/* <Row gutter={32}>
            <Col xs={12} className="h-full">
              <div className="PS5_img"></div>
            </Col>
            <Col xs={12} className="h-full">
              <div className="flex flex-col">
                <div className="women_collection"></div>
                <div className="flex gap-10 justify-between">
                  <div className="speaker_img"></div>
                  <div className="perfume_img"></div>
                </div>
              </div>
            </Col>
          </Row> */}
        </section>
        <section className="pb-28">
          <ServicesContent />
        </section>
      </div>
      <Footer />
    </>
  );
}
