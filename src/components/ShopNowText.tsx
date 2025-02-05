import Image from 'next/image';
import React from 'react';

const ShopNowText = ({icon} : {icon? : string}) => {
  return (
    <div className="flex cursor-pointer items-center gap-3">
    <span className=" border-b ">
      <p>Show Now</p>
    </span>
    <span>
      <Image src={icon} alt="arrow right" />
    </span>
  </div>
  )
}

export default ShopNowText