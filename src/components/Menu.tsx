"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
const Menu = () => {
  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <main>
      <div className="cursor-pointer">
        {!open ? (
          <Image
            src="/open.png"
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src="/close.png"
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {open ? (
        <div className="absolute top-16 right-0 gap-10 bg-red-400 w-2/5 flex flex-col justify-center text-xl items-center h-[calc(100vh-4rem)]">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Cart />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Menu;
