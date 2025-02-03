import Sidebar from "@/components/Sidebar";
import hero_iphone from "../../public/assets/images/hero_iphone.png";
import appleLogo from "../../public/assets/images/appleLogo.png";
import arrowRightWhite from "../../public/assets/icons/arrowRightWhite.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="px-28 flex  gap-10">
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
                <p >Show Now</p>
              </span>
              <span>
                <Image src={arrowRightWhite} alt="arrow right" />
              </span>
            </div>
          </div>
          <span>
            <Image src={hero_iphone} className="w-full h-full" alt="hero img" />
          </span>
          <div className="absolute bottom-3">
            <span className="w-4 h-4 p-4 border-4 rounded-full bg-white"></span>
            <span className="w-4 h-4 p-4 border-4 rounded-full bg-white"></span>
            <span className="w-4 h-4 p-4 border-4 rounded-full bg-white"></span>
            <span className="w-4 h-4 p-4 border-4 rounded-full bg-white"></span>
            <span className="w-4 h-4 p-4 border-4 rounded-full bg-white"></span>
          </div>
        </div>
      </div>
    </>
  );
}
