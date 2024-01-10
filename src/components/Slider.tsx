"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Slider = () => {
  const data = [
    {
      id: 1,
      title: "ALWAYS FRESH , ALWAYS CRISPY & ALWAYS HOT",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "WE DELIVER IT WHEREVER IN TOWN",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "BEST PIZZA TO SHARE WITH CLOSED ONES",
      image: "/slide3.jpg",
    },
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((current) => (current === data.length - 1 ? 0 : current + 1)); // Fix the arrow function syntax here
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="flex justify-between md:h-[calc(100vh-4rem)] h-[calc(50vh-5rem)]">
        <div className="flex flex-col justify-around flex-1 text-center items-center bg-slate-200 relative h-full">
          <div className="p-5 md:p-10 text-4xl font-semibold text-red-400 md:text-6xl">
            {data[slide].title}
          </div>
          <button className="bg-red-400 w-32 rounded-lg h-10 ">
            Order Now
          </button>
        </div>
        <div className="hidden md:flex flex-1 relative">
          <Image src={data[slide].image} alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="h-[53vh] md:hidden relative">
        <Image src={data[slide].image} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;
