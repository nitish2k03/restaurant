"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Countdown from "react-countdown";
const Offer = () => {
  const endDate = new Date("01-10-2024");
  return (
    <div className=" bg-black md:bg-[url('/offerBg.png')] text-white md:flex h-[100vh] text-center">
      <div className="flex-1 flex flex-col gap-10 md:gap-0 justify-around py-[10%] items-center">
        <div className="text-4xl font-semibold px-4 md:px-10">
          Delicious Burger & French Fry
        </div>
        <div className="md:px-20 px-4">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </div>
        <Countdown
          date={endDate}
          className="text-yellow-300 font-bold text-4xl"
        />
        <div className="">
          <button className="rounded bg-red-400 font-semibold w-28 h-10">
            Order Now
          </button>
        </div>
      </div>
      <div className="relative h-[40vh] md:h-[100vh] flex-1 ">
        <Image
          src="/offerProduct.png"
          alt=""
          fill
          className="object-contain "
        />
      </div>
    </div>
  );
};
export default Offer;
