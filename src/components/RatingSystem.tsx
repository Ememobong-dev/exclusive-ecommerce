import React from "react";
import Image from "next/image";
import fullStar from "../../public/assets/icons/fullStar.svg";
import halfStar from "../../public/assets/icons/halfStar.svg";
import emptyIcon from "../../public/assets/icons/emptyIcon.svg";


const RatingSystem = ({ rate = 0 }: { rate?: number }) => { 
  const integerRating = Math.floor(rate);
  const halfRating = rate % 1 !== 0;
  const emptyRating = 5 - integerRating - (halfRating ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(integerRating)].map((_, index) => (
        <span key={index}>
          <Image src={fullStar} alt="full star" />
        </span>
      ))}

      {halfRating && (
        <span>
          <Image src={halfStar} alt="half star" />
        </span>
      )}

      {[...Array(emptyRating)].map((_, index) => (
        <span key={index}>
          <Image src={emptyIcon} alt="empty star" />
        </span>
      ))}
    </div>
  );
};

export default RatingSystem;

