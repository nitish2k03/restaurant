import React from "react";
import Image from "next/image";
interface propType {
  price: number;
  title: string;
  desc: string | undefined;
  img: string | undefined;
}
const Featured: React.FC<propType> = ({ price, title, desc, img }) => {
  return (
    <div className="">
      <div className="flex flex-col h-[50vh] md:h-[100vh] md:w-[33vw] w-screen hover:bg-fuchsia-100 pb-2">
        <div className="relative flex-1">
          <Image
            src={img ? img : ""}
            alt=""
            fill
            className="object-contain py-2"
          />
        </div>
        <div className="flex-1 flex flex-col items-center gap-4 justify-between text-red-400 px-2">
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm md:text-base px-8">{desc}</div>
          <div className="font-bold">${price}</div>
          <div className="">
            <button className="bg-red-400 rounded-md h-10 w-28 text-white font-bold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
