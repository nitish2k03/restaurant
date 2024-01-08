import React from "react";
import { menu } from "~/data";
import Link from "next/link";
const MenuPage = () => {
  return (
    <div className="flex md:flex-row flex-col h-[calc(100vh-4rem)] p-4 items-center">
      {menu.map((singleMenu) => (
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
