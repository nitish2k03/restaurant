import React from "react";
import Image from "next/image";
import Link from "next/link";
interface pizzasProps {
  title: string;
  img?: string;
  price: number;
  id: number;
}
const Pizzas: React.FC<pizzasProps> = ({ id, title, img, price }) => {
  return (
    <Link
      href={`/product/${id}`}
      className="h-[100%] w-[100%] border-red-400 group border p-2 flex flex-col justify-between hover:bg-fuchsia-100"
    >
      <div className="relative h-[80%]">
        <Image src={`${img}`} alt="" fill className="object-contain" />
      </div>
      <div className="flex justify-between items-center text-red-400 text-lg font-bold ">
        <div className="">{title}</div>
        <div className="min-w-16 group-hover:hidden">$ {price}</div>
        <button className="hidden group-hover:inline bg-red-400 rounded-lg text-base text-white w-28">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};
export default Pizzas;
