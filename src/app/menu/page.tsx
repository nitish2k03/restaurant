import React from "react";
import Link from "next/link";
import { Menu } from "~/types/types";
const MenuPage = async () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  };
  const categories: Menu = await getData();
  return (
    <div className="flex md:flex-row flex-col h-[calc(100vh-4rem)] p-4 items-center">
      {categories.map((singleMenu) => (
        <Link
          href={`menu/${singleMenu.slug}`}
          key={singleMenu.id}
          className={`bg-cover h-[50%] p-2 text-${singleMenu.color} flex-1 w-full`}
          style={{ backgroundImage: `url(${singleMenu.img})` }}
        >
          <div className="flex flex-col justify-around  h-[100%] w-[50%]">
            <div className="font-bold text-4xl">{singleMenu.title}</div>
            <div>{singleMenu.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
