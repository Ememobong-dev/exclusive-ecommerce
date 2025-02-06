import React from "react";
import Image from "next/image";
import arrowLeft from "../../public/assets/icons/arrowLeft.svg";
import arrowRight from "../../public/assets/icons/arrowRight.svg";




const ArrowScroll = ({scrollRef}) => {

  const handleScrollLeft = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }
    const handleScrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };


  return (
    <div className="flex gap-3">
      <span  onClick={handleScrollLeft}  className="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-white">
        <Image src={arrowLeft} alt="delivery" />
      </span>
      <span onClick={handleScrollRight} className="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-white">
        <Image src={arrowRight} alt="delivery" />
      </span>
    </div>
  );
};

export default ArrowScroll;
