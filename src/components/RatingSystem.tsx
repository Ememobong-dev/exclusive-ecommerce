import { StarFilled, StarOutlined } from "@ant-design/icons";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const RatingSystem = ({ rate }: { rate: number }) => {
  const integerRating = Math.floor(rate);
  const halfRating = rate % 1 !== 0;
  const emptyRating = 5 - integerRating - (halfRating ? 0.5 : 0);

  return (
    <div className="flex gap-1">
      {[...Array(integerRating)].map((_, index) => (
        <StarFilled key={index} />
      ))}
      
      {halfRating && <FaStarHalfAlt />}

      {[...Array(emptyRating)].map((_, index) => (
        <StarOutlined key={index} />
      ))}
    </div>
  );
};

export default RatingSystem;
