"use client";
import React, { useState } from "react";
import Menu from "~/components/Menu";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";
const Navbar = () => {
  return (
    <main>
      <div className="flex justify-between items-center md:pl-10 pr-4 md:pr-10 border-red-500 border-2 h-10">
        <div className="hidden md:flex gap-5">
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
        </div>
        <div className="text-center">
          <Link href="/">LOGO</Link>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <div className="flex bg-orange-400 rounded-md w-36 items-center justify-around">
            <Image src="/phone.png" alt="" height={20} width={15} />
            <span>123-332-333</span>
          </div>
          <div className="hidden md:flex">
            <Cart />
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
