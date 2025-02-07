import React, { ReactNode } from "react";

const CategoryBox = ({
  children,
  width,
}: {
  children: ReactNode;
  width?: string;
}) => {
  return (
    <div>
      <div className={`flex border capitalize hover:bg-red-secondary-two/75 hover:text-white hover:font-bold cursor-pointer bg-white  flex-col  w-[180px] h-[150px] justify-center gap-y-3 items-center ${width === "lg" ? "w-[100%] h-full p-10" : ""}  `}>
        {children}
      </div>
    </div>
  );
};

export default CategoryBox;
