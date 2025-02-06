import React from "react";

const Tags = ({ text }: { text: string }) => {
  return (
    <span className="text-white text-center rounded-md bg-red-secondary-two py-2 px-4">
      {text}
    </span>
  );
};

export default Tags;
