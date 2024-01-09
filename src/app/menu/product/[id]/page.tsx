"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { singleProduct } from "~/data";

const Product = () => {
  const [price, setPrice] = useState(singleProduct.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    let newPrice =
      quantity *
      (singleProduct.options
        ? singleProduct.options[selected].additionalPrice + singleProduct.price
        : singleProduct.price);
    setPrice(() => newPrice);
  }, [quantity, selected]);

  return (
    <div className="text-red-400 md:flex md:h-[calc(100vh-4rem)] p-2">
      <div className="relative w-[93vw] h-[40vh] md:h-full flex items-center">
        <Image
          src={`${singleProduct.img}`}
          alt=""
          fill
          className="object-contain p-2 overflow-hidden"
        />
      </div>
      <div className="md:flex flex-col justify-around p-2">
        <div className="font-bold mt-2 text-2xl md:text-4xl uppercase ">
          {singleProduct.title}
        </div>
        <div className="mt-4 md:text-xl">{singleProduct.desc}</div>
        <div className="font-semibold mt-2 md:text-2xl text-base">
          ${price.toFixed(2)}
        </div>
        <div className="flex justify-evenly my-4">
          {singleProduct.options?.map((option, index) => (
            <button
              key={option.title}
              className={`border hover:ring-1 border-red-400 font-bold h-9 w-1/4 hover:bg-red-400 hover:text-white rounded-lg ${
                selected === index ? "bg-red-400 text-white" : "bg-white"
              } `}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="flex justify-between border border-red-400 ring-red-400 h-11 w-2/3 items-center p-2">
            <div>Quantity</div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                {"<"}
              </button>
              <div>{quantity}</div>
              <button
                onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              >
                {">"}
              </button>
            </div>
          </div>
          <button className="bg-red-400  text-white w-28  h-11 p-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
