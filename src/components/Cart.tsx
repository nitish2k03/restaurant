import React from "react";
import Image from "next/image";
import Link from "next/link";
const Cart = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Image src="/cart.png" alt="" width={25} height={15} />
      <div>Cart(0)</div>
    </div>
  );
};

export default Cart;
