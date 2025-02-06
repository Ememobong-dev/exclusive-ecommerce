import { StaticImageData } from "next/image";

  
  
  
  
export interface rating {
    rate: number;
    count: number
  }

export interface ProductDataType {
   id: number,
   image: StaticImageData;
   title: string;
   price: number;
   rating: rating;
  }