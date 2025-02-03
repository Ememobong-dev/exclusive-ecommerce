import React, { ReactNode } from "react";

const CategoryBox = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex border hover:bg-red-secondary-two cursor-pointer  flex-col  w-[180px] h-[150px] justify-center gap-y-3 items-center">
        {children}
      </div>
    </div>
  );
};

export default CategoryBox;
