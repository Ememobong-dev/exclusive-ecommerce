import React from "react";
import { Breadcrumb} from "antd";
import Link from "next/link";
import Image from "next/image";
import aboutImage from "../../../public/assets/images/AboutImage.png";
import Tom from "../../../public/assets/images/Tom.png";
import Emma from "../../../public/assets/images/Emma.png";
import Will from "../../../public/assets/images/WIll.png";
import aboutIcon_1 from "../../../public/assets/icons/aboutIcon_1.svg";
import aboutIcon_2 from "../../../public/assets/icons/secureIcon.svg";
import aboutIcon_3 from "../../../public/assets/icons/aboutIcon_3.svg";
import aboutIcon_4 from "../../../public/assets/icons/aboutIcon_4.svg";
import CategoryBox from "@/components/CategoryBox";
import ServicesContent from "@/components/ServicesContent";
import IconExtraLayer from "@/components/IconExtraLayer";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="bg-white">
      <div className="px-28 py-10 pb-0">
        <Breadcrumb
          items={[
            {
              title: <Link href="/"> Home </Link>,
            },
            {
              title: "About",
            },
          ]}
        />
      </div>

      <section className="pl-28 w-full flex justify-between items-center">
        <div className="w-[50%] flex flex-col gap-10">
          <h3 className="font-bold text-5xl">Our Story</h3>
          <span>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
          </span>

          <span>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </span>
        </div>
        <div className="">
          <Image className=" w-full object-cover" src={aboutImage} alt="img" />
        </div>
      </section>

      <div className="p-28">
        {/* CATEGORY */}
        <div className="flex items-center justify-between ">
          <CategoryBox width="lg">
            <IconExtraLayer imageSource={aboutIcon_1} />
            <p>10.5K</p>
            <p>Sellers active on our site</p>
          </CategoryBox>

          <CategoryBox width="lg">
            <IconExtraLayer imageSource={aboutIcon_2} />
            <p>33K</p>
            <p>Monthly Produduct Sale</p>
          </CategoryBox>

          <CategoryBox width="lg">
            <IconExtraLayer imageSource={aboutIcon_3} />
            <p>45.5K</p>
            <p>Customer active in our site</p>
          </CategoryBox>

          <CategoryBox width="lg">
            <IconExtraLayer imageSource={aboutIcon_4} />
            <p>25K</p>
            <p>Anual gross sale in our site</p>
          </CategoryBox>
        </div>

        {/* TEAM */}
        <div className="flex my-10 justify-between items-center">
          <div>
            <div className="flex relative cursor-pointer justify-center rounded-sm  bg-secondaryBlue w-[500px] h-[500px] items-center">
              <span>
                <Image src={Tom} width={250} height={250} alt="product_img" />
              </span>
            </div>
            <div className="flex mt-3 flex-col gap-1">
              <h3 className="text-2xl font-bold">Tom Cruise</h3>
              <p>Founder & chairman</p>
            </div>
          </div>
          <div>
            <div className="flex relative cursor-pointer justify-center rounded-sm  bg-secondaryBlue w-[500px] h-[500px] items-center">
              <span>
                <Image src={Emma} width={250} height={250} alt="product_img" />
              </span>
            </div>
            <div className="flex mt-3 flex-col gap-1">
              <h3 className="text-2xl font-bold">Tom Cruise</h3>
              <p>Founder & chairman</p>
            </div>
          </div>
          <div>
            <div className="flex relative cursor-pointer justify-center rounded-sm  bg-secondaryBlue w-[500px] h-[500px] items-center">
              <span>
                <Image src={Will} width={250} height={250} alt="product_img" />
              </span>
            </div>
            <div className="flex mt-3 flex-col gap-1">
              <h3 className="text-2xl font-bold">Tom Cruise</h3>
              <p>Founder & chairman</p>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="pb-28">
          <ServicesContent />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
