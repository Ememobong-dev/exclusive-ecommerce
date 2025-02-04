import React from 'react';
import ps5 from "../../public/assets/images/PS5.png";
import womencollection from "../../public/assets/images/womencollection.png";
import speakers from "../../public/assets/images/speakers.png";
import perfume from "../../public/assets/images/perfume.png";
import Image from "next/image";









const NewArrivals = () => {
  return (
    <div className="flex gap-10 justify-between">
    <div className="bg-black flex justify-center relative w-full text-white">
      <span>
        <Image src={ps5} alt="img" className="object-contain w-full h-full " />
      </span>
      <div className="absolute bottom-5 left-5">
        <p>Station 5</p>
        <p>Black and White version of the PS5 coming out on sale.</p>
      </div>
    </div>
    <div className="flex w-full flex-col gap-9">
      <div className="bg-[#0D0D0D] flex justify-end relative text-white">
        <span>
          <Image
            src={womencollection}
            alt="img"
            className="object-contain w-full h-[300px]"
          />
        </span>
        <div className="absolute bottom-5 left-5">
          <p>Station 5</p>
          <p>Black and White version of the PS5 coming out on sale.</p>
        </div>
      </div>
      <div className="flex w-full gap-6 justify-between">
        <div className="bg-text-two-black/90 w-full relative flex justify-center text-white">
          <span>
            <Image 
              src={speakers}
              alt="img"
              className="object-contain w-full h-[300px] "
            />
          </span>
          <div className="absolute bottom-5 left-5">
            <p>Station 5</p>
            <p>
              Black and White version of the PS5 coming out on sale.
            </p>
          </div>
        </div>
        <div className="bg-text-two-black/90 w-full relative flex justify-center text-white">
          <span>
            <Image
              src={perfume}
              alt="img"
              className="object-contain w-full h-[300px] "
            />
          </span>
          <div className="absolute bottom-5 left-5">
            <p>Station 5</p>
            <p>
              Black and White version of the PS5 coming out on sale.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewArrivals